import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
function getFreeDomainsCount(emails) {
  const countByDomain = {};

  emails.forEach((email) => {
    const domain = email.split('@')[1];
    if (freeEmailDomains.includes(domain)) {
      countByDomain[domain] = (countByDomain[domain] || 0) + 1;
    }
  });

  return countByDomain;
}

export default getFreeDomainsCount;

// END