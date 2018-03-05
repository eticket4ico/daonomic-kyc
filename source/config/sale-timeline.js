// @flow
export type TimelineStep = {
  date: string,
  text: string,
  percent: string,
  isActive: boolean,
};

export default [
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
];
