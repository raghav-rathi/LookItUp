import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import About from './components/about/About.jsx';
import ScannerTable from './components/scannerTable/ScannerTable.jsx';
import ScannerUploadForm from './components/scannerUploadForm/ScannerUploadForm.jsx';
import { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  const [data, setData] = useState(undefined);
  const getData = (dataObject) => {
    setData(dataObject);
  }

  const goToHome = () => {
    setData(undefined);
  }
  return (
    <Router>
      <div className="App">
        <Header goToHome={goToHome} />
        <Route path='/about' component={About} /> 
        <Route path='/' exact render={(props) =>(
          <>
          {data === undefined? <ScannerUploadForm getData={getData} />: null}
        {data!==undefined ?<ScannerTable data={data} />: null}
          </>
        )} />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
