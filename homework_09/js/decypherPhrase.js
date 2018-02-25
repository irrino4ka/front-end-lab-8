function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function getTransformedArray(arr, func) {
    let newArray = [];
    forEach(arr, (e) => newArray.push(func(e)));
    return newArray;
}

function cypherPhrase(obj, phrase) {
    var phraseArray = phrase.split('');
    var cypherArray = getTransformedArray(phraseArray, function(el){
        for (e in obj) {
            if (e === el) {
                el = obj[e]
            }
        }
        return el;
    });
    return cypherArray.join('');
}
function decypherPhrase (obj, phrase) {
    var decypherObj = {};
    for (e in obj) {
        decypherObj[obj[e]] = e;
    }
    return cypherPhrase(decypherObj, phrase);
}

var charactersMap = {a: 'o', c: 'd', t: 'g'}
decypherPhrase(charactersMap, 'kiggy dog');
