// figma node: 729:8558 –––– Section divider –––– (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "breakpoint=" + __venc(p.breakpoint);

export function SectionDivider(_p = {}) {
  const props = { ..._p, breakpoint: _p.breakpoint ?? "desktop" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1440,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--colors-border-border-secondary)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 1280,
        display: "flex",
        flexDirection: "column",
        gap: 32,
        padding: "0px 32px 0px 32px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg height={1} viewBox="0 0 1216 1" fill="none" style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 1216 1 L 0 1 L 0 0 L 1216 0 L 1216 1 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 375,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--colors-border-border-secondary)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 32,
        padding: "0px 16px 0px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <svg height={1} viewBox="0 0 343 1" fill="none" style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 343 1 L 0 1 L 0 0 L 343 0 L 343 1 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: Breakpoint=Desktop
    "breakpoint=desktop": __body0,
    // figma: Breakpoint=Mobile
    "breakpoint=mobile": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default SectionDivider;
