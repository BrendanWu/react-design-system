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
exports.FlexDiv = void 0;
const React = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
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