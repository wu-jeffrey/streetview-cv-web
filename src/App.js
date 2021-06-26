import { BrowserRouter as Router } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import GoogleStreetView from './components/GoogleStreetView';

function App() {
  return (
    <Router>
      <GoogleStreetView></GoogleStreetView>
    </Router>
  );
}

export default App;
