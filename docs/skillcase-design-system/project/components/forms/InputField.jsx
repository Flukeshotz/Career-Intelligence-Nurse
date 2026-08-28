import { AlertCircle } from '../data-display/AlertCircle.jsx';
import { ChevronDown } from './ChevronDown.jsx';
import { HelpIcon } from './HelpIcon.jsx';
import { Mail01 } from './Mail01.jsx';
import { PaymentMethodIcon } from './PaymentMethodIcon.jsx';
import { Tag } from '../core/Tag.jsx';

// figma node: 1349:21364 Input field (98 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "type=" + __venc(p.type) + '|' + "state=" + __venc(p.state) + '|' + "destructive=" + __venc(p.destructive);

export function InputField(_p = {}) {
  const props = { ..._p, iconLeading: _p.iconLeading ?? true, label: _p.label ?? true, size: _p.size ?? "sm", required: _p.required ?? true, hintText: _p.hintText ?? true, type: _p.type ?? "default", state: _p.state ?? "placeholder", helpIcon: _p.helpIcon ?? true, destructive: _p.destructive ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Email"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            {props.iconLeading && (
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.iconSwap ?? <Mail01 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            )}
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
            }}>{props.text3 ?? "olivia@untitledui.com"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Email"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-lg) * 1px)",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            {props.iconLeading && (
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.iconSwap ?? <Mail01 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            )}
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
            }}>{props.text3 ?? "olivia@untitledui.com"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Card number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 34,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <PaymentMethodIcon size={"sm"} paymentMethod={"mastercard"} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexGrow: 1,
            }}>{props.text3 ?? "Card number"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon2 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Card number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 34,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <PaymentMethodIcon size={"sm"} paymentMethod={"mastercard"} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
            }}>{props.text3 ?? "Card number"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon2 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Email"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            {props.iconLeading && (
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.iconSwap ?? <Mail01 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            )}
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
            }}>{props.text3 ?? "olivia@untitledui.com"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Email"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-lg) * 1px)",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            {props.iconLeading && (
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.iconSwap ?? <Mail01 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            )}
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
            }}>{props.text3 ?? "olivia@untitledui.com"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Card number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 34,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <PaymentMethodIcon size={"sm"} paymentMethod={"mastercard"} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
            }}>{props.text3 ?? "Card number"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon2 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Card number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 34,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <PaymentMethodIcon size={"sm"} paymentMethod={"mastercard"} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
            }}>{props.text3 ?? "Card number"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon2 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Email"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-disabled-subtle)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.iconSwap ?? <Mail01 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexGrow: 1,
            }}>{props.text3 ?? "olivia@untitledui.com"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Email"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-disabled-subtle)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-lg) * 1px)",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            {props.iconLeading && (
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.iconSwap ?? <Mail01 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            )}
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexGrow: 1,
            }}>{props.text3 ?? "olivia@untitledui.com"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Card number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-disabled-subtle)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 34,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <PaymentMethodIcon size={"sm"} paymentMethod={"mastercard"} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexGrow: 1,
            }}>{props.text3 ?? "Card number"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon2 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Card number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-disabled-subtle)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 34,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <PaymentMethodIcon size={"sm"} paymentMethod={"mastercard"} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexGrow: 1,
            }}>{props.text3 ?? "Card number"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon2 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Email"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            {props.iconLeading && (
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.iconSwap ?? <Mail01 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            )}
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "olivia@untitledui.com"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Email"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-lg) * 1px)",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            {props.iconLeading && (
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.iconSwap ?? <Mail01 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            )}
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "olivia@untitledui.com"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Card number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 34,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <PaymentMethodIcon size={"sm"} paymentMethod={"mastercard"} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "Card number"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon2 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Card number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 34,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <PaymentMethodIcon size={"sm"} paymentMethod={"mastercard"} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "Card number"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon2 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Email"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            {props.iconLeading && (
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.iconSwap ?? <Mail01 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            )}
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "olivia@untitledui.com"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Email"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-lg) * 1px)",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            {props.iconLeading && (
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.iconSwap ?? <Mail01 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            )}
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "olivia@untitledui.com"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Card number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 34,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <PaymentMethodIcon size={"sm"} paymentMethod={"mastercard"} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "Card number"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon2 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Card number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 34,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <PaymentMethodIcon size={"sm"} paymentMethod={"mastercard"} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "Card number"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon2 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Email"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-brand), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            {props.iconLeading && (
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.iconSwap ?? <Mail01 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            )}
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "olivia@untitledui.com"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Email"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-brand), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-lg) * 1px)",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            {props.iconLeading && (
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.iconSwap ?? <Mail01 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            )}
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "olivia@untitledui.com"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Card number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-brand), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 34,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <PaymentMethodIcon size={"sm"} paymentMethod={"mastercard"} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "Card number"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon2 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Card number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-brand), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 34,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <PaymentMethodIcon size={"sm"} paymentMethod={"mastercard"} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "Card number"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon2 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Email"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-error), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            {props.iconLeading && (
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.iconSwap ?? <Mail01 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            )}
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "olivia@untitledui.com"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Email"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-error), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-lg) * 1px)",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            {props.iconLeading && (
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.iconSwap ?? <Mail01 style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            )}
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "olivia@untitledui.com"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Card number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-error), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 34,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <PaymentMethodIcon size={"sm"} paymentMethod={"mastercard"} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "Card number"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon2 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Card number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-error), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 10px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 34,
                height: 24,
                flexShrink: 0,
              }}>{props.icon1 ?? <PaymentMethodIcon size={"sm"} paymentMethod={"mastercard"} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "Card number"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon2 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Users"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
            }}>{props.text3 ?? "Add users"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Users"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-lg) * 1px)",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
            }}>{props.text3 ?? "Add users"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Users"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-sm) * 1px)",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Tag
                style={{ position: "relative", flexShrink: 0 }}
                text1={"Olivia"}
                size={"md"}
                icon={"avatar"}
                checkbox={false}
                action={"x close"}
              />
              <Tag
                style={{ position: "relative", flexShrink: 0 }}
                text1={"Phoenix"}
                size={"md"}
                icon={"avatar"}
                checkbox={false}
                action={"x close"}
              />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "Lana"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Users"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-lg) * 1px)",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-sm) * 1px)",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Tag
                style={{ position: "relative", flexShrink: 0 }}
                text1={"Olivia"}
                size={"md"}
                icon={"avatar"}
                checkbox={false}
                action={"x close"}
              />
              <Tag
                style={{ position: "relative", flexShrink: 0 }}
                text1={"Phoenix"}
                size={"md"}
                icon={"avatar"}
                checkbox={false}
                action={"x close"}
              />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "Lana"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Users"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-disabled-subtle)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-sm) * 1px)",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Tag
                style={{ position: "relative", flexShrink: 0 }}
                text1={"Olivia"}
                size={"md"}
                icon={"avatar"}
                checkbox={false}
                action={"x close"}
              />
              <Tag
                style={{ position: "relative", flexShrink: 0 }}
                text1={"Phoenix"}
                size={"md"}
                icon={"avatar"}
                checkbox={false}
                action={"x close"}
              />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexGrow: 1,
            }}>{props.text3 ?? "Lana"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Users"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-disabled-subtle)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-lg) * 1px)",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexGrow: 1,
            }}>{props.text3 ?? "Add users"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Users"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-sm) * 1px)",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Tag
                style={{ position: "relative", flexShrink: 0 }}
                text1={"Olivia"}
                size={"md"}
                icon={"avatar"}
                checkbox={false}
                action={"x close"}
              />
              <Tag
                style={{ position: "relative", flexShrink: 0 }}
                text1={"Phoenix"}
                size={"md"}
                icon={"avatar"}
                checkbox={false}
                action={"x close"}
              />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "Lana"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Users"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-lg) * 1px)",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-sm) * 1px)",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Tag
                style={{ position: "relative", flexShrink: 0 }}
                text1={"Olivia"}
                size={"md"}
                icon={"avatar"}
                checkbox={false}
                action={"x close"}
              />
              <Tag
                style={{ position: "relative", flexShrink: 0 }}
                text1={"Phoenix"}
                size={"md"}
                icon={"avatar"}
                checkbox={false}
                action={"x close"}
              />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "Lana"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Users"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-brand), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-sm) * 1px)",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Tag
                style={{ position: "relative", flexShrink: 0 }}
                text1={"Olivia"}
                size={"md"}
                icon={"avatar"}
                checkbox={false}
                action={"x close"}
              />
              <Tag
                style={{ position: "relative", flexShrink: 0 }}
                text1={"Phoenix"}
                size={"md"}
                icon={"avatar"}
                checkbox={false}
                action={"x close"}
              />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "Lana"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Users"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-brand), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-lg) * 1px)",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-sm) * 1px)",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Tag
                style={{ position: "relative", flexShrink: 0 }}
                text1={"Olivia"}
                size={"md"}
                icon={"avatar"}
                checkbox={false}
                action={"x close"}
              />
              <Tag
                style={{ position: "relative", flexShrink: 0 }}
                text1={"Phoenix"}
                size={"md"}
                icon={"avatar"}
                checkbox={false}
                action={"x close"}
              />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "Lana"}</span>
          </div>
          {props.helpIcon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
          )}
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Users"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-error), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "10px 14px 10px 14px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-sm) * 1px)",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Tag
                style={{ position: "relative", flexShrink: 0 }}
                text1={"Olivia"}
                size={"md"}
                icon={"avatar"}
                checkbox={false}
                action={"x close"}
              />
              <Tag
                style={{ position: "relative", flexShrink: 0 }}
                text1={"Phoenix"}
                size={"md"}
                icon={"avatar"}
                checkbox={false}
                action={"x close"}
              />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "Lana"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Users"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-error), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-md) * 1px)",
          padding: "8px 12px 8px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-lg) * 1px)",
          paddingTop: "calc(var(--spacing-md) * 1px)",
          paddingRight: "calc(var(--spacing-lg) * 1px)",
          paddingBottom: "calc(var(--spacing-md) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-sm) * 1px)",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Tag
                style={{ position: "relative", flexShrink: 0 }}
                text1={"Olivia"}
                size={"md"}
                icon={"avatar"}
                checkbox={false}
                action={"x close"}
              />
              <Tag
                style={{ position: "relative", flexShrink: 0 }}
                text1={"Phoenix"}
                size={"md"}
                icon={"avatar"}
                checkbox={false}
                action={"x close"}
              />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "Lana"}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Phone number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 55,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "US"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
            }}>{props.text4 ?? "+1 (555) 000-0000"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Phone number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 53,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "US"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 10px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
            }}>{props.text4 ?? "+1 (555) 000-0000"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Phone number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 55,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "US"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
            }}>{props.text4 ?? "+1 (555) 000-0000"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is an error message.</span>
      )}
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Phone number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 53,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "US"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 10px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
            }}>{props.text4 ?? "+1 (555) 000-0000"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is an error message.</span>
      )}
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Phone number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-disabled-subtle)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 55,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "US"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexGrow: 1,
            }}>{props.text4 ?? "+1 (555) 000-0000"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Phone number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-disabled-subtle)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 53,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "US"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 10px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexGrow: 1,
            }}>{props.text4 ?? "+1 (555) 000-0000"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Phone number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 55,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "US"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text4 ?? "+1 (555) 000-0000"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Phone number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 53,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "US"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 10px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text4 ?? "+1 (555) 000-0000"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Phone number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 55,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "US"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text4 ?? "+1 (555) 000-0000"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is an error message.</span>
      )}
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Phone number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 53,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "US"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 10px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text4 ?? "+1 (555) 000-0000"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is an error message.</span>
      )}
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Phone number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-brand), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 55,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "US"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text4 ?? "+1 (555) 000-0000"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Phone number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-brand), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 53,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "US"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 10px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text4 ?? "+1 (555) 000-0000"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Phone number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-error), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 55,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "US"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text4 ?? "+1 (555) 000-0000"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is an error message.</span>
      )}
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Phone number"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-error), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 53,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text3 ?? "US"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 10px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text4 ?? "+1 (555) 000-0000"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is an error message.</span>
      )}
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: "8px 0px 0px 8px",
            display: "flex",
            flexDirection: "row",
            padding: "10px 12px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>{props.text3 ?? "http://"}</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>{props.text4 ?? "www.untitledui.com"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: "8px 0px 0px 8px",
            display: "flex",
            flexDirection: "row",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>{props.text3 ?? "http://"}</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>{props.text4 ?? "www.untitledui.com"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          isolation: "isolate",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            borderTop: "1px solid var(--colors-border-border-primary)",
            borderRight: "1px solid var(--colors-border-border-primary)",
            borderBottom: "1px solid var(--colors-border-border-primary)",
            borderLeft: "1px solid var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            zIndex: 2,
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
            }}>{props.text3 ?? "www.untitledui.com"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
          <div style={{
            position: "relative",
            width: 177,
            overflow: "hidden",
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "10px 16px 10px 16px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 20,
                height: 20,
                color: "var(--colors-foreground-fg-quaternary-400)",
              }}>
                <path d={"M 7 10.2 C 7 9.08 7 8.52 7.218 8.092 C 7.41 7.716 7.716 7.41 8.092 7.218 C 8.52 7 9.08 7 10.2 7 L 16.8 7 C 17.92 7 18.48 7 18.908 7.218 C 19.284 7.41 19.59 7.716 19.782 8.092 C 20 8.52 20 9.08 20 10.2 L 20 16.8 C 20 17.92 20 18.48 19.782 18.908 C 19.59 19.284 19.284 19.59 18.908 19.782 C 18.48 20 17.92 20 16.8 20 L 10.2 20 C 9.08 20 8.52 20 8.092 19.782 C 7.716 19.59 7.41 19.284 7.218 18.908 C 7 18.48 7 17.92 7 16.8 L 7 10.2 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              width: 93,
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
              }}>Copy</span>
            </div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          isolation: "isolate",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            borderTop: "1px solid var(--colors-border-border-primary)",
            borderRight: "1px solid var(--colors-border-border-primary)",
            borderBottom: "1px solid var(--colors-border-border-primary)",
            borderLeft: "1px solid var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            zIndex: 2,
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
            }}>{props.text3 ?? "www.untitledui.com"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
          <div style={{
            position: "relative",
            width: 158,
            overflow: "hidden",
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "10px 14px 10px 14px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 20,
                height: 20,
                color: "var(--colors-foreground-fg-quaternary-400)",
              }}>
                <path d={"M 7 10.2 C 7 9.08 7 8.52 7.218 8.092 C 7.41 7.716 7.716 7.41 8.092 7.218 C 8.52 7 9.08 7 10.2 7 L 16.8 7 C 17.92 7 18.48 7 18.908 7.218 C 19.284 7.41 19.59 7.716 19.782 8.092 C 20 8.52 20 9.08 20 10.2 L 20 16.8 C 20 17.92 20 18.48 19.782 18.908 C 19.59 19.284 19.284 19.59 18.908 19.782 C 18.48 20 17.92 20 16.8 20 L 10.2 20 C 9.08 20 8.52 20 8.092 19.782 C 7.716 19.59 7.41 19.284 7.218 18.908 C 7 18.48 7 17.92 7 16.8 L 7 10.2 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              width: 82,
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
              }}>Copy</span>
            </div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          isolation: "isolate",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            zIndex: 2,
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
            }}>{props.text3 ?? "www.untitledui.com"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            width: 177,
            overflow: "hidden",
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: "var(--colors-background-bg-primary)",
            borderTop: "1px solid var(--colors-border-border-primary)",
            borderRight: "1px solid var(--colors-border-border-primary)",
            borderBottom: "1px solid var(--colors-border-border-primary)",
            borderLeft: "1px solid var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "10px 16px 10px 16px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 20,
                height: 20,
                color: "var(--colors-foreground-fg-quaternary-400)",
              }}>
                <path d={"M 7 10.2 C 7 9.08 7 8.52 7.218 8.092 C 7.41 7.716 7.716 7.41 8.092 7.218 C 8.52 7 9.08 7 10.2 7 L 16.8 7 C 17.92 7 18.48 7 18.908 7.218 C 19.284 7.41 19.59 7.716 19.782 8.092 C 20 8.52 20 9.08 20 10.2 L 20 16.8 C 20 17.92 20 18.48 19.782 18.908 C 19.59 19.284 19.284 19.59 18.908 19.782 C 18.48 20 17.92 20 16.8 20 L 10.2 20 C 9.08 20 8.52 20 8.092 19.782 C 7.716 19.59 7.41 19.284 7.218 18.908 C 7 18.48 7 17.92 7 16.8 L 7 10.2 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              width: 93,
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
              }}>Copy</span>
            </div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          isolation: "isolate",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            zIndex: 2,
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
            }}>{props.text3 ?? "www.untitledui.com"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            width: 158,
            overflow: "hidden",
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: "var(--colors-background-bg-primary)",
            borderTop: "1px solid var(--colors-border-border-primary)",
            borderRight: "1px solid var(--colors-border-border-primary)",
            borderBottom: "1px solid var(--colors-border-border-primary)",
            borderLeft: "1px solid var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "10px 14px 10px 14px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 20,
                height: 20,
                color: "var(--colors-foreground-fg-quaternary-400)",
              }}>
                <path d={"M 7 10.2 C 7 9.08 7 8.52 7.218 8.092 C 7.41 7.716 7.716 7.41 8.092 7.218 C 8.52 7 9.08 7 10.2 7 L 16.8 7 C 17.92 7 18.48 7 18.908 7.218 C 19.284 7.41 19.59 7.716 19.782 8.092 C 20 8.52 20 9.08 20 10.2 L 20 16.8 C 20 17.92 20 18.48 19.782 18.908 C 19.59 19.284 19.284 19.59 18.908 19.782 C 18.48 20 17.92 20 16.8 20 L 10.2 20 C 9.08 20 8.52 20 8.092 19.782 C 7.716 19.59 7.41 19.284 7.218 18.908 C 7 18.48 7 17.92 7 16.8 L 7 10.2 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              width: 82,
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
              }}>Copy</span>
            </div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: "8px 0px 0px 8px",
            display: "flex",
            flexDirection: "row",
            padding: "10px 12px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>{props.text3 ?? "http://"}</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>{props.text4 ?? "www.untitledui.com"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is an error message.</span>
      )}
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: "8px 0px 0px 8px",
            display: "flex",
            flexDirection: "row",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>{props.text3 ?? "http://"}</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-placeholder-2)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>{props.text4 ?? "www.untitledui.com"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is an error message.</span>
      )}
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-disabled-subtle)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: "8px 0px 0px 8px",
            display: "flex",
            flexDirection: "row",
            padding: "10px 12px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexShrink: 0,
            }}>{props.text3 ?? "http://"}</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>{props.text4 ?? "www.untitledui.com"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body63 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-disabled-subtle)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: "8px 0px 0px 8px",
            display: "flex",
            flexDirection: "row",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexShrink: 0,
            }}>{props.text3 ?? "http://"}</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>{props.text4 ?? "www.untitledui.com"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body64 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          isolation: "isolate",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-disabled-subtle)",
            borderTop: "1px solid var(--colors-border-border-disabled)",
            borderRight: "1px solid var(--colors-border-border-disabled)",
            borderBottom: "1px solid var(--colors-border-border-disabled)",
            borderLeft: "1px solid var(--colors-border-border-disabled)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            zIndex: 2,
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexGrow: 1,
            }}>{props.text3 ?? "www.untitledui.com"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
          <div style={{
            position: "relative",
            width: 177,
            overflow: "hidden",
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "10px 16px 10px 16px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 20,
                height: 20,
                color: "var(--colors-foreground-fg-quaternary-400)",
              }}>
                <path d={"M 7 10.2 C 7 9.08 7 8.52 7.218 8.092 C 7.41 7.716 7.716 7.41 8.092 7.218 C 8.52 7 9.08 7 10.2 7 L 16.8 7 C 17.92 7 18.48 7 18.908 7.218 C 19.284 7.41 19.59 7.716 19.782 8.092 C 20 8.52 20 9.08 20 10.2 L 20 16.8 C 20 17.92 20 18.48 19.782 18.908 C 19.59 19.284 19.284 19.59 18.908 19.782 C 18.48 20 17.92 20 16.8 20 L 10.2 20 C 9.08 20 8.52 20 8.092 19.782 C 7.716 19.59 7.41 19.284 7.218 18.908 C 7 18.48 7 17.92 7 16.8 L 7 10.2 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              width: 93,
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
              }}>Copy</span>
            </div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body65 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          isolation: "isolate",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-disabled-subtle)",
            borderTop: "1px solid var(--colors-border-border-disabled)",
            borderRight: "1px solid var(--colors-border-border-disabled)",
            borderBottom: "1px solid var(--colors-border-border-disabled)",
            borderLeft: "1px solid var(--colors-border-border-disabled)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            zIndex: 2,
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexGrow: 1,
            }}>{props.text3 ?? "www.untitledui.com"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
          <div style={{
            position: "relative",
            width: 158,
            overflow: "hidden",
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "10px 14px 10px 14px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 20,
                height: 20,
                color: "var(--colors-foreground-fg-quaternary-400)",
              }}>
                <path d={"M 7 10.2 C 7 9.08 7 8.52 7.218 8.092 C 7.41 7.716 7.716 7.41 8.092 7.218 C 8.52 7 9.08 7 10.2 7 L 16.8 7 C 17.92 7 18.48 7 18.908 7.218 C 19.284 7.41 19.59 7.716 19.782 8.092 C 20 8.52 20 9.08 20 10.2 L 20 16.8 C 20 17.92 20 18.48 19.782 18.908 C 19.59 19.284 19.284 19.59 18.908 19.782 C 18.48 20 17.92 20 16.8 20 L 10.2 20 C 9.08 20 8.52 20 8.092 19.782 C 7.716 19.59 7.41 19.284 7.218 18.908 C 7 18.48 7 17.92 7 16.8 L 7 10.2 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              width: 82,
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
              }}>Copy</span>
            </div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body66 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: "8px 0px 0px 8px",
            display: "flex",
            flexDirection: "row",
            padding: "10px 12px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>{props.text3 ?? "http://"}</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>{props.text4 ?? "www.untitledui.com"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body67 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: "8px 0px 0px 8px",
            display: "flex",
            flexDirection: "row",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>{props.text3 ?? "http://"}</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>{props.text4 ?? "www.untitledui.com"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body68 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          isolation: "isolate",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            borderTop: "1px solid var(--colors-border-border-primary)",
            borderRight: "1px solid var(--colors-border-border-primary)",
            borderBottom: "1px solid var(--colors-border-border-primary)",
            borderLeft: "1px solid var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            zIndex: 2,
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "www.untitledui.com"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
          <div style={{
            position: "relative",
            width: 177,
            overflow: "hidden",
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "10px 16px 10px 16px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 20,
                height: 20,
                color: "var(--colors-foreground-fg-quaternary-400)",
              }}>
                <path d={"M 7 10.2 C 7 9.08 7 8.52 7.218 8.092 C 7.41 7.716 7.716 7.41 8.092 7.218 C 8.52 7 9.08 7 10.2 7 L 16.8 7 C 17.92 7 18.48 7 18.908 7.218 C 19.284 7.41 19.59 7.716 19.782 8.092 C 20 8.52 20 9.08 20 10.2 L 20 16.8 C 20 17.92 20 18.48 19.782 18.908 C 19.59 19.284 19.284 19.59 18.908 19.782 C 18.48 20 17.92 20 16.8 20 L 10.2 20 C 9.08 20 8.52 20 8.092 19.782 C 7.716 19.59 7.41 19.284 7.218 18.908 C 7 18.48 7 17.92 7 16.8 L 7 10.2 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              width: 93,
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
              }}>Copy</span>
            </div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body69 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          isolation: "isolate",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            borderTop: "1px solid var(--colors-border-border-primary)",
            borderRight: "1px solid var(--colors-border-border-primary)",
            borderBottom: "1px solid var(--colors-border-border-primary)",
            borderLeft: "1px solid var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            zIndex: 2,
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "www.untitledui.com"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
          <div style={{
            position: "relative",
            width: 100,
            overflow: "hidden",
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "10px 14px 10px 14px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 20,
                height: 20,
                color: "var(--colors-foreground-fg-quaternary-400)",
              }}>
                <path d={"M 7 10.2 C 7 9.08 7 8.52 7.218 8.092 C 7.41 7.716 7.716 7.41 8.092 7.218 C 8.52 7 9.08 7 10.2 7 L 16.8 7 C 17.92 7 18.48 7 18.908 7.218 C 19.284 7.41 19.59 7.716 19.782 8.092 C 20 8.52 20 9.08 20 10.2 L 20 16.8 C 20 17.92 20 18.48 19.782 18.908 C 19.59 19.284 19.284 19.59 18.908 19.782 C 18.48 20 17.92 20 16.8 20 L 10.2 20 C 9.08 20 8.52 20 8.092 19.782 C 7.716 19.59 7.41 19.284 7.218 18.908 C 7 18.48 7 17.92 7 16.8 L 7 10.2 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              width: 82,
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
              }}>Copy</span>
            </div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body70 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          isolation: "isolate",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            zIndex: 2,
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "www.untitledui.com"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            width: 177,
            overflow: "hidden",
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: "var(--colors-background-bg-primary)",
            borderTop: "1px solid var(--colors-border-border-primary)",
            borderRight: "1px solid var(--colors-border-border-primary)",
            borderBottom: "1px solid var(--colors-border-border-primary)",
            borderLeft: "1px solid var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "10px 16px 10px 16px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 20,
                height: 20,
                color: "var(--colors-foreground-fg-quaternary-400)",
              }}>
                <path d={"M 7 10.2 C 7 9.08 7 8.52 7.218 8.092 C 7.41 7.716 7.716 7.41 8.092 7.218 C 8.52 7 9.08 7 10.2 7 L 16.8 7 C 17.92 7 18.48 7 18.908 7.218 C 19.284 7.41 19.59 7.716 19.782 8.092 C 20 8.52 20 9.08 20 10.2 L 20 16.8 C 20 17.92 20 18.48 19.782 18.908 C 19.59 19.284 19.284 19.59 18.908 19.782 C 18.48 20 17.92 20 16.8 20 L 10.2 20 C 9.08 20 8.52 20 8.092 19.782 C 7.716 19.59 7.41 19.284 7.218 18.908 C 7 18.48 7 17.92 7 16.8 L 7 10.2 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              width: 93,
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
              }}>Copy</span>
            </div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body71 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          isolation: "isolate",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            zIndex: 2,
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "www.untitledui.com"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            width: 100,
            overflow: "hidden",
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: "var(--colors-background-bg-primary)",
            borderTop: "1px solid var(--colors-border-border-primary)",
            borderRight: "1px solid var(--colors-border-border-primary)",
            borderBottom: "1px solid var(--colors-border-border-primary)",
            borderLeft: "1px solid var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "10px 14px 10px 14px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 20,
                height: 20,
                color: "var(--colors-foreground-fg-quaternary-400)",
              }}>
                <path d={"M 7 10.2 C 7 9.08 7 8.52 7.218 8.092 C 7.41 7.716 7.716 7.41 8.092 7.218 C 8.52 7 9.08 7 10.2 7 L 16.8 7 C 17.92 7 18.48 7 18.908 7.218 C 19.284 7.41 19.59 7.716 19.782 8.092 C 20 8.52 20 9.08 20 10.2 L 20 16.8 C 20 17.92 20 18.48 19.782 18.908 C 19.59 19.284 19.284 19.59 18.908 19.782 C 18.48 20 17.92 20 16.8 20 L 10.2 20 C 9.08 20 8.52 20 8.092 19.782 C 7.716 19.59 7.41 19.284 7.218 18.908 C 7 18.48 7 17.92 7 16.8 L 7 10.2 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              width: 82,
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
              }}>Copy</span>
            </div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body72 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: "8px 0px 0px 8px",
            display: "flex",
            flexDirection: "row",
            padding: "10px 12px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>{props.text3 ?? "http://"}</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle)",
            display: "flex",
            flexDirection: "row",
            padding: "10px 14px 10px 14px",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            gap: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text4 ?? "www.untitledui.com"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is an error message.</span>
      )}
    </div>
  );
  const __body73 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: "8px 0px 0px 8px",
            display: "flex",
            flexDirection: "row",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>{props.text3 ?? "http://"}</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.text4 ?? "www.untitledui.com"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is an error message.</span>
      )}
    </div>
  );
  const __body74 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: "8px 0px 0px 8px",
            display: "flex",
            flexDirection: "row",
            padding: "10px 12px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>{props.text3 ?? "http://"}</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 2px var(--colors-border-border-brand)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>{props.text4 ?? "www.untitledui.com"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body75 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: "8px 0px 0px 8px",
            display: "flex",
            flexDirection: "row",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>{props.text3 ?? "http://"}</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 2px var(--colors-border-border-brand)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>{props.text4 ?? "www.untitledui.com"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body76 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          isolation: "isolate",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 2px var(--colors-border-border-brand)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            zIndex: 2,
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "www.untitledui.com"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
          <div style={{
            position: "relative",
            width: 177,
            overflow: "hidden",
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: "var(--colors-background-bg-primary)",
            borderTop: "1px solid var(--colors-border-border-primary)",
            borderRight: "1px solid var(--colors-border-border-primary)",
            borderBottom: "1px solid var(--colors-border-border-primary)",
            borderLeft: "1px solid var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "10px 16px 10px 16px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 20,
                height: 20,
                color: "var(--colors-foreground-fg-quaternary-400)",
              }}>
                <path d={"M 7 10.2 C 7 9.08 7 8.52 7.218 8.092 C 7.41 7.716 7.716 7.41 8.092 7.218 C 8.52 7 9.08 7 10.2 7 L 16.8 7 C 17.92 7 18.48 7 18.908 7.218 C 19.284 7.41 19.59 7.716 19.782 8.092 C 20 8.52 20 9.08 20 10.2 L 20 16.8 C 20 17.92 20 18.48 19.782 18.908 C 19.59 19.284 19.284 19.59 18.908 19.782 C 18.48 20 17.92 20 16.8 20 L 10.2 20 C 9.08 20 8.52 20 8.092 19.782 C 7.716 19.59 7.41 19.284 7.218 18.908 C 7 18.48 7 17.92 7 16.8 L 7 10.2 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              width: 93,
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
              }}>Copy</span>
            </div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body77 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          isolation: "isolate",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 2px var(--colors-border-border-brand)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            zIndex: 2,
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "www.untitledui.com"}</span>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
          <div style={{
            position: "relative",
            width: 158,
            overflow: "hidden",
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: "var(--colors-background-bg-primary)",
            borderTop: "1px solid var(--colors-border-border-primary)",
            borderRight: "1px solid var(--colors-border-border-primary)",
            borderBottom: "1px solid var(--colors-border-border-primary)",
            borderLeft: "1px solid var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "10px 14px 10px 14px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 20,
                height: 20,
                color: "var(--colors-foreground-fg-quaternary-400)",
              }}>
                <path d={"M 7 10.2 C 7 9.08 7 8.52 7.218 8.092 C 7.41 7.716 7.716 7.41 8.092 7.218 C 8.52 7 9.08 7 10.2 7 L 16.8 7 C 17.92 7 18.48 7 18.908 7.218 C 19.284 7.41 19.59 7.716 19.782 8.092 C 20 8.52 20 9.08 20 10.2 L 20 16.8 C 20 17.92 20 18.48 19.782 18.908 C 19.59 19.284 19.284 19.59 18.908 19.782 C 18.48 20 17.92 20 16.8 20 L 10.2 20 C 9.08 20 8.52 20 8.092 19.782 C 7.716 19.59 7.41 19.284 7.218 18.908 C 7 18.48 7 17.92 7 16.8 L 7 10.2 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              width: 82,
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
              }}>Copy</span>
            </div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text4 ?? "This is a hint text to help user."}</span>
      )}
    </div>
  );
  const __body78 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          isolation: "isolate",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 2px var(--colors-border-border-error)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            zIndex: 2,
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "www.untitledui.com"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            width: 177,
            overflow: "hidden",
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: "var(--colors-background-bg-primary)",
            borderTop: "1px solid var(--colors-border-border-primary)",
            borderRight: "1px solid var(--colors-border-border-primary)",
            borderBottom: "1px solid var(--colors-border-border-primary)",
            borderLeft: "1px solid var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "10px 16px 10px 16px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 20,
                height: 20,
                color: "var(--colors-foreground-fg-quaternary-400)",
              }}>
                <path d={"M 7 10.2 C 7 9.08 7 8.52 7.218 8.092 C 7.41 7.716 7.716 7.41 8.092 7.218 C 8.52 7 9.08 7 10.2 7 L 16.8 7 C 17.92 7 18.48 7 18.908 7.218 C 19.284 7.41 19.59 7.716 19.782 8.092 C 20 8.52 20 9.08 20 10.2 L 20 16.8 C 20 17.92 20 18.48 19.782 18.908 C 19.59 19.284 19.284 19.59 18.908 19.782 C 18.48 20 17.92 20 16.8 20 L 10.2 20 C 9.08 20 8.52 20 8.092 19.782 C 7.716 19.59 7.41 19.284 7.218 18.908 C 7 18.48 7 17.92 7 16.8 L 7 10.2 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              width: 93,
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
              }}>Copy</span>
            </div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body79 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          isolation: "isolate",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 2px var(--colors-border-border-error)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            zIndex: 2,
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
            }}>{props.text3 ?? "www.untitledui.com"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            width: 100,
            overflow: "hidden",
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: "var(--colors-background-bg-primary)",
            borderTop: "1px solid var(--colors-border-border-primary)",
            borderRight: "1px solid var(--colors-border-border-primary)",
            borderBottom: "1px solid var(--colors-border-border-primary)",
            borderLeft: "1px solid var(--colors-border-border-primary)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "10px 14px 10px 14px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 20,
                height: 20,
                color: "var(--colors-foreground-fg-quaternary-400)",
              }}>
                <path d={"M 7 10.2 C 7 9.08 7 8.52 7.218 8.092 C 7.41 7.716 7.716 7.41 8.092 7.218 C 8.52 7 9.08 7 10.2 7 L 16.8 7 C 17.92 7 18.48 7 18.908 7.218 C 19.284 7.41 19.59 7.716 19.782 8.092 C 20 8.52 20 9.08 20 10.2 L 20 16.8 C 20 17.92 20 18.48 19.782 18.908 C 19.59 19.284 19.284 19.59 18.908 19.782 C 18.48 20 17.92 20 16.8 20 L 10.2 20 C 9.08 20 8.52 20 8.092 19.782 C 7.716 19.59 7.41 19.284 7.218 18.908 C 7 18.48 7 17.92 7 16.8 L 7 10.2 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              width: 82,
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
              }}>Copy</span>
            </div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "This is an error message."}</span>
      )}
    </div>
  );
  const __body80 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: "8px 0px 0px 8px",
            display: "flex",
            flexDirection: "row",
            padding: "10px 12px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>{props.text3 ?? "http://"}</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 2px var(--colors-border-border-error)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>{props.text4 ?? "www.untitledui.com"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is an error message.</span>
      )}
    </div>
  );
  const __body81 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Website"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: "8px 0px 0px 8px",
            display: "flex",
            flexDirection: "row",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>{props.text3 ?? "http://"}</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--colors-background-bg-primary)",
            boxShadow: "inset 0 0 0 2px var(--colors-border-border-error)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              color: "var(--colors-text-text-primary-900)",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>{props.text4 ?? "www.untitledui.com"}</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is an error message.</span>
      )}
    </div>
  );
  const __body82 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Sale amount"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-md) * 1px)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "24px",
                color: "var(--colors-text-text-tertiary-600)",
                flexShrink: 0,
              }}>{props.text3 ?? "$"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "24px",
                color: "var(--colors-text-text-placeholder-2)",
                flexGrow: 1,
              }}>{props.text4 ?? "1,000.00"}</span>
            </div>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>USD</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body83 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Sale amount"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-md) * 1px)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "24px",
                color: "var(--colors-text-text-tertiary-600)",
                flexShrink: 0,
              }}>{props.text3 ?? "$"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "24px",
                color: "var(--colors-text-text-placeholder-2)",
                flexGrow: 1,
              }}>{props.text4 ?? "1,000.00"}</span>
            </div>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>USD</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body84 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Sale amount"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-md) * 1px)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "24px",
                color: "var(--colors-text-text-tertiary-600)",
                flexShrink: 0,
              }}>{props.text3 ?? "$"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "24px",
                color: "var(--colors-text-text-placeholder-2)",
                flexGrow: 1,
              }}>{props.text4 ?? "1,000.00"}</span>
            </div>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>USD</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is an error message.</span>
      )}
    </div>
  );
  const __body85 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Sale amount"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-md) * 1px)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "24px",
                color: "var(--colors-text-text-tertiary-600)",
                flexShrink: 0,
              }}>{props.text3 ?? "$"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "24px",
                color: "var(--colors-text-text-placeholder-2)",
                flexGrow: 1,
              }}>{props.text4 ?? "1,000.00"}</span>
            </div>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>USD</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is an error message.</span>
      )}
    </div>
  );
  const __body86 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Sale amount"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-disabled-subtle)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-md) * 1px)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "24px",
                color: "var(--colors-text-text-disabled)",
                flexShrink: 0,
              }}>{props.text3 ?? "$"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "24px",
                color: "var(--colors-text-text-disabled)",
                flexGrow: 1,
              }}>{props.text4 ?? "1,000.00"}</span>
            </div>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexShrink: 0,
            }}>USD</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body87 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Sale amount"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-disabled-subtle)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-disabled), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-md) * 1px)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "24px",
                color: "var(--colors-text-text-disabled)",
                flexShrink: 0,
              }}>{props.text3 ?? "$"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "24px",
                color: "var(--colors-text-text-disabled)",
                flexGrow: 1,
              }}>{props.text4 ?? "1,000.00"}</span>
            </div>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-disabled)",
              flexShrink: 0,
            }}>USD</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body88 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Sale amount"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-md) * 1px)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "24px",
                color: "var(--colors-text-text-tertiary-600)",
                flexShrink: 0,
              }}>{props.text3 ?? "$"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "24px",
                color: "var(--colors-text-text-primary-900)",
                flexGrow: 1,
              }}>{props.text4 ?? "1,000.00"}</span>
            </div>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>USD</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body89 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Sale amount"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-primary), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-md) * 1px)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "24px",
                color: "var(--colors-text-text-tertiary-600)",
                flexShrink: 0,
              }}>{props.text3 ?? "$"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "24px",
                color: "var(--colors-text-text-primary-900)",
                flexGrow: 1,
              }}>{props.text4 ?? "1,000.00"}</span>
            </div>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>USD</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body90 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Sale amount"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-md) * 1px)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "24px",
                color: "var(--colors-text-text-tertiary-600)",
                flexShrink: 0,
              }}>{props.text3 ?? "$"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "24px",
                color: "var(--colors-text-text-primary-900)",
                flexGrow: 1,
              }}>{props.text4 ?? "1,000.00"}</span>
            </div>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>USD</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is an error message.</span>
      )}
    </div>
  );
  const __body91 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Sale amount"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 1px var(--colors-border-border-error-subtle), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-md) * 1px)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "24px",
                color: "var(--colors-text-text-tertiary-600)",
                flexShrink: 0,
              }}>{props.text3 ?? "$"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "24px",
                color: "var(--colors-text-text-primary-900)",
                flexGrow: 1,
              }}>{props.text4 ?? "1,000.00"}</span>
            </div>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>USD</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is an error message.</span>
      )}
    </div>
  );
  const __body92 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Sale amount"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-brand), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-md) * 1px)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "24px",
                color: "var(--colors-text-text-tertiary-600)",
                flexShrink: 0,
              }}>{props.text3 ?? "$"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "24px",
                color: "var(--colors-text-text-primary-900)",
                flexGrow: 1,
              }}>{props.text4 ?? "1,000.00"}</span>
            </div>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>USD</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body93 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Sale amount"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-brand), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-md) * 1px)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "24px",
                color: "var(--colors-text-text-tertiary-600)",
                flexShrink: 0,
              }}>{props.text3 ?? "$"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "24px",
                color: "var(--colors-text-text-primary-900)",
                flexGrow: 1,
              }}>{props.text4 ?? "1,000.00"}</span>
            </div>
            {props.helpIcon && (
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <HelpIcon open={false} supportingText={false} tooltip={"top no arrow"} />}</div>
            )}
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>USD</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-tertiary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is a hint text to help user.</span>
      )}
    </div>
  );
  const __body94 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Sale amount"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-error), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-md) * 1px)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "24px",
                color: "var(--colors-text-text-tertiary-600)",
                flexShrink: 0,
              }}>{props.text3 ?? "$"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "24px",
                color: "var(--colors-text-text-primary-900)",
                flexGrow: 1,
              }}>{props.text4 ?? "1,000.00"}</span>
            </div>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "10px 14px 10px 14px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>USD</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is an error message.</span>
      )}
    </div>
  );
  const __body95 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.label && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-xxs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-secondary-700)",
            flexShrink: 0,
          }}>{props.text1 ?? "Sale amount"}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "var(--colors-text-text-brand-tertiary-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "*"}</span>
          )}
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--colors-background-bg-primary)",
          boxShadow: "inset 0 0 0 2px var(--colors-border-border-error), 0px 1px 2px 0px rgba(10,13,18,0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-md) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: "calc(var(--spacing-md) * 1px)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "24px",
                color: "var(--colors-text-text-tertiary-600)",
                flexShrink: 0,
              }}>{props.text3 ?? "$"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "24px",
                color: "var(--colors-text-text-primary-900)",
                flexGrow: 1,
              }}>{props.text4 ?? "1,000.00"}</span>
            </div>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon1 ?? <AlertCircle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-xxs) * 1px)",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-lg) * 1px)",
            paddingTop: "calc(var(--spacing-md) * 1px)",
            paddingRight: "calc(var(--spacing-lg) * 1px)",
            paddingBottom: "calc(var(--spacing-md) * 1px)",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "var(--colors-text-text-tertiary-600)",
              flexShrink: 0,
            }}>USD</span>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          </div>
        </div>
      </div>
      {props.hintText && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--colors-text-text-error-primary-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>This is an error message.</span>
      )}
    </div>
  );
  const __impls = {
    // figma: Size=md, Type=Default, Destructive=False, State=Placeholder
    "size=md|type=default|state=placeholder|destructive=false": __body0,
    // figma: Size=sm, Type=Default, Destructive=False, State=Placeholder
    "size=sm|type=default|state=placeholder|destructive=false": __body1,
    // figma: Size=md, Type=Payment input, Destructive=False, State=Placeholder
    "size=md|type=payment input|state=placeholder|destructive=false": __body2,
    // figma: Size=sm, Type=Payment input, Destructive=False, State=Placeholder
    "size=sm|type=payment input|state=placeholder|destructive=false": __body3,
    // figma: Size=md, Type=Default, Destructive=True, State=Placeholder
    "size=md|type=default|state=placeholder|destructive=true": __body4,
    // figma: Size=sm, Type=Default, Destructive=True, State=Placeholder
    "size=sm|type=default|state=placeholder|destructive=true": __body5,
    // figma: Size=md, Type=Payment input, Destructive=True, State=Placeholder
    "size=md|type=payment input|state=placeholder|destructive=true": __body6,
    // figma: Size=sm, Type=Payment input, Destructive=True, State=Placeholder
    "size=sm|type=payment input|state=placeholder|destructive=true": __body7,
    // figma: Size=md, Type=Default, Destructive=False, State=Disabled
    "size=md|type=default|state=disabled|destructive=false": __body8,
    // figma: Size=sm, Type=Default, Destructive=False, State=Disabled
    "size=sm|type=default|state=disabled|destructive=false": __body9,
    // figma: Size=md, Type=Payment input, Destructive=False, State=Disabled
    "size=md|type=payment input|state=disabled|destructive=false": __body10,
    // figma: Size=sm, Type=Payment input, Destructive=False, State=Disabled
    "size=sm|type=payment input|state=disabled|destructive=false": __body11,
    // figma: Size=md, Type=Default, Destructive=False, State=Filled
    "size=md|type=default|state=filled|destructive=false": __body12,
    // figma: Size=sm, Type=Default, Destructive=False, State=Filled
    "size=sm|type=default|state=filled|destructive=false": __body13,
    // figma: Size=md, Type=Payment input, Destructive=False, State=Filled
    "size=md|type=payment input|state=filled|destructive=false": __body14,
    // figma: Size=sm, Type=Payment input, Destructive=False, State=Filled
    "size=sm|type=payment input|state=filled|destructive=false": __body15,
    // figma: Size=md, Type=Default, Destructive=True, State=Filled
    "size=md|type=default|state=filled|destructive=true": __body16,
    // figma: Size=sm, Type=Default, Destructive=True, State=Filled
    "size=sm|type=default|state=filled|destructive=true": __body17,
    // figma: Size=md, Type=Payment input, Destructive=True, State=Filled
    "size=md|type=payment input|state=filled|destructive=true": __body18,
    // figma: Size=sm, Type=Payment input, Destructive=True, State=Filled
    "size=sm|type=payment input|state=filled|destructive=true": __body19,
    // figma: Size=md, Type=Default, Destructive=False, State=Focused
    "size=md|type=default|state=focused|destructive=false": __body20,
    // figma: Size=sm, Type=Default, Destructive=False, State=Focused
    "size=sm|type=default|state=focused|destructive=false": __body21,
    // figma: Size=md, Type=Payment input, Destructive=False, State=Focused
    "size=md|type=payment input|state=focused|destructive=false": __body22,
    // figma: Size=sm, Type=Payment input, Destructive=False, State=Focused
    "size=sm|type=payment input|state=focused|destructive=false": __body23,
    // figma: Size=md, Type=Default, Destructive=True, State=Focused
    "size=md|type=default|state=focused|destructive=true": __body24,
    // figma: Size=sm, Type=Default, Destructive=True, State=Focused
    "size=sm|type=default|state=focused|destructive=true": __body25,
    // figma: Size=md, Type=Payment input, Destructive=True, State=Focused
    "size=md|type=payment input|state=focused|destructive=true": __body26,
    // figma: Size=sm, Type=Payment input, Destructive=True, State=Focused
    "size=sm|type=payment input|state=focused|destructive=true": __body27,
    // figma: Size=md, Type=Tags, Destructive=False, State=Placeholder
    "size=md|type=tags|state=placeholder|destructive=false": __body28,
    // figma: Size=sm, Type=Tags, Destructive=False, State=Placeholder
    "size=sm|type=tags|state=placeholder|destructive=false": __body29,
    // figma: Size=md, Type=Tags, Destructive=True, State=Placeholder
    "size=md|type=tags|state=placeholder|destructive=true": __body30,
    // figma: Size=sm, Type=Tags, Destructive=True, State=Placeholder
    "size=sm|type=tags|state=placeholder|destructive=true": __body31,
    // figma: Size=md, Type=Tags, Destructive=False, State=Disabled
    "size=md|type=tags|state=disabled|destructive=false": __body32,
    // figma: Size=sm, Type=Tags, Destructive=False, State=Disabled
    "size=sm|type=tags|state=disabled|destructive=false": __body33,
    // figma: Size=md, Type=Tags, Destructive=False, State=Filled
    "size=md|type=tags|state=filled|destructive=false": __body34,
    // figma: Size=sm, Type=Tags, Destructive=False, State=Filled
    "size=sm|type=tags|state=filled|destructive=false": __body35,
    // figma: Size=md, Type=Tags, Destructive=True, State=Filled
    "size=md|type=tags|state=filled|destructive=true": __body30,
    // figma: Size=sm, Type=Tags, Destructive=True, State=Filled
    "size=sm|type=tags|state=filled|destructive=true": __body31,
    // figma: Size=md, Type=Tags, Destructive=False, State=Focused
    "size=md|type=tags|state=focused|destructive=false": __body36,
    // figma: Size=sm, Type=Tags, Destructive=False, State=Focused
    "size=sm|type=tags|state=focused|destructive=false": __body37,
    // figma: Size=md, Type=Tags, Destructive=True, State=Focused
    "size=md|type=tags|state=focused|destructive=true": __body38,
    // figma: Size=sm, Type=Tags, Destructive=True, State=Focused
    "size=sm|type=tags|state=focused|destructive=true": __body39,
    // figma: Size=md, Type=Leading dropdown, Destructive=False, State=Placeholder
    "size=md|type=leading dropdown|state=placeholder|destructive=false": __body40,
    // figma: Size=sm, Type=Leading dropdown, Destructive=False, State=Placeholder
    "size=sm|type=leading dropdown|state=placeholder|destructive=false": __body41,
    // figma: Size=md, Type=Leading dropdown, Destructive=True, State=Placeholder
    "size=md|type=leading dropdown|state=placeholder|destructive=true": __body42,
    // figma: Size=sm, Type=Leading dropdown, Destructive=True, State=Placeholder
    "size=sm|type=leading dropdown|state=placeholder|destructive=true": __body43,
    // figma: Size=md, Type=Leading dropdown, Destructive=False, State=Disabled
    "size=md|type=leading dropdown|state=disabled|destructive=false": __body44,
    // figma: Size=sm, Type=Leading dropdown, Destructive=False, State=Disabled
    "size=sm|type=leading dropdown|state=disabled|destructive=false": __body45,
    // figma: Size=md, Type=Leading dropdown, Destructive=False, State=Filled
    "size=md|type=leading dropdown|state=filled|destructive=false": __body46,
    // figma: Size=sm, Type=Leading dropdown, Destructive=False, State=Filled
    "size=sm|type=leading dropdown|state=filled|destructive=false": __body47,
    // figma: Size=md, Type=Leading dropdown, Destructive=True, State=Filled
    "size=md|type=leading dropdown|state=filled|destructive=true": __body48,
    // figma: Size=sm, Type=Leading dropdown, Destructive=True, State=Filled
    "size=sm|type=leading dropdown|state=filled|destructive=true": __body49,
    // figma: Size=md, Type=Leading dropdown, Destructive=False, State=Focused
    "size=md|type=leading dropdown|state=focused|destructive=false": __body50,
    // figma: Size=sm, Type=Leading dropdown, Destructive=False, State=Focused
    "size=sm|type=leading dropdown|state=focused|destructive=false": __body51,
    // figma: Size=md, Type=Leading dropdown, Destructive=True, State=Focused
    "size=md|type=leading dropdown|state=focused|destructive=true": __body52,
    // figma: Size=sm, Type=Leading dropdown, Destructive=True, State=Focused
    "size=sm|type=leading dropdown|state=focused|destructive=true": __body53,
    // figma: Size=md, Type=Leading text, Destructive=False, State=Placeholder
    "size=md|type=leading text|state=placeholder|destructive=false": __body54,
    // figma: Size=sm, Type=Leading text, Destructive=False, State=Placeholder
    "size=sm|type=leading text|state=placeholder|destructive=false": __body55,
    // figma: Size=md, Type=Trailing button, Destructive=False, State=Placeholder
    "size=md|type=trailing button|state=placeholder|destructive=false": __body56,
    // figma: Size=sm, Type=Trailing button, Destructive=False, State=Placeholder
    "size=sm|type=trailing button|state=placeholder|destructive=false": __body57,
    // figma: Size=md, Type=Trailing button, Destructive=True, State=Placeholder
    "size=md|type=trailing button|state=placeholder|destructive=true": __body58,
    // figma: Size=sm, Type=Trailing button, Destructive=True, State=Placeholder
    "size=sm|type=trailing button|state=placeholder|destructive=true": __body59,
    // figma: Size=md, Type=Leading text, Destructive=True, State=Placeholder
    "size=md|type=leading text|state=placeholder|destructive=true": __body60,
    // figma: Size=sm, Type=Leading text, Destructive=True, State=Placeholder
    "size=sm|type=leading text|state=placeholder|destructive=true": __body61,
    // figma: Size=md, Type=Leading text, Destructive=False, State=Disabled
    "size=md|type=leading text|state=disabled|destructive=false": __body62,
    // figma: Size=sm, Type=Leading text, Destructive=False, State=Disabled
    "size=sm|type=leading text|state=disabled|destructive=false": __body63,
    // figma: Size=md, Type=Trailing button, Destructive=False, State=Disabled
    "size=md|type=trailing button|state=disabled|destructive=false": __body64,
    // figma: Size=sm, Type=Trailing button, Destructive=False, State=Disabled
    "size=sm|type=trailing button|state=disabled|destructive=false": __body65,
    // figma: Size=md, Type=Leading text, Destructive=False, State=Filled
    "size=md|type=leading text|state=filled|destructive=false": __body66,
    // figma: Size=sm, Type=Leading text, Destructive=False, State=Filled
    "size=sm|type=leading text|state=filled|destructive=false": __body67,
    // figma: Size=md, Type=Trailing button, Destructive=False, State=Filled
    "size=md|type=trailing button|state=filled|destructive=false": __body68,
    // figma: Size=sm, Type=Trailing button, Destructive=False, State=Filled
    "size=sm|type=trailing button|state=filled|destructive=false": __body69,
    // figma: Size=md, Type=Trailing button, Destructive=True, State=Filled
    "size=md|type=trailing button|state=filled|destructive=true": __body70,
    // figma: Size=sm, Type=Trailing button, Destructive=True, State=Filled
    "size=sm|type=trailing button|state=filled|destructive=true": __body71,
    // figma: Size=md, Type=Leading text, Destructive=True, State=Filled
    "size=md|type=leading text|state=filled|destructive=true": __body72,
    // figma: Size=sm, Type=Leading text, Destructive=True, State=Filled
    "size=sm|type=leading text|state=filled|destructive=true": __body73,
    // figma: Size=md, Type=Leading text, Destructive=False, State=Focused
    "size=md|type=leading text|state=focused|destructive=false": __body74,
    // figma: Size=sm, Type=Leading text, Destructive=False, State=Focused
    "size=sm|type=leading text|state=focused|destructive=false": __body75,
    // figma: Size=md, Type=Trailing button, Destructive=False, State=Focused
    "size=md|type=trailing button|state=focused|destructive=false": __body76,
    // figma: Size=sm, Type=Trailing button, Destructive=False, State=Focused
    "size=sm|type=trailing button|state=focused|destructive=false": __body77,
    // figma: Size=md, Type=Trailing button, Destructive=True, State=Focused
    "size=md|type=trailing button|state=focused|destructive=true": __body78,
    // figma: Size=sm, Type=Trailing button, Destructive=True, State=Focused
    "size=sm|type=trailing button|state=focused|destructive=true": __body79,
    // figma: Size=md, Type=Leading text, Destructive=True, State=Focused
    "size=md|type=leading text|state=focused|destructive=true": __body80,
    // figma: Size=sm, Type=Leading text, Destructive=True, State=Focused
    "size=sm|type=leading text|state=focused|destructive=true": __body81,
    // figma: Size=md, Type=Trailing dropdown, Destructive=False, State=Placeholder
    "size=md|type=trailing dropdown|state=placeholder|destructive=false": __body82,
    // figma: Size=sm, Type=Trailing dropdown, Destructive=False, State=Placeholder
    "size=sm|type=trailing dropdown|state=placeholder|destructive=false": __body83,
    // figma: Size=md, Type=Trailing dropdown, Destructive=True, State=Placeholder
    "size=md|type=trailing dropdown|state=placeholder|destructive=true": __body84,
    // figma: Size=sm, Type=Trailing dropdown, Destructive=True, State=Placeholder
    "size=sm|type=trailing dropdown|state=placeholder|destructive=true": __body85,
    // figma: Size=md, Type=Trailing dropdown, Destructive=False, State=Disabled
    "size=md|type=trailing dropdown|state=disabled|destructive=false": __body86,
    // figma: Size=sm, Type=Trailing dropdown, Destructive=False, State=Disabled
    "size=sm|type=trailing dropdown|state=disabled|destructive=false": __body87,
    // figma: Size=md, Type=Trailing dropdown, Destructive=False, State=Filled
    "size=md|type=trailing dropdown|state=filled|destructive=false": __body88,
    // figma: Size=sm, Type=Trailing dropdown, Destructive=False, State=Filled
    "size=sm|type=trailing dropdown|state=filled|destructive=false": __body89,
    // figma: Size=md, Type=Trailing dropdown, Destructive=True, State=Filled
    "size=md|type=trailing dropdown|state=filled|destructive=true": __body90,
    // figma: Size=sm, Type=Trailing dropdown, Destructive=True, State=Filled
    "size=sm|type=trailing dropdown|state=filled|destructive=true": __body91,
    // figma: Size=md, Type=Trailing dropdown, Destructive=False, State=Focused
    "size=md|type=trailing dropdown|state=focused|destructive=false": __body92,
    // figma: Size=sm, Type=Trailing dropdown, Destructive=False, State=Focused
    "size=sm|type=trailing dropdown|state=focused|destructive=false": __body93,
    // figma: Size=md, Type=Trailing dropdown, Destructive=True, State=Focused
    "size=md|type=trailing dropdown|state=focused|destructive=true": __body94,
    // figma: Size=sm, Type=Trailing dropdown, Destructive=True, State=Focused
    "size=sm|type=trailing dropdown|state=focused|destructive=true": __body95,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default InputField;
