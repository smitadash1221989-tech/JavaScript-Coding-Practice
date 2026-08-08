//8. Remove Duplicates
class removeDuplicates
{
    removeDup(array1)
    {
        let dup =[];
        let count =0;
        for(let i=0;i<array1.length-1;i++)
        {
            if(!dup.includes(array1[i]))
            {
                dup.push(array1[i]);
            }
        }
        console.log(dup);
    }
}
let obj1 = new removeDuplicates();
let array1 = [2,3,4,4,5,2,1];
obj1.removeDup(array1);