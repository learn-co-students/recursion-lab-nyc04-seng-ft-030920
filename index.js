function printString(s){
    console.log(s[0])
    if(s.length > 1){
        let sub = s.substring(1, s.length)
        printString(sub)
    } else {
        return true
    }
}

function reverseString(s){
    let reverse = ''
    if(s.length > 0){
            let last = s[s.length - 1]
            let sub = s.substring(0, s.length - 1)
            reverse = last + reverseString(sub)
    } 
    return reverse
}

function isPalindrome(s){
    if(s.length > 1){
        if(s[0] != s[s.length - 1]){
            return false
        }
        let sub = s.substring(1, s.length - 1)
        return isPalindrome(sub) && true

    } else {
        return true
    }
}

function addUpTo(array, endIndex){
    if(endIndex > 0){
        return array[endIndex] + addUpTo(array, endIndex - 1)
    } else {
        return array[endIndex]
    }
}

function maxOf(array){
    if(array.length > 1){
        let sub
        if(array[0] > array[array.length - 1]){
            sub = array.slice(0, array.length - 1)
        } else {
            sub = array.slice(1, array.length)
        }
        return maxOf(sub) 
    }
    return array[0]
}

function includesNumber(array, n){
    if(array.length > 1){
        if(array[0] == n){
            return true
        } else {
            let sub = array.slice(1, array.length)
            return includesNumber(sub, n)
        }
    }
    return false
}
