
import React from "react";
import ReactDOM from "react-dom";
import zhihu from './images/zhihu.png'
// import './index.css'
import './index.less'

class Home extends React.Component {
    render () {
        return <div className="title">
            <img src={zhihu}></img>
            Search test
        </div>
    }
}


ReactDOM.render(
    <Home/>,
    document.getElementById('root')
)