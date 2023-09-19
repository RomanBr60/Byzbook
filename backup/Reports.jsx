import React, { useState } from "react";
import {Helmet} from "react-helmet";
import ReportsPanel from "../Panels/ReportsPanel";
import "../styles/style.css";
import { Container } from "./Container";
import { useEffect } from "react";


export default function Reports(props) {

    const text = "מסך הדיווח אפשר לנו לראות את הדיווחים השונים על העסקים השונים. בהתאם לדייוח, הדיווח ימחק או שהעסק יבוטל/ימחק"

    return (
    <React.Fragment>
        <Helmet>       
        <title>מסך ניהול דיווחים על עסקים</title>
        </Helmet>
        <Container>
        <div className="jumbotron" style={{ padding: '0', borderRadius: '0' }}>
            <h2 className="title" id="title" style={{ textAlign: 'center', textDecoration: 'underline' }}>
                מסך דיווחים על עסקים
            </h2>
            <p>{text}</p>
        </div>
        <ReportsPanel className="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2" />
        </Container>
    </React.Fragment>
    )
}