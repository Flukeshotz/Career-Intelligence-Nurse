// figma node: 1:68 Buttons/Button loading icon (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function ButtonsButtonLoadingIcon(_p = {}) {
  const props = { ..._p, size: _p.size ?? "sm" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 18,
        height: 18,
        opacity: 0.3,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 1px var(--colors-foreground-fg-quaternary-400), 0 0 0 1px var(--colors-foreground-fg-quaternary-400)",
      }} />
      <div style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 18,
        height: 18,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 1px var(--colors-foreground-fg-quaternary-400), 0 0 0 1px var(--colors-foreground-fg-quaternary-400)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 20,
        height: 20,
        opacity: 0.3,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 1px var(--colors-foreground-fg-quaternary-400), 0 0 0 1px var(--colors-foreground-fg-quaternary-400)",
      }} />
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 20,
        height: 20,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 1px var(--colors-foreground-fg-quaternary-400), 0 0 0 1px var(--colors-foreground-fg-quaternary-400)",
      }} />
    </div>
  );
  const __impls = {
    // figma: Size=sm
    "size=sm": __body0,
    // figma: Size=md
    "size=md": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ButtonsButtonLoadingIcon;
