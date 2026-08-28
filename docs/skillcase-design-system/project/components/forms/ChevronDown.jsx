// figma node: 1349:21360 chevron-down
export function ChevronDown(_p = {}) {
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
      <svg width={12} height={6} viewBox="0 0 12 6" fill="none" style={{
        position: "absolute",
        left: 6,
        top: 9,
        width: 12,
        height: 6,
      }}>
        <path d={"M 0 0 L 6 6 L 12 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default ChevronDown;
