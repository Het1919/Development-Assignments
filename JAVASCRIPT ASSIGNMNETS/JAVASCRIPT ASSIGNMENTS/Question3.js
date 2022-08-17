function fact(n)
{
    var fact=1;
    for(var i=2;i<=n;i++)
    {
        fact*=i;
    }
    return fact;
}

console.log(fact(10));
