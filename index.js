const whoiser = require('whoiser');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter domain name: ', (domain) => {
    whoiser(domain).then((data) => {
        console.log(data);
    });
    rl.close();
});