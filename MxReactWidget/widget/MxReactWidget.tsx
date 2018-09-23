import * as React from "react";
import { App } from "./App";
export default class MxReactWidget extends React.Component<{}, {}> {
    private property: any;
    constructor(props) {
        super(props);
        this.property = {
        };
        this.state = {
        };
    }
    componentWillMount() {
        console.log('component will mount');
    }
    componentWillReceiveProps(nextProps: I.IEMagizFlowProps) {
        console.log("component will receive props")

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