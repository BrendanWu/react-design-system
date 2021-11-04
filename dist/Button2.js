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
exports.Button2 = void 0;
const React = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const FlexDiv_1 = require("./FlexDiv");
const Icon_1 = require("./Icon");
const StyledButton = styled_components_1.default.button `
  background-color: ${({ alt }) => (alt ? "#1c1c1c" : "white")};
  color: ${({ alt }) => (alt ? "white" : "black")};
  width: 100%;
  height: 50px;
  cursor: pointer;
  border: solid 2px white;
  font-size: 12px;
  ${({ alt, disabled }) => !disabled &&
    `
    &:hover {
      background-color: ${!alt ? "#1c1c1c" : "white"};
      color: ${!alt ? "white" : "black"};
      border: solid 1px black;
    }
  `}

  &:focus {
    outline: 0;
  }
  ${({ disabled }) => disabled &&
    `
     background: gray;
     cursor: auto;
  `}
`;
const Button2 = (props) => {
    if (props.disabled) {
        return (React.createElement(StyledButton, Object.assign({}, props),
            React.createElement(FlexDiv_1.FlexDiv, { container: true, justify: "center", align: "center" },
                React.createElement("p", { style: { margin: 0, marginRight: 10 } }, props.label),
                props.icon ? React.createElement(Icon_1.Icon, { variant: props.icon, size: 10 }) : null)));
    }
    else {
        return (React.createElement(StyledButton, Object.assign({}, props),
            React.createElement(FlexDiv_1.FlexDiv, { container: true, justify: "center", align: "center" },
                React.createElement("p", { style: { margin: 0, marginRight: 10 } }, props.label),
                props.icon ? React.createElement(Icon_1.Icon, { variant: props.icon, size: 10 }) : null)));
    }
};
exports.Button2 = Button2;
//# sourceMappingURL=Button2.js.map