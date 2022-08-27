function fact(n)
{
    let factorial=1;
    for(let i=2;i<=n;i++)
    {
        factorial*=i;
    }
    return factorial;
}

let isPrime;
function prime(a,b)
{

    for(let i=a;i<=b;i++)
    {
        isPrime=true;
        if(i==1)
        {
            continue;
        }
        for(let j=2;j<i;j++)
        {
             if(i%j == 0)
             {
                isPrime=false;
                break;
             }
        }
        if(isPrime)
        {
            console.log(fact(i));
        }
    }
}

prime(1,100);