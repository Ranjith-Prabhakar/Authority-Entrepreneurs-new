import { useState } from "react";
export default function useColorPicker() {
  const colorList = [
    ["antiquewhite", "Antique White"],
    ["cadetblue", "Cadet Blue"],
    ["darkgrey", "Dark Grey"],
    ["lightgreen", "Light Green"],
  ];
  let [color, setColor] = useState(colorList[0][1]);

  const colorPickHandler = (index) => {
    setColor(colorList[index][1]);
  };

  return [color, colorPickHandler, colorList];
}
