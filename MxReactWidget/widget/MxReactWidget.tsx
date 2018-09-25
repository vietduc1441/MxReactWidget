import * as React from "react";
import { App } from "./App";
/**
 * Built-in Properties of Mendix
 */
interface IMendixDefaultProps {
    /** Class configured from Modeller */
    class: string;
    /** Context Object of the widget */
    mxObject?: mendix.lib.MxObject;
    /** Style configured from Modeller */
    style: string;
    /** Form object contains the widget */
    mxform: mxui.lib.form._FormBase;
}
/**
 * Interface for variable sent from Modeller
 */
interface IMxReactWidgetProps extends IMendixDefaultProps {
    messageString?: string
}
/** Widget state, if changed, the widget will be re-rendered */
interface IWidgetState {
    messageString?: string;
}
export default class MxReactWidget extends React.Component<IMxReactWidgetProps, IWidgetState> {
    constructor(props: IMxReactWidgetProps) {
        super(props);
        this.state = {
            messageString: props.messageString
        };
    }
    componentWillMount() {
        console.log('component will mount');
    }
    componentWillReceiveProps(nextProps: IMxReactWidgetProps) {
        this.setState({ messageString: nextProps.messageString })
    }

    render() {
        console.log("render");
        return (
            <App></App>
        )
    }
    componentDidUpdate() {
        console.log("component did update");
    }
} 