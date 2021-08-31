import { publishers } from '../components/data/publishers';

export const getHeroesByPublisher = (heroes, publisher = '') => {
  const validPublishers = publishers[publisher] || [];

  if (!Object.keys(publishers).includes(publisher)) {
    console.error(`Publisher "${publisher}" no es válido`);
  }
  return heroes.filter((hero) => validPublishers.includes(hero.publisher));
};
