// figma node: 729:564 _Avatar online indicator (12 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "online=" + __venc(p.online);

export function AvatarOnlineIndicator(_p = {}) {
  const props = { ..._p, size: _p.size ?? "xs", online: _p.online ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 6,
      height: 6,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-foreground-fg-disabled-subtle)",
      boxShadow: "0 0 0 1.500px var(--colors-background-bg-primary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 6,
      height: 6,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-foreground-fg-success-secondary)",
      boxShadow: "0 0 0 1.500px var(--colors-background-bg-primary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 8,
      height: 8,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-foreground-fg-disabled-subtle)",
      boxShadow: "0 0 0 1.500px var(--colors-background-bg-primary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 8,
      height: 8,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-foreground-fg-success-secondary)",
      boxShadow: "0 0 0 1.500px var(--colors-background-bg-primary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 10,
      height: 10,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-foreground-fg-disabled-subtle)",
      boxShadow: "0 0 0 1.500px var(--colors-background-bg-primary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 10,
      height: 10,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-foreground-fg-success-secondary)",
      boxShadow: "0 0 0 1.500px var(--colors-background-bg-primary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 12,
      height: 12,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-foreground-fg-disabled-subtle)",
      boxShadow: "0 0 0 1.500px var(--colors-background-bg-primary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 12,
      height: 12,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-foreground-fg-success-secondary)",
      boxShadow: "0 0 0 1.500px var(--colors-background-bg-primary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 14,
      height: 14,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-foreground-fg-disabled-subtle)",
      boxShadow: "0 0 0 1.500px var(--colors-background-bg-primary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-foreground-fg-disabled-subtle)",
      boxShadow: "0 0 0 1.500px var(--colors-background-bg-primary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 14,
      height: 14,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-foreground-fg-success-secondary)",
      boxShadow: "0 0 0 1.500px var(--colors-background-bg-primary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-foreground-fg-success-secondary)",
      boxShadow: "0 0 0 1.500px var(--colors-background-bg-primary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: Size=xs, Online=False
    "size=xs|online=false": __body0,
    // figma: Size=xs, Online=True
    "size=xs|online=true": __body1,
    // figma: Size=sm, Online=False
    "size=sm|online=false": __body2,
    // figma: Size=sm, Online=True
    "size=sm|online=true": __body3,
    // figma: Size=md, Online=False
    "size=md|online=false": __body4,
    // figma: Size=md, Online=True
    "size=md|online=true": __body5,
    // figma: Size=lg, Online=False
    "size=lg|online=false": __body6,
    // figma: Size=lg, Online=True
    "size=lg|online=true": __body7,
    // figma: Size=xl, Online=False
    "size=xl|online=false": __body8,
    // figma: Size=2xl, Online=False
    "size=2xl|online=false": __body9,
    // figma: Size=xl, Online=True
    "size=xl|online=true": __body10,
    // figma: Size=2xl, Online=True
    "size=2xl|online=true": __body11,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default AvatarOnlineIndicator;
