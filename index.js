
const app = "I don't do much."

var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name)
}

function destructivelyPrependCats(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastcats(){
    return cats.pop()
}

function destructivelyRemoveFirstcats(){
    return cats.shift()
}

function appendcats(name){
    return [...cats, name]
}

function prependcats(name){
    return [name, ...cats]
}

function removeLastcats(){
    return cats.slice(0,cats.length-1)
}

function removeFirstcats(){
    return cats.slice(1)
}