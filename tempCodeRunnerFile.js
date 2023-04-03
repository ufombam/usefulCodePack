function destroyer(arr) {
    let [searchArr, ...removeItems] = arguments;
    const filteredArr = searchArr.filter(x => !removeItems.includes(x))
    console.log(filteredArr)
    return filteredArr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);