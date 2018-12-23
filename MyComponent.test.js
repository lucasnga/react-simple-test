const React = require('react');
const ReactDOM = require('react-dom');
const { shallow, mount, render } = require('enzyme');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
global.React = React;
const MyComponent = require('./MyComponent').default;

Enzyme.configure({ adapter: new Adapter() });

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

describe('Tests with Enzyme', () => {
	it('should be div element' , () => {
		const component = shallow(React.createElement(MyComponent, null));
		expect(component.name()).toEqual('div');
	});
	it('should render with paragraph and initial value of "0"', () => {
		const component = shallow(React.createElement(MyComponent, null));
		const paragraph = React.createElement('p', null, 0);
		expect(component.contains(paragraph)).toBe(true);
	});
});
