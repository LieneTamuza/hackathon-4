import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartPage from './Components/CartPage';
import CategoriesPage from './Components/CategoriesPage';
import Footer from './Components/Footer';
import Header from "./Components/Header";
import LandingPage from './Components/LandingPage';


function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <LandingPage />
                    </Route>
                    <Route exact path='/categories'>
                        <CategoriesPage />
                    </Route>
                    <Route exact path='/cart'>
                        <CartPage />
                    </Route>
                    </Switch>
                    <Footer />
            </Router>
        </div>
            );
}

            export default App;