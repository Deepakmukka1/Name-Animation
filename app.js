//This file is just to know the exact lengths of each path
const logo=document.querySelectorAll('svg path');
for(let i=0;i<logo.length;i++)
console.log(`ele ${i} : ${logo[i].getTotalLength()}`)
