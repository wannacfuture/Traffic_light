import React from "react";

import "./index.css";

export interface LightProps {
  colorMode: number;
  isActive: boolean;
}

export const Light: React.FC<LightProps> = ({ colorMode, isActive }) => {
  const activeNum = isActive === true ? 1 : 0;
  const colors = [
    "#ff000050",
    "#ffff0050",
    "#00800050",
    "#ff0000",
    "#ffff00",
    "#008000",
  ];
  const backColor = colors[colorMode + activeNum * 3];

  return <div className="light" style={{ backgroundColor: backColor }}></div>;
};
