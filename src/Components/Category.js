import { NavLink } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import '../Assets/css/CategoriesList.css'
import Breadcrumb from './Breadcrumb';
import categoriesArray from '../Data/Categories';



// let categoryToShow = [];

function Category() {
    const { categoryId } = useParams();

    const filteredCategories = categoriesArray.filter((category) => category.categoryId == categoryId);
    const category = filteredCategories[0];
    console.log(category)
    const breadcrumbPaths = [
        { link: '/', label: "Home" },
        { link: '/categories/', label: "Categories" },
        { label: category.name },
    ];


    const categoryCard =
            <div className="row">
                <div className="col-md-4 justify-content-center align-self-center px-1 pb-3">
                    <NavLink to={`/categories/` + category.categoryId}>
                        <img className="img-fluid" src={category.image} />
                    </NavLink>
                </div>
                <div className="col-md-8 ">
                    <h5 className="card-title ps-3">
                        {category.name}
                    </h5>
                    <div className="card-text ps-3">
                        <p >{category.description} </p>
                        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, possimus. Reiciendis, placeat aliquid, velit nulla culpa voluptatibus nisi eum facilis corporis officiis, aperiam eligendi corrupti magni tempore deserunt ad! Reprehenderit. </p>
                        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, possimus. Reiciendis, placeat aliquid, velit nulla culpa voluptatibus nisi eum facilis corporis officiis, aperiam eligendi corrupti magni tempore deserunt ad! Reprehenderit. </p>
                    </div>
                </div>
            </div>
    // const { categoryId } = useParams();
    // let location = useLocation();
    // console.log(location)

    // if (location.pathname === "/categories/Landscapes") {
    //     categoryToShow = categoriesArray.filter(category => category.categoryId === "Landscapes")
    // } else if (location.pathname === "/categories/Flowers") {
    //     categoryToShow = categoriesArray.filter(category => category.categoryId === "Flowers")
    // } else {
    //     categoryToShow = categoriesArray.filter(category => category.categoryId === "Cats")
    // }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb paths={breadcrumbPaths} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {categoryCard}
                </div>
            </div>
        </div>
    )
}

export default Category;