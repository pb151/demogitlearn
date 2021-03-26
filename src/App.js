// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch , Link } from "react-router-dom";

import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';

import Departmentpage from './pages/Departmentpage';
import Servicepage from './pages/Servicepage';
import Doctorpage from './pages/Doctorpage';
import Topbar from './component/Topbar';
import Header from './component/Header';
import Footer from './component/Footer';
import history from './helpers/history';


function App() {

  return (
    
    <Router history={ history }  forceRefresh>
      
      <div className="App">
        <Topbar />
        <Header />
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={Aboutpage} />
        <Route path="/service" component={Servicepage} />
        <Route path="/doctor" component={Doctorpage} />
        <Route path="/department" component={Departmentpage} />
        <Route path="/contact" component={Contactpage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
