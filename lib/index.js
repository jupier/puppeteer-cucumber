const Cli = require('cucumber/lib/cli').default

console.log(process.argv.slice(2))
console.log(process.argv)

const cli = new Cli({
    argv: [     '--format',
        'pretty',
        'examples/cucumber-tests/features/my_feature.feature' ],
    cwd: process.cwd(),
    stdout: process.stdout
})

cli.run();