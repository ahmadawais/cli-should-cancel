import chalk from 'chalk';

/* CLI SHOULD CANCEL */

const yellow = chalk.bold.yellow;

// Exit gracefully if user trying to cancel.
var index = async (action) => {
	if (action === undefined) {
		console.log(yellow(`❯ Cancelled!\n`));
		process.exit(0);
	}
};

export { index as default };
