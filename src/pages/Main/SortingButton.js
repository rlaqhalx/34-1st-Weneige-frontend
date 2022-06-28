import { useState } from 'react';
import SortButtonOptions from './SortingButtonOptions';
import './SortingButton.scss';

const SortingButton = ({ sortAscByLetter, sortDescByPrice }) => {
  const [isShowOptions, setIsShowOptions] = useState(false);
  const [buttonTitle, setButtonTitle] = useState('정렬');
  const showList = () => {
    setIsShowOptions(prev => !prev);
  };

  return (
    <>
      <button onClick={showList}>{buttonTitle}</button>
      {isShowOptions && (
        <SortButtonOptions
          showOptions={setIsShowOptions}
          titleChange={setButtonTitle}
          sortAscByLetter={sortAscByLetter}
          sortDescByPrice={sortDescByPrice}
        />
      )}
    </>
  );
};

export default SortingButton;
