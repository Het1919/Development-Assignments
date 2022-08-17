let year=2016;
if(year%4==0 && year%100!=0)
{
    console.log("Leap Year!");
}
else if(year%400==0)
{
    console.log("Leap Year!");
}
else
{
    console.log("Not a Leap Year!");
}