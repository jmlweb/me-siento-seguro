import { getMonth } from 'date-fns';

export const PLACEHOLDERS = {
  CHRISTMAS: 'christmas, New year eve, snow...',
  SUMMER: 'summer, party, pool, sea...',
  SPRING: 'spring, flowers, picnic...',
  AUTUMN: 'autumn, leafs, halloween, costume...',
  WINTER: 'winter, cold, snow...',
};

const getPlaceholder = (currentDate) => {
  const currentMonth = getMonth(currentDate);
  if (currentMonth === 11) {
    return PLACEHOLDERS.CHRISTMAS;
  }
  if (currentMonth > 5 && currentMonth < 9) {
    return PLACEHOLDERS.SUMMER;
  }
  if (currentMonth > 1 && currentMonth < 6) {
    return PLACEHOLDERS.SPRING;
  }
  if (currentMonth > 8 && currentMonth < 11) {
    return PLACEHOLDERS.AUTUMN;
  }
  return PLACEHOLDERS.WINTER;
};

export default getPlaceholder;
