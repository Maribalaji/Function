function mark(mark1,mark2,mark3,mark4,mark5){
	var total=mark1+mark2+mark3+mark4+mark5;
	
	document.write(" Total mark is "+total+"&nbsp");
	var average=total/mark.length;
	return(average);
}


var Balaji=mark(90,85,92,90,85);
document.write("Balaji Average is: "+Balaji+"<br>");
var Surya=mark(90,85,75,90,70);
document.write("Surya Average is: "+Surya+"<br>");
var Ajith=mark(80,85,80,70,85);
document.write("Ajith Average is: "+Ajith+"<br>");
var Siva =mark(70,75,80,90,85);
document.write("Siva Average is "+Siva+"<br>");
var Vijay =mark(86,85,80,79,85);
document.write("Vijay Average is: "+Vijay+"<br>");