//find the missing number
//1 2 3 5
//Missing = 4
class FindMissingNum
{
    findmissingnum(arr)
    {
        let missingnum=0;
        let actualsum=0;
        let expectedsum=0;
        for(let i=0;i<=arr.length-1;i++)
        {
            actualsum = actualsum+arr[i];
        }
        console.log(actualsum);
        for(let i=1;i<=arr.length+1;i++)//find total sum from 1 to 5
        {
            expectedsum=expectedsum+i;
        }
        console.log(expectedsum);
        missingnum = expectedsum-actualsum;
        console.log(missingnum);
    }
}
const obj1 = new FindMissingNum();
const arr=[1,2,3,4,5,7];
obj1.findmissingnum(arr);
