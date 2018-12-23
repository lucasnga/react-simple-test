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
		return React.createElement(
			"div",
			null,
			React.createElement(
				"p",
				null,
				this.state.value
			),
			React.createElement(
				"button",
				{ onClick: this.incHandler },
				"+"
			),
			React.createElement(
				"button",
				{ onClick: this.decHandler },
				"-"
			)
		);
	}
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	exports = Object.assign(exports, {
		default: MyComponent
	});
}