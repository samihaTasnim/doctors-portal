import './App.css';
import Home from './Componets/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppointmentPage from './Componets/Appointment/AppointmentPage';
import Navbar from './Componets/Home/Navbar'
import SeeAppointments from './Componets/SeeAppointments/SeeAppointments'

function App() {
  return (
     <Router>
       <Navbar></Navbar>
       <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/appointment">
            <AppointmentPage></AppointmentPage>
          </Route>
          <Route path="/myappointments">
            <SeeAppointments></SeeAppointments>
          </Route>
          <Route path="*">
            <h4>Page not found</h4>
          </Route>
        </Switch>
     </Router>
  );
}

export default App;
