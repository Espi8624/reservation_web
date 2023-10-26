
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import MainPage from './components/MainPage';
import ReservationCheckPage from './components/ReservationCheckPage';

function NavigationBar() {
  return (
    <>
      <div className='navigation-bar'>
        <div className='nav-button-l'>メニュー</div>
        <div className='nav-button-r'>
          <ul>
            <li><Link to={'/chkreservation'}>予約状況</Link></li>
            <li>お知らせ</li>
          </ul>
        </div>
      </div>
      <div className='white-space'></div>
    </>

  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/chkreservation' element={<ReservationCheckPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
