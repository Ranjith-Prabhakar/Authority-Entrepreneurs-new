import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./accordion.css";

export default function ({ head, on, setOn, children }) {
  return (
    <div className="accordion-wrapper">
      <div className="filter-category-header">
        <div className="">{head}</div>
        {on ? (
          <IoIosArrowDown
            onClick={() => {
              setOn(!on);
            }}
          />
        ) : (
          <IoIosArrowUp
            onClick={() => {
              setOn(!on);
            }}
          />
        )}
      </div>
      {on && children}
    </div>
  );
}
