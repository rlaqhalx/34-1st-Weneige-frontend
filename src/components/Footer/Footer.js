import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="links">
          <Link to="#">회사소개</Link>
          <Link to="#">서비스이용약관</Link>
          <Link to="#">개인정보처리방침</Link>
          <Link to="#">영상정보처리방침</Link>
          <Link to="#">뷰티포인트</Link>
          <Link to="#">사이트맵</Link>
          <Link to="#">공지사항</Link>
        </div>
        <div className="socialLinks">
          <a
            target="_blank"
            href="https://www.instagram.com"
            className="instaIcon"
            rel="noreferrer"
          >
            <img
              src="https://www.laneige.com/kr/ko/assets/image/sns_instagram_renew.png"
              alt="instagram icon"
            />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com"
            className="facebookIcon"
            rel="noreferrer"
          >
            <img
              src="	https://www.laneige.com/kr/ko/assets/image/sns_facebook_renew.png"
              alt="facebook icon"
            />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com"
            className="youtubeIcon"
            rel="noreferrer"
          >
            <img
              src="https://www.laneige.com/kr/ko/assets/image/sns_youtube_renew.png"
              alt="youtube icon"
            />
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com"
            className="tiktokIcon"
            rel="noreferrer"
          >
            <img
              src="	https://www.laneige.com/kr/ko/assets/image/sns_tiktok_renew.png"
              alt="tiktok icon"
            />
          </a>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerBottomWrap">
          <div className="infoWrap">
            <p className="info">고객상담실 (수신자요금부담) 080-023-5454</p>
            <p className="info">운영시간: 월-금 09:00 ~ 18:00</p>
          </div>
          <p className="footerCopyRights">
            <span>© WENEIGE.</span> ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
