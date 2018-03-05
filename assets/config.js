window.config = Object.assign(window.config || {}, {
  realm: '5a8d7ce7a302eb3601fdef2c',
  sale: '0xf76350f0ad6b7cfce1311ef43e2eef488fd16dad',
  common: {
    contactEmail: 'pr@et4.io',
    termsOfServiceURL: 'terms.url',
  },
  faq: [
    {
      question: 'How can I participate in the crowdsale?',
      answer:
        'You can send Ether to our Etherium address from Ethereum-based wallets (e.g. Mist, MyEtherWallet or MetaMask). Please do not use exchange-based wallets.',
    },
    {
      question: ' When do I receive my tokens?',
      answer: 'You will receive your tokens shortly after your transaction.',
    },
    {
      question: 'How do I add the token to MEW?',
      answer:
        'Please use the following parameters: 0x80238d9451F86dCf12bFF21aF9E8DeaDCf915bfF (Contract Address), 18 (Decimals), ET4 (Name).',
    },
  ],
  saleTimeline: [
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
        }
      ],
    },
  ],
});
