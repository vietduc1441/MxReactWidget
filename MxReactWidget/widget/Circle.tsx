import * as React from "react";
interface ICircle {
    xCoord: number;
    yCoord: number;
    radius: number;
    color: string;
}
export class Circle extends React.Component<ICircle, {}>{
    render() {
        const circleStyle = {
            width: this.props.radius * 2,
            height: this.props.radius * 2,
            left: this.props.xCoord * 1,
            top: this.props.yCoord * 1,
            backgroundColor: this.props.color,
            position: 'absolute',
            borderRadius: '50%'
        }
        return (<div style={circleStyle}>
        </div>)
    }
} 