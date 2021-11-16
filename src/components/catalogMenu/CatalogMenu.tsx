import React, { FC } from "react";
import style from "./CatalogMenu.module.css";
import CatalogMenuItem from "./CatalogMenuItem";
import { RootState, useAppSelector } from "../../redux";
import { ICategory } from "../../types/Category";

interface ICatalog {
  component?: string;
}
export const CatalogMenu: FC<ICatalog> = ({ component }) => {
  const category = useAppSelector(
    (state: RootState): ICategory[] => state.catalogReducer.categorys
  );
  return (
    <div className={style.catalog}>
      <p className={style.catalogTitle}>Каталог</p>
      <ul className={style.catalogList}>
        {category.map((el, id) => {
          const typeComponent = component ? "dropActive" : "active";
          return (
            <React.Fragment key={id}>
              <CatalogMenuItem
                el={el}
                name={el.category}
                id={id}
                image={el.image}
                typeComponent={typeComponent}
              />
              <div
                key={el.category}
                className={
                  el[typeComponent]
                    ? `${style.itemSubActive} ${style.itemSub}`
                    : style.itemSub
                }
              >
                {el.subcategories.map((elem, id) => (
                  <p className={style.itemSubText} key={id}>
                    {elem.name}
                  </p>
                ))}
              </div>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};
