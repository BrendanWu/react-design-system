"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withRipple = exports.RippleWrapper = void 0;
const React = require("react");
const styled_components_1 = require("styled-components");
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