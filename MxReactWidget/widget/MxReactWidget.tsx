
import { observable, configure } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import { Circle } from "./Circle";
import { Canvas } from "./Canvas";
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
    /**TODO: fill in other wiget property */
    radius: string;
    xCoord: string;
    yCoord: string;
    color: string;
}
/**Widget data */
interface IWidgetData {
    /** TODO: Fill in widget data interface*/
}
@observer export default class MxReactWidget extends React.Component<IMxReactWidgetProps, IWidgetState> {
    @observable data: IWidgetData = {
        /** TODO: Fill in widget data */
    }

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