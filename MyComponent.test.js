const React = require('react');
const ReactDOM = require('react-dom');
global.React = React;
const MyComponent = require('./MyComponent').default;

describe('True should be true and false should be false for everyone :)', () => {
	it('True should be true', () => {
		expect(true).toEqual(true);
	});
	it('False should be false', () => {
		expect(false).toEqual(false);
	});
});

describe('MyComponent should not fail', () => {
	it('MyComponent renders', () => {
		ReactDOM.render(React.createElement(MyComponent, null), document.createElement('div'));
	});

	it('You can\'t invoke methods on not mounted component', () => {
		const MyNewComponent = new MyComponent();
		console.error = jest.fn()
		MyNewComponent.incHandler()
		expect(console.error).toHaveBeenCalled();
	});

	it('Increment handle should increment value in state', () => {
		const MyMountedComponent = ReactDOM.render(React.createElement(MyComponent, null), document.createElement('div'));
		MyMountedComponent.state.value = 10;
		MyMountedComponent.incHandler();
		expect(MyMountedComponent.state.value).toEqual(11);
	});

	it('Decrement handle should decrement value in state', () => {
		const MyMountedComponent = ReactDOM.render(React.createElement(MyComponent, null), document.createElement('div'));
		MyMountedComponent.state.value = 10;
		MyMountedComponent.decHandler();
		expect(MyMountedComponent.state.value).toEqual(9);
	});
});
