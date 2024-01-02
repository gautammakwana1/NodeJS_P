console.log("Hey! Nice to see You...");  // on console element

document.write("Hello World"); // on Web page 

alert("See You again");  //on web page alert mode 

document.getElementById("demo").innerHTML="HEllo"; // dome method

// Var Variable
var a=10;
console.log(a);

var b="Hello";
console.log(b);

var c='2';
console.log(c);

var a='hi';
console.log(a);

var d="World";
console.log(d);

// let variable
let a=10;
console.log(a);

let b=20.1556;
console.log(b);

let c='hii';
{
    let c='hey'
    console.log(c);
}
console.log(c);

let d="You";
console.log(d);

const t=15.15;
console.log(t);

const y=16.15;
{
    const y=17.16
    console.log(y);
}
console.log(y);

let a=10 ,b=20;
console.log("Arithmetic Operator")
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(b/a);
console.log(b%a);
console.log(a**b);
console.log(a++);
console.log(++a);
console.log(--b);
console.log(b--);

console.log("Assignment Operator")
console.log(a=b);
console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b);
console.log(a**=b);

console.log("Comaparison operator")
console.log(10==20);
console.log(10==="10");
console.log(10==='10');
console.log(10===10);
console.log(10!="10")
console.log(10!=false)
console.log(10>20);
console.log(10<20);
console.log(10>=20);
console.log(10<=20);

console.log("Type Operator") // Find the type of variable
console.log(typeof(10));
console.log(typeof("10"));
console.log(typeof('10'));
console.log(typeof(10));

console.log("Logical Operator");
let a=10, b=20,c;
c= a-- && b++; //c's value is b's value
console.log(c) //81
console.log(a,b,c) //9 31 30
console.log(a^=b) //30
console.log(1^0) // 1 
console.log(1^1) // 0 
console.log(1^1^0) // 0 
console.log(1^0^0) // 1 
console.log(1^0^1) // 0
console.log(1^1^1^1) //1^1=0  0^1=1 1^1=0 so ans= 0