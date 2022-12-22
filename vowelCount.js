// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

const getCount = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let arr = str.split('')

    let numVowels = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (arr[i] === vowels[j]){
                numVowels++
            }
        }   
    }
    return numVowels
}


console.log(getCount('abracadabra')) //5
console.log(getCount('oh boy it is a sentence'))