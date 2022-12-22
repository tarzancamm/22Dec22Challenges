// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

const XO = (str) => {
  let oCount = 0;
  let xCount = 0;

  let arr = str.toLowerCase().split("");

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "x":
        xCount++;
        break;
      case "o":
        oCount++;
        break;
    }
  }

  if (oCount === xCount) {
    return true;
  } else {
    return false;
  }
};

//! Shorter code alternative
// const XO = (str) => {
//   str = str.toLowerCase().split("");
//   return (
//     str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
//   );
// };

console.log(XO("xxOo"));
console.log(XO("ooom"));
console.log(XO("zpzpzpp"));
