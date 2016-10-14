"use strict";

var FeatureGame = function FeatureGame(props) {
  return React.createElement(
    "div",
    { className: "game-list-entry" },
    React.createElement("div", { className: "media-left media-middle" }),
    React.createElement(
      "div",
      { className: "media-body" },
      React.createElement(
        "div",
        { className: "game-list-entry-title" },
        "SUMMONER: ",
        props.summoner
      ),
      React.createElement("div", { className: "game-list-entry-detail" }),
      props.statistics.map(function (stat) {
        return React.createElement(
          "div",
          null,
          stat
        );
      })
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FeatureGame.propTypes = {
  game: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FeatureGame = FeatureGame;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ZlYXR1cmVHYW1lLmpzeCJdLCJuYW1lcyI6WyJGZWF0dXJlR2FtZSIsInByb3BzIiwic3VtbW9uZXIiLCJzdGF0aXN0aWNzIiwibWFwIiwic3RhdCIsInByb3BUeXBlcyIsImdhbWUiLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxTQUNoQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGlCQUFmO0FBQ0UsaUNBQUssV0FBVSx5QkFBZixHQURGO0FBR0U7QUFBQTtBQUFBLFFBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSx1QkFBZjtBQUFBO0FBQWtEQSxjQUFNQztBQUF4RCxPQURGO0FBRUUsbUNBQUssV0FBVSx3QkFBZixHQUZGO0FBSUlELFlBQU1FLFVBQU4sQ0FBaUJDLEdBQWpCLENBQXNCLFVBQUNDLElBQUQ7QUFBQSxlQUFVO0FBQUE7QUFBQTtBQUFNQTtBQUFOLFNBQVY7QUFBQSxPQUF0QjtBQUpKO0FBSEYsR0FEZ0I7QUFBQSxDQUFsQjs7QUFjQTtBQUNBO0FBQ0FMLFlBQVlNLFNBQVosR0FBd0I7QUFDdEJDLFFBQU1DLE1BQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQURQLENBQXhCOztBQUlBO0FBQ0E7QUFDQUMsT0FBT1osV0FBUCxHQUFxQkEsV0FBckIiLCJmaWxlIjoiRmVhdHVyZUdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRmVhdHVyZUdhbWUgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWxpc3QtZW50cnlcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWxlZnQgbWVkaWEtbWlkZGxlXCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtbGlzdC1lbnRyeS10aXRsZVwiPlNVTU1PTkVSOiB7cHJvcHMuc3VtbW9uZXJ9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtbGlzdC1lbnRyeS1kZXRhaWxcIj48L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgcHJvcHMuc3RhdGlzdGljcy5tYXAoIChzdGF0KSA9PiA8ZGl2PntzdGF0fTwvZGl2PilcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG4vLyBQcm9wVHlwZXMgdGVsbCBvdGhlciBkZXZlbG9wZXJzIHdoYXQgYHByb3BzYCBhIGNvbXBvbmVudCBleHBlY3RzXG4vLyBXYXJuaW5ncyB3aWxsIGJlIHNob3duIGluIHRoZSBjb25zb2xlIHdoZW4gdGhlIGRlZmluZWQgcnVsZXMgYXJlIHZpb2xhdGVkXG5GZWF0dXJlR2FtZS5wcm9wVHlwZXMgPSB7XG4gIGdhbWU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5GZWF0dXJlR2FtZSA9IEZlYXR1cmVHYW1lOyJdfQ==