try {
	throw new Error();
} catch (err) {
	console.log(typeof err);
	console.error(err);
}

/** Console's output:
 * objetct
 * Error
 *  at Object.<anonymous> (C:\Users\LUAN\Documents\GitHub\javascript-fundaments\error-handling\object-error-01.js:2:8)
 *    at Module._compile (internal/modules/cjs/loader.js:1063:30)
 *    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
 *    at Module.load (internal/modules/cjs/loader.js:928:32)
 *    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
 *    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
 *    at internal/main/run_main_module.js:17:47
 */
