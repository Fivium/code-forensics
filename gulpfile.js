// code forensics configuration
require('./lib/index').configure(
  {
    repository: {
      rootPath: 'C:/Users/dbetts/Documents/PON1/irs/integrated-reporting-system', //TODO make path dynamic
      includePaths: [
        'src/main',
        'src/test'
      ],
      excludePaths: [
        'src/main/resources/public',
        'src/main/resources/templates/fds'
      ]
    },
    contributors: {
      'Danny Betts': ['Danny Betts', 'dbetts', 'dannybetts'],
      'Alex MA': ['Alex McRae-Adams', 'alex.mcrae-adams'],
      'Fernando Ramirez': ['Fernando Ramirez'],
      'Sam Warner': ['Sam Warner', 'swarner'],
      'Daniel Ashworth': ['Daniel Ashworth'],
      'James Barnett': ['James Barnett']
    }
  }
);