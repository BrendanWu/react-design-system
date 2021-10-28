import * as React from "react";
import { VariantOptions } from "./Icon";
interface Props {
    label?: string;
    alt?: boolean;
    color?: string;
    className?: string;
    icon?: VariantOptions | null;
    disabled?: boolean;
    onClick?: any;
    style?: React.CSSProperties;
}
declare const Button: React.FC<Props>;
export default Button;
