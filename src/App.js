import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from "./Components/Header";

function App() {
    return (
        <div>
            <Router>
                <Header />
                


                <Footer />
            </Router>
        </div>
    );
}

export default App;