const getStoreBook = () => {
    const storBookSTR = localStorage.getItem("readingList")

    if (storBookSTR) {
        const storeBookData = JSON.parse(storBookSTR)
        return storeBookData
    }
    else {
        return [];
    }

}

const addToDB = (id) => {
    const storeBookData = getStoreBook();

    if (storeBookData.includes(id)) {
        console.log("hello")
        alert("Already Added");
    }
    else {
        storeBookData.push(id);
        const data = JSON.stringify(storeBookData);
        localStorage.setItem("readingList", data);
    }

}
export { addToDB, getStoreBook };