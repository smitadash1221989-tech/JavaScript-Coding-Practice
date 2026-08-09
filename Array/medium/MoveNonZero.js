//Move All Zeros to End
//Input:[0, 1, 0, 3, 12] Output:[1, 3, 12, 0, 0]
class MoveNonZero
{
    moveNonzero(arr)
    {
        let index =0;
        let newarr=[];
        for(let i =0;i<arr.length;i++)
        {
            if(arr[i]!==0)
            {
                newarr.push(arr[i]);
            }
        }
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]===0)
            {
                newarr.push(arr[i]);
            }
        }
        console.log(newarr);
        console.log(arr);
    }
}
const obj1=new MoveNonZero();
const array1 = [1,0,2,3,0,4];
obj1.moveNonzero(array1);