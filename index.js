/* CLI SHOULD CANCEL */

/**
 * Cli Should Cancel.
 */
import { bold } from "chalk";
const yellow = bold.yellow;

// Exit gracefully if user trying to cancel.
export default async (action) => {
	if (action === undefined) {
		console.log(yellow(`❯ Cancelled!\n`));
		process.exit(0);
	}
};
