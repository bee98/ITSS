#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
let arr = [];
let sum = 0;
arr = process.argv.slice(2);
let arrN = arr.map((element)=>Number(element));
arrN.forEach((element)=>{sum += element;})
const value  = sum/arrN.length;
if(value - Math.floor(value) > 0.5)
console.log(Math.floor(value) + 1);
else 
console.log(Math.floor(value));