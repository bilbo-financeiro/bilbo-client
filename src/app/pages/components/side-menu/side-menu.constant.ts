import { PagesMenu } from './side-menu.models';

export const PAGES_MENU: PagesMenu = {
  expanded: true,
  showFavoriteList: false,
  menuList: [
    {
      path: 'overview',
      data: {
        title: 'Overview',
        icon: 'ion-person',
        selected: false,
        expanded: false,
      },
      children: null
    },
    {
      path: 'planning',
      data: {
        title: 'Planning',
        icon: 'ion-person',
        selected: false,
        expanded: false,
      },
      children: null
    },
    {
      path: 'projects',
      data: {
        title: 'Projetos',
        icon: 'ion-person',
        selected: false,
        expanded: false,
      },
      children: {
        expanded: false,
        data: [
          {
            path: 'tv',
            expanded: false,
            data: {
              title: 'Monitoramento',
              icon: 'ion-arrow-graph-up-right',
              selected: false,
              expanded: false,
            }
          }
        ]
      }
    },
    {
      path: 'goals',
      data: {
        title: 'Metas',
        icon: 'ion-person',
        selected: false,
        expanded: false,
      },
      children: {
        expanded: false,
        data: [
          {
            path: 'tv',
            expanded: false,
            data: {
              title: 'Monitoramento',
              icon: 'ion-arrow-graph-up-right',
              selected: false,
              expanded: false,
            }
          }
        ]
      }
    }
  ],
  favoriteList: [
    {
      path: 'overview',
      data: {
        title: 'Overview',
        icon: 'ion-person',
        selected: false,
        expanded: false,
      },
      children: null
    },
    {
      path: 'goals',
      data: {
        title: 'Metas',
        icon: 'ion-person',
        selected: false,
        expanded: false,
      },
      children: {
        expanded: false,
        data: [
          {
            path: 'tv',
            expanded: false,
            data: {
              title: 'Monitoramento',
              icon: 'ion-arrow-graph-up-right',
              selected: false,
              expanded: false,
            }
          }
        ]
      }
    }
  ]
};
