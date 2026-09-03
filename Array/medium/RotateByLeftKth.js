class RotateByLeftKth
{
    rotateLeft(arr,k)
    {
        let first = 0;
        
        for(let i=0;i<k;i++)
        {
            first = arr[0];
            for(let j=0;j<arr.length;j++)
            {
                
                arr[j]=arr[j+1];

            }
            arr[arr.length-1]=first;
        }
        console.log(arr);
    }
}
const obj1 = new RotateByLeftKth();
const arr = [2,3,4,5,6]; //  4 5 6 2 3
obj1.rotateLeft(arr,2);
