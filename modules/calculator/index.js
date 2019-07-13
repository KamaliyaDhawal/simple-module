const getModule = require('./modules/getModule');

const calculator = {
	addition : getModule('addition'),
	multiplication: getModule('multiplication'),
	subtraction: getModule('subtraction'),
	division: getModule('division'),
	modulo: getModule('modulo'),
	difference: getModule('difference')
}

module.exports = calculator;