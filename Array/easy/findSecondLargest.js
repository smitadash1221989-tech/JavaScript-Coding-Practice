function findSecondLargest()
{
    let array1 = [2,3,45,6,7,88,9];
    let max = array1[0];
    let secondmax=0;
    for(let i=1;i<array1.length-1;i++)
    {
        if(array1[i]>max)
        {
            max=array1[i];
        }
    }
    for(let i=0;i<array1.length-1;i++)
    {
        if(array1[i]!=max && array1[i]>secondmax)
        {
            secondmax=array1[i];
        }
    }
    console.log("the second largest is: "+secondmax);
}
findSecondLargest();