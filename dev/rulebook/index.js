const { camelCase, capitalCase, snakeCase } = require('change-case')
const caporal = require('caporal')

const { createMove } = require('./generators/move_generator')
const { createPlaybook } = require('./generators/playbook_generator')
const Constants = require('./constants')

caporal
  .name('rulebook')
  .version('v1')
  .description('Manages the rulbook')
  
  .command('move', 'Creates a move')
    .argument('<name>', 'Name of the move')
    .option('--playbook <playbook>', 'Save under specific playbook')
    .option('--type <type>', 'The part of the playbook its from: race-move, starting-move, advanced-2-5, advanced-6-10',
    	['race-move', 'starting-move', 'advanced-2-5', 'advanced-6-10', 'race', 'starting'])
    .option('--roll <roll>', 'Indicates that the move contains a roll, and may indicate what roll it is, if it\'s a classig roll')
    .option('--choice', 'Indicates that the move contains a choice')
    .option('--modifier', 'Indicates that the move contains a modifier')
    .option('--hold', 'Indicates that the move contains a hold')
    .option('--stat', 'Indicates that the move contains a stat change (including HP, XP, Level, Armor and Damage)')
    .option('--constant', 'Indicates that the move is constant, with no written trigger')
    .option('--multiple', 'Indicates that the move can end on multiple effects happening at once')
    .option('--condition', 'Indicates that the move is built around a condition of numeric facts')
    .option('--multiclass', 'Indicates that the move is a multiclass move')
    .option('--replaces <replaces>', 'Indicates that the move replaces another move from the same playbook in the advanced 2-5 moves section')
    .option('--requires <requires>', 'Indicates that the move requires another move from the same playbook in the advanced 2-5 moves section')
    .option('--trigger <trigger>', 'The trigger text, if there is any')
    .option('--text <text>', 'The move text')
    .option('--effect <effect>', 'A direct effect')
    .option('--no-effect', 'Indicates that the rule has an option for nothing happening')
    .action((args, opts) => Constants.merge(opts).then(options => createMove(args.name, options)).catch(err => console.error(err)))
  
  .command('playbook', 'Creates a playbook')
    .argument('<name>', 'Name of the playbook')
    .option('-g, --good <goal>', 'Adds the good alignment')
    .option('-e, --evil <goal>', 'Adds the evil alignment')
    .option('-l, --lawful <goal>', 'Adds the lawful alignment')
    .option('-c, --chaotic <goal>', 'Adds the chaotic alignment')
    .option('-n, --neutral <goal>', 'Adds the neutral alignment')
    .option('--hp <hp>', 'Sets the maximum HP')
    .option('--load <load>', 'Sets the load')
    .option('-d, --damage <damage>', 'Sets the base dammage')
    .option('-b, --bond <bond>', 'Adds a bond option')
    .option('-r, --race <race>', 'Race name options appear in the following syntax: --race "race: name1, name2, name3, ..."')
    .option('--look <look>', 'Adds a look choice. example: --look "lookChoice: option1, option2, option3')
    .option('--eyes <eyes>', 'Adds an "eyes" look choice. example: --eyes "option1, option2, option3')
    .option('--hair <hair>', 'Adds a "hair" look choice. example: --hair "option1, option2, option3')
    .option('--clothes <clothes>', 'Adds a "clothes" look choice. example: --clothes "option1, option2, option3')
    .option('--build <build>', 'Adds a "build" look choice. example: --build "option1, option2, option3')
    .option('--skin <skin>', 'Adds a "skin" look choice. example: --skin "option1, option2, option3')
    .option('--voice <voice>', 'Adds a "voice" look choice. example: --voice "option1, option2, option3')
    .option('--titles <titles>', 'Adds an optional titles field. example: --titles "option1, option2, option3')
    .action((args, opts) => Constants.merge(opts).then(options => createPlaybook(args.name, options)).catch(err => console.error(err)))

  .command('set', 'sets a constant for future commands')
    .argument('<key>', 'The constnat to set')
    .argument('<value>', 'Value to set')
    .action(args => Constants.set(args.key, args.value).catch(err => console.error(err)))

// Make global options
const defaultCmd = caporal._commands[0]
for (const cmd of caporal._commands.slice(1)) {
  cmd._options.unshift(...defaultCmd._options)
}

caporal.parse(process.argv)