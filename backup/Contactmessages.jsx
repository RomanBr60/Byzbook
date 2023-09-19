import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ContactmessagesPanel from "../Panels/ContactmessagesPanel";
import "../styles/style.css";

export default function Contactmessages() {

    const text = "מסך הדיווח אפשר לנו לראות את הדיווחים השונים על העסקים השונים. בהתאם לדייוח, הדיווח ימחק או שהעסק יבוטל/ימחק"

    return (
    <React.Fragment>
       
        <div className="container" style={{ marginTop: '0', paddingTop: '0', textAlign: 'right', direction: 'rtl' }}>
        
        <div className="jumbotron" style={{ padding: '0', borderRadius: '0' }}>
            <h2 className="title" id="title" style={{ textAlign: 'center', textDecoration: 'underline' }}>
                מסך הודעות
            </h2>
            <p>{text}</p>
        </div>

        <ContactmessagesPanel className="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1" />

        </div>
    </React.Fragment>
    )
}