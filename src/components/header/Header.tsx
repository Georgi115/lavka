import React, { FC } from "react";
import style from "./Header.module.css";
import { logo, plus } from "../../images";
import {
  useAppDispatch,
  onViewDropCatalog,
  changeViewLocationBlock,
  useAppSelector,
  RootState,
  onViewDropCart,
} from "../../redux";
import { DropCatalog, DropCart } from "..";

export const Header: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const viewDropCatalog = useAppSelector(
    (state: RootState): boolean => state.catalogReducer.viewDropCatalog
  );
  const viewDropCart = useAppSelector(
    (state: RootState): boolean => state.cartReducer.viewDropCart
  );
  const handlerOnViewDropCatalog = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(onViewDropCatalog());
  };
  const handlerOnViewDropCart = (e: React.MouseEvent) => {
    dispatch(onViewDropCart());
  };
  const handlerViewLocation = (e: React.MouseEvent) => {
    dispatch(changeViewLocationBlock());
  };
  return (
    <header className={style.header}>
      <div
        style={{ backgroundImage: `url(${logo})` }}
        className={style.logo}
      ></div>
      <div
        onMouseEnter={(e) => handlerOnViewDropCatalog(e)}
        className={style.headerBtnCatalog}
      >
        <i className={`fa fa-navicon fa-lg ${style.fanavicon}`}></i>
        {viewDropCatalog ? <DropCatalog /> : null}
      </div>
      <div className={style.headerInput}>
        <input placeholder="Найти в Лавке"></input>
        <i className={`fa fa-search ${style.faSearch} fa-lg`}></i>
      </div>
      <div
        onClick={(e) => handlerViewLocation(e)}
        className={style.headerLocation}
      >
        <div className={style.headerLocationInfo}>
          <i className="fa fa-location-arrow fa-lg"></i>
          <p>Москва</p>
        </div>
        <i className="fa fa-angle-right fa-lg"></i>
      </div>
      <div className={style.headerTime}>
        <p>10-20 мин</p>
        <div className={style.headerInfo}>
          <p>Доставка 0₽ Заказ от 100₽</p>
          <div className={style.circleInfo}>i</div>
        </div>
      </div>
      <div
        onMouseEnter={(e) => handlerOnViewDropCart(e)}
        className={style.headerCart}
      >
        {viewDropCart ? <DropCart /> : null}

        <i className="fa fa-shopping-basket fa-lg"></i>
        <p>Корзина</p>
      </div>
      <div
        style={{ backgroundImage: `url(${plus})` }}
        className={style.headerPlus}
      ></div>
      <div className={style.headerLogIn}>
        <p>Войти</p>
      </div>
    </header>
  );
};
