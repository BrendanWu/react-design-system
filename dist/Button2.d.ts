import * as React from "react";
import { VariantOptions } from "./Icon";
interface Props {
    label?: string;
    alt?: boolean;
    color?: string;
    icon?: VariantOptions | null;
    disabled?: boolean;
    onClick?: any;
    style?: React.CSSProperties;
}
export declare const Button2: React.FC<Props>;
export {};
