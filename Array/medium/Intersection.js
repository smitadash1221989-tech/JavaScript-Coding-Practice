//Intersection of arrays
//What is intersection?
//Elements that exist in both arrays.
//Example:
//arr1 = [1, 2, 3, 4]
//arr2 = [3, 4, 5, 6]
//Intersection:[3, 4]
function Intersection()
{
    let arr1 = [1, 2, 3, 4];
   let arr2 = [3, 4, 5, 6];
   let intersect =[];
   for(let i = 0;i<arr1.length;i++)
   {
    for(let j=0;j<arr2.length;j++)
    {
        if(arr1[i]===arr2[j])
        {
            intersect.push(arr1[i]);
        }
    }
   }
   console.log(intersect);
}
Intersection();
