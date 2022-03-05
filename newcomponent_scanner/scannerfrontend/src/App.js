import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import ScannerTable from './components/scannerTable/ScannerTable.jsx';
import ScannerUploadForm from './components/scannerUploadForm/ScannerUploadForm.jsx';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(undefined);
  const getData = (dataObject) => {
    setData(dataObject);
  }

  const goToHome = () => {
    setData(undefined);
  }
  return (
    <div className="App">
      <Header goToHome={goToHome} />
      {data === undefined? <ScannerUploadForm getData={getData} />: null}
      {data!==undefined ?<ScannerTable data={data} />: null}
      <Footer />
    </div>
  );
}

export default App;
