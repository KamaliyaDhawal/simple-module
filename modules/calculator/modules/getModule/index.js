const getModule = (moduleName) => {
	return require(`../${moduleName}`);
}

module.exports = getModule;