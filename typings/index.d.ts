/// <reference path="dojo/dojo.d.ts" />
/// <reference path="dijit/dijit.d.ts" />
/// <reference path="mendix/mx.d.ts" />

declare module "MxReactWidget/widget/lib/react/react" {
    import * as react from "react";
    export = react;
}
declare module "MxReactWidget/widget/lib/react/react-dom" {
    import * as reactdom from "react-dom";
    export = reactdom;
}
declare module "MxReactWidget/widget/lib/react/react-dnd" {
    import * as reactdnd from "react-dnd";
    export = reactdnd;
}
declare module "dojo/text!*" {
    export ="";
}