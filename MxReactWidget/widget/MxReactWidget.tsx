import { observable, configure } from "mobx";
import { observer } from "mobx-react"
import * as React from "react";
configure({ isolateGlobalState: true });
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
interface IWidgetData {
    currentTime?: string;
}
@observer class MxReactWidget extends React.Component<IMxReactWidgetProps, {}> {
    @observable data: IWidgetData = {
        currentTime: `Current Time: ${new Date()}`
    }
    constructor(props: IMxReactWidgetProps) {
        super(props);
    }
    componentWillMount() {
        console.log('component will mount');
        window.setInterval(() => {
            this.data.currentTime = `Current Time: ${new Date()}`;
        }, 1000)
    }
    componentWillReceiveProps(nextProps: IMxReactWidgetProps) {
    }
    render() {
        return (
            <div>
                <div>Message from Modeller: {this.props.messageString}</div>
                <div>Current time in State: {this.data.currentTime}</div>
            </div >
        )
    }
    componentDidUpdate() {
        console.log("component did update");
    }
    componentWillUnmount() {
        // unintialize
    }
}
export default MxReactWidget; 