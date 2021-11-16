import { FC } from "react";
import { EmptyCart } from ".";
import style from "./Cart.module.css";

export const DropCart: FC = (): JSX.Element => {
  return (
    <div className={style.dropCartBlock}>
      <div className={style.dropCart}>
        <EmptyCart />
      </div>
    </div>
  );
};
