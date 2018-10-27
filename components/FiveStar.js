import React from "react";
import styled from "styled-components";

const FiveStar = styled.div`
  position: relative;
  margin: 50px;

  width: 0;
  height: 0;

  border-right: 100px solid transparent;
  border-bottom: 70px solid crimson;
  border-left: 100px solid transparent;

  transform: rotate(35deg);

  &:before,
  &:after {
    content: "";
    position: absolute;

    width: 0;
    height: 0;
  }

  &:after {
    left: -100px;

    border-right: 100px solid transparent;
    border-bottom: 70px solid crimson;
    border-left: 100px solid transparent;

    transform: rotate(-70deg);
  }

  &:before {
    top: -45px;
    left: -60px;

    border-right: 30px solid transparent;
    border-bottom: 80px solid crimson;
    border-left: 30px solid transparent;

    transform: rotate(-35deg);
  }
`;

export default FiveStar;
