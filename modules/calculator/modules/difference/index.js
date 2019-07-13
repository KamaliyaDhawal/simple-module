const difference = (number1, number2) => {
	if((number1 - number2) < 0) {
		return -(number1 - number2);
	} else {
		return number1 - number2;
	}
}

module.exports = difference;
