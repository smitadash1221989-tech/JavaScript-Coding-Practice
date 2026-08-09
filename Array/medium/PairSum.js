//Pair with Given Sum — JavaScript
//Problem: Find two elements in an array whose sum equals a given target.
//Example:
//Array  = [2, 7, 11, 15]
//Target = 9
//Pair = [2, 7]
function PairSum()
{
    let arr = [2, 7, 11, 15];
    let target=9;
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]+arr[j]===target)
            {
                console.log(arr[i],arr[j]+" is the pair");
            }
        }
    }
}
PairSum();