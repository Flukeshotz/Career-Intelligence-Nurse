import * as React from 'react';
export interface SocialIconProps {
  className?: string;
  style?: React.CSSProperties;
  platform?: "angellist" | "apple" | "clubhouse" | "dribbble" | "discord 01" | "discord 02" | "facebook" | "figma" | "framer 01" | "framer 02" | "github" | "google" | "instagram" | "layers" | "linkedin" | "notion" | "paypal" | "pinterest" | "reddit" | "signal" | "slack" | "snapchat" | "spotify" | "stripe" | "telegram" | "tiktok" | "tumblr" | "twitch" | "twitter" | "webflow" | "whatsapp" | "wise" | "x (twitter)" | "youtube";
  style2?: "brand" | "gray";
  state?: "default" | "hover";
}
export declare const SocialIcon: React.FC<SocialIconProps>;
export default SocialIcon;
