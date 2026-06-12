import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITyroUiNavbarPages, TyroUiFooter, TyroUiNavbar, TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TyroUiNavbar, TyroUiFooter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly langService = inject(TyroUiLangService);

  public PROJECT_NAME = 'Gamenium';
  public PROJECT_LOGO = 'assets/tyrolium-ui/projects/Gamenium.png';

  public PROJECT_CONTENT = computed(() =>
    this.langService.lang() === 'en'
      ? `<strong>Gamenium</strong> is a <strong>free SaaS</strong> by Tyrolium for gamers: browse gaming news, manage your collection in detail, and explore a comprehensive game reference database. Sign in with your <em>Useritium</em> account.`
      : `<strong>Gamenium</strong> est un <strong>SaaS gratuit</strong> pour les joueurs : consultez les actualités JV, gérez votre collection dans le moindre détail et explorez une base de référence complète de jeux vidéo. Une filiale de <em>Tyrolium</em>.`
  );

  public pages = computed<ITyroUiNavbarPages[]>(() =>
    this.langService.lang() === 'en'
      ? [
          { label: 'Features',        ancre: 'features',  icon: 'ri-gamepad-line' },
          { label: 'News',            ancre: 'news',       icon: 'ri-newspaper-line' },
          { label: 'Collection',      ancre: 'collection', icon: 'ri-stack-line' },
          { label: 'Reference',       ancre: 'reference',  icon: 'ri-database-2-line' },
          { label: 'Access Gamenium', href: 'https://app.gamenium.fr', icon: 'ri-rocket-line' },
        ]
      : [
          { label: 'Fonctionnalités',    ancre: 'features',  icon: 'ri-gamepad-line' },
          { label: 'Actualités',         ancre: 'news',       icon: 'ri-newspaper-line' },
          { label: 'Collection',         ancre: 'collection', icon: 'ri-stack-line' },
          { label: 'Référence',          ancre: 'reference',  icon: 'ri-database-2-line' },
          { label: 'Accéder à Gamenium', href: 'https://app.gamenium.fr', icon: 'ri-rocket-line' },
        ]
  );

    public socials: ITyroUiNavbarPages[] = [
        { label: 'instagram', link: 'https://www.instagram.com/gamenium/', icon: 'ri-instagram-line' },
        { label: 'youtube',   link: 'https://www.youtube.com/channel/UCOGbXX9AOJR-dhuvqFufDIQ/',               icon: 'ri-youtube-fill' },
        { label: 'linkedin',  link: 'https://www.linkedin.com/company/gamenium',      icon: 'ri-linkedin-fill' },
        { label: 'tiktok',    link: 'https://www.tiktok.com/@gamenium',                icon: 'ri-tiktok-fill' },
        { label: 'twitch',    link: 'https://www.twitch.tv/gamenium_off',                  icon: 'ri-twitch-fill' },
    ];
}
