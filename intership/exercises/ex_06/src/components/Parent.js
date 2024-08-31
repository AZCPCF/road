const Parent = (props) => (
  <div style={{ background: props.background || "aqua" }}>{props.children}</div>
);
export default Parent;
