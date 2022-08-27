function isArmstrong(n)
{
    let sum=0;
    let temp=n;
    while(n!=0)
    {
        let rem=n%10;
        sum+=(rem*rem*rem);
        n=parseInt(n/10);
    }
    if(sum==temp)
    {
        console.log("Armstrong Number");
    }
    else{
        console.log("Not an armstrong Number");
    }
}

isArmstrong(153);