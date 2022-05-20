import { useState } from "react";

import { ActionsWrapper, TextWrapper, Para } from "./styledComponents";
import Button from "../common/Button";
import Input from "../common/Input";

const TextActionsItem = ({ textProp }) => {
  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isUnderline, setUnderline] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState("#000000");
  const onClickBold = () => () => {
    setBold(!isBold);
  };
  const onClickItalic = () => () => {
    setItalic(!isItalic);
  };
  const onClickUnderine = () => () => {
    setUnderline(!isUnderline);
  };
  const onChangeFontSize = (value) => {
    setFontSize(Number(value));
  };
  const onChangeFontColor = (value) => {
    setFontColor(value);
  };
  return (
    <>
      <ActionsWrapper>
        <Button buttonText={"Bold"} onClickButton={onClickBold} />
        <Button buttonText={"Italic"} onClickButton={onClickItalic} />
        <Button buttonText={"Underline"} onClickButton={onClickUnderine} />
        <Input
          type={"number"}
          inputValue={fontSize}
          placeholder={"Font Size"}
          onChangeInput={onChangeFontSize}
        />
        <Input
          type={"color"}
          inputValue={fontColor}
          placeholder={"Font Color"}
          onChangeInput={onChangeFontColor}
        />
      </ActionsWrapper>
      <TextWrapper>
        <Para
          isBold={isBold}
          isUnderline={isUnderline}
          fontSize={fontSize}
          isItalic={isItalic}
          fontColor={fontColor}
        >
          {textProp}
        </Para>
      </TextWrapper>
    </>
  );
};

export default TextActionsItem;
