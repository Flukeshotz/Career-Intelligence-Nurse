import { ButtonsButtonLoadingIcon } from './ButtonsButtonLoadingIcon.jsx';
import { Placeholder } from './Placeholder.jsx';

// figma node: 1:95 Buttons/Button (160 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "hierarchy=" + __venc(p.hierarchy) + '|' + "iconOnly=" + __venc(p.iconOnly) + '|' + "state=" + __venc(p.state);

export function ButtonsButton(_p = {}) {
  const props = { ..._p, iconLeading: _p.iconLeading ?? true, size: _p.size ?? "sm", iconTrailing: _p.iconTrailing ?? true, loadingText: _p.loadingText ?? true, hierarchy: _p.hierarchy ?? "primary", iconOnly: _p.iconOnly ?? false, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--colors-text-text-brand-secondary-700)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button CTA"}</span>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button CTA"}</span>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-tertiary-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-disabled)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-foreground-fg-disabled)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--colors-foreground-fg-disabled)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button CTA"}</span>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-foreground-fg-disabled)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-foreground-fg-disabled)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--colors-text-text-brand-secondary-700)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button CTA"}</span>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button CTA"}</span>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-tertiary-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
      {props.loadingText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Submitting..."}</span>
      </div>
      )}
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--colors-text-text-brand-secondary-hover)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button CTA"}</span>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
      {props.loadingText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--colors-text-text-brand-secondary-700)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Submitting..."}</span>
      )}
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-hover)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button CTA"}</span>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
      {props.loadingText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Submitting..."}</span>
      )}
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-tertiary-hover)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
      {props.loadingText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-tertiary-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Submitting..."}</span>
      </div>
      )}
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-hover)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "10px 14px 10px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
      {props.loadingText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Submitting..."}</span>
      </div>
      )}
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-disabled)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--colors-text-text-brand-secondary-700)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button CTA"}</span>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button CTA"}</span>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-tertiary-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-disabled)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-foreground-fg-disabled)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--colors-foreground-fg-disabled)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button CTA"}</span>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--colors-foreground-fg-disabled)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button CTA"}</span>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-foreground-fg-disabled)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-foreground-fg-disabled)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--colors-text-text-brand-secondary-700)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button CTA"}</span>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button CTA"}</span>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-tertiary-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      minHeight: 44,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
      {props.loadingText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Submitting..."}</span>
      </div>
      )}
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--colors-text-text-brand-secondary-hover)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button CTA"}</span>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      minHeight: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
      {props.loadingText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--colors-text-text-brand-secondary-700)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Submitting..."}</span>
      )}
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--colors-text-text-tertiary-hover)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button CTA"}</span>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      minHeight: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
      {props.loadingText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Submitting..."}</span>
      )}
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-tertiary-hover)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      minHeight: 44,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
      {props.loadingText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-tertiary-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Submitting..."}</span>
      </div>
      )}
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-secondary-hover)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      minHeight: 44,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
      {props.loadingText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Submitting..."}</span>
      </div>
      )}
    </div>
  );
  const __body63 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body64 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body65 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body66 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-disabled)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body67 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body68 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body69 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body70 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body71 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body72 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
    </div>
  );
  const __body73 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body74 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
    </div>
  );
  const __body75 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body76 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
    </div>
  );
  const __body77 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "12px 18px 12px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body78 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "12px 18px 12px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-tertiary-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body79 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "12px 18px 12px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body80 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-disabled)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "12px 18px 12px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-foreground-fg-disabled)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body81 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "12px 18px 12px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-foreground-fg-disabled)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body82 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "12px 18px 12px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-foreground-fg-disabled)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body83 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "12px 18px 12px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body84 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--colors-text-text-brand-secondary-700)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button CTA"}</span>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body85 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "12px 18px 12px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-tertiary-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body86 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "12px 18px 12px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body87 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "12px 18px 12px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body88 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      minHeight: 48,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "12px 18px 12px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
      {props.loadingText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Submitting..."}</span>
      </div>
      )}
    </div>
  );
  const __body89 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--colors-text-text-brand-secondary-hover)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Button CTA"}</span>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body90 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      minHeight: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
      {props.loadingText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--colors-text-text-brand-secondary-700)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Submitting..."}</span>
      )}
    </div>
  );
  const __body91 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "12px 18px 12px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-tertiary-hover)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body92 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      minHeight: 48,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "12px 18px 12px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
      {props.loadingText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-tertiary-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Submitting..."}</span>
      </div>
      )}
    </div>
  );
  const __body93 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "12px 18px 12px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeadingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-secondary-hover)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconTrailingSwap ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body94 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      minHeight: 48,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-sm) * 1px)",
      padding: "12px 18px 12px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
      {props.loadingText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Submitting..."}</span>
      </div>
      )}
    </div>
  );
  const __body95 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body96 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body97 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body98 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-disabled)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body99 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body100 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body101 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body102 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body103 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body104 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
    </div>
  );
  const __body105 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body106 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
    </div>
  );
  const __body107 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body108 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
    </div>
  );
  const __body109 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body110 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-tertiary-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body111 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body112 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-disabled)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-foreground-fg-disabled)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body113 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-foreground-fg-disabled)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body114 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-foreground-fg-disabled)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body115 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body116 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-tertiary-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body117 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body118 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body119 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
      {props.loadingText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-white)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Submitting..."}</span>
      </div>
      )}
    </div>
  );
  const __body120 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-tertiary-hover)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body121 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
      {props.loadingText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-tertiary-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Submitting..."}</span>
      </div>
      )}
    </div>
  );
  const __body122 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeading && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-hover)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Button CTA"}</span>
      </div>
      {props.iconTrailing && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconTrailingSwap ?? <Placeholder />}</div>
      )}
    </div>
  );
  const __body123 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
      {props.loadingText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 2px 0px 2px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xxs) * 1px)",
        paddingRight: "calc(var(--spacing-xxs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Submitting..."}</span>
      </div>
      )}
    </div>
  );
  const __body124 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body125 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body126 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body127 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-disabled)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body128 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body129 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body130 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body131 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05), 0px 0px 0px 2px rgb(255,255,255), 0px 0px 0px 4px rgb(158,119,237)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body132 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body133 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-brand-solid-hover)",
      boxShadow: "inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
    </div>
  );
  const __body134 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body135 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
    </div>
  );
  const __body136 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.iconLeadingSwap ?? <Placeholder />}</div>
    </div>
  );
  const __body137 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--colors-background-bg-primary-hover)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ButtonsButtonLoadingIcon size={"sm"} />}</div>
    </div>
  );
  const __impls = {
    // figma: Size=md, Hierarchy=Primary, State=Default, Icon only=False
    "size=md|hierarchy=primary|iconOnly=false|state=default": __body0,
    // figma: Size=md, Hierarchy=Link color, State=Default, Icon only=False
    "size=md|hierarchy=link color|iconOnly=false|state=default": __body1,
    // figma: Size=md, Hierarchy=Link gray, State=Default, Icon only=False
    "size=md|hierarchy=link gray|iconOnly=false|state=default": __body2,
    // figma: Size=md, Hierarchy=Tertiary, State=Default, Icon only=False
    "size=md|hierarchy=tertiary|iconOnly=false|state=default": __body3,
    // figma: Size=md, Hierarchy=Secondary, State=Default, Icon only=False
    "size=md|hierarchy=secondary|iconOnly=false|state=default": __body4,
    // figma: Size=md, Hierarchy=Primary, State=Disabled, Icon only=False
    "size=md|hierarchy=primary|iconOnly=false|state=disabled": __body5,
    // figma: Size=md, Hierarchy=Link color, State=Disabled, Icon only=False
    "size=md|hierarchy=link color|iconOnly=false|state=disabled": __body6,
    // figma: Size=md, Hierarchy=Link gray, State=Disabled, Icon only=False
    "size=md|hierarchy=link gray|iconOnly=false|state=disabled": __body6,
    // figma: Size=md, Hierarchy=Tertiary, State=Disabled, Icon only=False
    "size=md|hierarchy=tertiary|iconOnly=false|state=disabled": __body7,
    // figma: Size=md, Hierarchy=Secondary, State=Disabled, Icon only=False
    "size=md|hierarchy=secondary|iconOnly=false|state=disabled": __body8,
    // figma: Size=md, Hierarchy=Primary, State=Focused, Icon only=False
    "size=md|hierarchy=primary|iconOnly=false|state=focused": __body9,
    // figma: Size=md, Hierarchy=Link color, State=Focused, Icon only=False
    "size=md|hierarchy=link color|iconOnly=false|state=focused": __body10,
    // figma: Size=md, Hierarchy=Link gray, State=Focused, Icon only=False
    "size=md|hierarchy=link gray|iconOnly=false|state=focused": __body11,
    // figma: Size=md, Hierarchy=Tertiary, State=Focused, Icon only=False
    "size=md|hierarchy=tertiary|iconOnly=false|state=focused": __body12,
    // figma: Size=md, Hierarchy=Secondary, State=Focused, Icon only=False
    "size=md|hierarchy=secondary|iconOnly=false|state=focused": __body13,
    // figma: Size=md, Hierarchy=Primary, State=Hover, Icon only=False
    "size=md|hierarchy=primary|iconOnly=false|state=hover": __body14,
    // figma: Size=md, Hierarchy=Primary, State=Loading, Icon only=False
    "size=md|hierarchy=primary|iconOnly=false|state=loading": __body15,
    // figma: Size=md, Hierarchy=Link color, State=Hover, Icon only=False
    "size=md|hierarchy=link color|iconOnly=false|state=hover": __body16,
    // figma: Size=md, Hierarchy=Link color, State=Loading, Icon only=False
    "size=md|hierarchy=link color|iconOnly=false|state=loading": __body17,
    // figma: Size=md, Hierarchy=Link gray, State=Hover, Icon only=False
    "size=md|hierarchy=link gray|iconOnly=false|state=hover": __body18,
    // figma: Size=md, Hierarchy=Link gray, State=Loading, Icon only=False
    "size=md|hierarchy=link gray|iconOnly=false|state=loading": __body19,
    // figma: Size=md, Hierarchy=Tertiary, State=Hover, Icon only=False
    "size=md|hierarchy=tertiary|iconOnly=false|state=hover": __body20,
    // figma: Size=md, Hierarchy=Tertiary, State=Loading, Icon only=False
    "size=md|hierarchy=tertiary|iconOnly=false|state=loading": __body21,
    // figma: Size=md, Hierarchy=Secondary, State=Hover, Icon only=False
    "size=md|hierarchy=secondary|iconOnly=false|state=hover": __body22,
    // figma: Size=md, Hierarchy=Secondary, State=Loading, Icon only=False
    "size=md|hierarchy=secondary|iconOnly=false|state=loading": __body23,
    // figma: Size=md, Hierarchy=Primary, State=Default, Icon only=True
    "size=md|hierarchy=primary|iconOnly=true|state=default": __body24,
    // figma: Size=md, Hierarchy=Tertiary, State=Default, Icon only=True
    "size=md|hierarchy=tertiary|iconOnly=true|state=default": __body25,
    // figma: Size=md, Hierarchy=Secondary, State=Default, Icon only=True
    "size=md|hierarchy=secondary|iconOnly=true|state=default": __body26,
    // figma: Size=md, Hierarchy=Primary, State=Disabled, Icon only=True
    "size=md|hierarchy=primary|iconOnly=true|state=disabled": __body27,
    // figma: Size=md, Hierarchy=Tertiary, State=Disabled, Icon only=True
    "size=md|hierarchy=tertiary|iconOnly=true|state=disabled": __body25,
    // figma: Size=md, Hierarchy=Secondary, State=Disabled, Icon only=True
    "size=md|hierarchy=secondary|iconOnly=true|state=disabled": __body28,
    // figma: Size=md, Hierarchy=Primary, State=Focused, Icon only=True
    "size=md|hierarchy=primary|iconOnly=true|state=focused": __body29,
    // figma: Size=md, Hierarchy=Tertiary, State=Focused, Icon only=True
    "size=md|hierarchy=tertiary|iconOnly=true|state=focused": __body30,
    // figma: Size=md, Hierarchy=Secondary, State=Focused, Icon only=True
    "size=md|hierarchy=secondary|iconOnly=true|state=focused": __body31,
    // figma: Size=md, Hierarchy=Primary, State=Hover, Icon only=True
    "size=md|hierarchy=primary|iconOnly=true|state=hover": __body32,
    // figma: Size=md, Hierarchy=Primary, State=Loading, Icon only=True
    "size=md|hierarchy=primary|iconOnly=true|state=loading": __body33,
    // figma: Size=md, Hierarchy=Tertiary, State=Hover, Icon only=True
    "size=md|hierarchy=tertiary|iconOnly=true|state=hover": __body34,
    // figma: Size=md, Hierarchy=Tertiary, State=Loading, Icon only=True
    "size=md|hierarchy=tertiary|iconOnly=true|state=loading": __body35,
    // figma: Size=md, Hierarchy=Secondary, State=Hover, Icon only=True
    "size=md|hierarchy=secondary|iconOnly=true|state=hover": __body36,
    // figma: Size=md, Hierarchy=Secondary, State=Loading, Icon only=True
    "size=md|hierarchy=secondary|iconOnly=true|state=loading": __body37,
    // figma: Size=lg, Hierarchy=Primary, State=Default, Icon only=False
    "size=lg|hierarchy=primary|iconOnly=false|state=default": __body38,
    // figma: Size=lg, Hierarchy=Link color, State=Default, Icon only=False
    "size=lg|hierarchy=link color|iconOnly=false|state=default": __body39,
    // figma: Size=lg, Hierarchy=Link gray, State=Default, Icon only=False
    "size=lg|hierarchy=link gray|iconOnly=false|state=default": __body40,
    // figma: Size=lg, Hierarchy=Tertiary, State=Default, Icon only=False
    "size=lg|hierarchy=tertiary|iconOnly=false|state=default": __body41,
    // figma: Size=lg, Hierarchy=Secondary, State=Default, Icon only=False
    "size=lg|hierarchy=secondary|iconOnly=false|state=default": __body42,
    // figma: Size=lg, Hierarchy=Primary, State=Disabled, Icon only=False
    "size=lg|hierarchy=primary|iconOnly=false|state=disabled": __body43,
    // figma: Size=lg, Hierarchy=Link color, State=Disabled, Icon only=False
    "size=lg|hierarchy=link color|iconOnly=false|state=disabled": __body44,
    // figma: Size=lg, Hierarchy=Link gray, State=Disabled, Icon only=False
    "size=lg|hierarchy=link gray|iconOnly=false|state=disabled": __body45,
    // figma: Size=lg, Hierarchy=Tertiary, State=Disabled, Icon only=False
    "size=lg|hierarchy=tertiary|iconOnly=false|state=disabled": __body46,
    // figma: Size=lg, Hierarchy=Secondary, State=Disabled, Icon only=False
    "size=lg|hierarchy=secondary|iconOnly=false|state=disabled": __body47,
    // figma: Size=lg, Hierarchy=Primary, State=Focused, Icon only=False
    "size=lg|hierarchy=primary|iconOnly=false|state=focused": __body48,
    // figma: Size=lg, Hierarchy=Link color, State=Focused, Icon only=False
    "size=lg|hierarchy=link color|iconOnly=false|state=focused": __body49,
    // figma: Size=lg, Hierarchy=Link gray, State=Focused, Icon only=False
    "size=lg|hierarchy=link gray|iconOnly=false|state=focused": __body50,
    // figma: Size=lg, Hierarchy=Tertiary, State=Focused, Icon only=False
    "size=lg|hierarchy=tertiary|iconOnly=false|state=focused": __body51,
    // figma: Size=lg, Hierarchy=Secondary, State=Focused, Icon only=False
    "size=lg|hierarchy=secondary|iconOnly=false|state=focused": __body52,
    // figma: Size=lg, Hierarchy=Primary, State=Hover, Icon only=False
    "size=lg|hierarchy=primary|iconOnly=false|state=hover": __body53,
    // figma: Size=lg, Hierarchy=Primary, State=Loading, Icon only=False
    "size=lg|hierarchy=primary|iconOnly=false|state=loading": __body54,
    // figma: Size=lg, Hierarchy=Link color, State=Hover, Icon only=False
    "size=lg|hierarchy=link color|iconOnly=false|state=hover": __body55,
    // figma: Size=lg, Hierarchy=Link color, State=Loading, Icon only=False
    "size=lg|hierarchy=link color|iconOnly=false|state=loading": __body56,
    // figma: Size=lg, Hierarchy=Link gray, State=Hover, Icon only=False
    "size=lg|hierarchy=link gray|iconOnly=false|state=hover": __body57,
    // figma: Size=lg, Hierarchy=Link gray, State=Loading, Icon only=False
    "size=lg|hierarchy=link gray|iconOnly=false|state=loading": __body58,
    // figma: Size=lg, Hierarchy=Tertiary, State=Hover, Icon only=False
    "size=lg|hierarchy=tertiary|iconOnly=false|state=hover": __body59,
    // figma: Size=lg, Hierarchy=Tertiary, State=Loading, Icon only=False
    "size=lg|hierarchy=tertiary|iconOnly=false|state=loading": __body60,
    // figma: Size=lg, Hierarchy=Secondary, State=Hover, Icon only=False
    "size=lg|hierarchy=secondary|iconOnly=false|state=hover": __body61,
    // figma: Size=lg, Hierarchy=Secondary, State=Loading, Icon only=False
    "size=lg|hierarchy=secondary|iconOnly=false|state=loading": __body62,
    // figma: Size=lg, Hierarchy=Primary, State=Default, Icon only=True
    "size=lg|hierarchy=primary|iconOnly=true|state=default": __body63,
    // figma: Size=lg, Hierarchy=Tertiary, State=Default, Icon only=True
    "size=lg|hierarchy=tertiary|iconOnly=true|state=default": __body64,
    // figma: Size=lg, Hierarchy=Secondary, State=Default, Icon only=True
    "size=lg|hierarchy=secondary|iconOnly=true|state=default": __body65,
    // figma: Size=lg, Hierarchy=Primary, State=Disabled, Icon only=True
    "size=lg|hierarchy=primary|iconOnly=true|state=disabled": __body66,
    // figma: Size=lg, Hierarchy=Tertiary, State=Disabled, Icon only=True
    "size=lg|hierarchy=tertiary|iconOnly=true|state=disabled": __body64,
    // figma: Size=lg, Hierarchy=Secondary, State=Disabled, Icon only=True
    "size=lg|hierarchy=secondary|iconOnly=true|state=disabled": __body67,
    // figma: Size=lg, Hierarchy=Primary, State=Focused, Icon only=True
    "size=lg|hierarchy=primary|iconOnly=true|state=focused": __body68,
    // figma: Size=lg, Hierarchy=Tertiary, State=Focused, Icon only=True
    "size=lg|hierarchy=tertiary|iconOnly=true|state=focused": __body69,
    // figma: Size=lg, Hierarchy=Secondary, State=Focused, Icon only=True
    "size=lg|hierarchy=secondary|iconOnly=true|state=focused": __body70,
    // figma: Size=lg, Hierarchy=Primary, State=Hover, Icon only=True
    "size=lg|hierarchy=primary|iconOnly=true|state=hover": __body71,
    // figma: Size=lg, Hierarchy=Primary, State=Loading, Icon only=True
    "size=lg|hierarchy=primary|iconOnly=true|state=loading": __body72,
    // figma: Size=lg, Hierarchy=Tertiary, State=Hover, Icon only=True
    "size=lg|hierarchy=tertiary|iconOnly=true|state=hover": __body73,
    // figma: Size=lg, Hierarchy=Tertiary, State=Loading, Icon only=True
    "size=lg|hierarchy=tertiary|iconOnly=true|state=loading": __body74,
    // figma: Size=lg, Hierarchy=Secondary, State=Hover, Icon only=True
    "size=lg|hierarchy=secondary|iconOnly=true|state=hover": __body75,
    // figma: Size=lg, Hierarchy=Secondary, State=Loading, Icon only=True
    "size=lg|hierarchy=secondary|iconOnly=true|state=loading": __body76,
    // figma: Size=xl, Hierarchy=Primary, State=Default, Icon only=False
    "size=xl|hierarchy=primary|iconOnly=false|state=default": __body77,
    // figma: Size=xl, Hierarchy=Link color, State=Default, Icon only=False
    "size=xl|hierarchy=link color|iconOnly=false|state=default": __body39,
    // figma: Size=xl, Hierarchy=Link gray, State=Default, Icon only=False
    "size=xl|hierarchy=link gray|iconOnly=false|state=default": __body40,
    // figma: Size=xl, Hierarchy=Tertiary, State=Default, Icon only=False
    "size=xl|hierarchy=tertiary|iconOnly=false|state=default": __body78,
    // figma: Size=xl, Hierarchy=Secondary, State=Default, Icon only=False
    "size=xl|hierarchy=secondary|iconOnly=false|state=default": __body79,
    // figma: Size=xl, Hierarchy=Primary, State=Disabled, Icon only=False
    "size=xl|hierarchy=primary|iconOnly=false|state=disabled": __body80,
    // figma: Size=xl, Hierarchy=Link color, State=Disabled, Icon only=False
    "size=xl|hierarchy=link color|iconOnly=false|state=disabled": __body45,
    // figma: Size=xl, Hierarchy=Link gray, State=Disabled, Icon only=False
    "size=xl|hierarchy=link gray|iconOnly=false|state=disabled": __body45,
    // figma: Size=xl, Hierarchy=Tertiary, State=Disabled, Icon only=False
    "size=xl|hierarchy=tertiary|iconOnly=false|state=disabled": __body81,
    // figma: Size=xl, Hierarchy=Secondary, State=Disabled, Icon only=False
    "size=xl|hierarchy=secondary|iconOnly=false|state=disabled": __body82,
    // figma: Size=xl, Hierarchy=Primary, State=Focused, Icon only=False
    "size=xl|hierarchy=primary|iconOnly=false|state=focused": __body83,
    // figma: Size=xl, Hierarchy=Link color, State=Focused, Icon only=False
    "size=xl|hierarchy=link color|iconOnly=false|state=focused": __body84,
    // figma: Size=xl, Hierarchy=Link gray, State=Focused, Icon only=False
    "size=xl|hierarchy=link gray|iconOnly=false|state=focused": __body50,
    // figma: Size=xl, Hierarchy=Tertiary, State=Focused, Icon only=False
    "size=xl|hierarchy=tertiary|iconOnly=false|state=focused": __body85,
    // figma: Size=xl, Hierarchy=Secondary, State=Focused, Icon only=False
    "size=xl|hierarchy=secondary|iconOnly=false|state=focused": __body86,
    // figma: Size=xl, Hierarchy=Primary, State=Hover, Icon only=False
    "size=xl|hierarchy=primary|iconOnly=false|state=hover": __body87,
    // figma: Size=xl, Hierarchy=Primary, State=Loading, Icon only=False
    "size=xl|hierarchy=primary|iconOnly=false|state=loading": __body88,
    // figma: Size=xl, Hierarchy=Link color, State=Hover, Icon only=False
    "size=xl|hierarchy=link color|iconOnly=false|state=hover": __body89,
    // figma: Size=xl, Hierarchy=Link color, State=Loading, Icon only=False
    "size=xl|hierarchy=link color|iconOnly=false|state=loading": __body90,
    // figma: Size=xl, Hierarchy=Link gray, State=Hover, Icon only=False
    "size=xl|hierarchy=link gray|iconOnly=false|state=hover": __body57,
    // figma: Size=xl, Hierarchy=Link gray, State=Loading, Icon only=False
    "size=xl|hierarchy=link gray|iconOnly=false|state=loading": __body58,
    // figma: Size=xl, Hierarchy=Tertiary, State=Hover, Icon only=False
    "size=xl|hierarchy=tertiary|iconOnly=false|state=hover": __body91,
    // figma: Size=xl, Hierarchy=Tertiary, State=Loading, Icon only=False
    "size=xl|hierarchy=tertiary|iconOnly=false|state=loading": __body92,
    // figma: Size=xl, Hierarchy=Secondary, State=Hover, Icon only=False
    "size=xl|hierarchy=secondary|iconOnly=false|state=hover": __body93,
    // figma: Size=xl, Hierarchy=Secondary, State=Loading, Icon only=False
    "size=xl|hierarchy=secondary|iconOnly=false|state=loading": __body94,
    // figma: Size=xl, Hierarchy=Primary, State=Default, Icon only=True
    "size=xl|hierarchy=primary|iconOnly=true|state=default": __body95,
    // figma: Size=xl, Hierarchy=Tertiary, State=Default, Icon only=True
    "size=xl|hierarchy=tertiary|iconOnly=true|state=default": __body96,
    // figma: Size=xl, Hierarchy=Secondary, State=Default, Icon only=True
    "size=xl|hierarchy=secondary|iconOnly=true|state=default": __body97,
    // figma: Size=xl, Hierarchy=Primary, State=Disabled, Icon only=True
    "size=xl|hierarchy=primary|iconOnly=true|state=disabled": __body98,
    // figma: Size=xl, Hierarchy=Tertiary, State=Disabled, Icon only=True
    "size=xl|hierarchy=tertiary|iconOnly=true|state=disabled": __body96,
    // figma: Size=xl, Hierarchy=Secondary, State=Disabled, Icon only=True
    "size=xl|hierarchy=secondary|iconOnly=true|state=disabled": __body99,
    // figma: Size=xl, Hierarchy=Primary, State=Focused, Icon only=True
    "size=xl|hierarchy=primary|iconOnly=true|state=focused": __body100,
    // figma: Size=xl, Hierarchy=Tertiary, State=Focused, Icon only=True
    "size=xl|hierarchy=tertiary|iconOnly=true|state=focused": __body101,
    // figma: Size=xl, Hierarchy=Secondary, State=Focused, Icon only=True
    "size=xl|hierarchy=secondary|iconOnly=true|state=focused": __body102,
    // figma: Size=xl, Hierarchy=Primary, State=Hover, Icon only=True
    "size=xl|hierarchy=primary|iconOnly=true|state=hover": __body103,
    // figma: Size=xl, Hierarchy=Primary, State=Loading, Icon only=True
    "size=xl|hierarchy=primary|iconOnly=true|state=loading": __body104,
    // figma: Size=xl, Hierarchy=Tertiary, State=Hover, Icon only=True
    "size=xl|hierarchy=tertiary|iconOnly=true|state=hover": __body105,
    // figma: Size=xl, Hierarchy=Tertiary, State=Loading, Icon only=True
    "size=xl|hierarchy=tertiary|iconOnly=true|state=loading": __body106,
    // figma: Size=xl, Hierarchy=Secondary, State=Hover, Icon only=True
    "size=xl|hierarchy=secondary|iconOnly=true|state=hover": __body107,
    // figma: Size=xl, Hierarchy=Secondary, State=Loading, Icon only=True
    "size=xl|hierarchy=secondary|iconOnly=true|state=loading": __body108,
    // figma: Size=sm, Hierarchy=Primary, State=Default, Icon only=False
    "size=sm|hierarchy=primary|iconOnly=false|state=default": __body109,
    // figma: Size=sm, Hierarchy=Link color, State=Default, Icon only=False
    "size=sm|hierarchy=link color|iconOnly=false|state=default": __body1,
    // figma: Size=sm, Hierarchy=Link gray, State=Default, Icon only=False
    "size=sm|hierarchy=link gray|iconOnly=false|state=default": __body2,
    // figma: Size=sm, Hierarchy=Tertiary, State=Default, Icon only=False
    "size=sm|hierarchy=tertiary|iconOnly=false|state=default": __body110,
    // figma: Size=sm, Hierarchy=Secondary, State=Default, Icon only=False
    "size=sm|hierarchy=secondary|iconOnly=false|state=default": __body111,
    // figma: Size=sm, Hierarchy=Primary, State=Disabled, Icon only=False
    "size=sm|hierarchy=primary|iconOnly=false|state=disabled": __body112,
    // figma: Size=sm, Hierarchy=Link color, State=Disabled, Icon only=False
    "size=sm|hierarchy=link color|iconOnly=false|state=disabled": __body6,
    // figma: Size=sm, Hierarchy=Link gray, State=Disabled, Icon only=False
    "size=sm|hierarchy=link gray|iconOnly=false|state=disabled": __body6,
    // figma: Size=sm, Hierarchy=Tertiary, State=Disabled, Icon only=False
    "size=sm|hierarchy=tertiary|iconOnly=false|state=disabled": __body113,
    // figma: Size=sm, Hierarchy=Secondary, State=Disabled, Icon only=False
    "size=sm|hierarchy=secondary|iconOnly=false|state=disabled": __body114,
    // figma: Size=sm, Hierarchy=Primary, State=Focused, Icon only=False
    "size=sm|hierarchy=primary|iconOnly=false|state=focused": __body115,
    // figma: Size=sm, Hierarchy=Link color, State=Focused, Icon only=False
    "size=sm|hierarchy=link color|iconOnly=false|state=focused": __body10,
    // figma: Size=sm, Hierarchy=Link gray, State=Focused, Icon only=False
    "size=sm|hierarchy=link gray|iconOnly=false|state=focused": __body11,
    // figma: Size=sm, Hierarchy=Tertiary, State=Focused, Icon only=False
    "size=sm|hierarchy=tertiary|iconOnly=false|state=focused": __body116,
    // figma: Size=sm, Hierarchy=Secondary, State=Focused, Icon only=False
    "size=sm|hierarchy=secondary|iconOnly=false|state=focused": __body117,
    // figma: Size=sm, Hierarchy=Primary, State=Hover, Icon only=False
    "size=sm|hierarchy=primary|iconOnly=false|state=hover": __body118,
    // figma: Size=sm, Hierarchy=Primary, State=Loading, Icon only=False
    "size=sm|hierarchy=primary|iconOnly=false|state=loading": __body119,
    // figma: Size=sm, Hierarchy=Link color, State=Hover, Icon only=False
    "size=sm|hierarchy=link color|iconOnly=false|state=hover": __body16,
    // figma: Size=sm, Hierarchy=Link color, State=Loading, Icon only=False
    "size=sm|hierarchy=link color|iconOnly=false|state=loading": __body17,
    // figma: Size=sm, Hierarchy=Link gray, State=Hover, Icon only=False
    "size=sm|hierarchy=link gray|iconOnly=false|state=hover": __body18,
    // figma: Size=sm, Hierarchy=Link gray, State=Loading, Icon only=False
    "size=sm|hierarchy=link gray|iconOnly=false|state=loading": __body19,
    // figma: Size=sm, Hierarchy=Tertiary, State=Hover, Icon only=False
    "size=sm|hierarchy=tertiary|iconOnly=false|state=hover": __body120,
    // figma: Size=sm, Hierarchy=Tertiary, State=Loading, Icon only=False
    "size=sm|hierarchy=tertiary|iconOnly=false|state=loading": __body121,
    // figma: Size=sm, Hierarchy=Secondary, State=Hover, Icon only=False
    "size=sm|hierarchy=secondary|iconOnly=false|state=hover": __body122,
    // figma: Size=sm, Hierarchy=Secondary, State=Loading, Icon only=False
    "size=sm|hierarchy=secondary|iconOnly=false|state=loading": __body123,
    // figma: Size=sm, Hierarchy=Primary, State=Default, Icon only=True
    "size=sm|hierarchy=primary|iconOnly=true|state=default": __body124,
    // figma: Size=sm, Hierarchy=Tertiary, State=Default, Icon only=True
    "size=sm|hierarchy=tertiary|iconOnly=true|state=default": __body125,
    // figma: Size=sm, Hierarchy=Secondary, State=Default, Icon only=True
    "size=sm|hierarchy=secondary|iconOnly=true|state=default": __body126,
    // figma: Size=sm, Hierarchy=Primary, State=Disabled, Icon only=True
    "size=sm|hierarchy=primary|iconOnly=true|state=disabled": __body127,
    // figma: Size=sm, Hierarchy=Tertiary, State=Disabled, Icon only=True
    "size=sm|hierarchy=tertiary|iconOnly=true|state=disabled": __body125,
    // figma: Size=sm, Hierarchy=Secondary, State=Disabled, Icon only=True
    "size=sm|hierarchy=secondary|iconOnly=true|state=disabled": __body128,
    // figma: Size=sm, Hierarchy=Primary, State=Focused, Icon only=True
    "size=sm|hierarchy=primary|iconOnly=true|state=focused": __body129,
    // figma: Size=sm, Hierarchy=Tertiary, State=Focused, Icon only=True
    "size=sm|hierarchy=tertiary|iconOnly=true|state=focused": __body130,
    // figma: Size=sm, Hierarchy=Secondary, State=Focused, Icon only=True
    "size=sm|hierarchy=secondary|iconOnly=true|state=focused": __body131,
    // figma: Size=sm, Hierarchy=Primary, State=Hover, Icon only=True
    "size=sm|hierarchy=primary|iconOnly=true|state=hover": __body132,
    // figma: Size=sm, Hierarchy=Primary, State=Loading, Icon only=True
    "size=sm|hierarchy=primary|iconOnly=true|state=loading": __body133,
    // figma: Size=sm, Hierarchy=Tertiary, State=Hover, Icon only=True
    "size=sm|hierarchy=tertiary|iconOnly=true|state=hover": __body134,
    // figma: Size=sm, Hierarchy=Tertiary, State=Loading, Icon only=True
    "size=sm|hierarchy=tertiary|iconOnly=true|state=loading": __body135,
    // figma: Size=sm, Hierarchy=Secondary, State=Hover, Icon only=True
    "size=sm|hierarchy=secondary|iconOnly=true|state=hover": __body136,
    // figma: Size=sm, Hierarchy=Secondary, State=Loading, Icon only=True
    "size=sm|hierarchy=secondary|iconOnly=true|state=loading": __body137,
  };
  return (__impls[__vkey(props)] ?? __body109)();
}
export default ButtonsButton;
