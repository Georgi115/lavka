import { FC } from "react";
import style from "./CatalogMenu.module.css";
import { CatalogMenu } from "./CatalogMenu";
export const DropCatalog: FC = (): JSX.Element => {
  return (
    <div className={`${style.dropBlock}`}>
      <div className={`${style.dropCatalog}`}>
        <CatalogMenu component={"Drop"} />
      </div>
    </div>
  );
};
