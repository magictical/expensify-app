// this file/data is raw data for testing
import moment from 'moment';

export default [
  {
    id: 1,
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  },
  {
    id: 2,
    description: 'Rent',
    note: '',
    amount: 109500,
    // moment(0) 0일날 부터 1일후
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: 3,
    description: 'Creadit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
];
