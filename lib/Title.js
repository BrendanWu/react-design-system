"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const React = require("react");
const styled_components_1 = require("styled-components");
const StyledTitle = styled_components_1.default.h1 `
  font-family: "CentraNo2-Thin";
  font-size: 54px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: -0.81px;
  text-align: center;
  color: #1c1c1c;
`;
const Title = (props) => {
    return React.createElement(StyledTitle, null, props.label);
};
exports.Title = Title;
//# sourceMappingURL=Title.js.map