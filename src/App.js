// import logo from './logo.svg';
import './App.css';
import BrandBox from './components/BrandBox/BrandBox';
import DesignOpt from './components/DesignOpt/DesignOpt';
import Feature from './components/Features/Feature';
import Header from './components/Header/Header';
import MobOpt from './components/MobileOpt/MobOpt';
import Task from './components/Task/Task';

function App() {
  return (
    <div className="App">
      <Header/>
      <MobOpt/>
      <BrandBox/>
      <Feature/>
      <Task/>
      <DesignOpt/>
    </div>
  );
}

export default App;
