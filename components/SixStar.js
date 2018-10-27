import React from "react";
import styled from "styled-components";

const SixStar = styled.div`
  width: 0;
  height: 0;
  position: relative;

  margin-top: 10px;

  border-top: 100px solid crimson;
  border-right: 50px solid transparent;
  border-left: 50px solid transparent;

  &:after {
    content: "";
    position: absolute;

    width: 0;
    height: 0

    bottom: 35px;
    left: -50px;

    border-right: 50px solid transparent;
    border-bottom: 100px solid crimson;
    border-left: 50px solid transparent;
  }
`;

export default SixStar;
