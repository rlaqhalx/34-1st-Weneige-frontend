import React from 'react';
import { Link } from 'react-router-dom';
import './Empty.scss';

const Empty = () => {
  return (
    <div className="empty">
      <div className="no">아무것도 없어요~</div>
      <Link to="/main" className="toDetail">
        제품리스트 페이지로 이동
      </Link>
    </div>
  );
};

export default Empty;
