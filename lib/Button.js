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
const React = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const FlexDiv_1 = require("./FlexDiv");
const WithRipple_1 = require("./WithRipple");
const Icon_1 = require("./Icon");
const StyledButton = styled_components_1.default.button `
  background-color: ${({ alt }) => (alt ? "#000" : "white")};
  color: ${({ alt }) => (alt ? "white" : "black")};
  width: 100%;
  height: 50px;
  cursor: pointer;
  border: solid 2px white;
  font-size: 12px;
  ${({ alt, disabled }) => !disabled &&
    `
    &:hover {
      background-color: ${!alt ? "#000" : "white"};
      color: ${!alt ? "white" : "black"};
      border: solid 1px black;
    }
  `}

  &:focus {
    outline: 0;
  }
  ${({ disabled }) => disabled &&
    `
  
     cursor: auto;
  `}
`;
const Button = (props) => {
    if (props.disabled) {
        return (React.createElement(StyledButton, Object.assign({}, props),
            React.createElement(FlexDiv_1.FlexDiv, { container: true, justify: "center", align: "center" },
                React.createElement("p", { style: { margin: 0 } }, props.label),
                props.icon ? React.createElement(Icon_1.Icon, { variant: props.icon, size: 10 }) : null)));
    }
    else {
        return (React.createElement(WithRipple_1.RippleWrapper, { className: "rippleWrapper" },
            React.createElement(StyledButton, Object.assign({}, props),
                React.createElement(FlexDiv_1.FlexDiv, { container: true, justify: "center", align: "center" },
                    React.createElement("p", { style: { margin: 0 } }, props.label),
                    props.icon ? React.createElement(Icon_1.Icon, { variant: props.icon, size: 10 }) : null))));
    }
};
exports.default = Button;
//# sourceMappingURL=Button.js.map