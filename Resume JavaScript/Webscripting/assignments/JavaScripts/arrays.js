var counting = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
 
var num = counting.length;
var a = 0

document.write("<h3>" + "Beginning of While loop" + "</h3>")

while(counting[a]<= 9){// go count up through the array until a is at 9
    document.write("<br>" + counting[a]);
    a++
    
    
}
document.write("<h3>" + "Beginning of For loop" + "</h3>")

for (var i = 1; i <= num; i++){// count down through the array until num is at 0

document.write("<br>" + counting[num - i] )

}