#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
let arr = [];
let sum = 0;
arr = process.argv.slice(2);
let arrN = arr.map((element)=>Number(element));
const max = Math.max(...arrN);
const min = Math.min(...arrN);
const value  = (min+max)/2;
console.log(Math.floor(value));