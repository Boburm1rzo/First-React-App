import "./Field.css";

const Field = () => {
  const placeHolder = "Typing...";
  const typeInput = "text";

  return (
    <input className="view" type={typeInput} placeholder={placeHolder}></input>
  );
};

export default Field;
