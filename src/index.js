function toStr(n) {
    switch (n) {
        case 0:return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
    }
}

function decimalToStr(a, b) {
    if (a === 0){
        return toStr(b);
    } else if (a === 1) {
        switch (b) {
            case 0: return 'ten';
            case 1: return 'eleven';
            case 2: return 'twelve';
            case 3: return 'thirteen';
            case 4: return 'fourteen';
            case 5: return 'fifteen';
            case 6: return 'sixteen';
            case 7: return 'seventeen';
            case 8: return 'eighteen';
            case 9: return 'nineteen';
        }
    } else {
        switch (a) {
            case 2: 
                if (b === 0)
                    return 'twenty';
                else
                    return 'twenty ' + toStr(b);
            case 3: 
                if (b === 0)
                    return 'thirty';
                else
                    return 'thirty ' + toStr(b);
            case 4: 
                if (b === 0)
                    return 'forty';
                else
                    return 'forty ' + toStr(b);
            case 5: 
                if (b === 0)
                    return 'fifty';
                else
                    return 'fifty ' + toStr(b);
            case 6: 
                if (b === 0)
                    return 'sixty';
                else
                    return 'sixty ' + toStr(b);
            case 7: 
                if (b === 0)
                    return 'seventy';
                else
                    return 'seventy ' + toStr(b);
            case 8: 
                if (b === 0)
                    return 'eighty';
                else
                    return 'eighty ' + toStr(b);
            case 9: 
                if (b === 0)
                    return 'ninety';
                else
                    return 'ninety ' + toStr(b);
        }
    }
}

module.exports = function toReadable (number) {
// function toReadable(number) {
    let num = number;
    let res = '';
    let array = [];
    let i = 0;
    while (num > 10) {
        array[i] = num % 10;
        num = parseInt(num / 10);
        i++;
    }
    if (num < 10) {
        array[i] = num;
    } else if (num === 10) {
        array[i] = 0;
        array[i+1] = 1;
    }
    array = array.reverse();
    switch (array.length) {
        case 1:
            res = toStr(array[0]);
            break;
        case 2:
            res = decimalToStr(array[0], array[1]);
            break;
        case 3:
            if (number % 100 === 0) {
                res = toStr(array[0]) + " hundred";
            } else {
                res = toStr(array[0]) + " hundred " + decimalToStr(array[1], array[2]);
            }
    }
    // console.log(res);
    return res;
}

// function main() {
//     toReadable(101);
// }

// main();