import CategoriesList from "../Components/CategoriesList";
import ProductList from "../Components/ProductList";

function CategoryPage() {

    return (
        <div className="container">
            <div className="row">
                <CategoriesList />
            </div>
            <div className="row">
                <ProductList />
            </div>
        </div>
    )
}

export default CategoryPage;