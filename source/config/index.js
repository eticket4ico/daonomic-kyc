// @flow

const sales = {
  development: '0xaee0eb707a23fee852c43b5eb22030a25a729937',
  production: '0xf76350f0ad6b7cfce1311ef43e2eef488fd16dad',
};

const realms = {
  development: '5a8d7ce7a302eb3601fdef2c',
  production: '5a8d7ce7a302eb3601fdef2c',
};

export const realm: string = realms[process.env.API] || realms.production;
export const sale: string = sales[process.env.API] || sales.production;
export const tokenName = 'ET4';
export const contactEmail = 'dev@0v1se.com';
export const termsOfServiceURL = 'terms.url';

export const faq = [
  {
    question: 'How Can I invest?',
    answer:
      'Answer with <abbr title="HyperText Markup Language">HTML</abbr> support',
  },
  {
    question: 'What do you already have?',
    answer: 'Answer',
  },
  {
    question: 'Why we should trust you?',
    answer: 'Answer',
  },
  {
    question: 'How collected funds will be used?',
    answer: 'Answer',
  },
];

export const saleTimeline = [
  {
    title: 'Sale Timeline:',
    steps: [
      {
        date: '5 March',
        text: '1 ET4 = 1/1000 ETH',
        percent: '40%',
        isActive: true,
      },
      {
        date: '30 March',
        text: 'Sale',
        percent: 'ended',
        isActive: false,
      },
    ],
  },
];
