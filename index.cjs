const cp = require('node:child_process');
const path = require('node:path');

function justSvgo() {
	let outputPath;

	return {
		name: 'vite:just-svgo',
		apply: 'build',
		enforce: 'post',
		configResolved(config) {
			outputPath = path.isAbsolute(config.build.outDir)
				? config.build.outDir
				: path.join(config.root, config.build.outDir);
		},
		closeBundle() {
			return new Promise((resolve, reject) => {
				const svgoPath = path.join(process.cwd(), 'node_modules', '.bin','svgo');
				cp.exec(
					`${svgoPath} -f ${outputPath} -r --multipass`,
					(err, stdout) => {
						if (err) {
							reject(err);
						}
						else {
							console.log(stdout);
							resolve();
						}
					},
				);
			});
		},
	};
}

module.exports = justSvgo;
module.exports.default = justSvgo;
module.exports.justSvgo = justSvgo;
