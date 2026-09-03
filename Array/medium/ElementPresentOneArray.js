//arr1 = [1,2,3,4]
//arr2 = [3,4,5,6]
//Elements in arr1 but not arr2:
//[1,2]
class ElementPresentOneArray
{
    elementPresentArray(arr1,arr2)
    {
        let result=[];
       for(let i=0;i<arr1.length-1;i++)
       {
        if(!arr2.includes(arr1[i]))
        {
            result.push(arr1[i]);
        }
       }
       console.log(result);
    }
}
const obj1 = new ElementPresentOneArray();
const arr1 = [1,2,3,4];
const arr2 = [3,4,5,6];
obj1.elementPresentArray(arr1,arr2);