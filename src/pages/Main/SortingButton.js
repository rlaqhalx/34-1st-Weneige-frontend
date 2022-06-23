import { useState } from 'react';
import SortButtonOptions from './SortingButtonOptions';
import './SortingButton.scss';

const SortingButton = ({ priceSort, abcSort }) => {
  const [show, setShow] = useState(false);
  const [buttonTitle, setButtonTitle] = useState('정렬');
  const showList = () => {
    setShow(prev => !prev);
  };

  return (
    <>
      <button onClick={showList}>{buttonTitle}</button>
      {show && (
        <SortButtonOptions
          show={setShow}
          titleChange={setButtonTitle}
          priceSort={priceSort}
          abcSort={abcSort}
        />
      )}
    </>
  );
};

export default SortingButton;
