import React from "react";
import styled from "styled-components";

const CurvedTailArrow = styled.div`
  width: 0;
  height: 0;

  border-left: 10px solid transparent;
  border-bottom: 10px solid crimson;

  transform: rotate(10deg);

  &:after {
    content: "";
    width: 15px;
    height: 15px;

    position: absolute;
    top: -2px;
    left: -20px;

    border-top: 3px solid crimson;
    border-radius: 50px 0;

    transform: rotate(45deg);
  }
`;

export default CurvedTailArrow;
