import style from "./Location.module.css";
import Maps from "./Map";
import { useAppDispatch } from "../../redux";
import { changeViewLocationBlock } from "../../redux";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { CSSTransition } from "react-transition-group";

export const Location: FC = (): JSX.Element => {
  console.log(style);
  const viewLocation = useSelector(
    (state: RootState): boolean => state.locationReducer.viewLocation
  );
  const dispatch = useAppDispatch();
  const handlerChangeViewBlockLocation = (e: React.MouseEvent) => {
    dispatch(changeViewLocationBlock());
  };
  return (
    <React.Fragment>
      <CSSTransition in={viewLocation} timeout={500} mountOnEnter unmountOnExit>
        <div
          onClick={(e) => handlerChangeViewBlockLocation(e)}
          className={style.backBlockLocation}
        ></div>
      </CSSTransition>

      <div className={`${style.locationFlex}`}>
        <CSSTransition
          in={viewLocation}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          classNames={{
            enterActive: style.locationBlockShow,
            exitActive: style.locationBlockNotVissible,
          }}
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
                Так как Лавка возит всё очень быстро со своих собственных
                складов, ассортимент в вашем районе может отличаться.
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
        </CSSTransition>
      </div>
    </React.Fragment>
  );
};
