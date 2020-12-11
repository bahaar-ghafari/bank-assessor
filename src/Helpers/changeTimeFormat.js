import moment from 'moment-jalaali';

export const getDate = (date) => {
  return moment(date).locale('fa').format('LL');
};
