"use strict";

var Searchbar = function Searchbar(props) {
  return React.createElement(
    "div",
    { className: "search-bar form-inline" },
    React.createElement("input", { className: "form-control", type: "text", onKeyDown: props.onEnterFunc }),
    React.createElement(
      "button",
      { className: "btn hidden-sm-down", onClick: props.onClickFunc },
      "Search Summoner"
    )
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Searchbar = Searchbar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaGJhci5qc3giXSwibmFtZXMiOlsiU2VhcmNoYmFyIiwicHJvcHMiLCJvbkVudGVyRnVuYyIsIm9uQ2xpY2tGdW5jIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxLQUFEO0FBQUEsU0FDZDtBQUFBO0FBQUEsTUFBSyxXQUFVLHdCQUFmO0FBQ0UsbUNBQU8sV0FBVSxjQUFqQixFQUFnQyxNQUFLLE1BQXJDLEVBQTRDLFdBQVdBLE1BQU1DLFdBQTdELEdBREY7QUFFRTtBQUFBO0FBQUEsUUFBUSxXQUFVLG9CQUFsQixFQUF1QyxTQUFTRCxNQUFNRSxXQUF0RDtBQUFBO0FBQUE7QUFGRixHQURjO0FBQUEsQ0FBaEI7O0FBU0E7QUFDQTtBQUNBQyxPQUFPSixTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJTZWFyY2hiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2VhcmNoYmFyID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhciBmb3JtLWlubGluZVwiPlxuICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIG9uS2V5RG93bj17cHJvcHMub25FbnRlckZ1bmN9Lz5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBoaWRkZW4tc20tZG93blwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2tGdW5jfT5cbiAgICAgIFNlYXJjaCBTdW1tb25lclxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj4gXG4pO1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93LlNlYXJjaGJhciA9IFNlYXJjaGJhcjtcbiJdfQ==