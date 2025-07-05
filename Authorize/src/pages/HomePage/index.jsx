/* eslint-disable react-refresh/only-export-components */
import Card from "../../components/ui/CardGeneral";
import FilterBar from "../../features/FilterBar";
import Hero from "../../features/Hero";
import { useGetProducts } from "../../hooks/getProducts";
import "./homePage.css";
import SortBar from "../../features/SortBar";
import Pagination from "../../components/ui/Pagination";
import { useSetPagination } from "../../hooks/setPagination";
import { useProductPageNavigation } from "../../hooks/setProductPageNavigation";
import NavigationTracker from "../../components/ui/NavigationTracker";
export default function () {
  let products = useGetProducts();
  let [paginationHandler, totalPage, currentTab] = useSetPagination();
  const productPageNavigationHandler = useProductPageNavigation();
  return (
    <>
      <Hero />
      <main className="home-page-main">
        <div className="navigation-tracker-wrapper">
          <NavigationTracker navigation={["Home"]} />
        </div>
        <div className="home-page-content-wrapper">
          <div className="home-page-content-wrapper-left-section">
            <FilterBar />
          </div>
          <div className="home-page-content-wrapper-right-section">
            <SortBar />
            <div className="card-wrapper">
              {products ? (
                products.map((product) => (
                  <div
                    key={product.title}
                    className="card"
                    onClick={() => productPageNavigationHandler(product)}
                  >
                    <Card
                      id={product.id}
                      image={product.image}
                      title={product.category}
                      description={product.description}
                      price={product.price}
                      rating={product.rating}
                    />
                  </div>
                ))
              ) : (
                <h1>No Products Found For This Query!..</h1>
              )}
            </div>
          </div>
        </div>
        <div className="pagination-wrapper">
          <Pagination
            paginationHandler={paginationHandler}
            buttonCount={totalPage}
            currentTab={currentTab}
          />
        </div>
      </main>
    </>
  );
}
