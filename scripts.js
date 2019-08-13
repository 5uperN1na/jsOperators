//JavaScript Arithmetic Operators

var x = 10;
var y = 4;
document.write(x + y); // Prints: 14
document.write("<br>");

document.write(x - y); // Prints: 6
document.write("<br>");

document.write(x * y); // Prints: 40
document.write("<br>");

document.write(x / y); // Prints: 2.5
document.write("<br>");

document.write(x % y); // Prints: 2

//JavaScript Assignment Operators

var x;    // Declaring Variable

x = 10;
document.write(x + "<br>"); // Prints: 10

x = 20;
x += 30;
document.write(x + "<br>"); // Prints: 50

x = 50;
x -= 20;
document.write(x + "<br>"); // Prints: 30

x = 5;
x *= 25;
document.write(x + "<br>"); // Prints: 125

x = 50;
x /= 10;
document.write(x + "<br>"); // Prints: 5

x = 100;
x %= 15;
document.write(x); // Prints: 10


//JavaScript String Operators

document.write("<br>");

var str1 = "Hello";
var str2 = " World!";

document.write(str1 + str2 + "<br>"); // Outputs: Hello World!

str1 += str2;
document.write(str1); // Outputs: Hello World!


//JavaScript Incrementing and Decrementing Operators

document.write("<br>");

var x; // Declaring Variable

x = 10;
document.write(++x); // Prints: 11
document.write("<p>" + x + "</p>");   // Prints: 11

x = 10;
document.write(x++); // Prints: 10
document.write("<p>" + x + "</p>");   // Prints: 11

x = 10;
document.write(--x); // Prints: 9
document.write("<p>" + x + "</p>");   // Prints: 9

x = 10;
document.write(x--); // Prints: 10
document.write("<p>" + x + "</p>");   // Prints: 9

//JavaScript Logical Operators

var year = 2018;

// Leap years are divisible by 400 or by 4 but not 100
if ((year % 400 == 0) || ((year % 100 != 0) && (year % 4 == 0))) {
    document.write(year + " is a leap year.");
} else {
    document.write(year + " is not a leap year.");
}

//JavaScript Comparison Operators

var x = 25;
var y = 35;
var z = "25";

document.write(x == z);  // Prints: true
document.write("<br>");

document.write(x === z); // Prints: false
document.write("<br>");

document.write(x != y);  // Prints: true
document.write("<br>");

document.write(x !== z); // Prints: true
document.write("<br>");

document.write(x < y);   // Prints: true
document.write("<br>");

document.write(x > y);   // Prints: false
document.write("<br>");

document.write(x <= y);  // Prints: true
document.write("<br>");

document.write(x >= y);  // Prints: false