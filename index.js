const arrayOfStrings = ["bluebird", "bluelake", "blueriver", "bluesky", "bluefire", "redbird", "redlake", "redriver"]

/* const match = arrayOfStrings.find(element => {
    if (element.includes("blu")) {
      return true;
    }
}); */
/* 
const match = arrayOfStrings.filter(match => {
    if(match.indexOf("blu") !==-1)
    return true
});

console.log(match)
 */
function search(arr, word){
    const result = arr.filter(element => element.includes(word))
    return result.length > 5 ? result.slice(0,5) : result
}

module.exports = search
