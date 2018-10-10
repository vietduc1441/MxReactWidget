import * as React from "react";
import FlipMove from 'react-flip-move';
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
    radius: string;
    xCoord: string;
    yCoord: string;
    color: string;
}
/** Widget state, if changed, the widget will be re-rendered */
interface IWidgetState {
    data: Array<{
        key: string;
        text: string
    }>
}
export default class MxReactWidget extends React.Component<IMxReactWidgetProps, IWidgetState> {
    constructor(props: IMxReactWidgetProps) {
        super(props);
        this.state = { data: [{ key: "b", text: "asfas" }] };
    }
    componentWillMount() {
        console.log('Component will be mounted');
    }
    componentWillReceiveProps(nextProps: IMxReactWidgetProps) {
        console.log("New context object applied")
        window.setInterval(() => {
            this.setState(prevState => ({
                data: [...prevState.data, { key: "a", text: (new Date()).toDateString() }]
            }))
        }, 1000)
    }

    renderData() {
        if (this.state && this.state.data) {
            return this.state.data.map(item => (<li className="list-group-item" key={item.key}>{item.text}</li>))
        }
        else {
            return (<li>Nno data yet</li>)
        }
    }
    render() {
        return (
            <div>
                <FlipMove typeName="ul" className="list-group">
                    {this.renderData()}
                </FlipMove>
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