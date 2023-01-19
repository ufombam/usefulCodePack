//find a lonely integer
const arr = [1,2,3,4,5,4,3,2,1,5,9,12,12,6,6,6];
const detectLonely = (x) => {
    const mySet = new Set();
    const uniqueKey = x.filter(key => !mySet.has(key) && mySet.add(key))
    const arrObj = uniqueKey.reduce((acc, item) => {
        if (!acc[item]) acc[item] = 0
        return acc;
    }, {});
    x.forEach(num => {
        if (Reflect.has(arrObj, `${num}`)) arrObj[num] += 1;
    })
    
    const lonelyOne = Object.keys(arrObj).find(key => arrObj[key] === 1)
    return +lonelyOne;
}
//detectLonely(arr);


// Setup
    const recordCollection = {
        2548: {
            albumTitle: 'Slippery When Wet',
            artist: 'Bon Jovi',
            tracks: ['Let It Rock', 'You Give Love a Bad Name']
        },
        2468: {
            albumTitle: '1999',
            artist: 'Prince',
            tracks: ['1999', 'Little Red Corvette']
        },
            1245: {
            artist: 'Robert Palmer',
            tracks: []
        },
            5439: {
            albumTitle: 'ABBA Gold'
        }
    };

function updateRecords(records, id, prop, value) {
    if (prop != "tracks" && value != "") {
        records[id][prop] = value;
    } else if (prop && value == "") {
        delete records[id][prop]
    }
    else if (prop == "tracks" && !Object.hasOwnProperty(records[id][prop])) {
    if(!records[id].tracks) {
        records[id].tracks = [];
        records[id].tracks.push(value)
    } else {
        records[id].tracks.push(value);
    }
    
    } else if (prop == "tracks" && value !== "") {
        records[id][prop].push(value);
    } 
    return records;
}
//updateRecords(recordCollection, 5439, 'artist', 'ABBA');
//console.log((updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")))

//multiply all elements in a multi-dimensional array
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i])
        }
    }
    // Only change code above this line
    return product;
}

//multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
//===================================

function multiply(arr, n) {
    if (n <= 0) {
        //console.log(n)
    return 2;
    } else {
        //console.log(n)
        console.log(multiply(arr, n -1) + " function")
        console.log(arr[n - 1] + " array-value")
    return multiply(arr, n -1) * arr[n - 1];
    //arr[3]
    }
}

//console.log(multiply([5,3,6,2,2], 2));

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
}
//=====================================

// Setup
    const contacts = [
        {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
        },
        {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
        },
        {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
        },
        {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
        },
    ];
    //find property of an object living in an array
    function lookUpProfile(name, prop) {
        // Only change code below this line
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].firstName == name) {
                if (contacts[i].hasOwnProperty(prop)) {
                    return contacts[i][prop]
                } else {
                    return "No such property"
                }
            }
        }
        return "No such contact";
        // Only change code above this line
    }
    //console.log(lookUpProfile("Harry", "likes"));
    //console.log(parseInt('11', 2));

    //Generate range of numbers - recursion solution
function rangeOfNumbers(startNum, endNum) {
    const iterate = (endNum - startNum);
    let count = 0;
    if (iterate < count) {
        return [];
    } else {
        const myRange = rangeOfNumbers(startNum + 1, endNum)
        myRange.unshift(startNum)
        return myRange;
    }
};
//console.log(rangeOfNumbers(5, 8))

let regEx = /C+/g
let stringSearch = 'CCaadasdfaCcCaCC';
//console.log(stringSearch.match(regEx))

//shorthand to match all characters(letter, numbers and underscore)
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w+/g; // Change this line
//let result = quoteSample.match(alphabetRegexV2).length;
//console.log(result)
//username check
//Usernames can only use alpha-numeric characters.
//The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
//Username letters can be lowercase and uppercase.
//Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
let username = "BadUs3rnam3";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d/i; // Change this line
//let result = userCheck.test(username);
//console.log(username.match(userCheck))
//console.log(result)

//specify upper and lower limits to your search string.
let ohStr = "Ohhhhhhh no";
let ohRegex = /oh{3,6} no/i; // Change this line
//let result = ohRegex.test(ohStr);
//console.log(result)

let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/;
//console.log(repeatRegex.test(repeatStr)); // Returns true
//console.log(repeatStr.match(repeatRegex));

//flipping a number to 32 bits digit
function flipTo32Bits (n) {
    const myBaseTwo = n.toString(2);
    //create an array of the myBaseTwo
    const myBaseTwoArray = [...myBaseTwo]
    //convert items above line to number
    const numberArray = myBaseTwoArray.map(x => +x)
    //get the length of the base two number
    const baseLength = numberArray.length;
    //create a new array with the deficient length
    const int32 = new Array(32 - baseLength).fill(0)
    int32.push(...numberArray)
    //flipping using switch
    const flippedInt = int32.map(x => x === 1 ? 0 : 1)
    //join the flipped number to a single string
    const flippedString = flippedInt.join('');
    return parseInt(flippedString, 2)
}
//flipTo32Bits(2147483647)

//alternative to trim()
function clearWhiteSpace (str) {
    let wsRegex = /(\s+)(\s+)/g; // Change this line
    let result = str.replace(wsRegex, ''); // Change this line
    return result
}
//console.log(clearWhiteSpace("   She is an amazing girl.  "))

let po = []
for (let i=0; i<4; i++) {
    for (let j=0; j<3; j++) {
        po.push([])
    }
    
}
//console.log(po);

//get the length of the longest word in a string
function findLongestWordLength(str) {
    const myRegEx = /[a-z]+/ig;
    const myArrayOfWords = str.match(myRegEx);
    let arrayOfLengths = [];
    for (let i = 0; i < myArrayOfWords.length; i++) {
        arrayOfLengths.push(myArrayOfWords[i].length);
    }
    return Math.max(...arrayOfLengths);
}
//findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Capitalize each word in a string
function capitalizeEachWord(str) {
    //split up string into word groups held in an array
    let newStr = str.split(" ");
    let newStrArray = [];
    let joinedArray = []; //final step to join array elements
    //loop through the new array and change first letters to uppercase
    for (let i = 0; i < newStr.length; i++) {
        newStrArray.push([...newStr[i]])
        newStrArray[i][0] = newStrArray[i][0].toUpperCase();
        for (let j = 1; j < newStrArray[i].length; j++) {
            newStrArray[i][j] = newStrArray[i][j].toLowerCase()
        }
        joinedArray.push(newStrArray[i].join(''))
    }
    return joinedArray.join(' ')
}
capitalizeEachWord("I'm a little tea pot");

//compare two strings, find if second string match to first string.
function mutation(arr) {
    const [a, b] = arr;
    let checker = [];
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < a.length; j++) {
            b[i].toLowerCase() == a[j].toLowerCase() && checker.push(i);
        }
    }
    const finalChecked = [...new Set(checker)];
    return finalChecked.length == b.length;
}

  //mutation(["voodoo", "no"]);

//A function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
let newArray = [];
    while (arr.length > 0) {
    newArray.push(arr.splice(0, size))
    }
    return newArray;
}
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);

//create my own map() function
Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
    this.forEach((x,i,array) => newArray.push(callback(x,i,array)));
    // Only change code above this line
    return newArray;
};

//create my own filter() function
Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
    this.forEach((element, i, array) => {
      if (callback(element, i, array))
        newArray.push(element)
    })
    // Only change code above this line
    return newArray;
  };




export { 
    detectLonely, 
    lookUpProfile, 
    rangeOfNumbers, 
    flipTo32Bits,
    clearWhiteSpace,
    findLongestWordLength,
    capitalizeEachWord,
    mutation,
    chunkArrayInGroups
}