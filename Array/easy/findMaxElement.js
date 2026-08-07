//2. Find Maximum Element
class findmaxelement
{
    findmax(number)
    {
        let max = number[0];
        for(let i=1;i<number.length-1;i++)
        {
            if(number[i]>max)
            {
                max=number[i];
            }
        }
        console.log("the highest number is: "+max);
    }
}
const obj1=new findmaxelement();
const number = [20,10,30,40,5];
obj1.findmax(number);