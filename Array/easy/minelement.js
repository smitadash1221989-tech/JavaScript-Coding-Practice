//3. Find Minimum Element
class minelement
{
    minelement1(array1)
    {
        let min = array1[0];
        for(let i=1;i<array1.length-1;i++)
        {
            if(array1[i]<min)
            {
                min = array1[i];
            }
        }
        console.log("the minimum element is: "+min);
    }
}
const obj1 = new minelement();
const number = [4,5,3,1,3,2];
obj1.minelement1(number);
