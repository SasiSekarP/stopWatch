'use strict'

let hrEl = document.getElementById('hr');
let minEl = document.getElementById('min');
let secEl = document.getElementById('sec');
let micSecEl = document.getElementById('micSec');

// global veriable

let micSec = 0;
let sec = 0;
let min = 0;
let hr = 0;
let timeID

// initial date push to HTML

hrEl.innerText = '00';
minEl.innerText = '00';
secEl.innerText = '00';
micSecEl.innerText = '0';

// function area

function runFunction() {

    micSec = micSec + 1;
    if (micSec === 10) {
        micSec = 0;
        sec += 1;
    }
    if (sec === 60) {
        sec = 0;
        min += 1
    }
    if (min === 60) {
        min = 0;
        hr += 1;
    }
    let arr = [hr.toString(), min.toString(), sec.toString()]
    
    let resultArr = arr.map(element => {
        if (element.length === 1) {
            return `0${element}`;
        } else {
            return element;
        }
    });

    let [hrStr, minStr, secStr] = resultArr;

    hrEl.innerText = hrStr;
    minEl.innerText = minStr;
    secEl.innerText = secStr;
    micSecEl.innerText = micSec;

}

function start() {
    timeID = setInterval(runFunction, 100);
}

function pass() {
    clearTimeout(timeID)
}