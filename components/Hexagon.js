import React from "react";
import styled from "styled-components";

const Hexagon = styled.div`
  position: relative;
  width: 100px;
  height: 50px;
  background-color: crimson;

  margin-top: 20px;

  &:before,
  &:after {
    content: "";
    position: absolute;

    width: 0;
    height: 0;

    border-right: 50px solid transparent;
    border-left: 50px solid transparent;
  }

  &:before {
    bottom: 50px;
    border-bottom: 25px solid crimson;
  }

  &:after {
    top: 50px
    border-top: 25px solid crimson;
  }
`;

export default Hexagon;
