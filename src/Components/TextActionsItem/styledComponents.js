import styled from "styled-components";

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px 5px;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px 5px;
`;

export const Para = styled.p`
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
  text-decoration: ${(props) => (props.isUnderline ? "underline" : "none")};
  font-style: ${(props) => (props.isItalic ? "italic" : "normal")};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "12px")};
  color: ${(props) => (props.fontColor ? `${props.fontColor}` : "#000000")};
`;
