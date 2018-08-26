// React와 ReactDOM import 하지 않으면 실행할 수 없음 (wondow 객체에 binding)
import React from 'react';
import ReactDOM from 'react-dom';

// 맨 뒤에 index.js는 생략해도 됨
import App from './components/App/index.js'
// import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));