import { useState } from "react";
export default function useSizePicker() {
  const sizeList = [6, 8, 10, 14, 18, 20];
  let [size, setSize] = useState(sizeList[0]);

  const sizePickHandler = (index) => {
    setSize(sizeList[index]);
  };

  return [size, sizePickHandler, sizeList];
}
