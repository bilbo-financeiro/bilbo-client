import { PagesMenu } from './side-menu.models';

export const PAGES_MENU: PagesMenu = {
  expanded: true,
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
      children: [
        {
          path: 'tv',
          data: {
            title: 'Monitoramento',
            icon: 'ion-arrow-graph-up-right',
            selected: false,
            expanded: false,
          }
        }
      ]
    }
  ]
};
