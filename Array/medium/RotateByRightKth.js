class RotateByRightKth
{
    rotateRight(arr,k)
    {
        let first=0;
        for(let i=0;i<k;i++)
            {
                first = arr[arr.length-1];
                for(let j=arr.length-1;j>0;j--)
                {
                    arr[j]=arr[j-1];
                }
                arr[0]=first;
            }   
            console.log(arr);
    }

}
const obj1 = new RotateByRightKth();
const arr = [ 4, 5, 6, 2, 3 ];
obj1.rotateRight(arr,2);