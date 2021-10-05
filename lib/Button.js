"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
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