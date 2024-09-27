let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

let testCompany = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}],
        test1: {
            testInTest1: [{name: 'Peter', salary: 10}, {name: 'Alex', salary: 20}],
            testInTest2: [{name: 'Peter', salary: 30}, {name: 'Alex', salary: 40}],
            testInTest3: [{name: 'Peter', salary: 50}, {name: 'Alex', salary: 60}, {name: 'Jack', salary: 70}]
        },
        test2: {
            test3:
                {
                    testInTest4: [{name: 'Peter', salary: 10}, {name: 'Alex', salary: 20}],
                    testInTest5: [{name: 'Peter', salary: 30}, {name: 'Alex', salary: 40}],
                    testInTest6: [{name: 'Peter', salary: 50}, {name: 'Alex', salary: 60}]
                }
        }
    }
};

let nothing = {}

function salarySum (obj) {
    let sum = 0;

    Object.keys(obj).forEach(key => {
        if (Array.isArray(obj[key])){
            obj[key].forEach(item => {sum += item.salary});
        }
        else { sum += salarySum (obj[key]) }
    });

    return sum;
}

console.log(salarySum(company)) // 1,000+600+2,000+1,800+1,300 = 6,700
console.log(salarySum(testCompany)) // 1,000+600+2,000+1,800+1,300+(10+20+30+40+50+60)×2+70 = 7,190
console.log(salarySum(nothing)) // 0
