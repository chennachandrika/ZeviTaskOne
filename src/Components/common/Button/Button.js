import { ButtonWrapper } from "./styledComponents";

const Button = ({ buttonText, onClickButton }) => {
  return <ButtonWrapper onClick={onClickButton()}>{buttonText}</ButtonWrapper>;
};
export default Button;
