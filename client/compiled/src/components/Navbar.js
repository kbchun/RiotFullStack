"use strict";

var Navbar = function Navbar(props) {
  return React.createElement(
    "nav",
    { className: "navbar " },
    React.createElement(
      "div",
      { className: "col-md-6 col-md-offset-3" },
      React.createElement(Searchbar, { onClickFunc: props.onClickFunc, onEnterFunc: props.onEnterFunc })
    )
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Navbar = Navbar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdmJhci5qc3giXSwibmFtZXMiOlsiTmF2YmFyIiwicHJvcHMiLCJvbkNsaWNrRnVuYyIsIm9uRW50ZXJGdW5jIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDWDtBQUFBO0FBQUEsTUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLDBCQUFmO0FBQ0UsMEJBQUMsU0FBRCxJQUFXLGFBQWFBLE1BQU1DLFdBQTlCLEVBQTJDLGFBQWFELE1BQU1FLFdBQTlEO0FBREY7QUFERixHQURXO0FBQUEsQ0FBYjs7QUFRQTtBQUNBO0FBQ0FDLE9BQU9KLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6Ik5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBOYXZiYXIgPSAocHJvcHMpID0+IChcbiAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcIj5cbiAgICAgIDxTZWFyY2hiYXIgb25DbGlja0Z1bmM9e3Byb3BzLm9uQ2xpY2tGdW5jfSBvbkVudGVyRnVuYz17cHJvcHMub25FbnRlckZ1bmN9Lz5cbiAgICA8L2Rpdj5cbiAgPC9uYXY+XG4pO1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93Lk5hdmJhciA9IE5hdmJhcjtcbiJdfQ==