import React from 'react'
import ReactDOM from 'react-dom';
// node_module 에서 normalize.css import
//webpack에서 scss 설정을 css에서 적용되도록 중간에 '?' 추가 해줘야 함
import 'normalize.css/normalize.css'
import './styles/styles.scss';

ReactDOM.render(<p> this is my boilerplate </p>, document.getElementById('app'));