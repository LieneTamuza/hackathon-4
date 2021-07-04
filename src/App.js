import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LandingPage from './Views/LandingPage';
import CategoriesPage from './Views/CategoriesPage';
import CategoryPage from './Views/CategoryPage';
import ProductPage from './Views/ProductPage';
import CartPage from './Views/CartPage';

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
                    <Route exact path='/categories/category'>
                        <CategoryPage />
                    </Route>
                    <Route exact path='/categories/category/product'>
                        <ProductPage />
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