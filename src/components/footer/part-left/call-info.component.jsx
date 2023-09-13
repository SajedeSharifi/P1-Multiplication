import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../../assets/enamad.png";
import "./call-info.style.css";
const CallInfo = () => {
  return (
    <Container id="info">
      <p className="visually-hidden text-left"> اطلاعات تماس </p>
      <img
        src="https://cdn.alibaba.ir/h2/desktop/assets/images/shawl_logotype-d6b14ca0.svg"
        alt="Alibaba Logo"
        className="mb-4"
        height="30"
        id="footer-logo"
      />
      <address className="mb-7">
        <p dir="rtl">
          {" "}
          تلفن پشتیبانی:
          <a
            dir="ltr"
            className="me-3 text-decoration-none text-reset"
            href="#tel"
          >
            ۰۲۱ - ۴۳۹۰۰۰۰۰{" "}
          </a>
        </p>
        <span>
          دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه چهارم،
          بن‌بست گل‌ها، پلاک 1
        </span>
      </address>
      <ul className="list-none m-0 p-0" id="icons" dir="rtl">
        <li className="d-inline-block p-1">
          <a className="card-footer p-1" href="#verify">
            <img
              src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/ecunion-8b792f56.png"
              alt="کسب و کارهای مجازی"
              height="69"
              width="69"
            />
          </a>
        </li>
        <li className="d-inline-block p-1">
          <a className="card-footer p-1" href="#samandehi">
            <img
              src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/samandehi-6e2b448a.png"
              alt="logo-samandehi"
              height="69"
              width="69"
            />
          </a>
        </li>
        <li className="d-inline-block p-1">
          <a className="card-footer p-1" href="#enamad">
            <img src={logo} alt="ای نماد" height="69" width="69" />
          </a>
        </li>
        <li className="d-inline-block p-1">
          <a className="card-footer p-1" href="#sysworkflow">
            <img
              src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/passenger-rights-48368f81.svg"
              alt="حقوق مسافر"
              height="69"
              width="69"
            />
          </a>
        </li>
        <li className="d-inline-block p-1">
          <a className="card-footer p-1" href="#air">
            <img
              src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/aira-682b7c43.png"
              alt="دامنه نرخ بلیط شرکت‌های هواپیمایی"
              height="69"
              width="69"
            />
          </a>
        </li>
        <li className="d-inline-block p-1">
          <a className="card-footer p-1" href="https://caa.gov.ir/">
            <img
              src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/state-airline-f45c55b2.svg"
              alt="سازمان هواپیمایی کشوری"
              height="69"
              width="69"
            />
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default CallInfo;
