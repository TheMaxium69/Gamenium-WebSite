import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { tyroUiErrorRoutes, TyroUiSeo, tyroUiLocalizedRoutes } from 'tyrolium-ui';

/* ─── SEO (titre + description par page, FR / EN) ─────────────────────── */

const SEO_HOME: TyroUiSeo = {
  fullTitle:   { fr: 'Gamenium - Actualités JV, Collection & Base de Jeux Vidéo', en: 'Gamenium - Gaming News, Collection & Video Game Database' },
  description: { fr: 'Gamenium est un SaaS gratuit pour les joueurs : consultez les actualités JV, gérez votre collection dans le moindre détail et explorez une base de référence complète de jeux vidéo. Une filiale de Tyrolium.', en: 'Gamenium is a free SaaS for gamers: read gaming news, manage your collection down to the last detail and explore a complete reference database of video games. A Tyrolium subsidiary.' },
};

export const routes: Routes = tyroUiLocalizedRoutes([
  { path: '',    component: Home, data: { seo: SEO_HOME } },
  ...tyroUiErrorRoutes(),
]);
