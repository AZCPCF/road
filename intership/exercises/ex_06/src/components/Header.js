const Header = (props) =>
  props.title === "PTag" ? (
    <p style={{marginTop:'10px', fontSize: "48px", color: "blueviolet" }}>{props.title}</p>
  ) : (
    <h2 style={{marginTop:'10px', fontSize: "36px", color: "orange" }}>{props.title}</h2>
  );
export default Header;
