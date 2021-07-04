import { useParams } from 'react-router-dom';
import Category from "../Components/Category";
import ProductList from "../Components/ProductList";

function CategoryPage() {
    const { categoryId } = useParams();

    return (
        <div className="container">
            <div className="row">
                <Category />
            </div>
            <div className="row">
                <ProductList />
            </div>
        </div>
    )
}

export default CategoryPage;