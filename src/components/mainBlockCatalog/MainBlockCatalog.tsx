import style from "./MainBlockCatalog.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { ICategory } from "../../types/Category";
import { returnSelectorMainBlock } from "../../helpers";
import { FC } from "react";

export const MainBlockCatalog: FC = (): JSX.Element => {
  const category = useSelector(
    (state: RootState): ICategory[] => state.catalogReducer.categorys
  );

  return (
    <main className={style.mainBlockCatalog}>
      {category.map((el, id) => (
        <div key={id} className={style.mainBlockCatalogInfo}>
          <p className={style.mainBlockCatalogText}>{el.category}</p>
          <div
            className={`${style.mainBlockCatalogSubInfo} ${
              style[returnSelectorMainBlock(el.category)]
            }`}
          >
            {el.subcategories.map((sub, idx) => (
              <div
                key={idx}
                className={`${style.mainBlockCatalogSub} ${
                  style[`${returnSelectorMainBlock(el.category)}Div`]
                }`}
                style={{ backgroundImage: `url(${sub.image})` }}
              >
                {sub.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};
