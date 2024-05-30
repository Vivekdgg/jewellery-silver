import React from 'react'
import styled from 'styled-components';
const ProductDetail = ({ product, onBack }) => {
  return (
    <DetailContainer>
      <BackButton onClick={onBack}>Back to Listings</BackButton>
      <ProductInfo>
        <img src={product.image} alt={product.name} />
        <Info>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <p>{product.description}</p>
          {/* Add more product details here */}
        </Info>
      </ProductInfo>
      <Reviews>
        <h3>Reviews</h3>
        {/* Add reviews here */}
      </Reviews>
      <RelatedProducts>
        <h3>Related Products</h3>
        {/* Add related products here */}
      </RelatedProducts>
    </DetailContainer>
  )
}

const DetailContainer = styled.div`
  padding: 20px;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 4px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  gap: 20px;

  img {
    max-width: 300px;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const Info = styled.div`
  h2 {
    margin-top: 0;
  }

  p {
    margin: 10px 0;
  }
`;

const Reviews = styled.div`
  margin-top: 20px;
`;

const RelatedProducts = styled.div`
  margin-top: 20px;
`;

export default ProductDetail