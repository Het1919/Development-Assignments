const result = (a,b,c)=>{
    if(a+b+c==180)
    {
     if(a===b && b===c)
     {
        console.log("Equilateral Triangle");
     }
    else if((a==b && b!=c) || (a==c && b!=c) || (b==c && a!=c))
    {
        console.log("Isosceles Triangle");
    }
    else
    {
        console.log("Scelean Triangle");
    }
    }
    else{
        console.log("Not a Triangle");
    }
}

result(60,60,60);