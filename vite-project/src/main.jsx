import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import App2 from './App2.jsx'
// import Hello2 from './Hello.jsx'
// import Hello3 from './Hello.jsx'
// import Hello4 from './Hello.jsx'
// import App3 from './App3.jsx'
// import HeaderText from './App4.jsx'
import Counter from './App5'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <Hello2 user="Ahn"/>  */}
    {/* <Hello3 firstName="Robert" lastName="Peterson"/> */}
    {/* <Hello4 firstName="로버트" lastName="패틴슨"/> */}
    {/* <App3 /> */}
    {/* <HeaderText text="저는 오늘 방특이 끝났습니다!"/> */}
    <Counter />
  </React.StrictMode>,
)
