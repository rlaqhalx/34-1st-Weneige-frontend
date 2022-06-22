import React from 'react';
import Products from './Products';
import './Main.scss';

const Main = () => {
  return (
    <>
      {/* nav제작 후 붙이기 */}
      <div
        className="navBar"
        style={{
          backgroundColor: 'yellow',
          height: '100px',
          position: 'fixed',
          width: '100%',
          top: '0',
        }}
      >
        nav
      </div>
      <div className="main">
        <section className="slideSection">슬라이드 섹션</section>
        <section className="productSection">
          <div className="shelfFilter">
            <div className="buttonContainer">
              <div className="categoryButton">
                <button>
                  <span className="buttonText">카테고리</span>
                </button>
              </div>
              <div className="alignButton">
                <button>
                  <span>정렬 선택 버튼</span>
                </button>
              </div>
            </div>
            <p>메이크업 16개 상품</p>
          </div>
          <div className="productShelf">
            <Products />
          </div>
        </section>
      </div>
      {/* Footer 제작 후 붙이기 */}
      <div style={{ backgroundColor: 'green', height: '200px' }}>Footer</div>
    </>
  );
};
export default Main;
