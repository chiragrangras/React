// document.write("this is external JS");

// typeof() ==> unary operator
var num = 12.67;
var str = "132 (%&* lkjds";
var bool = true;

var arr = [1, "hi", true];
var obj = { n1: "ji", 2: false, n3: 3 };

function T(c) {
  document.write(c);
}

// document.write(num);

document.write(typeof num);
document.write("<br>");
document.write(typeof str);
document.write("<br>");
document.write(typeof bool);
document.write("<br>");
document.write(typeof test);
document.write("<br>");

document.write(typeof arr);
document.write("<br>");
document.write(typeof obj);
document.write("<br>");
document.write(
  typeof function T(c) {
    document.write(c);
  }
);
