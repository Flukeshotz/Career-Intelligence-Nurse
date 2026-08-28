import { XClose } from './XClose.jsx';

// figma node: 1349:20985 _Tag close X (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "state=" + __venc(p.state);

export function TagCloseX(_p = {}) {
  const props = { ..._p, size: _p.size ?? "sm", state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 3,
      display: "flex",
      flexDirection: "column",
      padding: "2px 2px 2px 2px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xxs) * 1px)",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingRight: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 10,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <XClose />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 3,
      display: "flex",
      flexDirection: "column",
      padding: "2px 2px 2px 2px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xxs) * 1px)",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingRight: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <XClose />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 3,
      display: "flex",
      flexDirection: "column",
      padding: "3px 3px 3px 3px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 14,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <XClose />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 3,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "column",
      padding: "2px 2px 2px 2px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xxs) * 1px)",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingRight: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 10,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <XClose />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 3,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "column",
      padding: "2px 2px 2px 2px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xxs) * 1px)",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingRight: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <XClose />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 3,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "column",
      padding: "3px 3px 3px 3px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 14,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <XClose />}</div>
    </div>
  );
  const __impls = {
    // figma: Size=sm, State=Default
    "size=sm|state=default": __body0,
    // figma: Size=md, State=Default
    "size=md|state=default": __body1,
    // figma: Size=lg, State=Default
    "size=lg|state=default": __body2,
    // figma: Size=sm, State=Hover
    "size=sm|state=hover": __body3,
    // figma: Size=md, State=Hover
    "size=md|state=hover": __body4,
    // figma: Size=lg, State=Hover
    "size=lg|state=hover": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TagCloseX;
