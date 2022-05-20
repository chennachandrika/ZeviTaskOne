import { InputWrapper } from "./styledComponents";

const Input = ({ type, inputValue, placeholder, onChangeInput }) => {
  const changeInput = (event) => {
    onChangeInput(event.target.value);
  };
  return (
    <InputWrapper
      type={type}
      value={inputValue}
      placeholder={placeholder}
      onChange={changeInput}
    />
  );
};
export default Input;
