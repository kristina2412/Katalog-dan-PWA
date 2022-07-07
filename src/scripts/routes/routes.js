import Catalogue from '../views/pages/list';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Catalogue,
  '/catalogue': Catalogue,
  '/detail/:id': Detail,
  '/favorite': Like,
};

export default routes;
