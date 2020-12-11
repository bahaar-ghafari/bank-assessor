import moment from 'jalali-moment';

export const getDate = (date) => {
  return moment(date).locale('fa').format('LL');
};
