import * as React from "react";
export class Canvas extends React.Component<{}, {}>{
    render() {
        const canvasStyle = {
            height: 600,
            width: "100%",
            backgroundColor: "orange",
            position: "relative",
        }
        return (
            <div style={canvasStyle}>
                {this.props.children}
            </div>
        )
    }
} 