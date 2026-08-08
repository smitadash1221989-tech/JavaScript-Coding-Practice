// /6. Count Even Numbers
class countEven
{
    counteven(array1)
    {
       
        let count=0;
        let even=[];
        for(let i=0;i<array1.length-1;i++)
        {
            if(array1[i]%2==0)
            {
                count++;
                even.push(array1[i])
            }
        }
        console.log("the even number is: "+even);
        console.log("the count of even number is: "+count);
    }
}
let obj1 = new countEven();
let array1 = [2,3,4,5,6];
obj1.counteven(array1);