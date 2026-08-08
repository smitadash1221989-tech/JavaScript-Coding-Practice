function findsecondsmallest()
{
    let array1 = [1,2,3,4,5,6,7,8];
    for(let i=0;i<array1.length-1;i++)
    {
        for(let j=0;j<array1.length-i-1;j++)
        {
            if(array1[j]<array1[j+1])
            {
                let temp = 0;
                temp = array1[j];
                array1[j]=array1[j+1];
                array1[j+1]=temp;
            }
        }
    }
    console.log("the smallest is : "+array1[array1.length-1]);
    console.log("the second smallest is : "+array1[array1.length-2]);
}
findsecondsmallest();