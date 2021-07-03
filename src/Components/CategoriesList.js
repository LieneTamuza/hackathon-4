import Category1 from '../Assets/Images/Category1.JPG';
import Category2 from '../Assets/Images/Category2.JPG';
import Category3 from '../Assets/Images/Category3.JPG';
import '../Assets/css/CategoriesList.css'
import { NavLink } from 'react-router-dom';


function CategoriesList() {

    const categoriesArray = [
        {
            name: 'Lanscapes',
            image: Category1,
            description: 'Look through different high-quality lanscape pictures both from professionals as well as amateur photographers.'
        },
        {
            name: 'Flowers',
            image: Category2,
            description: 'Find a perfect flower picture for your home interior to lighten up the room or serve as a perfect gift for someone you love.'
        },
        {
            name: 'Cats',
            image: Category3,
            description: 'For all you cat lovers out there - browse through these amazing, funny and sometimes even awkwared pictures of cats. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis ad dolorum id laborum, harum non et quisquam. Optio odit labore autem, dicta corporis consequatur cupiditate similique fugit consequuntur facere eveniet!'
        },
    ]

    return (
        <div className="row">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><NavLink to='/'>Home</NavLink></li>
                    <li class="breadcrumb-item active"><NavLink to='/categories'>Categories</NavLink></li>
                </ol>
            </nav>
            <h2 className='mb-3'>Categories</h2>
            {categoriesArray.map((category) => {
                return (
                    <div className="row">
                        <div className="card">
                            <div className="row g-0">
                                <div className="col-md-4 justify-content-center align-self-center px-1 pb-3">
                                    <img src={category.image} className="img-fluid rounded" alt="..." />
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

export default CategoriesList;