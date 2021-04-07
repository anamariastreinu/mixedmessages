let randomNum = x => {
    return Math.floor(Math.random() * x)
};
let messages = {
    element: ['earth', 'water', 'air', 'fire'],
    fortune: ['cozy parks', 'meeting strangers', 'nights out', 'birthday parties'],
    avoid: ['spend time with loved ones', 'spend time alone', 'trust no one', 'release energy'],
};
let createRandomMsg = (obj, func) => {
    let output = []
    for (let key in obj) {
        let index = func(obj[key].length);
        output.push(obj[key][index]);
    } return output;
};
let printMsg = (createRandomMsg, messages, randomNum) => {
    let array = createRandomMsg(messages, randomNum);
    console.log(`Your element is ${array[0]}.`);
    console.log(`This week, you should avoid ${array[1]}.`);
    console.log(`You should ${array[2]}.`)
};
printMsg(createRandomMsg, messages, randomNum);