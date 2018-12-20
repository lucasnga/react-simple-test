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
});
