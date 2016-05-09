/*
 * @author David Menger
 */
'use strict';

const assert = require('assert');
const App = require('../../../public/components/app.jsx');
const React = require('react');
const enzyme = require('enzyme');


describe('#app component', () => {

    it('should render header', () => {
        const app = enzyme.mount(
            <App />
        );

        assert.equal(app.find('h2').text(), 'Hello world');
    });


    it('should toggle text', () => {
        const app = enzyme.mount(
            <App />
        );

        app.find('input').simulate('click');
        assert.equal(app.find('b').length, 1, 'text should be visible after first click');

        app.find('input').simulate('click');
        assert.equal(app.find('b').length, 0, 'text should be hidden after second click');
    });

});
