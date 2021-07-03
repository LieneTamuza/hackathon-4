import Slider1 from '../Assets/Images/Slider1.JPG';
import Slider2 from '../Assets/Images/Slider2.JPG';
import Slider3 from '../Assets/Images/Slider3.JPG';
import  '../Assets/css/Slider.css';

function Slider() {

    return (

        <div>
            <div id="carouselCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Slider1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Landscape pictures from Nature Lovers</h5>
                            <p>We offer a wide varaity of high quality pictures taken by professionals or just pure nature lovers tat heart! </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Slider2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Marvelous close-ups of different flowers for Nature Lovers</h5>
                            <p>In our Flowers section you can find a flower for every heart and eye.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img src={Slider3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Amazing pictures of cats for Cat Lovers</h5>
                            <p>For all you cat lower out there, check out our section of adorable, funny cat pictures!</p>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slider;