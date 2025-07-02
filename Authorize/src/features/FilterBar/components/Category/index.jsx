import "./category.css";
import SearchBar from "./SearchBar";
import CategoryList from "./CategoryList";
import Accordion from "../../../../components/ui/Accordion";
import { useEffect, useState } from "react";
import useGetCategories from "../../../../hooks/getCategories";
import { useSetFilter } from "../../../../hooks/setFilter";

export default function () {
  const [on, setOn] = useState(true);
  const categories = useGetCategories();
  const [selected, setSelected] = useState([]);
  const setFilter = useSetFilter();

  useEffect(() => {
    setFilter({ prop: "category", data: selected });
  }, [selected]);

  function handleToggleCategory(categoryKey) {
    if (selected.includes(categoryKey)) {
      setSelected(selected.filter((item) => item !== categoryKey));
    } else {
      setSelected([...selected, categoryKey]);
    }
  }

  return (
    <div className="filter-category-wrapper">
      <Accordion head="Category" on={on} setOn={setOn}>
        <SearchBar />
        <div className="category-list-wrapper">
          {categories &&
            categories.map((category, index) => (
              <CategoryList
                key={category[0]}
                onClick={() => handleToggleCategory(category[0])}
                status={selected.includes(category[0])}
                category={category}
              />
            ))}
        </div>
      </Accordion>
    </div>
  );
}
