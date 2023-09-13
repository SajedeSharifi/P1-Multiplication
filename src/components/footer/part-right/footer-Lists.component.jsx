import React from "react";
import { Container } from "react-bootstrap";
import CallInfo from "../part-left/call-info.component";
import MoreLinks from "./More Links/moreLinks.component";
import "./footer-Lists.style.css";

const FooterLists = () => {
  return (
    <Container fluid="sm" className="lists border-top border-bottom">
      <div>
        <p>علی بابا</p>
        <ul>
          <li className="mb-2">
            <a classNameName="footer-link" href="#about">
              درباره ما
            </a>
          </li>
          <li className="mb-2">
            <a classNameName="footer-link" href="#help-center">
              تماس با ما
            </a>
          </li>
          <li className="mb-2">
            <a classNameName="footer-link" href="#why-alibaba">
              چرا علی بابا
            </a>
          </li>
          <li className="mb-2">
            <a classNameName="footer-link" href="#plus">
              علی بابا پلاس
            </a>
          </li>
          <li className="mb-2">
            <a classNameName="footer-link" href="#insurance">
              بیمه مسافرتی
            </a>
          </li>
          <li className="mb-2">
            <a classNameName="footer-link" href="#mag">
              مجله علی بابا
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>خدمات مشتریان</p>
        <ul>
          <li className="mb-2">
            <a href="#help-center" className="footer-link">
              مرکز پشتیبانی آنلاین
            </a>
          </li>
          <li className="mb-2">
            <a href="#purchase-guide" className="footer-link">
              راهنمای خرید
            </a>
          </li>
          <li className="mb-2">
            <a href="#refund-guide" className="footer-link">
              راهنمای استرداد
            </a>
          </li>
          <li className="mb-2">
            <a href="#general-policy" className="footer-link">
              قوانین و مقررات
            </a>
          </li>
          <li className="mb-2">
            <a href="#faq" className="footer-link">
              پرسش و پاسخ
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>اطلاعات تکمیلی</p>
        <ul>
          <li className="mb-2">
            <a href="#loyalty" className="footer-link">
              باشگاه همسفران
            </a>
          </li>
          <li className="mb-2">
            <a href="#business" className="footer-link">
              فروش سازمانی
            </a>
          </li>
          <li className="mb-2">
            <a className="footer-link" href="#partner">
              همکاری با آژانس‌ها
            </a>
          </li>
          <li className="mb-2">
            <a href="#jobs" className="footer-link">
              فرصت‌های شغلی
            </a>
          </li>
        </ul>
      </div>
      <CallInfo />
      <MoreLinks />
    </Container>
  );
};
export default FooterLists;
