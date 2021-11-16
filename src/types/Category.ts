export interface ICategory {
  [index: string]: any;
  category: string;
  subcategories: ISubcategorys[];
  active: boolean;
  dropActive: boolean;
  image?: any;
}

interface ISubcategorys {
  name: string;
  image?: any;
}
