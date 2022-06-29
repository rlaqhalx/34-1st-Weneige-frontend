import React from 'react';
import { Link } from 'react-router-dom';
import './Empty.scss';

const Empty = () => {
  return (
    <div className="emptyCart">
      <div className="empty">장바구니에 담긴 상품이 없습니다</div>
      <Link to="/main" className="toDetail">
        제품리스트 페이지로 이동
      </Link>
    </div>
  );
};

export default Empty;
