import React from "react";
import { Helmet } from "react-helmet";

import ImgsPanel from "../Panels/ImgsPanel";
import "../styles/style.css";

export default function Imgs () {
    

    return (
	<React.Fragment>
    <Helmet>
    <title>מסך ניהול תמונות</title>
    </Helmet>
        
    <div className="container" style={{ marginTop: '0', paddingTop: '0', textAlign: 'right', direction: 'rtl' }}>
    
    <div className="jumbotron" style={{ padding: '0', borderRadius: '0' }}>
        <h2 className="title" id="title" style={{ textAlign: 'center', textDecoration: 'underline' }}>
            מסך תמונות
        </h2>
        <p></p>
    </div>

    <ImgsPanel className="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2"/>    

    </div>	
    </React.Fragment>
	);
}
