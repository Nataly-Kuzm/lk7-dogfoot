import React from "react";
import ReactDom from "react-dom";
import "./index.css";

class Card extends React.Component {
	render(){
		return (
			<div className="card">
			<div className="like">&lt;3</div>
			{this.props.smile}
			<h6>{this.props.text}</h6>
			</div>
		)
	}
}
const emotions =[
	{smile: "=)", description:"ы." },
	{smile: "O_o" , description: "Оооо..."  },
	{smile: "^_^", description: "Ммм ня.." },
	{smile: "=(", description: "Уф" },
]

ReactDom.render(
	<div className="wrapper">
		{/*<div className="card">=)</div>
		<div className="card">O_o</div>
		<div className="card">^_^</div>
<div className="card">=(</div>*/}
<Card smile="=)" text="ы." />
<Card smile="O_o" text="Оооо..." />
<Card smile ="^_^" text="Ммм ня.."/>
<Card smile="=(" text="Уф"/>

		</div>,
	document.querySelector("#root")
)