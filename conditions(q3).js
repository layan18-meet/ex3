var n1= prompt("Insert a number"); 
var n2= prompt("Insert another number");
var op= prompt("Insert the operator");

if (op ==='+') 
{
	alert(parseInt(n1)+parseInt(n2));
}
else if (op ==="-")
{
	alert(parseInt(n1)-parseInt(n2));
}
else if (op ==="*")
{
	alert(parseInt(n1)*parseInt(n2));
}