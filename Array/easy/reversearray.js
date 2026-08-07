function reversearray()
{
    let arr1 = [10,20,30,40,50,60];
    let reversearray=[];
    for(let i=arr1.length-1;i>=0;i--)
    {
        reversearray.push(arr1[i]);
    }
    console.log(reversearray);
}
reversearray();