class Mergearray
{
    mergedarray(arr1,arr2)
    {
        let mergearr=[];
        for(let i = 0;i<arr1.length-1;i++)
        {
            mergearr.push(arr1[i]);
        }
        for(let i=0;i<arr2.length-1;i++)
        {
            mergearr.push(arr2[i]);
        }
        for(let i =0;i<mergearr.length-1;i++)
        {
            for(let j=0;j<mergearr.length-i-1;j++)
            {
                if(mergearr[j]>mergearr[j+1])
                {
                    let temp =0;
                    temp = mergearr[j];
                    mergearr[j]=mergearr[j+1];
                    mergearr[j+1]= temp;
                }
            }
        }
        console.log(mergearr);
    }
}
const obj1 = new Mergearray();
const arr1 = [2,3,4,5,6,1];
const arr2 = [1,2,3,4,5,6];
obj1.mergedarray(arr1,arr2);