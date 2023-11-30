
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import MainPage from './components/MainPage';
import ReservationCheckPage from './components/ReservationCheckPage';

function NavigationBar() {
  return (
    <>
      <div className='navigation-bar-wrap'>
        <div className='navigation-bar-title'>メニュー</div>
        <div className='navigation-bar'>
          <ul>
            <li>予約状況</li>
            <li>お知らせ</li>
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
