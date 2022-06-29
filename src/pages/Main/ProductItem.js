import Products from './Products';
import './Products.scss';

const ProductItem = ({ productData }) => {
  return (
    <>
      {productData.map(({ product_id, image_url, kor_name, price }) => {
        return (
          <Products
            key={product_id}
            product_id={product_id}
            image_url={image_url}
            kor_name={kor_name}
            price={price}
          />
        );
      })}
    </>
  );
};

export default ProductItem;
