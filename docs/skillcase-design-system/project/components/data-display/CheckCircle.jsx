// figma node: 1349:11134 check-circle
export function CheckCircle(_p = {}) {
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
        <path d={"M 20 10 C 20 15.523 15.523 20 10 20 M 10 0 C 15.523 0 20 4.477 20 10 M 0 10 C 0 4.477 4.477 0 10 0 M 10 20 C 4.477 20 0 15.523 0 10 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default CheckCircle;
