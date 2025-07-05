import { useState } from "react";

export default function useColorPicker() {
  const colorList = [
    ["antiquewhite", "Antique White"],
    ["cadetblue", "Cadet Blue"],
    ["darkgrey", "Dark Grey"],
    ["lightgreen", "Light Green"],
  ];

  let [color, setColor] = useState(colorList[0][1]);

  const colorPickHandler = (index, id) => {
    setColor(colorList[index][1]);

    colorList.forEach(([hex]) => {
      const el = document.getElementById(hex);
      if (el) {
        el.style.transform = "scale(1)";
      }
    });

    const selected = document.getElementById(id);
    if (selected) {
      selected.style.transform = "scale(0.85)";
    }
  };

  return [color, colorPickHandler, colorList];
}
