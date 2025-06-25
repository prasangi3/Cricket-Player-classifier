# Cricket-Player-classifier
A machine learning–based web application that classifies Indian cricket players from facial images using classical ML techniques (SVM + DWT). Built with Python, OpenCV, scikit-learn, and a Flask-powered web interface with HTML, CSS, and JavaScript.
# 🏏 Image Classification of Indian Cricket Players

This is a machine learning–based web application that classifies **Indian cricket players** from facial images using traditional ML techniques — without using CNN or deep learning.

The system uses **Support Vector Machine (SVM)** along with **Discrete Wavelet Transform (DWT)** for feature extraction. Face and eye detection are done using OpenCV Haar cascades. The web interface is built using **HTML, CSS, JavaScript**, and **Flask**.

---

##  Cricketers Included

- Hardik Pandya  
- MS Dhoni  
- Rohit Sharma  
- Sachin Tendulkar  
- Smriti Mandhana  
- Virat Kohli

---

##  Screenshot

Upload an image → see predicted cricketer and class probabilities.

> Make sure to upload a file named `screenshot.png` in your repo.

![Screenshot](screenshot.png)

---

##  Technologies Used

- Python  
- OpenCV  
- PyWavelets  
- Scikit-learn (SVM)  
- Flask  
- HTML, CSS, JavaScript

---

##  How It Works

1. Image is uploaded through the browser (drag and drop)
2. Face and eye are detected using Haar cascade
3. Features extracted using wavelet transform (DWT)
4. SVM classifier predicts the cricketer
5. Results and probability table are displayed

---



