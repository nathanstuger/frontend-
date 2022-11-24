// JavaScript Document
console.log("hi");


// SHOW MOBILE MENU
var mobileNAV = document.querySelector("nav > ul:last-of-type");
var showMobileNAVButton = document.querySelector("header > nav > ul:first-of-type > li > button");
showMobileNAVButton.addEventListener("click", showMobileNAV);

function showMobileNAV() {
    mobileNAV.classList.add("active");
}


// HIDE MOBILE MENU
var hideMobileNAVButton = document.querySelector("header > nav > ul:nth-of-type(2) > li:first-of-type > ul > li > button");
hideMobileNAVButton.addEventListener("click", hideMobileNAV);

function hideMobileNAV() {
    mobileNAV.classList.remove("active");
} 



// FILTER BUTTON
var filterList = document.querySelector("section:nth-of-type(2) > ul:first-of-type");
var filterButton = document.querySelector("section:nth-of-type(1) div > button");
filterButton.addEventListener("click", toggleFilters);

function toggleFilters() {
    filterList.classList.toggle("hidden");
}



