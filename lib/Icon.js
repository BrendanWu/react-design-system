"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const React = require("react");
const styled_components_1 = require("styled-components");
const StyledIcon = styled_components_1.default.img.attrs((props) => ({
    src: "https://ellicotimages.s3.us-east-2.amazonaws.com/" + props.variant,
    size: props.size,
}))((props) => ({
    height: props.size,
    width: props.size,
}));
const Icon = (props) => {
    if (props.variant) {
        return React.createElement(StyledIcon, Object.assign({}, props));
    }
    else {
        return React.createElement("div", null);
    }
};
exports.Icon = Icon;
//# sourceMappingURL=Icon.js.map