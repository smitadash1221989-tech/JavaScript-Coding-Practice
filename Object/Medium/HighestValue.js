//Find the key with the highest value
//Question
//Given:
/*const scores = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
    David: 95
};
Find the person with the highest score.*/
const scores = {
    Alice: 85, // key:Alice, value:85
    Bob: 92,
    Charlie: 78,
    David: 95
};
//logic
/* Get all keys using Object.keys().
Keep track of the maximum score.
Compare every value.
Store the corresponding key.*/
let highestscore = -Infinity;
let highestscorer =  "";
for(const name of Object.keys(scores))
{
    if(scores[name]>highestscore)
    {
        highestscore=scores[name];
        highestscorer = name;
    }
}
console.log("highest scrored by : "+highestscore);
console.log("highest scorer: "+highestscorer);
