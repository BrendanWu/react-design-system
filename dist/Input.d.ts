import * as React from "react";
interface Props {
    label?: string;
    lines?: number;
    altTheme?: boolean;
    style?: React.CSSProperties;
}
export declare const Input: React.FC<Props & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>>;
export {};
