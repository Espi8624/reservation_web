
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import MainPage from './components/MainPage';
import ReservationCheckPage from './components/ReservationCheckPage';

function NavigationBar() {
  return (
    <>
      <div className='navigation-bar-wrap'>
        <div className='navigation-bar'>
        <div className='navigation-bar-title'>メニュー</div>
          <ul className='navigation-bar-menu'>
            <li><Link to="/">メインページ</Link></li>
            <li><Link to="/chkreservation">予約状況</Link></li>
            <li><Link>お知らせ</Link></li>
          </ul>
        </div>
      </div>
    </>

  );
}

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/chkreservation' element={<ReservationCheckPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
