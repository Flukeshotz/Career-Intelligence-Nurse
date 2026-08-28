import * as React from 'react';
/**
 * Intentional addition: the conversation turn from
 * src/pages/learnGerman/lesson/screens/ConversationScreen.jsx. No Figma
 * component set exists for it.
 */
export interface ChatBubbleProps {
  /** `character` speaks on the left in blue; `learner` replies on the right in white. */
  side?: 'character' | 'learner';
  text?: string;
  /** English gloss under the German line — character turns only. */
  meaning?: string;
  avatar?: string;
  onPlay?: () => void;
  style?: React.CSSProperties;
}
export declare const ChatBubble: React.FC<ChatBubbleProps>;
export default ChatBubble;
