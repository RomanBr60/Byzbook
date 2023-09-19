import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { isBrowser } from "react-device-detect";
import BusinessPagePanel from "./BusinessPagePanel";
import Comments from "../Panels/Comments";
import ReportModal from "./ReportModal";

import { Provider } from "../api";
import "../styles/style.css";
import "../styles/comments.css";

export default function BusinessPage(props) {
  const [user, setUser] = useState({});

  return (
    <React.Fragment>
      <div
        className={isBrowser ? "container" : "container-fluid"}
        style={{ textAlign: "right", direction: "rtl" }}
      >
        <Provider value={setUser}>
          <BusinessPagePanel
            className="typeEditor col-lg-4 col-md-4"
            data={props.data}
            isLinkable={false}
          />
        </Provider>
        <Comments
          business={props.data._id}
          comments={props.comments}
          className="typeEditor col-lg-6 col-md-6 col-lg-offset-2 col-md-offset-2"
        />
      </div>

      <ReportModal user={user} />
    </React.Fragment>
  );
}
