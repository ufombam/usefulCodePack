function whatIsInAName (collection, source) {
    const mySourceKeys = Object.keys(source);
    const myFilter = collection.filter(object => mySourceKeys.every(key => key in object && object[key] === source[key]))
    console.log(myFilter)
    return myFilter
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });