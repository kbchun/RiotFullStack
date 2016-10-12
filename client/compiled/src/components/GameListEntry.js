"use strict";

var GameListEntry = function GameListEntry(props) {
  return React.createElement(
    "div",
    { className: "game-list-entry" },
    React.createElement("div", { className: "media-left media-middle" }),
    React.createElement(
      "div",
      { className: "media-body" },
      React.createElement(
        "div",
        { onClick: props.onClickFunc.bind(null, props.game), className: "game-list-entry-title" },
        props.game.date
      ),
      React.createElement(
        "div",
        { className: "game-list-entry-detail" },
        "K/D/A: ",
        props.game['Kills'],
        "/",
        props.game['Deaths'],
        "/",
        props.game['Assists']
      )
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
GameListEntry.propTypes = {
  game: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.GameListEntry = GameListEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dhbWVMaXN0RW50cnkuanN4Il0sIm5hbWVzIjpbIkdhbWVMaXN0RW50cnkiLCJwcm9wcyIsIm9uQ2xpY2tGdW5jIiwiYmluZCIsImdhbWUiLCJkYXRlIiwicHJvcFR5cGVzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2xCO0FBQUE7QUFBQSxNQUFLLFdBQVUsaUJBQWY7QUFDRSxpQ0FBSyxXQUFVLHlCQUFmLEdBREY7QUFHRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxTQUFTQSxNQUFNQyxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixFQUE2QkYsTUFBTUcsSUFBbkMsQ0FBZCxFQUF3RCxXQUFVLHVCQUFsRTtBQUEyRkgsY0FBTUcsSUFBTixDQUFXQztBQUF0RyxPQURGO0FBRUU7QUFBQTtBQUFBLFVBQUssV0FBVSx3QkFBZjtBQUFBO0FBQWdESixjQUFNRyxJQUFOLENBQVcsT0FBWCxDQUFoRDtBQUFBO0FBQXNFSCxjQUFNRyxJQUFOLENBQVcsUUFBWCxDQUF0RTtBQUFBO0FBQTZGSCxjQUFNRyxJQUFOLENBQVcsU0FBWDtBQUE3RjtBQUZGO0FBSEYsR0FEa0I7QUFBQSxDQUFwQjs7QUFXQTtBQUNBO0FBQ0FKLGNBQWNNLFNBQWQsR0FBMEI7QUFDeEJGLFFBQU1HLE1BQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQURMLENBQTFCOztBQUlBO0FBQ0E7QUFDQUMsT0FBT1gsYUFBUCxHQUF1QkEsYUFBdkIiLCJmaWxlIjoiR2FtZUxpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lTGlzdEVudHJ5ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1saXN0LWVudHJ5XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1sZWZ0IG1lZGlhLW1pZGRsZVwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgPGRpdiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrRnVuYy5iaW5kKG51bGwsIHByb3BzLmdhbWUpfSBjbGFzc05hbWU9XCJnYW1lLWxpc3QtZW50cnktdGl0bGVcIj57cHJvcHMuZ2FtZS5kYXRlfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWxpc3QtZW50cnktZGV0YWlsXCI+Sy9EL0E6IHtwcm9wcy5nYW1lWydLaWxscyddfS97cHJvcHMuZ2FtZVsnRGVhdGhzJ119L3twcm9wcy5nYW1lWydBc3Npc3RzJ119PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuR2FtZUxpc3RFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIGdhbWU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5HYW1lTGlzdEVudHJ5ID0gR2FtZUxpc3RFbnRyeTsiXX0=