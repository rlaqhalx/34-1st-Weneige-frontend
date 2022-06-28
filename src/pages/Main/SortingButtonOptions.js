import './SortingButtonOptions.scss';

const SortButtonOptions = ({
  titleChange,
  showOptions,
  sortAscByLetter,
  sortDescByPrice,
}) => {
  const changeTitleABC = () => {
    titleChange('가나다 순');
    showOptions();
    sortAscByLetter();
  };
  const changeTitlePrice = () => {
    titleChange('가격 순(고가 순)');
    showOptions();
    sortDescByPrice();
  };
  return (
    <div className="optionContainer">
      <div>
        <button onClick={changeTitleABC}>가나다 순</button>
      </div>
      <div>
        <button onClick={changeTitlePrice}>가격 순(고가 순)</button>
      </div>
    </div>
  );
};

export default SortButtonOptions;
