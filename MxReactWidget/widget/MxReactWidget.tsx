/// <reference path="../../typings/index.d.ts" />
import * as ReactDom from "MxReactWidget/widget/lib/react/react-dom";
import * as React from "MxReactWidget/widget/lib/react/react";
import { App } from "./App"
import declare = require("dojo/_base/declare");
import _WidgetBase = require("mxui/widget/_WidgetBase");
import _TemplatedMixin = require("dijit/_TemplatedMixin");
import widgetTemplate = require("dojo/text!MxReactWidget/widget/template/MxReactWidget.html");
import { Provider } from "MxReactWidget/widget/lib/react-redux/react-redux"
import { createStore } from "MxReactWidget/widget/lib/redux/redux"
import reducer from "./reducer/index";

class MxReactWidget {
    public domNode: HTMLDivElement;
    public templateString: string;
    public email: string;
    constructor() {
        this.templateString = widgetTemplate;
    }
    update(_obj: mendix.lib.MxObject, callback) {
        var store = createStore(reducer);
        ReactDom.render(
            <Provider store={store}>
                <App />
            </Provider>
            , this.domNode);
        callback && callback();
    }
    resize(_box) {
    }
    enable() {
    }
    disable() {
    }
    uninitialize() {
    }
}
let widgetInstance = new MxReactWidget();
export = declare("MxReactWidget.widget.MxReactWidget", [_WidgetBase, _TemplatedMixin], widgetInstance);