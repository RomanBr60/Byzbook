import React, { useState, useMemo, useEffect } from "react";
import { isBrowser } from "react-device-detect";
import CommentsAdminPanel from '../Panels/CommentsAdminPanel'
import ContactmessagesPanel from "../Panels/ContactmessagesPanel";
import ImgsPanel from "../Panels/ImgsPanel";
import ReportsPanel from "../Panels/ReportsPanel";
import TypesPanel from "../Panels/TypesPanel";
import AdminPanel from "../Panels/AdminPanel";
import "../styles/style.css";
import "../styles/admin.css";
import { ContainerFullScreen, Container } from "./Container";

const panels = ['types', 'reports', 'contactmessages', 'imgs', 'commentsAdmin']
const dataType = ['types', 'reports', 'data', 'data', 'data'];
const panelsNames = ['פאנל ניהול', 'עריכת עסקים', 'עריכת טיפוסים', 'טיפול בדיווחים', 'טיפול בהודעות', 'תמונת', 'תגובות לעסקים'];

export default function AdminPage (props) {
	const [admin, setAdmin] = useState (0);   
 
    const changePanel = (i) => {
        if (i == admin) return;
        setAdmin(i);
    }

    const Panel = () => {
        return (
        <div className="tab-content clearfix">
			<div className={"tab-pane" + (admin === 0 ? ' active':'')} id="P0">
            <AdminPanel changePanel={changePanel} 
            className={isBrowser ? "col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1" : ''}/>;
            </div>
			<div className={"tab-pane" + (admin === 2 ? 'active':'')} id="P2">
            <TypesPanel  
            className={isBrowser?"col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2": ''} />            
            </div>
			<div className={"tab-pane" + (admin === 3 ? 'active':'')} id="P3">
            <ReportsPanel 
            className="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2"/>
            </div>
			<div className={"tab-pane" + (admin === 4 ? 'active':'')} id="P4">
            <ContactmessagesPanel 
            className="col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1" />
            </div>
			<div className={"tab-pane" + (admin === 5 ? 'active':'')} id="P5">
            <ImgsPanel className="col-lg-6 col-md-6 col-lg-offset-3 col-lg-offset-3" />
            </div>
			<div className={"tab-pane" + (admin === 6 ? 'active':'')} id="P6">
            <CommentsAdminPanel 
            className={isBrowser ? "col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1" : ''} />
            </div>
        </div>)
    }

    return (
    <React.Fragment>

        <div className="visible-xs">
        <ul className="nav nav-pills" style={{backgroundColor: '#ddd', padding: '0', marginTop: "51px"}}>
        { panelsNames.map ((panel, i) =>
        <li key={"panels"+i} role="presentation" className={(admin == i ? 'active' : '') + " pull-right"}
        style={{margin: '0', padding: '0'}}>
        <a href={"#P"+i} data-toggle="tab" onClick={e=> admin !== i ?? setAdmin (i) } style={{borderRadius: '0'}}>{panel}</a>
        </li>
        )}
        </ul>
        </div>

        <ContainerFullScreen style={(isBrowser? {marginTop: '51px'} : {marginTop: '0px'})}>            
        <div className={(isBrowser ? "row " : '') + "content"}>
            <div className={isBrowser?"col-sm-10":''}>
            <h2 className="title pull-center" style={{ textAlign: 'center', textDecoration: 'underline', marginBottom: '10px' }}>
            {panelsNames[admin]}</h2>

            <Panel/>
            </div>

            <div className="col-sm-2 sidenav hidden-xs">
                <h2>אפשרויות ניהול</h2>
                <ul className={"nav nav-pills nav-stacked"}>
                { panelsNames.map ((panel, i) =>
                <li key={"panel"+i} className={(admin === i ? 'active' : '')}>
                    <a href={"#P"+i} data-toggle="tab" onClick={e=> changePanel (i) }>{panel}</a>
                </li>
                )}            
                </ul>
            </div>
            
        </div>
    </ContainerFullScreen>
    </React.Fragment>
	);
}
