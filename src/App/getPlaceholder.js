import { getMonth } from 'date-fns';

const getPlaceholder = () => {
  const currentDate = new Date();
  const currentMonth = getMonth(currentDate);
  if (currentMonth === 11) {
    return 'christmas, New year eve, snow...';
  }
  if (currentMonth > 5 && currentMonth < 9) {
    return 'summer, party, pool, sea...';
  }
  if (currentMonth > 1 && currentMonth < 6) {
    return 'spring, flowers, picnic...';
  }
  if (currentMonth > 8 && currentMonth < 11) {
    return 'autumn, leafs, halloween, costume...';
  }
  return 'winter, cold, snow...';
};

export default getPlaceholder;
