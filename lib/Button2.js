"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button2 = void 0;
const React = require("react");
const styled_components_1 = require("styled-components");
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