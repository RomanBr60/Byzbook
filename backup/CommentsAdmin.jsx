import React, { useEffect , useState } from "react";
import { Helmet } from "react-helmet";
import { isBrowser } from "react-device-detect";
import CommentsAdminPanel from '../Panels/CommentsAdminPanel'
import "../styles/style.css";

export default function CommentsAdmin () {

    return (
        <React.Fragment>
            <Helmet>       
            <title>מסך ניהול תגובות</title>
            </Helmet>
            
            <div className="container" style={{ marginTop: '0', paddingTop: '0', textAlign: 'right', direction: 'rtl' }}>
            
            <div className="jumbotron" style={{ padding: '0', borderRadius: '0' }}>
                <h2 className="title" id="title" style={{ textAlign: 'center', textDecoration: 'underline' }}>
                    מסך תגובות
                </h2>
            </div>

            <CommentsAdminPanel
            className={isBrowser ? "col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-2" : ''}/>

            </div>
        </React.Fragment>
    )
}