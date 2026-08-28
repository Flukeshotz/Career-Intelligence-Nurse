// figma node: 1349:11377 _Dot (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "outline=" + __venc(p.outline);

export function Dot(_p = {}) {
  const props = { ..._p, size: _p.size ?? "sm", outline: _p.outline ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 10,
      height: 10,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: "var(--colors-foreground-fg-success-secondary)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 10,
      height: 10,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: "var(--colors-foreground-fg-success-secondary)",
        boxShadow: "0 0 0 4px var(--colors-background-bg-success-secondary)",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 12,
      height: 12,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: "var(--colors-foreground-fg-success-secondary)",
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 12,
      height: 12,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: "var(--colors-foreground-fg-success-secondary)",
        boxShadow: "0 0 0 5px var(--colors-background-bg-success-secondary)",
      }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 8,
      height: 8,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "var(--colors-foreground-fg-success-secondary)",
      }} />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 8,
      height: 8,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "var(--colors-foreground-fg-success-secondary)",
        boxShadow: "0 0 0 3px var(--colors-background-bg-success-secondary)",
      }} />
    </div>
  );
  const __impls = {
    // figma: Size=md, Outline=False
    "size=md|outline=false": __body0,
    // figma: Size=md, Outline=True
    "size=md|outline=true": __body1,
    // figma: Size=lg, Outline=False
    "size=lg|outline=false": __body2,
    // figma: Size=lg, Outline=True
    "size=lg|outline=true": __body3,
    // figma: Size=sm, Outline=False
    "size=sm|outline=false": __body4,
    // figma: Size=sm, Outline=True
    "size=sm|outline=true": __body5,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default Dot;
