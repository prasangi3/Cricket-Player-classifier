Dropzone.autoDiscover = false;

function init() {
    let dz = new Dropzone("#dropzone", {
        url: "/",
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "Some Message",
        autoProcessQueue: false
    });
    
    dz.on("addedfile", function() {
        if (dz.files[1]!=null) {
            dz.removeFile(dz.files[0]);        
        }
    });

    dz.on("complete", function (file) {
        let imageData = file.dataURL;
        
        var url = "http://127.0.0.1:5000/classify_image";


        $.post(url, {
            image_data: file.dataURL
        },function(data, status) {

            console.log(data);


        if (!data || data.length==0 || data[0].error) {
                $("#resultHolder").hide();
                $("#divClassTable").hide();                
                $("#error").show();
                return;
            }
         

            let match = null;
            let bestScore = -1;
            for (let i=0;i<data.length;++i) {
                let maxScoreForThisClass = Math.max(...data[i].class_probability);
                if(maxScoreForThisClass>bestScore) {
                    match = data[i];
                    bestScore = maxScoreForThisClass;
                }
            }
              if (match) {

                
let classDictionary = match.class_dictionary;
let probabilities = match.class_probability;

let maxIndex = probabilities.indexOf(Math.max(...probabilities));
let predictedName = Object.keys(classDictionary).find(
  name => classDictionary[name] === maxIndex
);



for (let personName in classDictionary) {
  let index = classDictionary[personName];
  let probabilityScore = probabilities[index];
  let elementName = "#score_" + personName;
  $(elementName).html(probabilityScore.toFixed(2));
}
                $("#error").hide();
                $("#resultHolder").show();
                $("#divClassTable").show();
$("#resultHolder").html($(`[data-player="${predictedName}"`).html());


            }
            // dz.removeFile(file);            
        });

    });

    $("#submitBtn").on('click', function (e) {
        dz.processQueue();		
    });
}

$(document).ready(function() {
    console.log( "ready!" );
    $("#error").hide();
    $("#resultHolder").hide();
    $("#divClassTable").hide();

    init();
});