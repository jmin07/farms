import React from 'react';
import { useParams } from "react-router-dom";

function Report(){
    const params = useParams();

    // 이게 되구나?
    if(params.pages === 'home'){
        return (
            <h1>{params.userId} 님 환영합니다.</h1>
        )
    } else if (params.pages === 'reports'){
        return(
            <h1>report</h1>
        )
    } else if (params.pages === "products"){
        return(
            <h1>Products</h1>
        )
    } else if (params.pages === "team"){
        return(
            <h1>Team</h1>
        )
    } else if (params.pages === "messages"){
        return(
            <h1>messages</h1>
        )
    } else if (params.pages === "support"){
        return(
            <h1>support</h1>
        )
    }
}

export default Report;