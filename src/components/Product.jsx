import React,{ useState } from 'react'
import styled, { keyframes } from 'styled-components';
import ProductDetail from './ProductDetail';
import { FaStar } from 'react-icons/fa';
const products = [
  { id: 1, name: 'Earrings', category: 'Earrings', price: 150, image: '/images/new-product-1.jpg', description: 'Beautiful Earrings'},
  { id: 2, name: 'Silver Ring', category: 'Rings', price: 75, image: '/images/new-product-2.jpg', description: 'Elegant silver ring' },
  { id: 3, name: 'Gold Necklace', category: 'Necklaces', price: 150, image: '/images/new-product-3.jpg', description: 'Beautiful Gold ' },
  { id: 4, name: 'Dimond Ring', category: 'Rings', price: 75, image: '/images/new-product-4.jpg', description: 'Elegant silver ring'},
  { id: 5, name: 'Gold Ring', category: 'Rings', price: 150, image: '/images/product-1.jpg', description: 'Beautiful Gold Rnecklaceing'},
  { id: 6, name: 'Silver Ring', category: 'Rings', price: 75, image: '/images/product-2.jpg', description: 'Elegant silver ring'},
  
];



const categories = ['All', 'Necklaces', 'Rings', 'Earrings'];
const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter(product =>
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    }
    return b.price - a.price;
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  return (
<Container>
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />
      ) : (
        <>
          <Header>
            <Title>Product Listings</Title>
            <Controls>
              <CategoryFilter>
                {categories.map(category => (
                  <CategoryButton
                    key={category}
                    active={category === selectedCategory}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </CategoryButton>
                ))}
              </CategoryFilter>
           
            </Controls>
          </Header>
          <Products>
            {sortedProducts.map(product => (
              <ProductCard key={product.id} onClick={() => handleProductClick(product)}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <ProductReviews>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <span>(50 reviews)</span>
        </ProductReviews>
              </ProductCard>
            ))}
          </Products>
        </>
      )}
    </Container>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2.5em;
  color: #333;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

const CategoryFilter = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${props => (props.active ? '#007BFF' : '#ccc')};
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.active ? '#0056b3' : '#bbb')};
  }
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductCard = styled.div`
  flex: 1 1 calc(33% - 40px);
  max-width: calc(33% - 40px);
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background: #fde9ed;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 4px;
  }

  h3 {
    margin: 10px 0;
    font-size: 1.5em;
    color: #333;
  }

  p {
    font-size: 18px;
    color: #555;
  }


`;

const ProductReviews = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
    margin-top: 10px;
`;

const StarIcon = styled(FaStar)`
  color: #ffdf00;
  margin-right: 5px;
`;

export default Product