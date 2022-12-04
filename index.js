/* CLI SHOULD CANCEL */

/**
 * Cli Should Cancel.
 */
import chalk from "chalk";
import process from "process";

const yellow = chalk.bold.yellow;

// Exit gracefully if user trying to cancel.
const cliShouldCancel = async (action) => {
	if (action === undefined) {
		console.log(yellow(`❯ Cancelled!\n`));
		process.exit(0);
	}
};

export default cliShouldCancel;
