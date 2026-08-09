function FindDuplicates()
{
    //check for the number of duplicate element count 
    let arr =[2,3,4,2,2,1,2,4,5,6];
    let duplicate=[];
    for(let value of arr)
    {
        let count=0;
        for(let num of arr)
        {
            if(value===num)
            {
                count++;
            }
        }
        //if count is more than one, then check for the value already added to the duplicaye new array or not
        if(count >1)
        {
            let alreadyexist = false;
            for(let num of duplicate)
            {
                if(num===value)
                {
                    alreadyexist=true;
                    break;
                }
            }
            if(!alreadyexist)
            {
                duplicate.push(value);
            }

        }
    }
    console.log(duplicate);

}
FindDuplicates();