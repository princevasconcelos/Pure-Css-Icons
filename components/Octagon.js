import React from "react";
import styled from "styled-components";

const Octagon = styled.div`
  position: relative;
  width: 100px;
  height: 40px;

  margin: 20px;

  background-color: crimson;

  &:before,
  &:after {
    content: "";
    position: absolute;

    width: 100px;
    height: 0;

    border-right: 30px solid transparent;
    border-left: 30px solid transparent;
  }

  &:before {
    bottom: 40px;
    border-bottom: 30px solid crimson;
  }

  &:after {
    top: 40px
    border-top: 30px solid crimson;
  }
`;

export default Octagon;
