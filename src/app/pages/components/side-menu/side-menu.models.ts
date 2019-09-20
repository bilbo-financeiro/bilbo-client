export interface PagesMenu {
  expanded: boolean;
  showFavoriteList: boolean;
  menuList: Menu[];
  favoriteList?: Menu[];
}

export interface Menu {
  path: string;
  data: PagesItem;
  children: ChildrenMenu;
}

export interface ChildrenMenu {
  expanded: boolean;
  data: ChildrenMenuData[] | null;
}

export interface ChildrenMenuData {
  path: string;
  expanded: boolean;
  data: PagesItem;
}

export interface PagesItem {
  title: string;
  icon: string;
  selected: boolean;
  expanded: boolean;
}
