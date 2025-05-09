const Header = () => {
  const text = "Hello Boburmirzo";
  const getText = (text) => {
    return (
      <div>
        <h1>Hello {text}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius ad
          dolorum, nisi assumenda minima nobis beatae praesentium necessitatibus
          culpa.
        </p>
      </div>
    );
  };

  return <div>{getText("Boburmirzo")}</div>;
};

export default Header;
