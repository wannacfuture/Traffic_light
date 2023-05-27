import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import { Light } from "./Light";

export interface TrafficLightProps {
  whichIsActive: number;
}

const TrafficLight: React.FC<TrafficLightProps> = ({ whichIsActive }) => {
  const [activeNumber, setActiveNumber] = useState<number>(whichIsActive);
  const [totalCount, setTotalCount] = useState(0);
  const interv = () => {
    setTotalCount((a) => a + 1);
  };

  useEffect(() => {
    const myinterval = setInterval(interv, 1000);
    return () => {
      clearInterval(myinterval);
    };
  }, []);

  useEffect(() => {
    if (
      totalCount % 7 === 1 ||
      totalCount % 7 === 3 ||
      (totalCount % 7 === 0 && totalCount > 0)
    )
      setActiveNumber((a) => a + 1);
  }, [totalCount]);

  return (
    <>
      <div className="traffic-light-container">
        <Light colorMode={0} isActive={activeNumber % 3 === 0} />
        <Light colorMode={1} isActive={activeNumber % 3 === 1} />
        <Light colorMode={2} isActive={activeNumber % 3 === 2} />
      </div>
    </>
  );
};

export default TrafficLight;
