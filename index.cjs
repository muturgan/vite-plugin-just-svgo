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
			const svgoPath = path.join(process.cwd(), 'node_modules', '.bin','svgo');
			const result = cp.spawnSync(svgoPath, ['-f', outputPath, '-r', '--multipass']);
			console.log(result.output.toString());
		},
	};
}

module.exports = justSvgo;
module.exports.default = justSvgo;
module.exports.justSvgo = justSvgo;
