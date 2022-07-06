# Wecode34기 1차 4팀 프로젝트(WENEIGE)

<!-- 데모영상 넣기 -->
<!-- ![Weneige Demo]() -->

## 프로젝트 소개

- Laneige 화장품 웹사이트를 react를 활용해 클론코딩을 하여 SPA에 대한 이해도를 높일 수 있다.
- 프로젝트 기간: 22년 6월 20일 ~ 7월 1일
- 프로젝트간 적용 기술<br>
  HTML, CSS, JavaScript, SCSS, react, react-router-dom

---

## 팀 구성

- 프론트엔드: 4명
  - [김은정](https://github.com/banhera)
  - [김보미](https://github.com/rlaqhalx)
  - [이범석](https://github.com/beomq)
  - [박희주](https://github.com/hjpark625)
- 백엔드: 1명
  - [조현우](https://github.com/HyeonWooJo)

---

## 구현 기능 및 페이지

### 메인페이지

- 메인페이지 내 이미지 슬라이드 기능 구현

  - 이미지 슬라이드 기능 (컴포넌트 제작)

    ```jsx
    <div
      className="inner"
      style={{ transform: `translateX(-${activeIndex * 100}%)` }}
    >
      {carouselData.map(({ id, img, alt }) => {
        return (
          <div className="carouselItem" key={id}>
            <img alt={alt} src={img} />
          </div>
        );
      })}
    </div>
    ```

    - 최초에는 map이 되는 구간을 children을 활용해서 map을 하는 방식으로 작성, 불필요한 컴포넌트와 시인성이 떨어지는 문제가 발생
    - Live리뷰하는 동안 멘토의 조언과 지도를 통해 children방식으로 하지 말고 렌더링 되는 부분을 직접 map을 하는 방식으로 수정
    - 동작은 정상적으로 하면서도 컴포넌트를 줄이게 되고 코드의 시인성 또한 향상

  - 이미지 슬라이드 내 indicator버튼 구현

    ```jsx
    {
      carouselData.map((el, index) => {
        return (
          <button
            key={index}
            className={`choose${index === activeIndex ? ' active' : ''}`}
            onClick={() => {
              updateIndex(index);
            }}
          />
        );
      });
    }
    ```

    - children을 활용하는 방식으로 map을 해 button을 만들었으나 위에서 children을 활용하지 않는 방식으로 변동 되어 기존에 버튼이 사라지는 현상 발생
    - 기존에는 children을 map을 했으나 무엇을 기반으로 map을 돌려야 할지 고민하다가 어차피 위에서도 데이터를 기반으로 하는데 여기서도 마찬가지로 데이터를 기반으로 돌리면 된다는 생각이 들어 데이터를 바로 활용해 map을 돌리기 시작
    - 데이터를 바로 map을 활용하니 동일하게 children을 활용하던 방식으로 정상적으로 작동

- 검색창 및 검색기능 구현

  - 검색기능 구현 코드

    ```jsx
    <input
      type="search"
      placeholder="검색어를 입력해 주세요"
      className="searchInput"
      onChange={updateItemInput}
    />
    ```

  - 검색 기능을 위해 데이터를 filter하고 그 데이터를 props로 전달

    ```jsx
    // 검색창에 들어가는 값을 받아주는 코드
    const updateItemInput = e => {
    setSearchInputValue(e.target.value);
    };

    /* ... */

    // 상품이 나열되는 데이터를 기반으로 filter하는 코드
    const sortedItems = productData.filter(item => {
      return item.kor_name.includes(searchInputValue);
    });

    /* ... */

    // input에 value를 저장하기 위해 함수를 props로 전달
    <SearchBar updateItemInput={updateItemInput} />

    /* ... */

    // filter된 데이터를 props로 전달
    <div className="productsContainer">
      <ProductItem productData={sortedItems} />
    </div>;
    ```

- 상품 나열에 대한 정렬버튼 기능 구현(가나다 순 / 가격 순)

  - sortingButton이라는 컴포넌트 제작

    ```jsx
    <button onClick={showList}>{buttonTitle}</button>;
    {
      isShowOptions && (
        <SortButtonOptions
          showOptions={setIsShowOptions}
          titleChange={setButtonTitle}
          sortAscByLetter={sortAscByLetter}
          sortDescByPrice={sortDescByPrice}
        />
      );
    }
    ```

  - Main.js에서 정렬 함수를 제작 후 sortingButton이라는 props에 전달

    ```jsx
    // 가나다 순으로 정렬하는 함수
    const sortAscByLetter = () => {
      let listSortedByKoreanAlphabet = [...productData].sort((a, b) =>
        a.kor_name > b.kor_name ? 1 : -1
      );
      setProductData(listSortedByKoreanAlphabet);
    };

    // 가격 순으로 정렬하는 함수
    const sortDescByPrice = () => {
      let listSortedByPrice = [...productData].sort((a, b) =>
        b.price > a.price ? 1 : -1
      );
      setProductData(listSortedByPrice);
    };
    ```

  - sortingButton을 클릭했을 시 onClick이벤트로 기존에 있던 "정렬"이라는 버튼의 글자를 클릭한 버튼의 이름으로 바꿈과 동시에 정렬시키는 함수를 실행시켜 데이터를 해당 조건에 맞게 정렬시켜줌

### 장바구니 페이지

- 장바구니 데이터 백엔드와 데이터 통신(GET,DELETE)
- 장바구니 제품 수량변경
- 장바구니 제품 삭제
- 장바구니에 담기 제품 숨기기
- 수량 변경에 따른 제품의 금액 합계, 전체 제품의 금액 총 합계

### 로그인 & 회원가입

- 회원가입 페이지 이용약관 및 유저 정보 입력 form 구현
- 유저정보 입력에 따른 버튼 활성화 기능 구현
- 정규 표현식을 이용한 유저 정보 유효성 검증 기능 추가
- 회원 가입 버튼 클릭 시 입력 정보를 서버로 전달
- 정보전달 input에 입력정보가 없을 시 에러메세지 표출
- 회원가입 input을 각각 쓰지 않고 component를 활용하여 map으로 구성

### 제품 상세페이지

- 옵션 버튼을 누르면 나오는 dropdown 모달 구현
- 선택된 옵션 순서에 맞춰서 수량선택과 취소 박스 구현
- 백엔드 서버에서 query parameter 로 다른 상세페이지를 보여주고 수량과 옵션 맞춰서 다시 보내기
