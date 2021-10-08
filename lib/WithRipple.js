"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withRipple = exports.RippleWrapper = void 0;
const React = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
exports.RippleWrapper = styled_components_1.default.div `
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }
  &:active:after {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
  }
`;
const withRipple = (Comp) => {
    return class RippleProvider extends React.Component {
        render() {
            return (React.createElement(exports.RippleWrapper, null,
                React.createElement(Comp, Object.assign({}, this.props))));
        }
    };
};
exports.withRipple = withRipple;
//# sourceMappingURL=WithRipple.js.map