const logo=document.querySelectorAll('svg path');
for(let i=0;i<logo.length;i++)
console.log(`ele ${i} : ${logo[i].getTotalLength()}`)