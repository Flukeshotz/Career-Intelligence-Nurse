// figma node: 729:554 _Avatar company icon (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function AvatarCompanyIcon(_p = {}) {
  const props = { ..._p, size: _p.size ?? "xs" };
  const __body0 = () => (
    <div className={"fig-asset-e6cb6a2fd1a07e96 " + (props.className || '')} style={{
      width: 10,
      height: 10,
      overflow: "hidden",
      borderRadius: 9999,
      boxShadow: "0 0 0 1.500px var(--colors-background-bg-primary)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={"fig-asset-e6cb6a2fd1a07e96 " + (props.className || '')} style={{
      width: 12,
      height: 12,
      overflow: "hidden",
      borderRadius: 9999,
      boxShadow: "0 0 0 1.500px var(--colors-background-bg-primary)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body2 = () => (
    <div className={"fig-asset-e6cb6a2fd1a07e96 " + (props.className || '')} style={{
      width: 14,
      height: 14,
      overflow: "hidden",
      borderRadius: 9999,
      boxShadow: "0 0 0 1.500px var(--colors-background-bg-primary)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body3 = () => (
    <div className={"fig-asset-e6cb6a2fd1a07e96 " + (props.className || '')} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 9999,
      boxShadow: "0 0 0 1.500px var(--colors-background-bg-primary)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body4 = () => (
    <div className={"fig-asset-e6cb6a2fd1a07e96 " + (props.className || '')} style={{
      width: 18,
      height: 18,
      overflow: "hidden",
      borderRadius: 9999,
      boxShadow: "0 0 0 1.500px var(--colors-background-bg-primary)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body5 = () => (
    <div className={"fig-asset-e6cb6a2fd1a07e96 " + (props.className || '')} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      borderRadius: 9999,
      boxShadow: "0 0 0 1.667px var(--colors-background-bg-primary)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: Size=xs
    "size=xs": __body0,
    // figma: Size=sm
    "size=sm": __body1,
    // figma: Size=md
    "size=md": __body2,
    // figma: Size=lg
    "size=lg": __body3,
    // figma: Size=xl
    "size=xl": __body4,
    // figma: Size=2xl
    "size=2xl": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default AvatarCompanyIcon;
