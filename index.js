const chalk = require('chalk');
const { getRandom } = require('./random');

console.log('IoT Device Initialized');

setInterval(() => {
  const data = { temperature: getRandom(50, 80), humidity: getRandom(40, 60) };
  console.log(chalk.green(`Telemetry: ${JSON.stringify(data)}`));
}, 5000);

