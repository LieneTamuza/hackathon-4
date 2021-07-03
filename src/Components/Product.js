import { SRLWrapper } from "simple-react-lightbox";
import cat7 from '../Assets/Images/cats7.JPG';
import cat1 from '../Assets/Images/cats1.JPG';
import cat2 from '../Assets/Images/cats2.JPG';
import cat3 from '../Assets/Images/cats3.JPG';
import cat4 from '../Assets/Images/cats4.JPG';
import cat5 from '../Assets/Images/cats5.JPG';
import cat6 from '../Assets/Images/cats6.JPG';

function Products() {

    return (
        <div className="container mt-3">
            <h2 className="my-3">Products ...</h2>
            <div className="row mb-5">
                <div className="col-12 col-md-5">
                    <SRLWrapper>
                        <div className="row">
                            <div className="col">
                                <img src={cat7} title='cat' className="img-fluid" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <img src={cat1} title='cat1' className="img-fluid" />
                            </div>
                            <div className="col">
                                <img src={cat2} title='cat2' className="img-fluid" />
                            </div>
                            <div className="col">
                                <img src={cat3} title='cat3' className="img-fluid" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <img src={cat4} title='cat4' className="img-fluid" />
                            </div>
                            <div className="col">
                                <img src={cat5} title='cat5' className="img-fluid" />
                            </div>
                            <div className="col">
                                <img src={cat6} title='cat6' className="img-fluid" />
                            </div>
                        </div>
                    </SRLWrapper>
                </div>
                <div className="col-12 col-md-7">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quis in quam amet assumenda esse possimus eaque hic voluptatem dolores aperiam itaque reprehenderit rem blanditiis ex commodi, veritatis dolorem pariatur.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quis in quam amet assumenda esse possimus eaque hic voluptatem dolores aperiam itaque reprehenderit rem blanditiis ex commodi, veritatis dolorem pariatur.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quis in quam amet assumenda esse possimus eaque hic voluptatem dolores aperiam itaque reprehenderit rem blanditiis ex commodi, veritatis dolorem pariatur.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quis in quam amet assumenda esse possimus eaque hic voluptatem dolores aperiam itaque reprehenderit rem blanditiis ex commodi, veritatis dolorem pariatur.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quis in quam amet assumenda esse possimus eaque hic voluptatem dolores aperiam itaque reprehenderit rem blanditiis ex commodi, veritatis dolorem pariatur.</p>
                    <div className="my-3"><strong>9.99 EUR</strong></div>
                    <button className="btn btn-dark btn-lg" onClick={()=>{ alert('Added to cart!'); }}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Products;