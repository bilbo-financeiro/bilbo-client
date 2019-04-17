export interface PagesMenu {
  expanded: boolean;
  menuList: Menu[];
}

export interface Menu {
  path: string;
  data: PagesItem;
  children: ChildrenMenu[] | null;
}

export interface ChildrenMenu {
  path: string;
  data: PagesItem;
}

export interface PagesItem {
  title: string;
  icon: string;
  selected: boolean;
  expanded: boolean;
}
