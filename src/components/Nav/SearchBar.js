import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.scss';

const SearchBar = ({ productList, setProductList }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearchChange = e => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setProductList(
      productList.filter(item => {
        return item.kor_name.includes(inputValue);
      })
    );
  }, [inputValue]);

  return (
    <div className="searchPad">
      <div className="searchWrap">
        <form className="searchForm">
          <div className="searchBox">
            <span className="inputSearchIcon" />
            <input
              type="search"
              placeholder="검색어를 입력해 주세요"
              className="searchInput"
              onChange={handleSearchChange}
            />
          </div>
          <button className="searchButton">검색</button>
        </form>
        <div className="searchRecommends">
          <span>추천 검색어</span>
          <Link to="#" className="tags">
            볼륨 마스카라
          </Link>
          <Link to="#" className="tags">
            소프트 네츄럴 립스틱
          </Link>
          <Link to="#" className="tags">
            하이드레이팅 프라이머
          </Link>
          <Link to="#" className="tags">
            시그니처 브로우 펜슬
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
