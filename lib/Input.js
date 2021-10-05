"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const React = require("react");
const styled_components_1 = require("styled-components");
const StyledInput = styled_components_1.default.input.attrs((props) => ({
    placeholder: props.label,
    altTheme: props.altTheme,
}))((props) => ({
    flex: 1,
    height: 50,
    background: props.altTheme ? "white" : "#1c1c1c",
    color: props.altTheme ? "black" : "white",
    border: props.altTheme ? "2px solid lightgray" : "2px solid white",
    paddingLeft: "1em",
    fontFamily: "Montserrat",
}));
const StyledTextArea = styled_components_1.default.textarea.attrs((props) => ({
    placeholder: props.label,
    lines: props.lines,
    altTheme: props.altTheme,
}))((props) => ({
    flex: 1,
    height: 20 * props.lines,
    background: props.altTheme ? "white" : "#1c1c1c",
    color: props.altTheme ? "black" : "white",
    border: props.altTheme ? "2px solid lightgray" : "2px solid white",
    paddingLeft: "1em",
    fontFamily: "Montserrat",
    paddingTop: "1em",
}));
const Input = (props) => {
    if (props.lines) {
        return React.createElement(StyledTextArea, Object.assign({}, props));
    }
    return React.createElement(StyledInput, Object.assign({}, props));
};
exports.Input = Input;
//# sourceMappingURL=Input.js.map