function bai11(stringTarget) {
    return stringTarget.match(/([\s]+)/g).length;
}

function bai12(stringTarget) {
    return stringTarget.replace(/(\s|\r\n|\r|\n)/g, "");
}

function bai13(stringTarget) {
    let reversedString = "";
    for (var i = stringTarget.length - 1; i >= 0; i--) {
        reversedString += stringTarget[i];
    }
    return reversedString;
}

function bai14(str1, str2) {
    // let str1Array = str1.split(" ");
    // for (i = 0; i < str1Array.length; i++) {
    //     if (str1Array[i] == str2) {
    //         return i + 1;
    //     }
    // }
    for (i = 0; i < str1.length; i++) {
        if (str1.substr(i, str2.length) == str2) {
            return i;
        }
    }
}

function bai15(name) {
    name = name.toLowerCase().replace(/  +/g, ' ');;
    let returnName = "";
    for (i = 0; i < name.length; i++) {
        if (i == 0) {
            returnName += name.charAt(0).toUpperCase();
            continue;
        }
        if (name.charAt(i) == " ") {
            returnName += " " + name.charAt(i + 1).toUpperCase();
            i++
            continue;
        }
        returnName += name.charAt(i);
    }
    return returnName;
}

function bai16(facebookUrl) {
    let urlArray = facebookUrl.split("/");
    return urlArray[urlArray.length - 1];
}

function bai17(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

let arr = [1, 2, 3, 4, 5, 6];
arr.forEach((item, index, array) => {
    // console.log(item);
});

function reversed(str1) {
    return str1.split('').reverse().join('') == str1;
}
var array = [2, 5, 3, 5, 2, 2];



function bai21(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function bai22(arr) {
    return Math.max.apply(Math, arr) + "," +
        Math.min.apply(Math, arr) + "," +
        arr.reduce((a, b) => a + b, 0) / arr.length;
}

function bai23(arr) {
    let appearTimesMap = {};
    let maxElement = "";
    let maxCount = 1;
    arr.forEach((element) => {
        if (appearTimesMap[element] == null) {
            appearTimesMap[element] = 1;
        } else {
            appearTimesMap[element]++;
        }
        if (appearTimesMap[element] > maxCount) {
            maxElement = element;
            maxCount = appearTimesMap[element];
        }
    });
    return maxElement;
}
const bai24 = num => {
    if (num == 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}
const bai25 = arr => {
    var returnArray = [];
    arr.forEach((element) => {
        returnArray.push(element * element);
    });
    return returnArray;
}

const bai26 = (arr, number) => {
    arr.sort((a, b) => {
        return Math.abs(number - a) - Math.abs(number - b);
    });
    if (number - arr[0] == arr[1] - number) {
        return [arr[0], arr[1]];
    } else {
        return [arr[0]];
    }
}
let students = [{
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]
const bai27 = arr => {
    arr.forEach(x => {
        x.firstName = bai15(x.firstName);
        x.lastName = bai15(x.lastName);
    });
    return arr.filter(x => x.firstName.length > 3 && (x.firstName.includes('a') || x.firstName.includes('A')));
}