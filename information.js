let name = 'Aden Omar Youssouf';
let campus = 'Wild code school';

const myInfos = () => {
    console.log(`Hi my name is ${name} and my campus is ${campus}`);
};

module.exports = myInfos;

var cowsay = require("cowsay");

console.log(cowsay.say({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));

// or cowsay.think()