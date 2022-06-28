import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPopUp.scss';

const CartPopUp = ({
  setpopupClass,
  popupClass,
  product_id,
  totalCount,
  colorList,
}) => {
  const [refinedcolorList, setRefinedcolorList] = useState([]);
  const [refinedtotalCount, setRefinedtotalCount] = useState([]);
  const [convertedColor, setConvertedColor] = useState([]);
  const [result, setResult] = useState([]);

  // slice undefined colorarray index + count index accordingly
  const refine = () => {
    let newcolorList = [...colorList];
    let newtotalCount = [...totalCount];

    if (colorList[0] === undefined) {
      newcolorList.shift();
      newtotalCount.shift();

      setRefinedcolorList(newcolorList);
      setRefinedtotalCount(newtotalCount);
    }
    if (colorList[1] === undefined) {
      newcolorList.pop();
      newtotalCount.pop();

      setRefinedcolorList(newcolorList);
      setRefinedtotalCount(newtotalCount);
    }

    if ((colorList[0] !== undefined) & (colorList[0] !== undefined)) {
      setRefinedcolorList(newcolorList);
      setRefinedtotalCount(newtotalCount);
    }
  };

  const convertColor = {
    맨인블랙: 1,
    라이트브라운: 2,
    블라썸레드: 3,
    자이언트핑크: 5,
    라이트샌드: 6,
  };

  const convertId = (id, color) => {
    if ((id === 1) & (color === 1)) return 1;
    if ((id === 1) & (color === 2)) return 2;
    if ((id === 2) & (color === 1)) return 3;
    if ((id === 3) & (color === 1)) return 4;
    if ((id === 4) & (color === 3)) return 5;
    if ((id === 4) & (color === 5)) return 6;
    if ((id === 5) & (color === 3)) return 7;
    if ((id === 5) & (color === 5)) return 8;
    if ((id === 6) & (color === 3)) return 9;
    if ((id === 6) & (color === 5)) return 10;
    if ((id === 7) & (color === 3)) return 11;
    if ((id === 7) & (color === 5)) return 12;
    if ((id === 8) & (color === 3)) return 13;
    if ((id === 8) & (color === 5)) return 14;
    if ((id === 9) & (color === 1)) return 15;
    if ((id === 10) & (color === 1)) return 16;
    if ((id === 11) & (color === 1)) return 17;
    if ((id === 12) & (color === 6)) return 18;
    if ((id === 13) & (color === 3)) return 19;
    if ((id === 13) & (color === 5)) return 20;
    if ((id === 14) & (color === 6)) return 21;
    if ((id === 15) & (color === 1)) return 22;
    if ((id === 16) & (color === 1)) return 23;
  };

  const closePopUp = () => {
    setpopupClass(false);
  };

  // this returns array of converted color
  const handleColor = () => {
    refine();
    let arr = [];
    for (let i = 0; i < refinedcolorList.length; i++) {
      let element = convertColor[refinedcolorList[i]];
      arr.push(element);
      setConvertedColor(arr);
    }
  };

  //console.log('color should have been converted', convertedColor);

  // this returns array of result, taking an account of product_id
  const handleResult = () => {
    handleColor();
    let arr = [];
    for (let i = 0; i < convertedColor.length; i++) {
      let element = convertId(product_id, convertedColor[i]);
      arr.push(element);
      setResult(arr);
    }
  };

  //console.log('results should come out', result);

  const navigate = useNavigate();

  const goToCart = () => {
    navigate('/cart');
  };

  const renderThis = () => {
    //refine();
    //handleColor();
    // handleResult();
    result.map((el, index) => ({
      product_option_id: el,
      quantity: refinedtotalCount[index],
    }));
  };
  ç;
  const submit = e => {
    handleResult();
    renderThis();
    //console.log('result:', result);
    if (result.length !== 0) {
      fetch('http://172.20.10.2:8000/carts/cart', {
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.5BoIX3eJmneF6w-Jb44BzDDZ3zt0gtl01NRPvOicAWc',
        },
        body: JSON.stringify(
          result.map((el, index) => ({
            product_option_id: el,
            quantity: refinedtotalCount[index],
          }))
        ),
      })
        .then(response => response.json())
        .then(result => {
          if (result.success) {
            goToCart();
          } else {
            alert('error');
          }
        });
    }
  };
  return (
    <div>
      <div
        className="cartPopUpWrapper"
        style={{ display: popupClass ? 'block' : 'none' }}
      >
        선택하신 상품이 장바구니에 추가되었습니다. 장바구니로 이동하시겠습니까?
        <button className="cancel" onClick={renderThis}>
          취소
        </button>
        <button className="confirm" onClick={submit}>
          확인
        </button>
        <button className="noPopUp" onClick={closePopUp}>
          x
        </button>
      </div>
    </div>
  );
};

export default CartPopUp;
