"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = react_1.default.useState('md');
    const [size, setSize] = react_1.default.useState(window.innerWidth);
    const handleResize = () => {
        setSize(window.innerWidth);
        const bp = calculateBreakpoint(window.innerWidth);
        setBreakpoint(bp);
    };
    const calculateBreakpoint = (innerWidth) => {
        if (innerWidth < 480) {
            return 'xs';
        }
        if (innerWidth < 768) {
            return 'sm';
        }
        if (innerWidth < 992) {
            return 'md';
        }
        if (innerWidth < 1200) {
            return 'lg';
        }
        return 'xs';
    };
    react_1.default.useEffect(() => {
        const innerWidth = window.innerWidth;
        window.addEventListener("resize", handleResize);
        setBreakpoint(calculateBreakpoint(innerWidth));
    }, [size]);
    return breakpoint;
};
exports.default = useBreakpoint;
//# sourceMappingURL=useBreakpoint.js.map