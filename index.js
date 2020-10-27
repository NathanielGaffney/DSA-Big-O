
function hanoi(disks, start, next, mid) {
    if (disks === 0) {
        return ''
    }
    let ans = ''
    ans += hanoi(disks - 1, start, mid, next);
    ans += `Disk ${disks} moved to from ${start} to ${next} tower.\n`
    ans += hanoi(disks - 1, mid, next, start)
    return ans
}

// console.log(hanoi(3, 'Left', 'Right', 'Middle'))

// O(n^2)


function countSheep(num) {
    let acc = ''
    for (let i = 0; i < num; i++) {
        acc += `${num - i}: Another sheep jumps over the fence\n`
    }
    acc += `All sheep jumped over the fence`
    return acc
    //   if (num === 0) return 'All sheep jumped over the fence';
    //   return `${num}: Another sheep jumps over the fence\n` + countSheep(num - 1);
};

//iterative: O(n)
//recursive: O(n)

// console.log(countSheep(2));


function powerCalculator(num, exp) {
    let acc = num
    if (exp === 0) {
        return 1;
    }
    for (let i = 1; i < exp; i++) {
        acc *= num
    }
    return acc;
    //   if (exp < 0) return 0;
    //   if (exp === 0) return 1;
    //   if (exp === 1) return num;
    //   let answer = powerCalculator(num, exp - 1);
    //   return answer * num;
};

//iterative: O(n)
//recursive: O(n)

// console.log(powerCalculator(2, 2));

function reverse(str) {
    let acc = ''
    for (let i = str.length; i > 0; i--) {
        acc += str.charAt(i - 1)
    }
    return acc
    //   if (str.length === 1 || 0) return str;
    //   let rev = reverse(str.slice(1));
    //   return rev + str.charAt(0);
};

//iterative: O(n)
//recursive: O(n)

// console.log(reverse('123-456'));


function triangulate(num) {
    let acc = 0;
    for (let i = 0; i <= num; i++) {
        acc += i
    }
    return acc
    //   if (num <= 0) return 0;
    //   if (num === 1) return num;
    //   return num + triangulate(num - 1);
};

//iterative: O(n)
//recursive: O(n)

// console.log(triangulate(4));

function stringSplitter(str, sep, res = []) {
    let acc = '';
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) === sep) {
            res.push(acc)
            acc = ''
        } else {
            acc += str.charAt(i)
        }

    }
    res.push(acc)
    return res
    // if (str.length === 0) {
    //     return res
    // }
    // if (str[0] === sep) {
    //     res.push('');
    // } else {
    //     res[res.length - 1] += str[0]
    // }
    // return stringSplitter(str.slice(1), sep, res)
}

//iterative: O(n)
//recursive: O(n)

// console.log(stringSplitter(`the-best-string`, '-'))








///////////////////////////////////////////////////////








function fibber(num) {
    if (num === 0) return [0];
    if (num === 1) return [0, 1];
    let seq = fibber(num - 1);
    const num1 = seq[seq.length - 1];
    const num2 = seq[seq.length - 2];
    seq.push(num1 + num2);
    return seq;
};

//recursive: O(n)

// console.log(fibber(2));


function factorial(num) {
    if (num === 0) return 0;
    if (num === 1) return num;
    let answer = factorial(num - 1);
    return answer * num;
};

//recursive: O(n)

// console.log(factorial(5));

const makeSmallMaze = () => [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];
const makeBigMaze = () => [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function findPath(maze, N, M) {
    maze[N][M] = '*';
    let answer = '';
    switch (' ') {
        case maze[N][M + 1]:
            return (answer += 'R' + findPath(maze, N, M + 1));
        case maze[N + 1][M]:
            return (answer += 'D' + findPath(maze, N + 1, M));
        case maze[N][M - 1]:
            return (answer += 'L' + findPath(maze, N, M - 1));
        case maze[N - 1][M]:
            return (answer += 'U' + findPath(maze, N - 1, M));
    }
    switch ('e') {
        case maze[N][M + 1]:
            return (answer += 'R: Complete!');
        case maze[N + 1][M]:
            return (answer += 'D: Complete!');
        case maze[N][M - 1]:
            return (answer += 'L: Complete!');
        case maze[N - 1][M]:
            return (answer += 'U: Complete!');
        default:
            return 'Maze failed!';
    }
};

//recursive: O(nlog(n))??

// console.log(findPath(makeSmallMaze(), 0, 0));


function anagrams(str, acc, answer) {
    const duplicate = [];
    if (!str) answer.push(acc);
    let i = 0;
    while (i < str.length) {
        if (!duplicate.includes(str[i])) {
            duplicate.push(str[i]);
            anagrams(str.slice(0, i) + str.slice(i + 1), acc + str[i], answer);
        }
        i++;
    }
    return answer;
};

//recursive: O(2^n)

// console.log(anagrams('abc', '', []));


const createChart = () => ({
    Zuckerberg: {
        Schroepfer: {
            Bosworth: ['Steve', 'Kyle', 'Andra'],
            Zhao: ['Richie', 'Sofia', 'Jen']
        },
        Schrage: {
            VanDyck: ['Sabrina', 'Michelle', 'Josh'],
            Swain: ['Blanch', 'Tom', 'Joe']
        },
        Sandberg: {
            Goler: ['Eddie', 'Julie', 'Annie'],
            Hernandez: ['Rowi', 'Inga', 'Morgan'],
            Moissinac: ['Amy', 'Chuck', 'Vinni'],
            Kelley: ['Eric', 'Ana', 'Wes']
        }
    }
});


function printChart(chart, acc, tabs) {
    const indent = tabs ? new Array(tabs).fill('\t').join('') : '';
    if (Array.isArray(chart)) {
        chart.forEach((name) => (acc += `${indent}${name}\n`));
        return acc;
    }
    Object.keys(chart).forEach((key) => {
        const value = chart[key];
        acc += `${indent + key}\n`;
        acc = printChart(value, acc, tabs + 1);
    });
    return acc;
};


const ans = printChart(createChart(), '', 0);

//recursive: O(n)

// console.log(ans);


function printBinary(num) {
    if (num === 0) return '';
    return printBinary(Math.floor(num / 2)) + (num % 2);
};
const pb = printBinary(21);
// console.log(pb);

//recursive: O(log(n))