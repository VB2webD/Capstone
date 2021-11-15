import React from "react";
import styled from "styled-components";
import CounterForm from "./CounterForm";
import Image from "next/image";
import Link from "next/link";

const ShopItem = ({ slug, name, price, image }) => {
  return (
    <ItemContainer>
      <Image src={image} width={125} height={125} />
      <div>
        <p>{name}</p>
        <button>Details</button>
        <p>{numberFormat.format(price)}</p>
      </div>
      <CounterForm name={name} slug={slug} price={price} isTiny={true} />
    </ItemContainer>
  );
};

export default ShopItem;

var numberFormat = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

/* -------
 Styles:
------- */

const ItemContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  border-radius: 1rem;
  background-color: var(--bg-color-main-white);
  padding: 0.2rem;
  div {
    display: flex;
    flex-direction: column;
    align-content: center;
    min-height: fit-content;
    width: 100%;
    p {
      height: 2rem;
    }
  }
`;
