// figma node: 1349:19260 Tooltip (14 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "supportingText=" + __venc(p.supportingText) + '|' + "arrow=" + __venc(p.arrow);

export function Tooltip(_p = {}) {
  const props = { ..._p, text: _p.text ?? "This is a tooltip", supportingText: _p.supportingText ?? false, arrow: _p.arrow ?? "none" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 12px 16px -4px rgba(10,13,18,0.08), 0px 4px 6px -2px rgba(10,13,18,0.03), 0px 2px 2px -1px rgba(10,13,18,0.04)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--colors-background-bg-primary-solid)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--colors-background-bg-primary-solid)",
        display: "flex",
        flexDirection: "column",
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-lg) * 1px)",
        paddingRight: "calc(var(--spacing-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-lg) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          maxWidth: 296,
          maxHeight: null,
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            lineHeight: "18px",
            color: "var(--colors-text-text-white)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "18px",
            color: "var(--component-colors-components-tooltips-tooltip-supporting-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text."}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 16,
        height: 6,
        flexShrink: 0,
      }}>
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,-0.707,0.707,8,-11)",
          transformOrigin: "0 0",
          width: 12,
          height: 12,
          borderRadius: 1,
        }}>
          <path d={"M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 12px 16px -4px rgba(10,13,18,0.08), 0px 4px 6px -2px rgba(10,13,18,0.03), 0px 2px 2px -1px rgba(10,13,18,0.04)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--colors-background-bg-primary-solid)",
        display: "flex",
        flexDirection: "column",
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-lg) * 1px)",
        paddingRight: "calc(var(--spacing-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-lg) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          maxWidth: 296,
          maxHeight: null,
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            lineHeight: "18px",
            color: "var(--colors-text-text-white)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "18px",
            color: "var(--component-colors-components-tooltips-tooltip-supporting-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text."}</span>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 12px 16px -4px rgba(10,13,18,0.08), 0px 4px 6px -2px rgba(10,13,18,0.03), 0px 2px 2px -1px rgba(10,13,18,0.04)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--colors-background-bg-primary-solid)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--colors-background-bg-primary-solid)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 12px 8px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-md) * 1px)",
        paddingRight: "calc(var(--spacing-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text}</span>
      </div>
      <div style={{
        position: "relative",
        width: 16,
        height: 6,
        flexShrink: 0,
      }}>
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,-0.707,0.707,8,-11)",
          transformOrigin: "0 0",
          width: 12,
          height: 12,
          borderRadius: 1,
        }}>
          <path d={"M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 12px 16px -4px rgba(10,13,18,0.08), 0px 4px 6px -2px rgba(10,13,18,0.03), 0px 2px 2px -1px rgba(10,13,18,0.04)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--colors-background-bg-primary-solid)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 12px 8px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-md) * 1px)",
        paddingRight: "calc(var(--spacing-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 12px 16px -4px rgba(10,13,18,0.08), 0px 4px 6px -2px rgba(10,13,18,0.03), 0px 2px 2px -1px rgba(10,13,18,0.04)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--colors-background-bg-primary-solid)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(-1,0,0,-1,0,0)",
        width: 16,
        height: 6,
        flexShrink: 0,
      }}>
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,-0.707,0.707,8,-11)",
          transformOrigin: "0 0",
          width: 12,
          height: 12,
          borderRadius: 1,
        }}>
          <path d={"M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--colors-background-bg-primary-solid)",
        display: "flex",
        flexDirection: "column",
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-lg) * 1px)",
        paddingRight: "calc(var(--spacing-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-lg) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          maxWidth: 296,
          maxHeight: null,
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            lineHeight: "18px",
            color: "var(--colors-text-text-white)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "18px",
            color: "var(--component-colors-components-tooltips-tooltip-supporting-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text."}</span>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 12px 16px -4px rgba(10,13,18,0.08), 0px 4px 6px -2px rgba(10,13,18,0.03), 0px 2px 2px -1px rgba(10,13,18,0.04)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--colors-background-bg-primary-solid)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(-1,0,0,-1,0,0)",
        width: 16,
        height: 6,
        flexShrink: 0,
      }}>
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,-0.707,0.707,8,-11)",
          transformOrigin: "0 0",
          width: 12,
          height: 12,
          borderRadius: 1,
        }}>
          <path d={"M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--colors-background-bg-primary-solid)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 12px 8px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-md) * 1px)",
        paddingRight: "calc(var(--spacing-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text}</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 12px 16px -4px rgba(10,13,18,0.08), 0px 4px 6px -2px rgba(10,13,18,0.03), 0px 2px 2px -1px rgba(10,13,18,0.04)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--colors-background-bg-primary-solid)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--colors-background-bg-primary-solid)",
        display: "flex",
        flexDirection: "column",
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-lg) * 1px)",
        paddingRight: "calc(var(--spacing-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-lg) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          maxWidth: 296,
          maxHeight: null,
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            lineHeight: "18px",
            color: "var(--colors-text-text-white)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "18px",
            color: "var(--component-colors-components-tooltips-tooltip-supporting-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text."}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 28,
        height: 6,
        flexShrink: 0,
      }}>
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,-0.707,0.707,20,-11)",
          transformOrigin: "0 0",
          width: 12,
          height: 12,
          borderRadius: 1,
        }}>
          <path d={"M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 12px 16px -4px rgba(10,13,18,0.08), 0px 4px 6px -2px rgba(10,13,18,0.03), 0px 2px 2px -1px rgba(10,13,18,0.04)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--colors-background-bg-primary-solid)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--colors-background-bg-primary-solid)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 12px 8px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-md) * 1px)",
        paddingRight: "calc(var(--spacing-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text}</span>
      </div>
      <div style={{
        position: "relative",
        width: 28,
        height: 6,
        flexShrink: 0,
      }}>
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,-0.707,0.707,20,-11)",
          transformOrigin: "0 0",
          width: 12,
          height: 12,
          borderRadius: 1,
        }}>
          <path d={"M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 326,
      boxShadow: "0px 12px 16px -4px rgba(10,13,18,0.08), 0px 4px 6px -2px rgba(10,13,18,0.03), 0px 2px 2px -1px rgba(10,13,18,0.04)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--colors-background-bg-primary-solid)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,6,41)",
        transformOrigin: "0 0",
        width: 16,
        height: 6,
      }}>
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,-0.707,0.707,8,-11)",
          transformOrigin: "0 0",
          width: 12,
          height: 12,
          borderRadius: 1,
        }}>
          <path d={"M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--colors-background-bg-primary-solid)",
        display: "flex",
        flexDirection: "column",
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-lg) * 1px)",
        paddingRight: "calc(var(--spacing-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-lg) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          maxWidth: 296,
          maxHeight: null,
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            lineHeight: "18px",
            color: "var(--colors-text-text-white)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "18px",
            color: "var(--component-colors-components-tooltips-tooltip-supporting-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text."}</span>
        </div>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 118,
      boxShadow: "0px 12px 16px -4px rgba(10,13,18,0.08), 0px 4px 6px -2px rgba(10,13,18,0.03), 0px 2px 2px -1px rgba(10,13,18,0.04)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--colors-background-bg-primary-solid)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,6,9)",
        transformOrigin: "0 0",
        width: 16,
        height: 6,
      }}>
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,-0.707,0.707,8,-11)",
          transformOrigin: "0 0",
          width: 12,
          height: 12,
          borderRadius: 1,
        }}>
          <path d={"M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--colors-background-bg-primary-solid)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 12px 8px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-md) * 1px)",
        paddingRight: "calc(var(--spacing-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 326,
      boxShadow: "0px 12px 16px -4px rgba(10,13,18,0.08), 0px 4px 6px -2px rgba(10,13,18,0.03), 0px 2px 2px -1px rgba(10,13,18,0.04)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--colors-background-bg-primary-solid)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--colors-background-bg-primary-solid)",
        display: "flex",
        flexDirection: "column",
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-lg) * 1px)",
        paddingRight: "calc(var(--spacing-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-lg) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          maxWidth: 296,
          maxHeight: null,
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            lineHeight: "18px",
            color: "var(--colors-text-text-white)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "18px",
            color: "var(--component-colors-components-tooltips-tooltip-supporting-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text."}</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,320,57)",
        transformOrigin: "0 0",
        width: 16,
        height: 6,
      }}>
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,-0.707,0.707,8,-11)",
          transformOrigin: "0 0",
          width: 12,
          height: 12,
          borderRadius: 1,
        }}>
          <path d={"M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 118,
      boxShadow: "0px 12px 16px -4px rgba(10,13,18,0.08), 0px 4px 6px -2px rgba(10,13,18,0.03), 0px 2px 2px -1px rgba(10,13,18,0.04)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--colors-background-bg-primary-solid)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--colors-background-bg-primary-solid)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 12px 8px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-md) * 1px)",
        paddingRight: "calc(var(--spacing-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,112,25)",
        transformOrigin: "0 0",
        width: 16,
        height: 6,
      }}>
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,-0.707,0.707,8,-11)",
          transformOrigin: "0 0",
          width: 12,
          height: 12,
          borderRadius: 1,
        }}>
          <path d={"M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 12px 16px -4px rgba(10,13,18,0.08), 0px 4px 6px -2px rgba(10,13,18,0.03), 0px 2px 2px -1px rgba(10,13,18,0.04)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--colors-background-bg-primary-solid)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--colors-background-bg-primary-solid)",
        display: "flex",
        flexDirection: "column",
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-lg) * 1px)",
        paddingRight: "calc(var(--spacing-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-lg) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          maxWidth: 296,
          maxHeight: null,
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            lineHeight: "18px",
            color: "var(--colors-text-text-white)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "18px",
            color: "var(--component-colors-components-tooltips-tooltip-supporting-text)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text."}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 28,
        height: 6,
        flexShrink: 0,
      }}>
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,-0.707,0.707,8,-11)",
          transformOrigin: "0 0",
          width: 12,
          height: 12,
          borderRadius: 1,
        }}>
          <path d={"M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 12px 16px -4px rgba(10,13,18,0.08), 0px 4px 6px -2px rgba(10,13,18,0.03), 0px 2px 2px -1px rgba(10,13,18,0.04)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--colors-background-bg-primary-solid)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--colors-background-bg-primary-solid)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 12px 8px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-md) * 1px)",
        paddingRight: "calc(var(--spacing-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text}</span>
      </div>
      <div style={{
        position: "relative",
        width: 28,
        height: 6,
        flexShrink: 0,
      }}>
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.707,0.707,-0.707,0.707,8,-11)",
          transformOrigin: "0 0",
          width: 12,
          height: 12,
          borderRadius: 1,
        }}>
          <path d={"M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: Supporting text=True, Arrow=Bottom center
    "supportingText=true|arrow=bottom center": __body0,
    // figma: Supporting text=True, Arrow=None
    "supportingText=true|arrow=none": __body1,
    // figma: Supporting text=False, Arrow=Bottom center
    "supportingText=false|arrow=bottom center": __body2,
    // figma: Supporting text=False, Arrow=None
    "supportingText=false|arrow=none": __body3,
    // figma: Supporting text=True, Arrow=Top center
    "supportingText=true|arrow=top center": __body4,
    // figma: Supporting text=False, Arrow=Top center
    "supportingText=false|arrow=top center": __body5,
    // figma: Supporting text=True, Arrow=Bottom left
    "supportingText=true|arrow=bottom left": __body6,
    // figma: Supporting text=False, Arrow=Bottom left
    "supportingText=false|arrow=bottom left": __body7,
    // figma: Supporting text=True, Arrow=Left
    "supportingText=true|arrow=left": __body8,
    // figma: Supporting text=False, Arrow=Left
    "supportingText=false|arrow=left": __body9,
    // figma: Supporting text=True, Arrow=Right
    "supportingText=true|arrow=right": __body10,
    // figma: Supporting text=False, Arrow=Right
    "supportingText=false|arrow=right": __body11,
    // figma: Supporting text=True, Arrow=Bottom right
    "supportingText=true|arrow=bottom right": __body12,
    // figma: Supporting text=False, Arrow=Bottom right
    "supportingText=false|arrow=bottom right": __body13,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default Tooltip;
