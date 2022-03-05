# Sprint 2
**The end goal of Sprint 2 was to develop a fully working back end in GO Lang and connect with the front-end that is developed in React.**<br/><br/>
## The primary ojectives of this Sprint were : <br/>
1.Setup a database to store details of the ingredients in MySQL.<br/>

![WhatsApp Image 2022-03-05 at 12 25 27 AM](https://user-images.githubusercontent.com/45250166/156869758-cfb408d1-05a7-4e77-9e92-1f03be1a7dba.jpeg)

2.Create an OCR model in Python that reads characters from the image of product label.<br/>


3.Develop algorithm that classifies and rates the ingredients that are read by the OCR.<br/>
4.Develop Front end for the End-user so that they can upload the image of their product label.<br/>
5.Display results of the classifying model and display a table with details of all the ingredients that is read by the OCR.<br/>
6.Connect the Front-End and Back-End to have a working Model.<br/><br/>
## **Demo Link :** https://www.youtube.com/watch?v=_fMxeFIBU7E <br/>!


**Details of few APIs that were used :**<br/>

1.POST_OCR: Parses the information inside the scanned images by comparing to the database.<br/>
2.Scanner.go: Connects to mysql database and organizes and looks through the ingredients present in the database.<br/>
3.Server.go – Uses both POST and GET methods to interact with the react frontend and display the results and pie chart.<br/>






