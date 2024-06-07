var x=15;
{
    let x=5;
    // const x=6;
    // x=7;
    console.log(x);
}
console.log(x);

// function

var x=function(){
    console.log("Hello");
}

var y=(a,b)=>{
    console.log("Hello");
}

x();
y();

// spread operator

const a=["a","b","c"];
const b=["d","e","f"];
const c=[...a,...b];
console.log(c);

// for of loop 

const d=[1,2,3,4,5];
for(let i of d){
    console.log(i);
}


// map in js

const fruits=new Map(
    [
        ["apple",2],
        ["banana",3],
        ["mango",4]
    ]
);
console.log(fruits);
console.log(fruits.get("apple"));


// set in js
let s=new Set();    
s.add("a");
s.add("b");
s.add("a");
console.log(s); 

// class in js

class student{
    constructor(name,roll){
        this.name=name;
        this.roll=roll;
    }
    display(){
        console.log(this.name);
        console.log(this.roll);
    }
}   

let s1=new student("Rahul",1);
s1.display();

// promise in js

let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello");
    },2000);
}
);

p.then((data)=>{
    console.log(data);
});

