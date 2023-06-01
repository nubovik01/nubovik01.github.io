// Code by Nubovik
// Created: 02/17/2022 01:58

let pageTitle = document.title;
let siteDomain = ' - '+window.location.hostname;

document.title = pageTitle+siteDomain;

console.log('A title of page has been changed');