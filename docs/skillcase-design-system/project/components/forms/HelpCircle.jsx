// figma node: 1349:19256 help-circle
export function HelpCircle(_p = {}) {
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
        <path d={"M 7.09 7 C 7.325 6.332 7.789 5.768 8.4 5.409 C 9.011 5.05 9.729 4.919 10.427 5.039 C 11.125 5.158 11.759 5.522 12.215 6.064 C 12.671 6.606 12.921 7.292 12.92 8 C 12.92 10 9.92 11 9.92 11 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default HelpCircle;
