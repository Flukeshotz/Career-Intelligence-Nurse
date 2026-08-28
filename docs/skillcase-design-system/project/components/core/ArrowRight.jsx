// figma node: 1349:11406 arrow-right
export function ArrowRight(_p = {}) {
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
      <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
        position: "absolute",
        left: 5,
        top: 5,
        width: 14,
        height: 14,
      }}>
        <path d={"M 7 0 L 14 7 L 7 14 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default ArrowRight;
