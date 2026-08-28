import { AvatarCompanyIcon } from './AvatarCompanyIcon.jsx';
import { AvatarOnlineIndicator } from './AvatarOnlineIndicator.jsx';
import { User01 } from './User01.jsx';
import { VerifiedTick } from './VerifiedTick.jsx';

// figma node: 729:614 Avatar (60 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "placeholder=" + __venc(p.placeholder) + '|' + "statusIcon=" + __venc(p.statusIcon) + '|' + "text=" + __venc(p.text);

export function Avatar(_p = {}) {
  const props = { ..._p, size: _p.size ?? "xs", placeholder: _p.placeholder ?? false, statusIcon: _p.statusIcon ?? "false", text: _p.text ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 13,
        width: 56,
        height: 30,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 20,
        textAlign: "center",
        lineHeight: "30px",
        color: "var(--colors-text-text-quaternary-500)",
      }}>{props.text1 ?? "OR"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 64,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 16,
        width: 64,
        height: 32,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 24,
        textAlign: "center",
        lineHeight: "32px",
        color: "var(--colors-text-text-quaternary-500)",
      }}>{props.text1 ?? "OR"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 13,
        width: 56,
        height: 30,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 20,
        textAlign: "center",
        lineHeight: "30px",
        color: "var(--colors-text-text-quaternary-500)",
      }}>{props.text1 ?? "OR"}</span>
      <div style={{
          position: "absolute",
          left: 40,
          top: 40,
          width: 18,
          height: 18,
        }}>{props.icon1 ?? <AvatarCompanyIcon size={"xl"} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 64,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 16,
        width: 64,
        height: 32,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 24,
        textAlign: "center",
        lineHeight: "32px",
        color: "var(--colors-text-text-quaternary-500)",
      }}>{props.text1 ?? "OR"}</span>
      <div style={{
          position: "absolute",
          left: 46,
          top: 46,
          width: 20,
          height: 20,
        }}>{props.icon1 ?? <AvatarCompanyIcon size={"2xl"} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 13,
        width: 56,
        height: 30,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 20,
        textAlign: "center",
        lineHeight: "30px",
        color: "var(--colors-text-text-quaternary-500)",
      }}>{props.text1 ?? "OR"}</span>
      <div style={{
          position: "absolute",
          left: 42,
          top: 42,
          width: 14,
          height: 14,
        }}>{props.icon1 ?? <AvatarOnlineIndicator size={"xl"} online={true} />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 64,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 16,
        width: 64,
        height: 32,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 24,
        textAlign: "center",
        lineHeight: "32px",
        color: "var(--colors-text-text-quaternary-500)",
      }}>{props.text1 ?? "OR"}</span>
      <div style={{
          position: "absolute",
          left: 48,
          top: 48,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <AvatarOnlineIndicator size={"2xl"} online={true} />}</div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 10,
        width: 48,
        height: 28,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 18,
        textAlign: "center",
        lineHeight: "28px",
        color: "var(--colors-text-text-quaternary-500)",
      }}>{props.text1 ?? "OR"}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 10,
        width: 48,
        height: 28,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 18,
        textAlign: "center",
        lineHeight: "28px",
        color: "var(--colors-text-text-quaternary-500)",
      }}>{props.text1 ?? "OR"}</span>
      <div style={{
          position: "absolute",
          left: 34,
          top: 34,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <AvatarCompanyIcon size={"lg"} />}</div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 10,
        width: 48,
        height: 28,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 18,
        textAlign: "center",
        lineHeight: "28px",
        color: "var(--colors-text-text-quaternary-500)",
      }}>{props.text1 ?? "OR"}</span>
      <div style={{
          position: "absolute",
          left: 36,
          top: 36,
          width: 12,
          height: 12,
        }}>{props.icon1 ?? <AvatarOnlineIndicator size={"lg"} online={true} />}</div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 8,
        width: 40,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        textAlign: "center",
        lineHeight: "24px",
        color: "var(--colors-text-text-quaternary-500)",
      }}>{props.text1 ?? "OR"}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 8,
        width: 40,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        textAlign: "center",
        lineHeight: "24px",
        color: "var(--colors-text-text-quaternary-500)",
      }}>{props.text1 ?? "OR"}</span>
      <div style={{
          position: "absolute",
          left: 28,
          top: 28,
          width: 14,
          height: 14,
        }}>{props.icon1 ?? <AvatarCompanyIcon size={"md"} />}</div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 8,
        width: 40,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        textAlign: "center",
        lineHeight: "24px",
        color: "var(--colors-text-text-quaternary-500)",
      }}>{props.text1 ?? "OR"}</span>
      <div style={{
          position: "absolute",
          left: 30,
          top: 30,
          width: 10,
          height: 10,
        }}>{props.icon1 ?? <AvatarOnlineIndicator size={"md"} online={true} />}</div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 0.750px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 6,
        width: 32,
        height: 20,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--colors-text-text-quaternary-500)",
      }}>{props.text1 ?? "OR"}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 0.750px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 6,
        width: 32,
        height: 20,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--colors-text-text-quaternary-500)",
      }}>{props.text1 ?? "OR"}</span>
      <div style={{
          position: "absolute",
          left: 22,
          top: 22,
          width: 12,
          height: 12,
        }}>{props.icon1 ?? <AvatarCompanyIcon size={"sm"} />}</div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 0.750px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 6,
        width: 32,
        height: 20,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        textAlign: "center",
        lineHeight: "20px",
        color: "var(--colors-text-text-quaternary-500)",
      }}>{props.text1 ?? "OR"}</span>
      <div style={{
          position: "absolute",
          left: 24,
          top: 24,
          width: 8,
          height: 8,
        }}>{props.icon1 ?? <AvatarOnlineIndicator size={"sm"} online={true} />}</div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 0.500px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 3,
        width: 24,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "18px",
        color: "var(--colors-text-text-quaternary-500)",
      }}>{props.text1 ?? "OR"}</span>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 0.500px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 3,
        width: 24,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "18px",
        color: "var(--colors-text-text-quaternary-500)",
      }}>{props.text1 ?? "OR"}</span>
      <div style={{
          position: "absolute",
          left: 16,
          top: 16,
          width: 10,
          height: 10,
        }}>{props.icon1 ?? <AvatarCompanyIcon size={"xs"} />}</div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 0.500px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 3,
        width: 24,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "18px",
        color: "var(--colors-text-text-quaternary-500)",
      }}>{props.text1 ?? "OR"}</span>
      <div style={{
          position: "absolute",
          left: 18,
          top: 18,
          width: 6,
          height: 6,
        }}>{props.icon1 ?? <AvatarOnlineIndicator size={"xs"} online={true} />}</div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 12,
          top: 12,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <User01 style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 64,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 16,
          top: 16,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <User01 style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 12,
          top: 12,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <User01 style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 40,
          top: 40,
          width: 18,
          height: 18,
        }}>{props.icon2 ?? <AvatarCompanyIcon size={"xl"} />}</div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 64,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 16,
          top: 16,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <User01 style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 46,
          top: 46,
          width: 20,
          height: 20,
        }}>{props.icon2 ?? <AvatarCompanyIcon size={"2xl"} />}</div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 12,
          top: 12,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <User01 style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 42,
          top: 42,
          width: 14,
          height: 14,
        }}>{props.icon2 ?? <AvatarOnlineIndicator size={"xl"} online={true} />}</div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 64,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 16,
          top: 16,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <User01 style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 48,
          top: 48,
          width: 16,
          height: 16,
        }}>{props.icon2 ?? <AvatarOnlineIndicator size={"2xl"} online={true} />}</div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 10,
          top: 10,
          width: 28,
          height: 28,
        }}>{props.icon1 ?? <User01 style={{ transform: "scale(1.167, 1.167)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 10,
          top: 10,
          width: 28,
          height: 28,
        }}>{props.icon1 ?? <User01 style={{ transform: "scale(1.167, 1.167)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 34,
          top: 34,
          width: 16,
          height: 16,
        }}>{props.icon2 ?? <AvatarCompanyIcon size={"lg"} />}</div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 10,
          top: 10,
          width: 28,
          height: 28,
        }}>{props.icon1 ?? <User01 style={{ transform: "scale(1.167, 1.167)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 36,
          top: 36,
          width: 12,
          height: 12,
        }}>{props.icon2 ?? <AvatarOnlineIndicator size={"lg"} online={true} />}</div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 8,
          top: 8,
          width: 24,
          height: 24,
        }}>{props.icon1 ?? <User01 />}</div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 8,
          top: 8,
          width: 24,
          height: 24,
        }}>{props.icon1 ?? <User01 />}</div>
      <div style={{
          position: "absolute",
          left: 28,
          top: 28,
          width: 14,
          height: 14,
        }}>{props.icon2 ?? <AvatarCompanyIcon size={"md"} />}</div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 8,
          top: 8,
          width: 24,
          height: 24,
        }}>{props.icon1 ?? <User01 />}</div>
      <div style={{
          position: "absolute",
          left: 30,
          top: 30,
          width: 10,
          height: 10,
        }}>{props.icon2 ?? <AvatarOnlineIndicator size={"md"} online={true} />}</div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 0.750px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 20,
          height: 20,
        }}>{props.icon1 ?? <User01 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 0.750px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 20,
          height: 20,
        }}>{props.icon1 ?? <User01 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 22,
          top: 22,
          width: 12,
          height: 12,
        }}>{props.icon2 ?? <AvatarCompanyIcon size={"sm"} />}</div>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 0.750px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 20,
          height: 20,
        }}>{props.icon1 ?? <User01 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 24,
          top: 24,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <AvatarOnlineIndicator size={"sm"} online={true} />}</div>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 0.500px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 4,
          top: 4,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <User01 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 0.500px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 4,
          top: 4,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <User01 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 16,
          top: 16,
          width: 10,
          height: 10,
        }}>{props.icon2 ?? <AvatarCompanyIcon size={"xs"} />}</div>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 9999,
      backgroundColor: "var(--colors-background-bg-tertiary)",
      boxShadow: "inset 0 0 0 0.500px var(--colors-border-border-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 4,
          top: 4,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <User01 style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "absolute",
          left: 18,
          top: 18,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <AvatarOnlineIndicator size={"xs"} online={true} />}</div>
    </div>
  );
  const __body36 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 56,
      height: 56,
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 42,
          top: 42,
          width: 14,
          height: 14,
        }}>{props.icon1 ?? <AvatarOnlineIndicator size={"xl"} online={true} />}</div>
    </div>
  );
  const __body37 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 64,
      height: 64,
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08), 0px 0px 0px 160px rgba(231,0,0,0.14)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 50,
          top: 50,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <AvatarOnlineIndicator size={"2xl"} online={true} />}</div>
    </div>
  );
  const __body38 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 56,
      height: 56,
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 40,
          top: 40,
          width: 18,
          height: 18,
        }}>{props.icon1 ?? <AvatarCompanyIcon size={"xl"} />}</div>
    </div>
  );
  const __body39 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 56,
      height: 56,
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 38,
          top: 38,
          width: 18,
          height: 18,
        }}>{props.icon1 ?? <VerifiedTick size={"xl"} />}</div>
    </div>
  );
  const __body40 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 64,
      height: 64,
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 46,
          top: 46,
          width: 20,
          height: 20,
        }}>{props.icon1 ?? <AvatarCompanyIcon size={"2xl"} />}</div>
    </div>
  );
  const __body41 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 64,
      height: 64,
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 44,
          top: 44,
          width: 20,
          height: 20,
        }}>{props.icon1 ?? <VerifiedTick size={"2xl"} />}</div>
    </div>
  );
  const __body42 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 48,
      height: 48,
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 36,
          top: 36,
          width: 12,
          height: 12,
        }}>{props.icon1 ?? <AvatarOnlineIndicator size={"lg"} online={true} />}</div>
    </div>
  );
  const __body43 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 48,
      height: 48,
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 34,
          top: 34,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <AvatarCompanyIcon size={"lg"} />}</div>
    </div>
  );
  const __body44 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 48,
      height: 48,
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 32,
          top: 32,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <VerifiedTick size={"lg"} />}</div>
    </div>
  );
  const __body45 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 40,
      height: 40,
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 30,
          top: 30,
          width: 10,
          height: 10,
        }}>{props.icon1 ?? <AvatarOnlineIndicator size={"md"} online={true} />}</div>
    </div>
  );
  const __body46 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 40,
      height: 40,
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 28,
          top: 28,
          width: 14,
          height: 14,
        }}>{props.icon1 ?? <AvatarCompanyIcon size={"md"} />}</div>
    </div>
  );
  const __body47 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 40,
      height: 40,
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 26,
          top: 26,
          width: 14,
          height: 14,
        }}>{props.icon1 ?? <VerifiedTick size={"md"} />}</div>
    </div>
  );
  const __body48 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 32,
      height: 32,
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 0.750px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 24,
          top: 24,
          width: 8,
          height: 8,
        }}>{props.icon1 ?? <AvatarOnlineIndicator size={"sm"} online={true} />}</div>
    </div>
  );
  const __body49 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 32,
      height: 32,
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 0.750px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 22,
          top: 22,
          width: 12,
          height: 12,
        }}>{props.icon1 ?? <AvatarCompanyIcon size={"sm"} />}</div>
    </div>
  );
  const __body50 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 32,
      height: 32,
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 0.750px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 12,
          height: 12,
        }}>{props.icon1 ?? <VerifiedTick size={"sm"} />}</div>
    </div>
  );
  const __body51 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 24,
      height: 24,
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 0.500px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 18,
          top: 18,
          width: 6,
          height: 6,
        }}>{props.icon1 ?? <AvatarOnlineIndicator size={"xs"} online={true} />}</div>
    </div>
  );
  const __body52 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 24,
      height: 24,
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 0.500px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 16,
          top: 16,
          width: 10,
          height: 10,
        }}>{props.icon1 ?? <AvatarCompanyIcon size={"xs"} />}</div>
    </div>
  );
  const __body53 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 24,
      height: 24,
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 0.500px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 15,
          top: 15,
          width: 10,
          height: 10,
        }}>{props.icon1 ?? <VerifiedTick size={"xs"} />}</div>
    </div>
  );
  const __body54 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body55 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 64,
      height: 64,
      overflow: "hidden",
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body56 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 48,
      height: 48,
      overflow: "hidden",
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body57 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body58 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 0.750px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body59 = () => (
    <div className={"fig-asset-08a3b47613f2d0f6 " + (props.className || '')} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 0.500px rgba(0,0,0,0.08)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: Size=xl, Placeholder=False, Text=True, Status icon=False
    "size=xl|placeholder=false|statusIcon=false|text=true": __body0,
    // figma: Size=2xl, Placeholder=False, Text=True, Status icon=False
    "size=2xl|placeholder=false|statusIcon=false|text=true": __body1,
    // figma: Size=xl, Placeholder=False, Text=True, Status icon=Company
    "size=xl|placeholder=false|statusIcon=company|text=true": __body2,
    // figma: Size=2xl, Placeholder=False, Text=True, Status icon=Company
    "size=2xl|placeholder=false|statusIcon=company|text=true": __body3,
    // figma: Size=xl, Placeholder=False, Text=True, Status icon=Online indicator
    "size=xl|placeholder=false|statusIcon=online indicator|text=true": __body4,
    // figma: Size=2xl, Placeholder=False, Text=True, Status icon=Online indicator
    "size=2xl|placeholder=false|statusIcon=online indicator|text=true": __body5,
    // figma: Size=lg, Placeholder=False, Text=True, Status icon=False
    "size=lg|placeholder=false|statusIcon=false|text=true": __body6,
    // figma: Size=lg, Placeholder=False, Text=True, Status icon=Company
    "size=lg|placeholder=false|statusIcon=company|text=true": __body7,
    // figma: Size=lg, Placeholder=False, Text=True, Status icon=Online indicator
    "size=lg|placeholder=false|statusIcon=online indicator|text=true": __body8,
    // figma: Size=md, Placeholder=False, Text=True, Status icon=False
    "size=md|placeholder=false|statusIcon=false|text=true": __body9,
    // figma: Size=md, Placeholder=False, Text=True, Status icon=Company
    "size=md|placeholder=false|statusIcon=company|text=true": __body10,
    // figma: Size=md, Placeholder=False, Text=True, Status icon=Online indicator
    "size=md|placeholder=false|statusIcon=online indicator|text=true": __body11,
    // figma: Size=sm, Placeholder=False, Text=True, Status icon=False
    "size=sm|placeholder=false|statusIcon=false|text=true": __body12,
    // figma: Size=sm, Placeholder=False, Text=True, Status icon=Company
    "size=sm|placeholder=false|statusIcon=company|text=true": __body13,
    // figma: Size=sm, Placeholder=False, Text=True, Status icon=Online indicator
    "size=sm|placeholder=false|statusIcon=online indicator|text=true": __body14,
    // figma: Size=xs, Placeholder=False, Text=True, Status icon=False
    "size=xs|placeholder=false|statusIcon=false|text=true": __body15,
    // figma: Size=xs, Placeholder=False, Text=True, Status icon=Company
    "size=xs|placeholder=false|statusIcon=company|text=true": __body16,
    // figma: Size=xs, Placeholder=False, Text=True, Status icon=Online indicator
    "size=xs|placeholder=false|statusIcon=online indicator|text=true": __body17,
    // figma: Size=xl, Placeholder=True, Text=False, Status icon=False
    "size=xl|placeholder=true|statusIcon=false|text=false": __body18,
    // figma: Size=2xl, Placeholder=True, Text=False, Status icon=False
    "size=2xl|placeholder=true|statusIcon=false|text=false": __body19,
    // figma: Size=xl, Placeholder=True, Text=False, Status icon=Company
    "size=xl|placeholder=true|statusIcon=company|text=false": __body20,
    // figma: Size=2xl, Placeholder=True, Text=False, Status icon=Company
    "size=2xl|placeholder=true|statusIcon=company|text=false": __body21,
    // figma: Size=xl, Placeholder=True, Text=False, Status icon=Online indicator
    "size=xl|placeholder=true|statusIcon=online indicator|text=false": __body22,
    // figma: Size=2xl, Placeholder=True, Text=False, Status icon=Online indicator
    "size=2xl|placeholder=true|statusIcon=online indicator|text=false": __body23,
    // figma: Size=lg, Placeholder=True, Text=False, Status icon=False
    "size=lg|placeholder=true|statusIcon=false|text=false": __body24,
    // figma: Size=lg, Placeholder=True, Text=False, Status icon=Company
    "size=lg|placeholder=true|statusIcon=company|text=false": __body25,
    // figma: Size=lg, Placeholder=True, Text=False, Status icon=Online indicator
    "size=lg|placeholder=true|statusIcon=online indicator|text=false": __body26,
    // figma: Size=md, Placeholder=True, Text=False, Status icon=False
    "size=md|placeholder=true|statusIcon=false|text=false": __body27,
    // figma: Size=md, Placeholder=True, Text=False, Status icon=Company
    "size=md|placeholder=true|statusIcon=company|text=false": __body28,
    // figma: Size=md, Placeholder=True, Text=False, Status icon=Online indicator
    "size=md|placeholder=true|statusIcon=online indicator|text=false": __body29,
    // figma: Size=sm, Placeholder=True, Text=False, Status icon=False
    "size=sm|placeholder=true|statusIcon=false|text=false": __body30,
    // figma: Size=sm, Placeholder=True, Text=False, Status icon=Company
    "size=sm|placeholder=true|statusIcon=company|text=false": __body31,
    // figma: Size=sm, Placeholder=True, Text=False, Status icon=Online indicator
    "size=sm|placeholder=true|statusIcon=online indicator|text=false": __body32,
    // figma: Size=xs, Placeholder=True, Text=False, Status icon=False
    "size=xs|placeholder=true|statusIcon=false|text=false": __body33,
    // figma: Size=xs, Placeholder=True, Text=False, Status icon=Company
    "size=xs|placeholder=true|statusIcon=company|text=false": __body34,
    // figma: Size=xs, Placeholder=True, Text=False, Status icon=Online indicator
    "size=xs|placeholder=true|statusIcon=online indicator|text=false": __body35,
    // figma: Size=xl, Placeholder=False, Text=False, Status icon=Online indicator
    "size=xl|placeholder=false|statusIcon=online indicator|text=false": __body36,
    // figma: Size=2xl, Placeholder=False, Text=False, Status icon=Online indicator
    "size=2xl|placeholder=false|statusIcon=online indicator|text=false": __body37,
    // figma: Size=xl, Placeholder=False, Text=False, Status icon=Company
    "size=xl|placeholder=false|statusIcon=company|text=false": __body38,
    // figma: Size=xl, Placeholder=False, Text=False, Status icon=Verified
    "size=xl|placeholder=false|statusIcon=verified|text=false": __body39,
    // figma: Size=2xl, Placeholder=False, Text=False, Status icon=Company
    "size=2xl|placeholder=false|statusIcon=company|text=false": __body40,
    // figma: Size=2xl, Placeholder=False, Text=False, Status icon=Verified
    "size=2xl|placeholder=false|statusIcon=verified|text=false": __body41,
    // figma: Size=lg, Placeholder=False, Text=False, Status icon=Online indicator
    "size=lg|placeholder=false|statusIcon=online indicator|text=false": __body42,
    // figma: Size=lg, Placeholder=False, Text=False, Status icon=Company
    "size=lg|placeholder=false|statusIcon=company|text=false": __body43,
    // figma: Size=lg, Placeholder=False, Text=False, Status icon=Verified
    "size=lg|placeholder=false|statusIcon=verified|text=false": __body44,
    // figma: Size=md, Placeholder=False, Text=False, Status icon=Online indicator
    "size=md|placeholder=false|statusIcon=online indicator|text=false": __body45,
    // figma: Size=md, Placeholder=False, Text=False, Status icon=Company
    "size=md|placeholder=false|statusIcon=company|text=false": __body46,
    // figma: Size=md, Placeholder=False, Text=False, Status icon=Verified
    "size=md|placeholder=false|statusIcon=verified|text=false": __body47,
    // figma: Size=sm, Placeholder=False, Text=False, Status icon=Online indicator
    "size=sm|placeholder=false|statusIcon=online indicator|text=false": __body48,
    // figma: Size=sm, Placeholder=False, Text=False, Status icon=Company
    "size=sm|placeholder=false|statusIcon=company|text=false": __body49,
    // figma: Size=sm, Placeholder=False, Text=False, Status icon=Verified
    "size=sm|placeholder=false|statusIcon=verified|text=false": __body50,
    // figma: Size=xs, Placeholder=False, Text=False, Status icon=Online indicator
    "size=xs|placeholder=false|statusIcon=online indicator|text=false": __body51,
    // figma: Size=xs, Placeholder=False, Text=False, Status icon=Company
    "size=xs|placeholder=false|statusIcon=company|text=false": __body52,
    // figma: Size=xs, Placeholder=False, Text=False, Status icon=Verified
    "size=xs|placeholder=false|statusIcon=verified|text=false": __body53,
    // figma: Size=xl, Placeholder=False, Text=False, Status icon=False
    "size=xl|placeholder=false|statusIcon=false|text=false": __body54,
    // figma: Size=2xl, Placeholder=False, Text=False, Status icon=False
    "size=2xl|placeholder=false|statusIcon=false|text=false": __body55,
    // figma: Size=lg, Placeholder=False, Text=False, Status icon=False
    "size=lg|placeholder=false|statusIcon=false|text=false": __body56,
    // figma: Size=md, Placeholder=False, Text=False, Status icon=False
    "size=md|placeholder=false|statusIcon=false|text=false": __body57,
    // figma: Size=sm, Placeholder=False, Text=False, Status icon=False
    "size=sm|placeholder=false|statusIcon=false|text=false": __body58,
    // figma: Size=xs, Placeholder=False, Text=False, Status icon=False
    "size=xs|placeholder=false|statusIcon=false|text=false": __body59,
  };
  return (__impls[__vkey(props)] ?? __body59)();
}
export default Avatar;
