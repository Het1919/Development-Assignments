function fact(n)
{
    let factorial=1;
    for(let i=2;i<=n;i++)
    {
        factorial*=i;
    }
    return factorial;
}
function special(n)
{
    let sum=0;
    let temp=n;
    while(n!=0)
    {
        let rem=n%10;
        sum+=fact(rem);
        n=parseInt(n/10);
    }
    if(sum==temp)
    {
        console.log("Special Number");
    }
    else
    {
        console.log("Not a special Number");
    }
}

special(145);