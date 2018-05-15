# PandaBlast Message Board

This is an ember.js project of a message board where people are able to anonymously create topics and reply to other people’s threads. Deployd is used as the backend of this project. HTML, CSS, and bootstrap was used to style the website. All logic is performed using ember.js, standard JavaScript, and deployd's JavaScript API (dpd.js).

## Prerequisites
You will need the following things properly installed on your computer:
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)
* [Deployd](https:://http://deployd.com/)

## Installation
* Either use git to clone our repository at https://github.com/AngNet/PandaBlast, or download the file directly using the "Clone or Download" button in the upper right hand corner of the file list on that same page.
* If you downloaded directly, please extract all files to their own folder using a tool such as 7-zip or the built-in Windows/Linux archive opener.
	* Please note that, due to certain prerequisites being included (such as node), the extraction process may take a moment, as these prerequisites involve thousands of small files.
* To start the program, open two terminals (preferably with administrator privileges)
	* In one terminal, navigate to the top level of the folder to which you extracted the application. Type in "ember serve" and press enter. This may take a moment to build.
	* In the other terminal, navigate one layer deeper, to the folder named "pb-backend". Type in "dpd" and press enter. If you would like to view the deployd backend, add the "-d" option.

## Usage
* With the app up and running, open Google Chrome and go to "http://localhost:4200"
* To make a new topic, press the "+ Add Topic" button and enter your desired title. Press the button to confirm. The page will refresh automatically.
* To view a topic, click its name on the front page of the website.
* To add a new (or initial) post to this topic, click "Add Comment" and enter your message. Press the button to confire. The page will refresh automatically.
* Return to the front page at any time by clicking "PandaBB" in the upper left-hand corner.

## Known bugs/errors
* Originally, this project was suppose to have a feature where only users with an account are allowed to create new topics. Currently, the login doesn't work so the message board is currently an anonymous one where anyone can create a topic and reply to a thread.
