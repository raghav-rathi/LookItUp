import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(undefined);
  const getData = (dataObject) => {
    setData(dataObject);
  }

  const goToHome = () => {
    setData(undefined);
  }
  
}

export default App;
