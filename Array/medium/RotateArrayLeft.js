// /Rotate Array Left
//Input:[1, 2, 3, 4, 5] Output:[2, 3, 4, 5, 1]
function RotateArrayLeft()
{
    let arr1 = [1, 2, 3, 4, 5];
    let first = arr1[0];
    for(let i=0;i<arr1.length-1;i++)
    {
        arr1[i]=arr1[i+1];
    }
    arr1[arr1.length-1]=first;
    console.log(arr1);
}
RotateArrayLeft();