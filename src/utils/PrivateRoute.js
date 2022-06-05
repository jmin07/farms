import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import isLogin from './isLogin';


function PrivateRoute({ children }) {
    const navigate = useNavigate();
    return (
        isLogin() ? children : alert('로그인이 필요합니다') && navigate('/')
    );
  }

// const PrivateRoute = ({component: Component, ...rest})=>{
//     return(
//         <Route {...rest} 
//             render={ props =>(
//                 isLogin() ? 
//                     <Component {...props}  parentMenu={this.props.menu} />
//                     : navigate('/')
//             )} 
//         />
//     );
// };

export default PrivateRoute;