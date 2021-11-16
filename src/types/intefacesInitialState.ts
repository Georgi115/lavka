import { ICategory } from ".";

export interface ICartState {
  viewDropCart: boolean;
}

export interface ICatalogState {
  categorys: ICategory[];
  viewDropCatalog: boolean;
}

export interface ILocationState {
  viewLocation: boolean;
}
