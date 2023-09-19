import React, { useState, useEffect, useMemo } from "react";
import { isBrowser } from "react-device-detect";
import SiteBtnPanel from "../Element/SiteBtnPanel";
import { AiTwotonePhone } from "react-icons/ai";
import { FaLocationPin } from "react-icons/fa6";
import { Consumer } from "../api";
import { Row, Col } from "react-bootstrap";
import "../styles/App.css";
import "../styles/style.css";
import "../styles/bootstrap-social.css";
import Comment from "../components/homepage/Comment";
import ReportModal from "../components/ReportModal";

export default function BusinessCard({
  data: {
    _id,
    gsx$link,
    gsx$name,
    gsx$logo,
    gsx$logoheight,
    gsx$address,
    gsx$city,
    gsx$phone,
    gsx$whatsapp,
    gsx$email,
    gsx$facebook,
    gsx$instagram,
    gsx$website,
    gsx$comment,
    gsx$worktime,
    gsx$desc,
  },
  isLinkable,
  className,
  ...props
}) {
  const [reportData, setReportData] = useState({});
  const [reportModal, setReportModal] = useState({ show: false });
  const fullAddress = useMemo(
    () => (!gsx$address ? gsx$city : `${gsx$address}, ${gsx$city}`),
    [gsx$address, gsx$city]
  );
  const googleMapsAddress = useMemo(
    () =>
      "http://maps.google.com/maps?q=" +
      encodeURIComponent(
        fullAddress?.trim().replace(/\r?\n/, ",").replace(/\s+/g, " ")
      ),
    [fullAddress]
  );
  const businessEmail = useMemo(
    () => (!gsx$email ? "javascript:void(0)" : "mailto:" + gsx$email),
    [gsx$email]
  );

  //------------------------------------------------------------------------
  /*const setBg = () => {
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    }*/

  const emptyVal = (val) => val == undefined || val == null || val.trim() == "";
  const myData = { _id, gsx$name };
  return (
    <div 
      dir="rtl"
      className={className + " bgc1 gap-1  border border-white pb-2"}
      {...props}
    >
      <div className="d-flex flex-column mt-2">
        {isLinkable ? (
          <a className="dec-off" href={`/business/${_id}`}>
            <h1 className="p-1 text-center h2 bgc2 radius1 text-dark ls3 fs_27 ">
              {gsx$name}
            </h1>
          </a>
        ) : (
          <h1 className="card text-center bgc1 fs_color1 fs_24 p-1">
            {gsx$name}
          </h1>
        )}

        <img
          style={{ width: `100%`, height: `250px` }}
          src={gsx$logo?.gsx$logo}
          alt="Logo"
        />

        <p className="p-2 fs_18 bgc8 fs_color1  ">{gsx$desc}</p>
        <div className="mb-4">
          <SiteBtnPanel
            gsx$whatsapp={gsx$whatsapp}
            gsx$facebook={gsx$facebook}
            gsx$website={gsx$website}
            gsx$instagram={gsx$instagram}
          />
        </div>
        {/* Contact --------------------- */}
        <div className="row align-items-center m-1 justify-content-center bgc7 radius1  ">
          {gsx$comment && (
            <React.Fragment>
              <Comment gsx$comment={gsx$comment} />
            </React.Fragment>
          )}
          <div className="d-flex flex-column p-3 radius3">
            {[0, 1, 2].map((val, i) =>
              !gsx$phone[val] ? (
                ""
              ) : (
                <Col
                 
                  key={i}
                  className="align-items-center justify-content-center text-center"
                >
                  <a
                    className="mt-1 dec-off d-flex bgc1 fs_color1 p-2 text-center"
                    title={"טלפון" + (val + 1)}
                    href={
                      gsx$phone[val] == null
                        ? "javascript:void(0)"
                        : "tel:" + gsx$phone[val].split(" ")[0]
                    }
                  >
                    <span className="fs_15 p-1 d-flex gap-1">
                      {gsx$phone[val] == undefined ? "" : gsx$phone[val]}
                    </span>
                    <span>
                      <AiTwotonePhone size={21} className="" />
                    </span>
                  </a>{" "}
                </Col>
              )
            )}
            <Col >
              <hr className="mb-2" />
              <a
                className="dec-off p-2 radius2 bg-light mb-2"
                title="כתובת"
                href={googleMapsAddress}
              >
                <span className=" fs_21 text-secondary mb-1">
                  <FaLocationPin />

                  {fullAddress}
                </span>
              </a>
              {gsx$email && (
                <div className="clear-float mt-3">
                  <hr className="mt-1" />
                  <a
                    className="dec-off  bg-light fs_15  p-2 radius2"
                    title="אימייל"
                    href={businessEmail}
                  >
                    <span>{gsx$email === "" ? "" : gsx$email}</span>
                  </a>
                </div>
              )}
            </Col>
          </div>
          {[0, 1, 2].map((val) =>
            !gsx$worktime[val] ? (
              ""
            ) : (
              <React.Fragment key={"worktime" + val}>
                <hr className="" />
                <a
                  className="dec-off"
                  title="שעות עבודה"
                  href="javascript:void(0)"
                >
                  <span>{gsx$worktime[val]}</span>
                  <i className="fa fa-fw fa-clock-o"></i>
                </a>
              </React.Fragment>
            )
          )}
        </div>
        {/* -------------------------------- */}
        <hr className="mt-2" />

        <>
          <button
            type="button"
            className="btn2"
            onClick={(e) => setReportModal((s) => ({ show: !s.show }))}
          >
            דיווח
          </button>
          {reportModal.show && (
            <ReportModal setReportModal={setReportModal} user={myData} />
          )}
        </>
      </div>
    </div>
  );
}
