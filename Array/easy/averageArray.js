// /5. Average of Array
class averageArray
{
    avg(array1)
    {
        let sum=0;
        let avg = 1;
        for(let i=0;i<array1.length-1;i++)
        {
            sum = sum+array1[i];
        }
        avg = sum/array1.length;
        return avg;
    }
    
}
const obj1 = new averageArray();
const num = [2,3,4,5];

const average = obj1.avg(num);
console.log("the avegar is: "+average);