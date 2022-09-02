import Home from './page/Home';
import Question from './page/Question';
import Result from './page/Result';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/question' element={<Question/>} />
      <Route path='/result' element={<Result/>} />
      </Routes> 
  );
}

export default App;

//router로 페이지 이동 설절 코드
