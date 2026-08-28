import * as React from 'react';
/**
 * Intentional addition: the German Classes course row. The Figma kit defines no
 * component set for this.
 */
export interface CourseCardProps {
  /** Course title; the app keeps the flag emoji in the string. */
  title?: string;
  /** Proficiency chip, e.g. "A1". */
  level?: string;
  /** Difficulty chip, e.g. "Easy". */
  difficulty?: string;
  completed?: number;
  total?: number;
  /** URL of the course thumbnail. */
  image?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare const CourseCard: React.FC<CourseCardProps>;
export default CourseCard;
