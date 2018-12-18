class MyComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
		this.incHandler = this.incHandler.bind(this);
		this.decHandler = this.decHandler.bind(this);
	}

	incHandler(e) {
		this.setState({
			value: this.state.value + 1
		});
	}

	decHandler(e) {
		this.setState({
			value: this.state.value - 1
		});
	}

	render() {
		return (
			<div>
				<p>{this.state.value}</p>
				
				<button onClick={this.incHandler}>
					+
				</button>
				
				<button onClick={this.decHandler}>
					-
				</button>
			</div>
		);
	}
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));