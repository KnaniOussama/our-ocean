import React from "react";
import styled from "styled-components";

const AnimalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  width: ${({ size }) => size || "150px"};
`;
const AnimalImage = styled.img`
  width: ${({ size }) => (parseInt(size))}rem;
  height: auto;
  border-radius: 8px;
`;

const AnimalName = styled.p`
  margin-top: 10px;
  font-size: ${({ size }) => (1.2)}rem;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

const Animal = ({ image, name, size = "150px" }) => {
  return (
    <AnimalContainer size={size}>
      <AnimalImage src={image} alt={name} />
      <AnimalName size={size}>{name}</AnimalName>
    </AnimalContainer>
  );
};

export default Animal;
