import React from "react";

export interface IPropsTransitionHeaderModals {
  addiction: boolean;
  handler: (e: React.MouseEvent) => void;
  enter: string;
  exit: string;
}
