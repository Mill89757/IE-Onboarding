import styled from "styled-components";

export default function CheckTool({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  * {
    background: #000 !important;
    color: #0f0 !important;
    outline: solid #f00 1px !important;
  }
`;
