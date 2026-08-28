// figma node: 1:665 x-close
export function XClose(_p = {}) {
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
      <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
        position: "absolute",
        left: 6,
        top: 6,
        width: 12,
        height: 12,
      }}>
        <path d={"M 12.707 0.707 C 13.098 0.317 13.098 -0.317 12.707 -0.707 C 12.317 -1.098 11.683 -1.098 11.293 -0.707 L 12 0 L 12.707 0.707 Z M -0.707 11.293 C -1.098 11.683 -1.098 12.317 -0.707 12.707 C -0.317 13.098 0.317 13.098 0.707 12.707 L 0 12 L -0.707 11.293 Z M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 11.293 12.707 C 11.683 13.098 12.317 13.098 12.707 12.707 C 13.098 12.317 13.098 11.683 12.707 11.293 L 12 12 L 11.293 12.707 Z M 12 0 L 11.293 -0.707 L -0.707 11.293 L 0 12 L 0.707 12.707 L 12.707 0.707 L 12 0 Z M 0 0 L -0.707 0.707 L 11.293 12.707 L 12 12 L 12.707 11.293 L 0.707 -0.707 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default XClose;
