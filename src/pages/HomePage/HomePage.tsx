import React, { FC } from "react";
import {
  CatalogMenu,
  Header,
  Location,
  MainBlockCatalog,
} from "../../components";
import style from "./HomePage.module.css";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
  offViewDropCatalog,
  offViewDropCart,
} from "../../redux";

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const viewDropCatalog = useAppSelector(
    (state: RootState): boolean => state.catalogReducer.viewDropCatalog
  );
  const viewDropCart = useAppSelector(
    (state: RootState): boolean => state.cartReducer.viewDropCart
  );

  const handlerOffViewDropCatalog = (e: React.MouseEvent) => {
    dispatch(offViewDropCatalog());
    dispatch(offViewDropCart());
  };
  return (
    <div className={style.homePage}>
      <Location />
      {viewDropCatalog || viewDropCart ? (
        <div
          onMouseEnter={(e) => handlerOffViewDropCatalog(e)}
          className={style.backDropDiv}
        ></div>
      ) : null}
      <Header />
      <div className={style.containerCatalog}>
        <CatalogMenu></CatalogMenu>
        <MainBlockCatalog></MainBlockCatalog>
      </div>
    </div>
  );
};

export default HomePage;
