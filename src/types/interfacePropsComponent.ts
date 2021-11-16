import React from "react";

export interface IPropsTransitionComponent {
  addiction: boolean;
  handler: (e: React.MouseEvent) => void;
  enter: string;
  exit: string;
}
