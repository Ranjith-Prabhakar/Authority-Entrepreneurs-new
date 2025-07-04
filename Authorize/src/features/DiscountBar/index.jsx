import { useEffect, useRef, useState } from "react";
import "./discountBar.css";

export default function DiscountBar() {
  const timeRef = useRef();
  const [minute, setMinute] = useState(20);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    timeRef.current = setInterval(() => {
      setSecond((prevSecond) => {
        if (prevSecond === 0) {
          setMinute((prevMinute) => {
            if (prevMinute === 0) {
              clearInterval(timeRef.current);
              return 0;
            }
            return prevMinute - 1;
          });
          return 59;
        }
        return prevSecond - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timeRef.current);
    };
  }, []);

  return (
    <div className="discount-bar">
      <h5>New season coming! Discount 10% for all product! Checkout Now!</h5>
      <div className="timer">
        <h5>
          {String(minute).padStart(2, "0")} : {String(second).padStart(2, "0")}
        </h5>
      </div>
    </div>
  );
}
