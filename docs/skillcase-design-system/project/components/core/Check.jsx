// figma node: 1349:20946 check
export function Check(_p = {}) {
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
      <svg width={16} height={11} viewBox="0 0 16 11" fill="none" style={{
        position: "absolute",
        left: 4,
        top: 6,
        width: 16,
        height: 11,
      }}>
        <path d={"M 16 0 L 5 11 L 0 6 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default Check;
