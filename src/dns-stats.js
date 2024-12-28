const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const resultObject = {};

  domains.forEach((domain) => {
    const arrayWithDomainsParts = domain.split(".");
    const reversedArray = arrayWithDomainsParts.reverse();

    let currentLevel = "";

    reversedArray.forEach((part) => {
      currentLevel = `${currentLevel}.${part}`;

      if (resultObject[currentLevel]) {
        resultObject[currentLevel] += 1;
      } else {
        resultObject[currentLevel] = 1;
      }
    });
  });

  return resultObject;
}

module.exports = {
  getDNSStats
};
