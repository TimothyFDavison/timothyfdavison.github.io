---
layout: page
icon: "/assets/howmuchlocal.png"
title: "How Much Local?"
---
## How Much Local
This project is a medical technology and education research collaboration between myself and Dr. Karim Saoud, a plastics 
surgical resident (at the time of writing) at the Washington University of St. Louis hospital.

It provides a user interface serving as a practice environment for the mental math required when preparing local 
anesthesia prior to surgery. The research effort is being led by Dr. Saoud, trialing improvement of surgical 
residents' aptitude over time using varied education methodologies.

### Background
Understanding safe dosing and volumes of local anesthesia is critical for the practicing surgeon. In the operating 
room or during sterile procedures, this requires some mental effort that many struggle with. This project seeks to 
build participant speed, accuracy, and comfort in calculating appropriate dosing of local anesthetic through a new 
application utilizing proven methods of repetition and retrieval-based learning.

### Research Methods
Participants in initial data collection include current plastic surgery residents. All participants completed a 
pre-test of 10 free-response questions on local anesthetic dosing. Upon completion, they were provided with the 
application for use over the following two weeks. A post-test was then distributed. Tests were hosted on RedCap 
and assessed for accuracy and speed.

At the time of writing, data collection is ongoing. We hope to later expand distribution of the application to other
relevant specialties including all surgical sub-specialties, anesthesia, and emergency medicine. 

### User Interface
A physician is presented with a patient's age, weight, and selected anesthetic type and strength. They are prompted to
calculate the proper dosage amount of the anesthetic. Upon submission of their estimate, the interface reveals 
the correct dosage and provides a green/yellow/red assessment on the accuracy of the user's estimate.

To assist the user with their thinking, optional elements below the main section provide a dosage table for each 
type of anesthetic, a dynamically updated formula for the correct answer, and a calculator function. 

Users' accuracy and response times are tracked via graphs displayed in the "Show Progress" element of the sidebar 
to evaluate improvement. Users may also toggle which anesthetics are included in their assessment via the "Update 
Settings" button.

A list of educational references supporting the repetition and retrieval educational methodologies is provided 
on the interface. 

### Code
All code can be found on my Github [here](https://github.com/TimothyFDavison/How-Much-Local). The application is built 
on Streamlit and persistently deployed on the Streamlit Commmunity Cloud. It can be viewed live
[here](https://howmuchlocal.streamlit.app).
