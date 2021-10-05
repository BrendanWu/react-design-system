"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexDiv = void 0;
const React = require("react");
const styled_components_1 = require("styled-components");
const StyledFlexDiv = styled_components_1.default.div((props) => ({
    display: "flex",
    flexWrap: props.container && !props.xs && !props.sm ? "nowrap" : "wrap",
    flex: props.size ? props.size : 1,
    justifyContent: props.justify && props.justify,
    alignItems: props.align && props.align,
    flexDirection: props.vert ? "column" : "row",
}));
const FlexDiv = (props) => {
    return React.createElement(StyledFlexDiv, Object.assign({}, props));
};
exports.FlexDiv = FlexDiv;
//# sourceMappingURL=FlexDiv.js.map