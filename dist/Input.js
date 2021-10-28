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
exports.Input = void 0;
const React = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
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