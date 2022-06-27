import { Link, useNavigate } from 'react-router-dom';
import './Products.scss';

const Products = ({ product_id, image_url, kor_name, price }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/${product_id}`);
  };

  return (
    <div className="productList" onClick={goToDetail}>
      <Link to="#" className="productItemLink">
        <div className="productItemThumb">
          <img src={image_url[0]} alt="thumb1" />
        </div>
      </Link>
      <div className="productItemHashWrap">
        <p className="productPrice">{price}원</p>
      </div>
      <div className="productItemName">{kor_name}</div>
    </div>
  );
};

export default Products;
