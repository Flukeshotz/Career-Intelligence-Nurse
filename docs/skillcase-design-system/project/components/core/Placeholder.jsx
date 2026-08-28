// figma node: 1:6 placeholder
export function Placeholder(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 20,
        height: 20,
      }}>
        <path d={"M 20 10 L 19 10 C 19 14.971 14.971 19 10 19 L 10 20 L 10 21 C 16.075 21 21 16.075 21 10 L 20 10 Z M 10 20 L 10 19 C 5.029 19 1 14.971 1 10 L 0 10 L -1 10 C -1 16.075 3.925 21 10 21 L 10 20 Z M 0 10 L 1 10 C 1 5.029 5.029 1 10 1 L 10 0 L 10 -1 C 3.925 -1 -1 3.925 -1 10 L 0 10 Z M 10 0 L 10 1 C 14.971 1 19 5.029 19 10 L 20 10 L 21 10 C 21 3.925 16.075 -1 10 -1 L 10 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default Placeholder;
