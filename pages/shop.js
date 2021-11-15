import React from "react";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import ShopItem from "../components/ShopItem";
import { getItems } from "../utils/data/getData";

const Shop = ({ items }) => {
  return (
    <Layout title="Shop" hasFooter hasCart>
      <h1>Tasty sweets</h1>
      <StyledItemDisplay>
        {items.map(({ slug, name, price, isInStock, image }) => (
          <ShopItem
            name={name.de}
            image={image.small}
            price={price}
            key={slug}
            slug={slug}
            isInStock={isInStock}
          />
        ))}
      </StyledItemDisplay>
    </Layout>
  );
};

export default Shop;

/* -------
  Styles:
------- */
const StyledItemDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`;

/* --------------------------
  provide Server side props:
-------------------------- */

export async function getStaticProps() {
  const res = await getItems();
  const items = await JSON.parse(JSON.stringify(res));
  if (!items) {
    console.log("failed to fetch item Data");
    return {
      notFound: true,
    };
  }

  return {
    props: { items },
  };
}
