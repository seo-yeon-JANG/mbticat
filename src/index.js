import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);

//StricMode는 안전하지 않은 생명주기를 사용하는 컴포넌트 발견, 레거시 문자열 ref 사용에 대한 경고, 권장하지 않는 findDOMNode 사용에 대한 경고,
//예상치 못한 부작용 검사, 레거시 context API 검사
//<BrowserRouter>
//    <App />
//</BrowserRouter> 기본 구조
