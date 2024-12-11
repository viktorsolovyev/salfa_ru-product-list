import React, { FC } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const ProductsPage: FC = () => {
  return (
    <>
      <Header label="Products" />
      <StyledProductsPage></StyledProductsPage>
    </>
  );
};

const StyledProductsPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1680px;
  gap: 30px;
  margin: 0 auto;
  align-items: center;
  max-width: 1700px;
  margin-top: 25px;
  justify-content: center;
`;

export default ProductsPage;
