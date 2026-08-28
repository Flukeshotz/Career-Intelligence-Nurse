import { Check } from './Check.jsx';

// figma node: 1349:20948 _Tag checkbox (24 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "checked=" + __venc(p.checked) + '|' + "size=" + __venc(p.size) + '|' + "state=" + __venc(p.state);

export function TagCheckbox(_p = {}) {
  const props = { ..._p, checked: _p.checked ?? false, size: _p.size ?? "sm", state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 14,
      height: 14,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 14,
      height: 14,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-disabled-subtle)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 14,
      height: 14,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 14,
      height: 14,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0 0 0 1px var(--colors-background-bg-brand-solid)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 10,
          height: 10,
        }}>{props.icon1 ?? <Check style={{ transform: "scale(0.417, 0.417)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 14,
      height: 14,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-disabled-subtle)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 10,
          height: 10,
        }}>{props.icon1 ?? <Check style={{ transform: "scale(0.417, 0.417)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 14,
      height: 14,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0 0 0 1px var(--colors-background-bg-brand-solid), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 10,
          height: 10,
        }}>{props.icon1 ?? <Check style={{ transform: "scale(0.417, 0.417)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 14,
      height: 14,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-background-bg-brand-solid-hover)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 10,
          height: 10,
        }}>{props.icon1 ?? <Check style={{ transform: "scale(0.417, 0.417)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-disabled-subtle)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-disabled-subtle)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0 0 0 1px var(--colors-background-bg-brand-solid)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 12,
          height: 12,
        }}>{props.icon1 ?? <Check style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0 0 0 1px var(--colors-background-bg-brand-solid)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 14,
          height: 14,
        }}>{props.icon1 ?? <Check style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-disabled-subtle)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 12,
          height: 12,
        }}>{props.icon1 ?? <Check style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-disabled-subtle)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 14,
          height: 14,
        }}>{props.icon1 ?? <Check style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0 0 0 1px var(--colors-background-bg-brand-solid), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 12,
          height: 12,
        }}>{props.icon1 ?? <Check style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0 0 0 1px var(--colors-background-bg-brand-solid), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 14,
          height: 14,
        }}>{props.icon1 ?? <Check style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-background-bg-brand-solid-hover)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 12,
          height: 12,
        }}>{props.icon1 ?? <Check style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-background-bg-brand-solid-hover)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 14,
          height: 14,
        }}>{props.icon1 ?? <Check style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: Checked=False, Size=sm, State=Default
    "checked=false|size=sm|state=default": __body0,
    // figma: Checked=False, Size=sm, State=Disbaled
    "checked=false|size=sm|state=disbaled": __body1,
    // figma: Checked=False, Size=sm, State=Focused
    "checked=false|size=sm|state=focused": __body2,
    // figma: Checked=False, Size=sm, State=Hover
    "checked=false|size=sm|state=hover": __body0,
    // figma: Checked=True, Size=sm, State=Default
    "checked=true|size=sm|state=default": __body3,
    // figma: Checked=True, Size=sm, State=Disbaled
    "checked=true|size=sm|state=disbaled": __body4,
    // figma: Checked=True, Size=sm, State=Focused
    "checked=true|size=sm|state=focused": __body5,
    // figma: Checked=True, Size=sm, State=Hover
    "checked=true|size=sm|state=hover": __body6,
    // figma: Checked=False, Size=md, State=Default
    "checked=false|size=md|state=default": __body7,
    // figma: Checked=False, Size=lg, State=Default
    "checked=false|size=lg|state=default": __body8,
    // figma: Checked=False, Size=md, State=Disbaled
    "checked=false|size=md|state=disbaled": __body9,
    // figma: Checked=False, Size=lg, State=Disbaled
    "checked=false|size=lg|state=disbaled": __body10,
    // figma: Checked=False, Size=md, State=Focused
    "checked=false|size=md|state=focused": __body11,
    // figma: Checked=False, Size=lg, State=Focused
    "checked=false|size=lg|state=focused": __body12,
    // figma: Checked=False, Size=md, State=Hover
    "checked=false|size=md|state=hover": __body7,
    // figma: Checked=False, Size=lg, State=Hover
    "checked=false|size=lg|state=hover": __body8,
    // figma: Checked=True, Size=md, State=Default
    "checked=true|size=md|state=default": __body13,
    // figma: Checked=True, Size=lg, State=Default
    "checked=true|size=lg|state=default": __body14,
    // figma: Checked=True, Size=md, State=Disbaled
    "checked=true|size=md|state=disbaled": __body15,
    // figma: Checked=True, Size=lg, State=Disbaled
    "checked=true|size=lg|state=disbaled": __body16,
    // figma: Checked=True, Size=md, State=Focused
    "checked=true|size=md|state=focused": __body17,
    // figma: Checked=True, Size=lg, State=Focused
    "checked=true|size=lg|state=focused": __body18,
    // figma: Checked=True, Size=md, State=Hover
    "checked=true|size=md|state=hover": __body19,
    // figma: Checked=True, Size=lg, State=Hover
    "checked=true|size=lg|state=hover": __body20,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TagCheckbox;
