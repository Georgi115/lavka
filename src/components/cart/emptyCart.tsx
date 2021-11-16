import { FC } from "react";
import { emptyCart } from "../../images";
import style from "./Cart.module.css";

export const EmptyCart: FC = (): JSX.Element => {
  return (
    <div className={style.emptyCart}>
      <img className={style.imgEmptyCart} src={emptyCart} alt="emptyCart"></img>
      <p className={style.emptyCartTitle}>В вашей корзине пока пусто</p>
      <p className={style.emptyCartText}>
        Тут появятся заказы, которые вы закажете
      </p>
    </div>
  );
};
