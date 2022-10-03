const mix = [["a"], ["b"], ["c"]]




const testArray = {
    "4k6Uh1HXdhtusDW5y8Gbvy":false,
    "6VhuP99TE6gYNQRJIlAWFD":false,
    "4uUG5RXrOk84mYEfFvj3cK":false,
    "1xzi1Jcr7mEi9K2RfzLOqS":false,
    "6xGruZOHLs39ZbVccQTuPZ":false,
    "6i1g5ZRmJZAkDwBaUZ3f2i":true,
    "3BnDvpeuGOj21Ir2aVEtQo":true,
    "1ga4PztXOIw1yBbdUt2X8v":true
}
console.log("testArray[1ga4PztXOIw1yBbdUt2X8v]");
console.log(testArray["1ga4PztXOIw1yBbdUt2X8v"]);

console.log("testArray[6xGruZOHLs39ZbVccQTuPZ]");
console.log(testArray["6xGruZOHLs39ZbVccQTuPZ"]);

console.log(testArray.hasOwnProperty("1ga4PztXOIw1yBbdUt2X8v"));
console.log(testArray.hasOwnProperty("6xGruZOHLs39ZbVccQTugZ"));
