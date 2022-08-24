# ImageProcessingAPI

## Contents

* Introduction
* Info
* How to use
* Social Media links

### Introduction

This project is a course related project for Udacity back-end course.
This was made for educational purposes only.
The project was made by one student (me).

### Info

ImageProcessingAPI is a local hosted api that processes images and resizes them to re different resolutions.
This project was made using Node.js , typescript, jasmine, prettier and eslint.

### How to use

To run the API on your local machine follow the following steps:
1. download the repository contents.
2. Install [Node.js](https://nodejs.org/en/download/) on your machine.
3. Open a terminal window in the root directory of the API.
4. You can run the local server using one of the two methods.
..* type npm run start which will use nodemon to start the server
```
npm run start
```
..* type node build/index.js which will run the javascript file directly
```
node build/index.js
```
5. After starting the server visit the [localhost:3000/api](http://localhost:3000/api).
6. open images/full from the root directory then use the provided lisence free images or add jpg images of your own then use its name in the following step.
7. Now add (/images?name=(filename without extention)&width=(image requested width)&height=(image requested height) to the url to start processing images.
8. processed images will be saved in the images/thumb directory.
9. Have Fun.

### Social Media links

* [github](https://github.com/pervmind)
* [linkedin](https://www.linkedin.com/in/abdullah-mohammed-964770176/)