import style from "./Location.module.css";
import Maps from "./Map";
import {
  useAppDispatch,
  changeViewLocationBlock,
  RootState,
  useAppSelector,
} from "../../redux";
import { TransitionHeaderModals } from "..";
import React, { FC } from "react";

export const Location: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const viewLocation = useAppSelector(
    (state: RootState): boolean => state.locationReducer.viewLocation
  );

  const handlerChangeViewBlockLocation = (e: React.MouseEvent) => {
    dispatch(changeViewLocationBlock());
  };
  return (
    <div className={`${style.locationFlex}`}>
      <TransitionHeaderModals
        addiction={viewLocation}
        handler={handlerChangeViewBlockLocation}
        enter={style.locationBlockShow}
        exit={style.locationBlockNotVissible}
      >
        <div className={`${style.locationBlock}`}>
          <div className={style.locationInfo}>
            <div className={style.locationInfoBlock}>
              <p className={style.locationTitle}>Укажите ваш адрес</p>
              <i
                onClick={(e) => {
                  handlerChangeViewBlockLocation(e);
                }}
                className="fa fa-close fa-lg"
              ></i>
            </div>

            <p className={style.loacationInfo}>
              Так как Лавка возит всё очень быстро со своих собственных складов,
              ассортимент в вашем районе может отличаться.
            </p>
          </div>
          <div className={style.locationBlockInput}>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                className={`${style.locationSearchIcon} fa fa-search fa-lg`}
              ></i>
              <input className={style.locationInput}></input>
              <i
                className={`${style.locationCloseInput} fa fa-close fa-lg`}
              ></i>
            </div>
            <button className={style.locationInputBtn}>Ок</button>
          </div>
          <div className={style.locationMap}>
            <Maps></Maps>
          </div>
        </div>
      </TransitionHeaderModals>
    </div>
  );
};
