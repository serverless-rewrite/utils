'use strict';

const inquirer = require('.');

module.exports = async (options = {}) => {
  let answer = (await inquirer.prompt(options))[options.name];
  if (typeof answer === 'string') {
    answer = answer.trim();
  }
  return answer;
};
