import TextActionsItem from "../TextActionsItem";
import { Heading, TextBoxesWrapper } from "./styledCompoents";
const textObject = [
  "He's not the sharpest knife in the drawer.",
  "The big building blozing with lights",
  "Now you must answer some big answers",
  "Get Your Act Together!"
];

const TextActions = () => {
  return (
    <>
      <Heading>Click Me To Modify</Heading>
      <TextBoxesWrapper>
        {textObject.map((item) => (
          <TextActionsItem key={item} textProp={item} />
        ))}
      </TextBoxesWrapper>
    </>
  );
};

export default TextActions;
