//Rotate array right
//Input:[1, 2, 3, 4, 5] Output:[5,1,2, 3, 4]
function RotateArrayRight()
{
    let arr=[1, 2, 3, 4, 5];
    let first = arr[arr.length-1];
    let newarr=[];
    for(let i=arr.length-1;i>0;i--)
    {
        arr[i]=arr[i-1];// 4th index stores 3rd value, 3rd index stores 2nd value, and so on, and the first index is left blank
    }
    arr[0]=first;//first index stores the last value.
    console.log(arr);
}
RotateArrayRight();