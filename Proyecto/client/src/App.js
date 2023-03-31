import './App.css';
import Selector from "./components/selector"
import GetRadon from "./components/GetRadon"
import GetBCMagee from './components/GetBCMagee';
import GetBCMAAP from './components/GetBCMAAP';
import GetMultiparametro from './components/GetMultiparametro';
import GetMPGRIMM from './components/GetMPGRIMM';
import Header from "./components/Header";
import GetRadiometro from './components/GetRadiometro';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='selector'>
        <Selector />
      </div>
      <div id='radon'>
        <h1 className='center'>Data Radon</h1>
        <GetRadon />
      </div>
      <div id='maap'>
        <h1 className='center'>Data BC-MAAP</h1>
        <GetBCMAAP /> 
      </div>
      <div id='magee'>
        <h1 className='center'>Data BC-Magee</h1>
        <GetBCMagee />
      </div>
      <div id='radiometro'>
        <h1 className='center'>Data Radiometro</h1>
        <GetRadiometro />
      </div>
      <div id='multiparametro'>
        <h1 className='center'>Data multiparametro</h1>
        <GetMultiparametro />
      </div>
      <div id='grimm'>
        <h1 className='center'>Data MP-GRIMM</h1>
        <GetMPGRIMM />
      </div>
    </div>
  );
}

export default App;
