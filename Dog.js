var chalk = require('chalk');
function Dog(name) {
	// body...
	this.name = name;
	this.ear=[];
}
Dog.prototype.sayHi = function() {
	console.log('Hi, I am a Dog. Hair is '+ chalk.red(this.name));
};
module.exports=Dog;