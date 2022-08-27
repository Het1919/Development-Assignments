function grade1(marks)
{ 
    if(marks>100)
    {
        console.log("Enter marks between 0 and 100");
    }
    else{
        switch (Math.floor(marks/10)) {
            case 10:
            case 9:
                console.log('S');
            break;
            case 8:
                console.log('A');
            break;
            case 7:
                console.log('B');
            break;
            case 6:
                console.log('C');
            break;
            case 5:
                console.log('D');
            break;
            case 4:
                console.log('E');
                break;
            default:
                console.log("Student has Failed");
                break;
        }
   }
}
grade1(4);
