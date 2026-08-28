import { Cursor } from './Cursor.jsx';
import { HelpCircle } from './HelpCircle.jsx';
import { Tooltip } from './Tooltip.jsx';

// figma node: 1349:19407 Help icon (28 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "open=" + __venc(p.open) + '|' + "supportingText=" + __venc(p.supportingText) + '|' + "tooltip=" + __venc(p.tooltip);

export function HelpIcon(_p = {}) {
  const props = { ..._p, cursor: _p.cursor ?? true, open: _p.open ?? false, supportingText: _p.supportingText ?? false, tooltip: _p.tooltip ?? "top no arrow" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <HelpCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <HelpCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <Tooltip
        style={{ position: "absolute", left: -48.5, top: -38 }}
        supportingText={false}
        arrow={"none"}
      />
      {props.cursor && (
      <div style={{
          position: "absolute",
          left: 6,
          top: 8,
          width: 20,
          height: 20,
        }}>{props.icon2 ?? <Cursor type={"hand point"} />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <HelpCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <Tooltip
        style={{ position: "absolute", left: -152, top: -102 }}
        supportingText={true}
        arrow={"none"}
      />
      {props.cursor && (
      <div style={{
          position: "absolute",
          left: 6,
          top: 8,
          width: 20,
          height: 20,
        }}>{props.icon2 ?? <Cursor type={"hand point"} />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <HelpCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <Tooltip
        style={{ position: "absolute", left: -48.5, top: -44 }}
        supportingText={false}
        arrow={"bottom center"}
      />
      {props.cursor && (
      <div style={{
          position: "absolute",
          left: 6,
          top: 8,
          width: 20,
          height: 20,
        }}>{props.icon2 ?? <Cursor type={"hand point"} />}</div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <HelpCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <Tooltip
        style={{
          position: "absolute",
          left: -48,
          top: -44,
          width: 112,
          height: 40,
        }}
        supportingText={true}
        arrow={"bottom center"}
      />
      {props.cursor && (
      <div style={{
          position: "absolute",
          left: 6,
          top: 8,
          width: 20,
          height: 20,
        }}>{props.icon2 ?? <Cursor type={"hand point"} />}</div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <HelpCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <Tooltip
        style={{ position: "absolute", left: -12, top: -44 }}
        supportingText={false}
        arrow={"bottom left"}
      />
      {props.cursor && (
      <div style={{
          position: "absolute",
          left: 6,
          top: 8,
          width: 20,
          height: 20,
        }}>{props.icon2 ?? <Cursor type={"hand point"} />}</div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <HelpCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <Tooltip
        style={{ position: "absolute", left: -12, top: -108 }}
        supportingText={true}
        arrow={"bottom left"}
      />
      {props.cursor && (
      <div style={{
          position: "absolute",
          left: 6,
          top: 8,
          width: 20,
          height: 20,
        }}>{props.icon2 ?? <Cursor type={"hand point"} />}</div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <HelpCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <Tooltip
        style={{ position: "absolute", left: -84, top: -44 }}
        supportingText={false}
        arrow={"bottom right"}
      />
      {props.cursor && (
      <div style={{
          position: "absolute",
          left: 6,
          top: 8,
          width: 20,
          height: 20,
        }}>{props.icon2 ?? <Cursor type={"hand point"} />}</div>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <HelpCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <Tooltip
        style={{ position: "absolute", left: -292, top: -108 }}
        supportingText={true}
        arrow={"bottom right"}
      />
      {props.cursor && (
      <div style={{
          position: "absolute",
          left: 6,
          top: 8,
          width: 20,
          height: 20,
        }}>{props.icon2 ?? <Cursor type={"hand point"} />}</div>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <HelpCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <Tooltip
        style={{ position: "absolute", left: -47.5, top: 20 }}
        supportingText={false}
        arrow={"top center"}
      />
      {props.cursor && (
      <div style={{
          position: "absolute",
          left: 6,
          top: 8,
          width: 20,
          height: 20,
        }}>{props.icon2 ?? <Cursor type={"hand point"} />}</div>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <HelpCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <Tooltip
        style={{ position: "absolute", left: -152, top: 20 }}
        supportingText={true}
        arrow={"top center"}
      />
      {props.cursor && (
      <div style={{
          position: "absolute",
          left: 6,
          top: 8,
          width: 20,
          height: 20,
        }}>{props.icon2 ?? <Cursor type={"hand point"} />}</div>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <HelpCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <Tooltip
        style={{
          position: "absolute",
          left: 20,
          top: -9,
          width: 118,
        }}
        supportingText={false}
        arrow={"left"}
      />
      {props.cursor && (
      <div style={{
          position: "absolute",
          left: 6,
          top: 8,
          width: 20,
          height: 20,
        }}>{props.icon2 ?? <Cursor type={"hand point"} />}</div>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <HelpCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <Tooltip
        style={{
          position: "absolute",
          left: 20,
          top: -41,
          width: 326,
        }}
        supportingText={true}
        arrow={"left"}
      />
      {props.cursor && (
      <div style={{
          position: "absolute",
          left: 6,
          top: 8,
          width: 20,
          height: 20,
        }}>{props.icon2 ?? <Cursor type={"hand point"} />}</div>
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <HelpCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <Tooltip
        style={{
          position: "absolute",
          left: -121,
          top: -9,
          width: 118,
        }}
        supportingText={false}
        arrow={"right"}
      />
      {props.cursor && (
      <div style={{
          position: "absolute",
          left: 6,
          top: 8,
          width: 20,
          height: 20,
        }}>{props.icon2 ?? <Cursor type={"hand point"} />}</div>
      )}
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <HelpCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <Tooltip
        style={{
          position: "absolute",
          left: -330,
          top: -41,
          width: 326,
        }}
        supportingText={true}
        arrow={"right"}
      />
      {props.cursor && (
      <div style={{
          position: "absolute",
          left: 6,
          top: 8,
          width: 20,
          height: 20,
        }}>{props.icon2 ?? <Cursor type={"hand point"} />}</div>
      )}
    </div>
  );
  const __impls = {
    // figma: Open=False, Supporting text=False, Tooltip=Top no arrow
    "open=false|supportingText=false|tooltip=top no arrow": __body0,
    // figma: Open=False, Supporting text=True, Tooltip=Top no arrow
    "open=false|supportingText=true|tooltip=top no arrow": __body0,
    // figma: Open=False, Supporting text=False, Tooltip=Top arrow
    "open=false|supportingText=false|tooltip=top arrow": __body0,
    // figma: Open=False, Supporting text=True, Tooltip=Top arrow
    "open=false|supportingText=true|tooltip=top arrow": __body0,
    // figma: Open=False, Supporting text=False, Tooltip=Top right
    "open=false|supportingText=false|tooltip=top right": __body0,
    // figma: Open=False, Supporting text=True, Tooltip=Top right
    "open=false|supportingText=true|tooltip=top right": __body0,
    // figma: Open=False, Supporting text=False, Tooltip=Top left
    "open=false|supportingText=false|tooltip=top left": __body0,
    // figma: Open=False, Supporting text=True, Tooltip=Top left
    "open=false|supportingText=true|tooltip=top left": __body0,
    // figma: Open=False, Supporting text=False, Tooltip=Bottom
    "open=false|supportingText=false|tooltip=bottom": __body0,
    // figma: Open=False, Supporting text=True, Tooltip=Bottom
    "open=false|supportingText=true|tooltip=bottom": __body0,
    // figma: Open=False, Supporting text=False, Tooltip=Right
    "open=false|supportingText=false|tooltip=right": __body0,
    // figma: Open=False, Supporting text=True, Tooltip=Right
    "open=false|supportingText=true|tooltip=right": __body0,
    // figma: Open=False, Supporting text=False, Tooltip=Left
    "open=false|supportingText=false|tooltip=left": __body0,
    // figma: Open=False, Supporting text=True, Tooltip=Left
    "open=false|supportingText=true|tooltip=left": __body0,
    // figma: Open=True, Supporting text=False, Tooltip=Top no arrow
    "open=true|supportingText=false|tooltip=top no arrow": __body1,
    // figma: Open=True, Supporting text=True, Tooltip=Top no arrow
    "open=true|supportingText=true|tooltip=top no arrow": __body2,
    // figma: Open=True, Supporting text=False, Tooltip=Top arrow
    "open=true|supportingText=false|tooltip=top arrow": __body3,
    // figma: Open=True, Supporting text=True, Tooltip=Top arrow
    "open=true|supportingText=true|tooltip=top arrow": __body4,
    // figma: Open=True, Supporting text=False, Tooltip=Top right
    "open=true|supportingText=false|tooltip=top right": __body5,
    // figma: Open=True, Supporting text=True, Tooltip=Top right
    "open=true|supportingText=true|tooltip=top right": __body6,
    // figma: Open=True, Supporting text=False, Tooltip=Top left
    "open=true|supportingText=false|tooltip=top left": __body7,
    // figma: Open=True, Supporting text=True, Tooltip=Top left
    "open=true|supportingText=true|tooltip=top left": __body8,
    // figma: Open=True, Supporting text=False, Tooltip=Bottom
    "open=true|supportingText=false|tooltip=bottom": __body9,
    // figma: Open=True, Supporting text=True, Tooltip=Bottom
    "open=true|supportingText=true|tooltip=bottom": __body10,
    // figma: Open=True, Supporting text=False, Tooltip=Right
    "open=true|supportingText=false|tooltip=right": __body11,
    // figma: Open=True, Supporting text=True, Tooltip=Right
    "open=true|supportingText=true|tooltip=right": __body12,
    // figma: Open=True, Supporting text=False, Tooltip=Left
    "open=true|supportingText=false|tooltip=left": __body13,
    // figma: Open=True, Supporting text=True, Tooltip=Left
    "open=true|supportingText=true|tooltip=left": __body14,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default HelpIcon;
