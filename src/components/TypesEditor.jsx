import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { isBrowser } from "react-device-detect";
import useFetch from "../hooks/useFetch";
import TypesPanel from "../Panels/TypesPanel";
import "../styles/style.css";

export default function TypesEditor() {
  return (
    <React.Fragment>
      <Helmet>
        <title>מסך ניהול טיפוסי עסקים</title>
      </Helmet>
      <div
        className={isBrowser ? "container" : "container-fluid"}
        style={{ marginTop: "0", paddingTop: "0" }}
      >
        <div
          className="jumbotron"
          style={{ padding: "0", borderRadius: "0" }}
        ></div>
        <TypesPanel
          className={
            isBrowser ? "col-lg-6 col-md-6 col-lg-offset-3 col-md-offset-3" : ""
          }
        />
      </div>
    </React.Fragment>
  );
}
