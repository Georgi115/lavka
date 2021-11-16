import { FC } from "react";
import style from "./CatalogMenu.module.css";
import { useAppDispatch, changeActiveCategory } from "../../redux";
import { ICategory } from "../../types/Category";

interface ICatalogItem {
  el: ICategory;
  image: any;
  name: string;
  id: number;
  typeComponent: string;
}

const CatalogMenuItem: FC<ICatalogItem> = ({
  el,
  name,
  image,
  typeComponent,
  id,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const clickItemCatalog = (e: React.MouseEvent<HTMLLIElement>) => {
    dispatch(changeActiveCategory({ id, typeComponent }));
  };
  const type = typeComponent === "dropActive" ? "dropActive" : "active";
  return (
    <li onClick={(e) => clickItemCatalog(e)} className={style.catalogItem}>
      <div className={style.catalogItemInfo}>
        <img className={style.catalogImg} src={image} alt="img" />
        <p>{name}</p>
      </div>
      <i
        className={
          el[type]
            ? `fa fa-angle-right fa-lg ${style.categoryIcon} ${style.categoryIconActive}`
            : `fa fa-angle-right fa-lg ${style.categoryIcon}`
        }
      ></i>
    </li>
  );
};

export default CatalogMenuItem;
