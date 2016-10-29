var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    var searchText = 'Dog';
    var spy = expect.createSpy();
    var todoSeacrh = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSeacrh.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSeacrh.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('should call onSearch with proper checked value', () => {
    var searchText = '';
    var spy = expect.createSpy();
    var todoSeacrh = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSeacrh.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSeacrh.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, searchText);
  });
});
