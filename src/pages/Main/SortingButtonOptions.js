import './SortingButtonOptions.scss';

const SortButtonOptions = ({ titleChange, show, abcSort, priceSort }) => {
  const changeTitleABC = () => {
    titleChange('가나다 순');
    show();
    abcSort();
  };
  const changeTitlePrice = () => {
    titleChange('가격 순');
    show();
    priceSort();
  };
  return (
    <div className="optionContainer">
      <div className="abc">
        <button onClick={changeTitleABC}>가나다 순</button>
      </div>
      <div className="price">
        <button onClick={changeTitlePrice}>가격 순</button>
      </div>
    </div>
  );
};

export default SortButtonOptions;
