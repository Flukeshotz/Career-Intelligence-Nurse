// figma node: 1349:20998 _Tag count (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function TagCount(_p = {}) {
  const props = { ..._p, size: _p.size ?? "sm" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 3,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 4px 0px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--colors-text-text-secondary-700)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "5"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 3,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 5px 0px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--colors-text-text-secondary-700)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "5"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 3,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--colors-text-text-secondary-700)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "5"}</span>
    </div>
  );
  const __impls = {
    // figma: Size=sm
    "size=sm": __body0,
    // figma: Size=md
    "size=md": __body1,
    // figma: Size=lg
    "size=lg": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TagCount;
