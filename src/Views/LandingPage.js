import Categories from '../Components/Categories';
import Slider from '../Components/Slider';

function LandingPage() {


    return(
        <div className="container">
            <div className="row my-3 justify-content-center">
                <Slider />
                <Categories />
            </div>
        </div>
    )
}

export default LandingPage;