//4. Sum of Array
class sumOfArray
{
    sumArray(array1)
    {
        let sum =0;
        for(let i=0;i<array1.length-1;i++)
        {
            sum = sum+array1[i];
        }
        console.log("the sum is: "+sum);
    }
}
const obj1 = new sumOfArray();
const number = [3,4,5];
obj1.sumArray(number);