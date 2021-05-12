"use strict";
const calculate = document.querySelector(".form");
const selectDiv = document.querySelector(".select");
const select = selectDiv.querySelectorAll("select");
const bandDiv = document.querySelector(".body");
const bands = bandDiv.querySelectorAll("div");
const color = document.querySelector(".colors");
const colors = color.querySelectorAll("div");
const response = document.querySelector(".value");
const representation = { black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5,
    blue: 6, purple: 7, grey: 8, white: 9, gold: 10, silver: 11 };
// function keyhelper<O>(obj:O, key:PropertyKey): key is keyof O{
//     return key in obj
// }
function initializeColor() {
    //give color to the resistor figure above
    for (let i = 0; i < select.length; i++) {
        bands[i].style.backgroundColor = select[i].value;
    }
}
function showColor() {
    //gives color selected to the div above all select field
    for (let i = 0; i < select.length; i++) {
        select[i].addEventListener("change", function (e) {
            for (let n = 0; n < select.length; n++) {
                bands[n].style.backgroundColor = select[n].value;
                colors[n].style.backgroundColor = select[n].value;
            }
        });
    }
}
function cac() {
    let value;
    let tolerance = { 1: 1, 2: 2, 5: 0.5, 6: 0.25, 7: 0.1, 8: 0.05, 10: 5, 11: 10 };
    const band = [];
    calculate.addEventListener("submit", function (e) {
        e.preventDefault();
        for (let i = 0; i < select.length; i++) {
            band[i] = representation[select[i].value];
        }
        value = (band[0] * 100 + band[1] * 10 + band[2]) * (Math.pow(10, band[3]));
        let perTolerance = tolerance[band[4]];
        if (value < 1000) {
            response.innerHTML = " " + String(value) + " " + "ohms" + "  +/- %" + String(perTolerance);
        }
        else if (value < 1000000 && value > 999) {
            response.innerHTML = " " + String(value / 1000) + " " + "Kohms" + "  +/- %" + String(perTolerance);
        }
        else {
            response.innerHTML = String(value / 1000000) + " " + "Mohms" + "  +/- %" + String(perTolerance);
        }
    });
}
initializeColor();
showColor();
cac();
