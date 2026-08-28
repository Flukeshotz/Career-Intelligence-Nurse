import { AU } from './AU.jsx';
import { Dot } from './Dot.jsx';
import { TagCheckbox } from './TagCheckbox.jsx';
import { TagCloseX } from './TagCloseX.jsx';
import { TagCount } from './TagCount.jsx';

// figma node: 1349:21005 Tag (72 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "icon=" + __venc(p.icon) + '|' + "checkbox=" + __venc(p.checkbox) + '|' + "action=" + __venc(p.action);

export function Tag(_p = {}) {
  const props = { ..._p, size: _p.size ?? "sm", icon: _p.icon ?? "false", checkbox: _p.checkbox ?? false, action: _p.action ?? "x close" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 8px 3px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 8px 3px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"sm"} state={"default"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 4px 3px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <TagCloseX size={"sm"} state={"default"} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 4px 3px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"sm"} state={"default"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <TagCloseX size={"sm"} state={"default"} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 4px 3px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <TagCount size={"sm"} />}</div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 4px 3px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"sm"} state={"default"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TagCount size={"sm"} />}</div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 9px 2px 9px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 9px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"md"} state={"default"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 4px 2px 9px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <TagCloseX size={"md"} state={"default"} />}</div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 4px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"md"} state={"default"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <TagCloseX size={"md"} state={"default"} />}</div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 3px 2px 9px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <TagCount size={"md"} />}</div>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 3px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"md"} state={"default"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TagCount size={"md"} />}</div>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"lg"} state={"default"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 4px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <TagCloseX size={"lg"} state={"default"} />}</div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 4px 4px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"lg"} state={"default"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <TagCloseX size={"lg"} state={"default"} />}</div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 4px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <TagCount size={"lg"} />}</div>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 4px 4px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"lg"} state={"default"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TagCount size={"lg"} />}</div>
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 8px 3px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon1 ?? <Dot size={"sm"} outline={false} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 8px 3px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"sm"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon2 ?? <Dot size={"sm"} outline={false} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 4px 3px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon1 ?? <Dot size={"sm"} outline={false} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <TagCloseX size={"sm"} state={"default"} />}</div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 4px 3px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"sm"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon2 ?? <Dot size={"sm"} outline={false} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <TagCloseX size={"sm"} state={"default"} />}</div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 4px 3px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon1 ?? <Dot size={"sm"} outline={false} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TagCount size={"sm"} />}</div>
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 4px 3px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"sm"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon2 ?? <Dot size={"sm"} outline={false} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <TagCount size={"sm"} />}</div>
      </div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 9px 2px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon1 ?? <Dot size={"sm"} outline={false} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 9px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"md"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon2 ?? <Dot size={"sm"} outline={false} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 4px 2px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon1 ?? <Dot size={"sm"} outline={false} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <TagCloseX size={"md"} state={"default"} />}</div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 4px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"md"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon2 ?? <Dot size={"sm"} outline={false} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <TagCloseX size={"md"} state={"default"} />}</div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 3px 2px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon1 ?? <Dot size={"sm"} outline={false} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TagCount size={"md"} />}</div>
      </div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 3px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"md"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon2 ?? <Dot size={"sm"} outline={false} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <TagCount size={"md"} />}</div>
      </div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 9px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon1 ?? <Dot size={"sm"} outline={false} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"lg"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon2 ?? <Dot size={"sm"} outline={false} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 4px 4px 9px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon1 ?? <Dot size={"sm"} outline={false} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <TagCloseX size={"lg"} state={"default"} />}</div>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 4px 4px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"lg"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon2 ?? <Dot size={"sm"} outline={false} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <TagCloseX size={"lg"} state={"default"} />}</div>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 4px 4px 9px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon1 ?? <Dot size={"sm"} outline={false} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TagCount size={"lg"} />}</div>
      </div>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 4px 4px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"lg"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 8,
            height: 8,
            flexShrink: 0,
          }}>{props.icon2 ?? <Dot size={"sm"} outline={false} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <TagCount size={"lg"} />}</div>
      </div>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 8px 3px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.flagSwap ?? <AU />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 8px 3px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"sm"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.flagSwap ?? <AU />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 4px 3px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.flagSwap ?? <AU />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <TagCloseX size={"sm"} state={"default"} />}</div>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 4px 3px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"sm"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.flagSwap ?? <AU />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <TagCloseX size={"sm"} state={"default"} />}</div>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 4px 3px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.flagSwap ?? <AU />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <TagCount size={"sm"} />}</div>
      </div>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 4px 3px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"sm"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.flagSwap ?? <AU />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TagCount size={"sm"} />}</div>
      </div>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 9px 2px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.flagSwap ?? <AU style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 9px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"md"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.flagSwap ?? <AU style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 4px 2px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.flagSwap ?? <AU style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <TagCloseX size={"md"} state={"default"} />}</div>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 4px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"md"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.flagSwap ?? <AU style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <TagCloseX size={"md"} state={"default"} />}</div>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 3px 2px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.flagSwap ?? <AU style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <TagCount size={"md"} />}</div>
      </div>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 3px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"md"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.flagSwap ?? <AU style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TagCount size={"md"} />}</div>
      </div>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.flagSwap ?? <AU style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"lg"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.flagSwap ?? <AU style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 4px 4px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.flagSwap ?? <AU style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <TagCloseX size={"lg"} state={"default"} />}</div>
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 4px 4px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"lg"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.flagSwap ?? <AU style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <TagCloseX size={"lg"} state={"default"} />}</div>
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 4px 4px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.flagSwap ?? <AU style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <TagCount size={"lg"} />}</div>
      </div>
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 4px 4px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"lg"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.flagSwap ?? <AU style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TagCount size={"lg"} />}</div>
      </div>
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 8px 3px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          overflow: "hidden",
          borderRadius: 6666,
          flexShrink: 0,
          alignSelf: "stretch",
          color: "rgba(0,0,0,0.08)",
        }}>
          <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0 12 M 24 12 M 24 12 M 0 12 M 12 0 M 24 12 M 12 24 M 0 12 M 12 24 L 12 23.5 C 5.649 23.5 0.5 18.351 0.5 12 L 0 12 L -0.5 12 C -0.5 18.904 5.096 24.5 12 24.5 L 12 24 Z M 24 12 L 23.5 12 C 23.5 18.351 18.351 23.5 12 23.5 L 12 24 L 12 24.5 C 18.904 24.5 24.5 18.904 24.5 12 L 24 12 Z M 12 0 L 12 0.5 C 18.351 0.5 23.5 5.649 23.5 12 L 24 12 L 24.5 12 C 24.5 5.096 18.904 -0.5 12 -0.5 L 12 0 Z M 12 0 L 12 -0.5 C 5.096 -0.5 -0.5 5.096 -0.5 12 L 0 12 L 0.5 12 C 0.5 5.649 5.649 0.5 12 0.5 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 8px 3px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"sm"} state={"default"} />}</div>
        <svg width={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          overflow: "hidden",
          borderRadius: 6666,
          flexShrink: 0,
          alignSelf: "stretch",
          color: "rgba(0,0,0,0.08)",
        }}>
          <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0 12 M 24 12 M 24 12 M 0 12 M 12 0 M 24 12 M 12 24 M 0 12 M 12 24 L 12 23.5 C 5.649 23.5 0.5 18.351 0.5 12 L 0 12 L -0.5 12 C -0.5 18.904 5.096 24.5 12 24.5 L 12 24 Z M 24 12 L 23.5 12 C 23.5 18.351 18.351 23.5 12 23.5 L 12 24 L 12 24.5 C 18.904 24.5 24.5 18.904 24.5 12 L 24 12 Z M 12 0 L 12 0.5 C 18.351 0.5 23.5 5.649 23.5 12 L 24 12 L 24.5 12 C 24.5 5.096 18.904 -0.5 12 -0.5 L 12 0 Z M 12 0 L 12 -0.5 C 5.096 -0.5 -0.5 5.096 -0.5 12 L 0 12 L 0.5 12 C 0.5 5.649 5.649 0.5 12 0.5 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 4px 3px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          overflow: "hidden",
          borderRadius: 6666,
          flexShrink: 0,
          alignSelf: "stretch",
          color: "rgba(0,0,0,0.08)",
        }}>
          <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0 12 M 24 12 M 24 12 M 0 12 M 12 0 M 24 12 M 12 24 M 0 12 M 12 24 L 12 23.5 C 5.649 23.5 0.5 18.351 0.5 12 L 0 12 L -0.5 12 C -0.5 18.904 5.096 24.5 12 24.5 L 12 24 Z M 24 12 L 23.5 12 C 23.5 18.351 18.351 23.5 12 23.5 L 12 24 L 12 24.5 C 18.904 24.5 24.5 18.904 24.5 12 L 24 12 Z M 12 0 L 12 0.5 C 18.351 0.5 23.5 5.649 23.5 12 L 24 12 L 24.5 12 C 24.5 5.096 18.904 -0.5 12 -0.5 L 12 0 Z M 12 0 L 12 -0.5 C 5.096 -0.5 -0.5 5.096 -0.5 12 L 0 12 L 0.5 12 C 0.5 5.649 5.649 0.5 12 0.5 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <TagCloseX size={"sm"} state={"default"} />}</div>
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 4px 3px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"sm"} state={"default"} />}</div>
        <svg width={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          overflow: "hidden",
          borderRadius: 6666,
          flexShrink: 0,
          alignSelf: "stretch",
          color: "rgba(0,0,0,0.08)",
        }}>
          <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0 12 M 24 12 M 24 12 M 0 12 M 12 0 M 24 12 M 12 24 M 0 12 M 12 24 L 12 23.5 C 5.649 23.5 0.5 18.351 0.5 12 L 0 12 L -0.5 12 C -0.5 18.904 5.096 24.5 12 24.5 L 12 24 Z M 24 12 L 23.5 12 C 23.5 18.351 18.351 23.5 12 23.5 L 12 24 L 12 24.5 C 18.904 24.5 24.5 18.904 24.5 12 L 24 12 Z M 12 0 L 12 0.5 C 18.351 0.5 23.5 5.649 23.5 12 L 24 12 L 24.5 12 C 24.5 5.096 18.904 -0.5 12 -0.5 L 12 0 Z M 12 0 L 12 -0.5 C 5.096 -0.5 -0.5 5.096 -0.5 12 L 0 12 L 0.5 12 C 0.5 5.649 5.649 0.5 12 0.5 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <TagCloseX size={"sm"} state={"default"} />}</div>
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 4px 3px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          overflow: "hidden",
          borderRadius: 6666,
          flexShrink: 0,
          alignSelf: "stretch",
          color: "rgba(0,0,0,0.08)",
        }}>
          <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0 12 M 24 12 M 24 12 M 0 12 M 12 0 M 24 12 M 12 24 M 0 12 M 12 24 L 12 23.5 C 5.649 23.5 0.5 18.351 0.5 12 L 0 12 L -0.5 12 C -0.5 18.904 5.096 24.5 12 24.5 L 12 24 Z M 24 12 L 23.5 12 C 23.5 18.351 18.351 23.5 12 23.5 L 12 24 L 12 24.5 C 18.904 24.5 24.5 18.904 24.5 12 L 24 12 Z M 12 0 L 12 0.5 C 18.351 0.5 23.5 5.649 23.5 12 L 24 12 L 24.5 12 C 24.5 5.096 18.904 -0.5 12 -0.5 L 12 0 Z M 12 0 L 12 -0.5 C 5.096 -0.5 -0.5 5.096 -0.5 12 L 0 12 L 0.5 12 C 0.5 5.649 5.649 0.5 12 0.5 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TagCount size={"sm"} />}</div>
      </div>
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "3px 4px 3px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"sm"} state={"default"} />}</div>
        <svg width={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          overflow: "hidden",
          borderRadius: 6666,
          flexShrink: 0,
          alignSelf: "stretch",
          color: "rgba(0,0,0,0.08)",
        }}>
          <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0 12 M 24 12 M 24 12 M 0 12 M 12 0 M 24 12 M 12 24 M 0 12 M 12 24 L 12 23.5 C 5.649 23.5 0.5 18.351 0.5 12 L 0 12 L -0.5 12 C -0.5 18.904 5.096 24.5 12 24.5 L 12 24 Z M 24 12 L 23.5 12 C 23.5 18.351 18.351 23.5 12 23.5 L 12 24 L 12 24.5 C 18.904 24.5 24.5 18.904 24.5 12 L 24 12 Z M 12 0 L 12 0.5 C 18.351 0.5 23.5 5.649 23.5 12 L 24 12 L 24.5 12 C 24.5 5.096 18.904 -0.5 12 -0.5 L 12 0 Z M 12 0 L 12 -0.5 C 5.096 -0.5 -0.5 5.096 -0.5 12 L 0 12 L 0.5 12 C 0.5 5.649 5.649 0.5 12 0.5 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <TagCount size={"sm"} />}</div>
      </div>
    </div>
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 9px 2px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 6666,
          flexShrink: 0,
          color: "rgba(0,0,0,0.08)",
        }}>
          <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0 12 M 24 12 M 24 12 M 0 12 M 12 0 M 24 12 M 12 24 M 0 12 M 12 24 L 12 23.5 C 5.649 23.5 0.5 18.351 0.5 12 L 0 12 L -0.5 12 C -0.5 18.904 5.096 24.5 12 24.5 L 12 24 Z M 24 12 L 23.5 12 C 23.5 18.351 18.351 23.5 12 23.5 L 12 24 L 12 24.5 C 18.904 24.5 24.5 18.904 24.5 12 L 24 12 Z M 12 0 L 12 0.5 C 18.351 0.5 23.5 5.649 23.5 12 L 24 12 L 24.5 12 C 24.5 5.096 18.904 -0.5 12 -0.5 L 12 0 Z M 12 0 L 12 -0.5 C 5.096 -0.5 -0.5 5.096 -0.5 12 L 0 12 L 0.5 12 C 0.5 5.649 5.649 0.5 12 0.5 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 9px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"md"} state={"default"} />}</div>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 6666,
          flexShrink: 0,
          color: "rgba(0,0,0,0.08)",
        }}>
          <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0 12 M 24 12 M 24 12 M 0 12 M 12 0 M 24 12 M 12 24 M 0 12 M 12 24 L 12 23.5 C 5.649 23.5 0.5 18.351 0.5 12 L 0 12 L -0.5 12 C -0.5 18.904 5.096 24.5 12 24.5 L 12 24 Z M 24 12 L 23.5 12 C 23.5 18.351 18.351 23.5 12 23.5 L 12 24 L 12 24.5 C 18.904 24.5 24.5 18.904 24.5 12 L 24 12 Z M 12 0 L 12 0.5 C 18.351 0.5 23.5 5.649 23.5 12 L 24 12 L 24.5 12 C 24.5 5.096 18.904 -0.5 12 -0.5 L 12 0 Z M 12 0 L 12 -0.5 C 5.096 -0.5 -0.5 5.096 -0.5 12 L 0 12 L 0.5 12 C 0.5 5.649 5.649 0.5 12 0.5 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 4px 2px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 6666,
          flexShrink: 0,
          color: "rgba(0,0,0,0.08)",
        }}>
          <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0 12 M 24 12 M 24 12 M 0 12 M 12 0 M 24 12 M 12 24 M 0 12 M 12 24 L 12 23.5 C 5.649 23.5 0.5 18.351 0.5 12 L 0 12 L -0.5 12 C -0.5 18.904 5.096 24.5 12 24.5 L 12 24 Z M 24 12 L 23.5 12 C 23.5 18.351 18.351 23.5 12 23.5 L 12 24 L 12 24.5 C 18.904 24.5 24.5 18.904 24.5 12 L 24 12 Z M 12 0 L 12 0.5 C 18.351 0.5 23.5 5.649 23.5 12 L 24 12 L 24.5 12 C 24.5 5.096 18.904 -0.5 12 -0.5 L 12 0 Z M 12 0 L 12 -0.5 C 5.096 -0.5 -0.5 5.096 -0.5 12 L 0 12 L 0.5 12 C 0.5 5.649 5.649 0.5 12 0.5 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <TagCloseX size={"md"} state={"default"} />}</div>
    </div>
  );
  const __body63 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 4px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"md"} state={"default"} />}</div>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 6666,
          flexShrink: 0,
          color: "rgba(0,0,0,0.08)",
        }}>
          <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0 12 M 24 12 M 24 12 M 0 12 M 12 0 M 24 12 M 12 24 M 0 12 M 12 24 L 12 23.5 C 5.649 23.5 0.5 18.351 0.5 12 L 0 12 L -0.5 12 C -0.5 18.904 5.096 24.5 12 24.5 L 12 24 Z M 24 12 L 23.5 12 C 23.5 18.351 18.351 23.5 12 23.5 L 12 24 L 12 24.5 C 18.904 24.5 24.5 18.904 24.5 12 L 24 12 Z M 12 0 L 12 0.5 C 18.351 0.5 23.5 5.649 23.5 12 L 24 12 L 24.5 12 C 24.5 5.096 18.904 -0.5 12 -0.5 L 12 0 Z M 12 0 L 12 -0.5 C 5.096 -0.5 -0.5 5.096 -0.5 12 L 0 12 L 0.5 12 C 0.5 5.649 5.649 0.5 12 0.5 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <TagCloseX size={"md"} state={"default"} />}</div>
    </div>
  );
  const __body64 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 3px 2px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 6666,
          flexShrink: 0,
          color: "rgba(0,0,0,0.08)",
        }}>
          <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0 12 M 24 12 M 24 12 M 0 12 M 12 0 M 24 12 M 12 24 M 0 12 M 12 24 L 12 23.5 C 5.649 23.5 0.5 18.351 0.5 12 L 0 12 L -0.5 12 C -0.5 18.904 5.096 24.5 12 24.5 L 12 24 Z M 24 12 L 23.5 12 C 23.5 18.351 18.351 23.5 12 23.5 L 12 24 L 12 24.5 C 18.904 24.5 24.5 18.904 24.5 12 L 24 12 Z M 12 0 L 12 0.5 C 18.351 0.5 23.5 5.649 23.5 12 L 24 12 L 24.5 12 C 24.5 5.096 18.904 -0.5 12 -0.5 L 12 0 Z M 12 0 L 12 -0.5 C 5.096 -0.5 -0.5 5.096 -0.5 12 L 0 12 L 0.5 12 C 0.5 5.649 5.649 0.5 12 0.5 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TagCount size={"md"} />}</div>
      </div>
    </div>
  );
  const __body65 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "2px 3px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"md"} state={"default"} />}</div>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 6666,
          flexShrink: 0,
          color: "rgba(0,0,0,0.08)",
        }}>
          <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0 12 M 24 12 M 24 12 M 0 12 M 12 0 M 24 12 M 12 24 M 0 12 M 12 24 L 12 23.5 C 5.649 23.5 0.5 18.351 0.5 12 L 0 12 L -0.5 12 C -0.5 18.904 5.096 24.5 12 24.5 L 12 24 Z M 24 12 L 23.5 12 C 23.5 18.351 18.351 23.5 12 23.5 L 12 24 L 12 24.5 C 18.904 24.5 24.5 18.904 24.5 12 L 24 12 Z M 12 0 L 12 0.5 C 18.351 0.5 23.5 5.649 23.5 12 L 24 12 L 24.5 12 C 24.5 5.096 18.904 -0.5 12 -0.5 L 12 0 Z M 12 0 L 12 -0.5 C 5.096 -0.5 -0.5 5.096 -0.5 12 L 0 12 L 0.5 12 C 0.5 5.649 5.649 0.5 12 0.5 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <TagCount size={"md"} />}</div>
      </div>
    </div>
  );
  const __body66 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 6666,
          flexShrink: 0,
          color: "rgba(0,0,0,0.08)",
        }}>
          <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0 12 M 24 12 M 24 12 M 0 12 M 12 0 M 24 12 M 12 24 M 0 12 M 12 24 L 12 23.5 C 5.649 23.5 0.5 18.351 0.5 12 L 0 12 L -0.5 12 C -0.5 18.904 5.096 24.5 12 24.5 L 12 24 Z M 24 12 L 23.5 12 C 23.5 18.351 18.351 23.5 12 23.5 L 12 24 L 12 24.5 C 18.904 24.5 24.5 18.904 24.5 12 L 24 12 Z M 12 0 L 12 0.5 C 18.351 0.5 23.5 5.649 23.5 12 L 24 12 L 24.5 12 C 24.5 5.096 18.904 -0.5 12 -0.5 L 12 0 Z M 12 0 L 12 -0.5 C 5.096 -0.5 -0.5 5.096 -0.5 12 L 0 12 L 0.5 12 C 0.5 5.649 5.649 0.5 12 0.5 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body67 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 10px 4px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"lg"} state={"default"} />}</div>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 6666,
          flexShrink: 0,
          color: "rgba(0,0,0,0.08)",
        }}>
          <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0 12 M 24 12 M 24 12 M 0 12 M 12 0 M 24 12 M 12 24 M 0 12 M 12 24 L 12 23.5 C 5.649 23.5 0.5 18.351 0.5 12 L 0 12 L -0.5 12 C -0.5 18.904 5.096 24.5 12 24.5 L 12 24 Z M 24 12 L 23.5 12 C 23.5 18.351 18.351 23.5 12 23.5 L 12 24 L 12 24.5 C 18.904 24.5 24.5 18.904 24.5 12 L 24 12 Z M 12 0 L 12 0.5 C 18.351 0.5 23.5 5.649 23.5 12 L 24 12 L 24.5 12 C 24.5 5.096 18.904 -0.5 12 -0.5 L 12 0 Z M 12 0 L 12 -0.5 C 5.096 -0.5 -0.5 5.096 -0.5 12 L 0 12 L 0.5 12 C 0.5 5.649 5.649 0.5 12 0.5 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body68 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 4px 4px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 6666,
          flexShrink: 0,
          color: "rgba(0,0,0,0.08)",
        }}>
          <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0 12 M 24 12 M 24 12 M 0 12 M 12 0 M 24 12 M 12 24 M 0 12 M 12 24 L 12 23.5 C 5.649 23.5 0.5 18.351 0.5 12 L 0 12 L -0.5 12 C -0.5 18.904 5.096 24.5 12 24.5 L 12 24 Z M 24 12 L 23.5 12 C 23.5 18.351 18.351 23.5 12 23.5 L 12 24 L 12 24.5 C 18.904 24.5 24.5 18.904 24.5 12 L 24 12 Z M 12 0 L 12 0.5 C 18.351 0.5 23.5 5.649 23.5 12 L 24 12 L 24.5 12 C 24.5 5.096 18.904 -0.5 12 -0.5 L 12 0 Z M 12 0 L 12 -0.5 C 5.096 -0.5 -0.5 5.096 -0.5 12 L 0 12 L 0.5 12 C 0.5 5.649 5.649 0.5 12 0.5 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <TagCloseX size={"lg"} state={"default"} />}</div>
    </div>
  );
  const __body69 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 4px 4px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"lg"} state={"default"} />}</div>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 6666,
          flexShrink: 0,
          color: "rgba(0,0,0,0.08)",
        }}>
          <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0 12 M 24 12 M 24 12 M 0 12 M 12 0 M 24 12 M 12 24 M 0 12 M 12 24 L 12 23.5 C 5.649 23.5 0.5 18.351 0.5 12 L 0 12 L -0.5 12 C -0.5 18.904 5.096 24.5 12 24.5 L 12 24 Z M 24 12 L 23.5 12 C 23.5 18.351 18.351 23.5 12 23.5 L 12 24 L 12 24.5 C 18.904 24.5 24.5 18.904 24.5 12 L 24 12 Z M 12 0 L 12 0.5 C 18.351 0.5 23.5 5.649 23.5 12 L 24 12 L 24.5 12 C 24.5 5.096 18.904 -0.5 12 -0.5 L 12 0 Z M 12 0 L 12 -0.5 C 5.096 -0.5 -0.5 5.096 -0.5 12 L 0 12 L 0.5 12 C 0.5 5.649 5.649 0.5 12 0.5 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
      </div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <TagCloseX size={"lg"} state={"default"} />}</div>
    </div>
  );
  const __body70 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 4px 4px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 6666,
          flexShrink: 0,
          color: "rgba(0,0,0,0.08)",
        }}>
          <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0 12 M 24 12 M 24 12 M 0 12 M 12 0 M 24 12 M 12 24 M 0 12 M 12 24 L 12 23.5 C 5.649 23.5 0.5 18.351 0.5 12 L 0 12 L -0.5 12 C -0.5 18.904 5.096 24.5 12 24.5 L 12 24 Z M 24 12 L 23.5 12 C 23.5 18.351 18.351 23.5 12 23.5 L 12 24 L 12 24.5 C 18.904 24.5 24.5 18.904 24.5 12 L 24 12 Z M 12 0 L 12 0.5 C 18.351 0.5 23.5 5.649 23.5 12 L 24 12 L 24.5 12 C 24.5 5.096 18.904 -0.5 12 -0.5 L 12 0 Z M 12 0 L 12 -0.5 C 5.096 -0.5 -0.5 5.096 -0.5 12 L 0 12 L 0.5 12 C 0.5 5.649 5.649 0.5 12 0.5 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <TagCount size={"lg"} />}</div>
      </div>
    </div>
  );
  const __body71 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--colors-background-bg-primary)",
      boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 3,
      padding: "4px 4px 4px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <TagCheckbox checked={false} size={"lg"} state={"default"} />}</div>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          overflow: "hidden",
          borderRadius: 6666,
          flexShrink: 0,
          color: "rgba(0,0,0,0.08)",
        }}>
          <path d={"M 0 12 C 0 5.373 5.373 0 12 0 L 12 0 C 18.627 0 24 5.373 24 12 L 24 12 C 24 18.627 18.627 24 12 24 L 12 24 C 5.373 24 0 18.627 0 12 L 0 12 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 0 12 M 24 12 M 24 12 M 0 12 M 12 0 M 24 12 M 12 24 M 0 12 M 12 24 L 12 23.5 C 5.649 23.5 0.5 18.351 0.5 12 L 0 12 L -0.5 12 C -0.5 18.904 5.096 24.5 12 24.5 L 12 24 Z M 24 12 L 23.5 12 C 23.5 18.351 18.351 23.5 12 23.5 L 12 24 L 12 24.5 C 18.904 24.5 24.5 18.904 24.5 12 L 24 12 Z M 12 0 L 12 0.5 C 18.351 0.5 23.5 5.649 23.5 12 L 24 12 L 24.5 12 C 24.5 5.096 18.904 -0.5 12 -0.5 L 12 0 Z M 12 0 L 12 -0.5 C 5.096 -0.5 -0.5 5.096 -0.5 12 L 0 12 L 0.5 12 C 0.5 5.649 5.649 0.5 12 0.5 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--colors-text-text-secondary-700)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Label"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <TagCount size={"lg"} />}</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Size=sm, Icon=False, Action=Text only, Checkbox=False
    "size=sm|icon=false|checkbox=false|action=text only": __body0,
    // figma: Size=sm, Icon=False, Action=Text only, Checkbox=True
    "size=sm|icon=false|checkbox=true|action=text only": __body1,
    // figma: Size=sm, Icon=False, Action=X close, Checkbox=False
    "size=sm|icon=false|checkbox=false|action=x close": __body2,
    // figma: Size=sm, Icon=False, Action=X close, Checkbox=True
    "size=sm|icon=false|checkbox=true|action=x close": __body3,
    // figma: Size=sm, Icon=False, Action=Count, Checkbox=False
    "size=sm|icon=false|checkbox=false|action=count": __body4,
    // figma: Size=sm, Icon=False, Action=Count, Checkbox=True
    "size=sm|icon=false|checkbox=true|action=count": __body5,
    // figma: Size=md, Icon=False, Action=Text only, Checkbox=False
    "size=md|icon=false|checkbox=false|action=text only": __body6,
    // figma: Size=md, Icon=False, Action=Text only, Checkbox=True
    "size=md|icon=false|checkbox=true|action=text only": __body7,
    // figma: Size=md, Icon=False, Action=X close, Checkbox=False
    "size=md|icon=false|checkbox=false|action=x close": __body8,
    // figma: Size=md, Icon=False, Action=X close, Checkbox=True
    "size=md|icon=false|checkbox=true|action=x close": __body9,
    // figma: Size=md, Icon=False, Action=Count, Checkbox=False
    "size=md|icon=false|checkbox=false|action=count": __body10,
    // figma: Size=md, Icon=False, Action=Count, Checkbox=True
    "size=md|icon=false|checkbox=true|action=count": __body11,
    // figma: Size=lg, Icon=False, Action=Text only, Checkbox=False
    "size=lg|icon=false|checkbox=false|action=text only": __body12,
    // figma: Size=lg, Icon=False, Action=Text only, Checkbox=True
    "size=lg|icon=false|checkbox=true|action=text only": __body13,
    // figma: Size=lg, Icon=False, Action=X close, Checkbox=False
    "size=lg|icon=false|checkbox=false|action=x close": __body14,
    // figma: Size=lg, Icon=False, Action=X close, Checkbox=True
    "size=lg|icon=false|checkbox=true|action=x close": __body15,
    // figma: Size=lg, Icon=False, Action=Count, Checkbox=False
    "size=lg|icon=false|checkbox=false|action=count": __body16,
    // figma: Size=lg, Icon=False, Action=Count, Checkbox=True
    "size=lg|icon=false|checkbox=true|action=count": __body17,
    // figma: Size=sm, Icon=Dot, Action=Text only, Checkbox=False
    "size=sm|icon=dot|checkbox=false|action=text only": __body18,
    // figma: Size=sm, Icon=Dot, Action=Text only, Checkbox=True
    "size=sm|icon=dot|checkbox=true|action=text only": __body19,
    // figma: Size=sm, Icon=Dot, Action=X close, Checkbox=False
    "size=sm|icon=dot|checkbox=false|action=x close": __body20,
    // figma: Size=sm, Icon=Dot, Action=X close, Checkbox=True
    "size=sm|icon=dot|checkbox=true|action=x close": __body21,
    // figma: Size=sm, Icon=Dot, Action=Count, Checkbox=False
    "size=sm|icon=dot|checkbox=false|action=count": __body22,
    // figma: Size=sm, Icon=Dot, Action=Count, Checkbox=True
    "size=sm|icon=dot|checkbox=true|action=count": __body23,
    // figma: Size=md, Icon=Dot, Action=Text only, Checkbox=False
    "size=md|icon=dot|checkbox=false|action=text only": __body24,
    // figma: Size=md, Icon=Dot, Action=Text only, Checkbox=True
    "size=md|icon=dot|checkbox=true|action=text only": __body25,
    // figma: Size=md, Icon=Dot, Action=X close, Checkbox=False
    "size=md|icon=dot|checkbox=false|action=x close": __body26,
    // figma: Size=md, Icon=Dot, Action=X close, Checkbox=True
    "size=md|icon=dot|checkbox=true|action=x close": __body27,
    // figma: Size=md, Icon=Dot, Action=Count, Checkbox=False
    "size=md|icon=dot|checkbox=false|action=count": __body28,
    // figma: Size=md, Icon=Dot, Action=Count, Checkbox=True
    "size=md|icon=dot|checkbox=true|action=count": __body29,
    // figma: Size=lg, Icon=Dot, Action=Text only, Checkbox=False
    "size=lg|icon=dot|checkbox=false|action=text only": __body30,
    // figma: Size=lg, Icon=Dot, Action=Text only, Checkbox=True
    "size=lg|icon=dot|checkbox=true|action=text only": __body31,
    // figma: Size=lg, Icon=Dot, Action=X close, Checkbox=False
    "size=lg|icon=dot|checkbox=false|action=x close": __body32,
    // figma: Size=lg, Icon=Dot, Action=X close, Checkbox=True
    "size=lg|icon=dot|checkbox=true|action=x close": __body33,
    // figma: Size=lg, Icon=Dot, Action=Count, Checkbox=False
    "size=lg|icon=dot|checkbox=false|action=count": __body34,
    // figma: Size=lg, Icon=Dot, Action=Count, Checkbox=True
    "size=lg|icon=dot|checkbox=true|action=count": __body35,
    // figma: Size=sm, Icon=Country, Action=Text only, Checkbox=False
    "size=sm|icon=country|checkbox=false|action=text only": __body36,
    // figma: Size=sm, Icon=Country, Action=Text only, Checkbox=True
    "size=sm|icon=country|checkbox=true|action=text only": __body37,
    // figma: Size=sm, Icon=Country, Action=X close, Checkbox=False
    "size=sm|icon=country|checkbox=false|action=x close": __body38,
    // figma: Size=sm, Icon=Country, Action=X close, Checkbox=True
    "size=sm|icon=country|checkbox=true|action=x close": __body39,
    // figma: Size=sm, Icon=Country, Action=Count, Checkbox=False
    "size=sm|icon=country|checkbox=false|action=count": __body40,
    // figma: Size=sm, Icon=Country, Action=Count, Checkbox=True
    "size=sm|icon=country|checkbox=true|action=count": __body41,
    // figma: Size=md, Icon=Country, Action=Text only, Checkbox=False
    "size=md|icon=country|checkbox=false|action=text only": __body42,
    // figma: Size=md, Icon=Country, Action=Text only, Checkbox=True
    "size=md|icon=country|checkbox=true|action=text only": __body43,
    // figma: Size=md, Icon=Country, Action=X close, Checkbox=False
    "size=md|icon=country|checkbox=false|action=x close": __body44,
    // figma: Size=md, Icon=Country, Action=X close, Checkbox=True
    "size=md|icon=country|checkbox=true|action=x close": __body45,
    // figma: Size=md, Icon=Country, Action=Count, Checkbox=False
    "size=md|icon=country|checkbox=false|action=count": __body46,
    // figma: Size=md, Icon=Country, Action=Count, Checkbox=True
    "size=md|icon=country|checkbox=true|action=count": __body47,
    // figma: Size=lg, Icon=Country, Action=Text only, Checkbox=False
    "size=lg|icon=country|checkbox=false|action=text only": __body48,
    // figma: Size=lg, Icon=Country, Action=Text only, Checkbox=True
    "size=lg|icon=country|checkbox=true|action=text only": __body49,
    // figma: Size=lg, Icon=Country, Action=X close, Checkbox=False
    "size=lg|icon=country|checkbox=false|action=x close": __body50,
    // figma: Size=lg, Icon=Country, Action=X close, Checkbox=True
    "size=lg|icon=country|checkbox=true|action=x close": __body51,
    // figma: Size=lg, Icon=Country, Action=Count, Checkbox=False
    "size=lg|icon=country|checkbox=false|action=count": __body52,
    // figma: Size=lg, Icon=Country, Action=Count, Checkbox=True
    "size=lg|icon=country|checkbox=true|action=count": __body53,
    // figma: Size=sm, Icon=Avatar, Action=Text only, Checkbox=False
    "size=sm|icon=avatar|checkbox=false|action=text only": __body54,
    // figma: Size=sm, Icon=Avatar, Action=Text only, Checkbox=True
    "size=sm|icon=avatar|checkbox=true|action=text only": __body55,
    // figma: Size=sm, Icon=Avatar, Action=X close, Checkbox=False
    "size=sm|icon=avatar|checkbox=false|action=x close": __body56,
    // figma: Size=sm, Icon=Avatar, Action=X close, Checkbox=True
    "size=sm|icon=avatar|checkbox=true|action=x close": __body57,
    // figma: Size=sm, Icon=Avatar, Action=Count, Checkbox=False
    "size=sm|icon=avatar|checkbox=false|action=count": __body58,
    // figma: Size=sm, Icon=Avatar, Action=Count, Checkbox=True
    "size=sm|icon=avatar|checkbox=true|action=count": __body59,
    // figma: Size=md, Icon=Avatar, Action=Text only, Checkbox=False
    "size=md|icon=avatar|checkbox=false|action=text only": __body60,
    // figma: Size=md, Icon=Avatar, Action=Text only, Checkbox=True
    "size=md|icon=avatar|checkbox=true|action=text only": __body61,
    // figma: Size=md, Icon=Avatar, Action=X close, Checkbox=False
    "size=md|icon=avatar|checkbox=false|action=x close": __body62,
    // figma: Size=md, Icon=Avatar, Action=X close, Checkbox=True
    "size=md|icon=avatar|checkbox=true|action=x close": __body63,
    // figma: Size=md, Icon=Avatar, Action=Count, Checkbox=False
    "size=md|icon=avatar|checkbox=false|action=count": __body64,
    // figma: Size=md, Icon=Avatar, Action=Count, Checkbox=True
    "size=md|icon=avatar|checkbox=true|action=count": __body65,
    // figma: Size=lg, Icon=Avatar, Action=Text only, Checkbox=False
    "size=lg|icon=avatar|checkbox=false|action=text only": __body66,
    // figma: Size=lg, Icon=Avatar, Action=Text only, Checkbox=True
    "size=lg|icon=avatar|checkbox=true|action=text only": __body67,
    // figma: Size=lg, Icon=Avatar, Action=X close, Checkbox=False
    "size=lg|icon=avatar|checkbox=false|action=x close": __body68,
    // figma: Size=lg, Icon=Avatar, Action=X close, Checkbox=True
    "size=lg|icon=avatar|checkbox=true|action=x close": __body69,
    // figma: Size=lg, Icon=Avatar, Action=Count, Checkbox=False
    "size=lg|icon=avatar|checkbox=false|action=count": __body70,
    // figma: Size=lg, Icon=Avatar, Action=Count, Checkbox=True
    "size=lg|icon=avatar|checkbox=true|action=count": __body71,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default Tag;
