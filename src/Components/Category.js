import { NavLink } from 'react-router-dom';
import Category1 from '../Assets/Images/Category1.JPG';
import Category2 from '../Assets/Images/Category2.JPG';
import Category3 from '../Assets/Images/Category3.JPG';
import '../Assets/css/CategoriesList.css'

const categoriesArray = [
    {
        name: 'Landscapes',
        image: Category1,
        description: 'Look through different high-quality lanscape pictures both from professionals as well as amateur photographers.',
        categoryId: '1'
    },
    {
        name: 'Flowers',
        image: Category2,
        description: 'Find a perfect flower picture for your home interior to lighten up the room or serve as a perfect gift for someone you love.',
        categoryId: '2'
    },
    {
        name: 'Cats',
        image: Category3,
        description: 'For all you cat lovers out there - browse through these amazing, funny and sometimes even awkward pictures of cats. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis ad dolorum id laborum, harum non et quisquam. Optio odit labore autem, dicta corporis consequatur cupiditate similique fugit consequuntur facere eveniet!',
        categoryId: '3'
    },
]

function Category() {

    // const categoryToShow = categoriesArray.filter(category => category.categoryId === "1");

    return (
        <div className="row">
            <h2 className='mb-3'>At some point this will work as it should</h2>
            {categoriesArray.map((category) => {
                return (
                    <div className="row">
                        <div className="card">
                            <div className="row g-0">
                                <div className="col-md-4 justify-content-center align-self-center px-1 pb-3">
                                    <NavLink to="/categories/category/product" className="nav-link">
                                        <img src={category.image} className="img-fluid rounded" alt="..." />
                                    </NavLink>
                                </div>
                                <div className="col-md-8 ">
                                    <h5 className="card-title ps-3">{category.name}</h5>
                                    <div className="card-text ps-3">
                                        <p >{category.description} </p>
                                        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, possimus. Reiciendis, placeat aliquid, velit nulla culpa voluptatibus nisi eum facilis corporis officiis, aperiam eligendi corrupti magni tempore deserunt ad! Reprehenderit. </p>
                                        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, possimus. Reiciendis, placeat aliquid, velit nulla culpa voluptatibus nisi eum facilis corporis officiis, aperiam eligendi corrupti magni tempore deserunt ad! Reprehenderit. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>)
            })}
        </div>
    )
}

export default Category;