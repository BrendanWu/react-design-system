import * as React from "react";
declare type JustifyOptions = "center" | "space-between" | "space-evenly" | "flex-start" | "flex-end";
declare type AlignOptions = "center" | "flex-start" | "flex-end" | "stretch" | "base-line";
interface Props {
    vert?: boolean;
    style?: React.CSSProperties;
    container?: boolean;
    className?: string;
    justify?: JustifyOptions;
    align?: AlignOptions;
    size?: number;
    xs?: number;
    sm?: number;
    md?: number;
    l?: number;
    children?: any;
    onClick?: (e?: React.MouseEvent) => void;
}
export declare const FlexDiv: React.FC<Props>;
export {};
