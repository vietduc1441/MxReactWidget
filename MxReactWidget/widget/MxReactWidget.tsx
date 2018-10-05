import * as React from "react";
import { Circle } from "./Circle";
import { Canvas } from "./Canvas";
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
}
export default class MxReactWidget extends React.Component<IMxReactWidgetProps, IWidgetState> {
    constructor(props: IMxReactWidgetProps) {
        super(props);
    }
    componentWillMount() {
        console.log('Component will be mounted');
    }
    componentWillReceiveProps(nextProps: IMxReactWidgetProps) {
        console.log("New context object applied")
    }
    render() {
        let contextObj = this.props.mxObject;
        return (
            <div>
                <Canvas>
                    {contextObj ?
                        (<Circle xCoord={contextObj.get(this.props.xCoord) as number}
                            yCoord={contextObj.get(this.props.yCoord) as number}
                            color={contextObj.get(this.props.color) as string}
                            radius={contextObj.get(this.props.radius) as number}
                        />)
                        :
                        <div>No context object !</div>
                    }
                </Canvas>
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