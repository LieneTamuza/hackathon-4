import { NavLink } from 'react-router-dom';
import Category1 from '../Assets/Images/Category1.JPG';
import Category2 from '../Assets/Images/Category2.JPG';
import Category3 from '../Assets/Images/Category3.JPG';
import '../Assets/css/Categories.css';

const categoriesArray = [
    {
        name: 'Landscapes',
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
        description: 'For all you cat lovers out there - browse through these amazing, funny and sometimes even awkwared pictures of cats.'
    },
]

function Categories() {

    return (
        <div className="row mt-3">
            <h3 className='py-2'>Cateogries</h3>
            {categoriesArray.map((category) => {
                return (
                    <div className="col mb-5">
                        <div className="card">
                            <div className="row g-0">
                                <NavLink className='categories-link' to='/'><h5 className="card-title text-center pt-2">{category.name}</h5></NavLink>
                                <hr />
                                <div className="col-md-4 justify-content-center align-self-center px-1 pb-3">
                                    <img src={category.image} className="img-fluid rounded" alt="..." />
                                </div>
                                <div className="col-md-8 justify-content-center align-self-center">
                                    <div className="card-text px-2">
                                        <p >{category.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
            })}
            {/* <div className="col mb-5">
                <div className="card">
                    <div className="row g-0">
                    <NavLink className='categories-link' to='/'><h5 className="card-title text-center pt-2">Landscapes</h5></NavLink>
                    <hr />
                        <div className="col-md-4 justify-content-center align-self-center px-1 pb-3">
                            <img src={Category1} className="img-fluid rounded" alt="..." />
                        </div>
                        <div className="col-md-8 justify-content-center align-self-center">
                            <div className="card-text px-2">
                                <p >Look through different high-quality lanscape pictures both from professionals as well as amateur photographers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col mb-5">
                <div className="card">
                    <div className="row g-0">
                    <NavLink className='categories-link' to='/'><h5 className="card-title text-center pt-2">Flowers</h5></NavLink>
                    <hr />
                        <div className="col-md-4 justify-content-center align-self-center px-1 pb-3">
                            <img src={Category2} className="img-fluid rounded" alt="..." />
                        </div>
                        <div className="col-md-8 justify-content-center align-self-center">
                            <div className="card-text px-2">
                                <p >Find a perfect flower picture for your home interior to lighten up the room or serve as a perfect gift for someone you love.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col mb-5">
                <div className="card">
                    <div className="row g-0">
                    <NavLink className='categories-link' to='/'><h5 className="card-title text-center pt-2">Cats</h5></NavLink>
                    <hr />
                        <div className="col-md-4 justify-content-center align-self-center px-1 pb-3">
                            <img src={Category3} className="img-fluid rounded" alt="..." />
                        </div>
                        <div className="col-md-8 justify-content-center align-self-center">
                            <div className="card-text px-2">
                                <p >For all you cat lovers out there - browse through these amazing, funny and sometimes even awkwared pictures of cats.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
};

export default Categories;