import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import style from "./transitionComponent.module.css";
import { IPropsTransitionComponent } from "../../types";

export const TransitionComponent: FC<IPropsTransitionComponent> = ({
  addiction,
  handler,
  enter,
  exit,
  children,
}): JSX.Element => {
  return (
    <>
      <CSSTransition in={addiction} timeout={500} mountOnEnter unmountOnExit>
        <div
          onClick={(e) => handler(e)}
          className={style.backBlockLocation}
        ></div>
      </CSSTransition>
      <CSSTransition
        in={addiction}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: enter,
          exitActive: exit,
        }}
      >
        {children}
      </CSSTransition>
    </>
  );
};
