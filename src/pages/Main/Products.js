import { Link } from 'react-router-dom';
import './Products.scss';

const Products = ({ img, title, price, hashtxt1, hashtxt2 }) => {
  return (
    <div className="productList">
      <Link to="#" className="productItemLink">
        <div className="productItemThumb">
          <img src={img} alt="thumb1" />
        </div>
      </Link>
      <div className="productItemHashWrap">
        <span className="productItemHash">{hashtxt1}</span>
        <span className="productItemHash">{hashtxt2}</span>
        <p className="productPrice">{price}원</p>
      </div>
      <div className="productItemName">{title}</div>
    </div>
  );
};

export default Products;
