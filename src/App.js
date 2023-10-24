
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function NavigationBar() {
  return (
    <>
      <div className='navigation-bar'>
        <div className='nav-button-l'>Menu</div>
        <div className='nav-button-r'>
          <ul>
            <li><Link to={'/reservation'}>예약현황</Link></li>
            <li>Notice</li>
          </ul>
        </div>
      </div>
      <div className='white-space'></div>
    </>

  );
}

function ReservationPage() {
  return (
    <>
      <div className="content">
        <div>가게이름</div>
        <div>예약 내용</div>
        <div>예약일</div>
        <div>예약 시간</div>
        <div>장소</div>
        <div>담당자</div>
      </div>

      <div className="content">
        예약 이력
      </div>

      <div className="content">
        지나간 예약 이력
      </div>
    </>
  );
}

function MainPage() {
  return (
    <>
      <div className="content">
        main
      </div>
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
          <Route path='/reservation' element={<ReservationPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
