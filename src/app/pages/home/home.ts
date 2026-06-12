import {Component, computed, inject} from '@angular/core';
import {TyroUiCTA, TyroUiLangService} from 'tyrolium-ui';

@Component({
  selector: 'app-home',
    imports: [
        TyroUiCTA
    ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly lang = inject(TyroUiLangService).lang;

  public APP_GAMENIUM_LINK = 'https://app.gamenium.fr'

  public features = [
    {
      icon: 'ri-newspaper-line',
      labelEn: 'Gaming News',
      label: 'Actualités JV',
      descEn: 'Stay up to date with all gaming news. Browse articles, reviews and announcements from the whole industry.',
      desc: "Restez informé de toute l'actualité jeu vidéo. Parcourez articles, tests et annonces de toute l'industrie.",
    },
    {
      icon: 'ri-stack-line',
      labelEn: 'My Collection',
      label: 'Ma Collection',
      descEn: 'Catalog your entire game library in full detail - platforms, status, ratings, notes, completion and more.',
      desc: 'Cataloguez toute votre ludothèque dans les moindres détails - plateformes, statut, notes, complétion et plus encore.',
    },
    {
      icon: 'ri-database-2-line',
      labelEn: 'Game Reference',
      label: 'Référence Jeux',
      descEn: 'Search and explore an extensive video game database: developers, genres, release dates, ratings and details.',
      desc: 'Recherchez et explorez une vaste base de données de jeux : développeurs, genres, dates de sortie, notes et détails.',
    },
  ];

  public steps = [
    {
      num: '01',
      labelEn: 'Sign in with Useritium',
      label: 'Connectez-vous avec Useritium',
      descEn: 'Use your existing Useritium account - no new registration needed.',
      desc: 'Utilisez votre compte Useritium existant - pas de nouvelle inscription nécessaire.',
    },
    {
      num: '02',
      labelEn: 'Explore the platform',
      label: 'Explorez la plateforme',
      descEn: 'Browse gaming news, search the game reference database freely.',
      desc: 'Parcourez les actualités JV, explorez la base de référence de jeux librement.',
    },
    {
      num: '03',
      labelEn: 'Build your collection',
      label: 'Construisez votre collection',
      descEn: 'Add games, customize every field and track your gaming journey in detail.',
      desc: 'Ajoutez vos jeux, personnalisez chaque champ et suivez votre parcours de joueur en détail.',
    },
  ];

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
