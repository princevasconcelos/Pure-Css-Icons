import React from "react";
import styled from "styled-components";

const Heart = styled.div`
  position: relative;

  width: 100px;
  height: 90px;

  &:before,
  &:after {
    content: "";
    position: absolute;

    width: 50px;
    height: 80px;

    left: 50px;
    top: 0;

    background: red;

    border-radius: 50px 50px 0 0;

    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;

export default Heart;
