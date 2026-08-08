//7. Count Odd Numbers
class countOdd
{
    countOddnum(array1)
    {
        let count=0;
        let odd=[];
        for(let i=0;i<array1.length-1;i++)
        {
            if(array1[i]%2!==0)
            {
                count++;
                odd.push(array1[i]);
            }
        }
        console.log("the count of odd number is :"+count);
        console.log("the odd number list is: "+odd);
    }
}
const obj1 = new countOdd();
const array1 = [2,3,4,5,6,7];
obj1.countOddnum(array1);
