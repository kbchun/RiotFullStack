'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  //=================================**INIT FUNCTIONALITY**==================================
  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      currentGame: {},
      gameList: [],
      summoner: ''
    };
    return _this;
  }

  //=================================**GAME LIST FUNCTIONALITY**==================================

  _createClass(App, [{
    key: 'onGameListClick',
    value: function onGameListClick(game) {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
      this.setState({
        currentGame: game
      });
    }

    //=================================**SUMMONER SEARCH BAR FUNCTIONALITY**==================================

  }, {
    key: 'onSearchButtonClick',
    value: function onSearchButtonClick(event) {
      var _this2 = this;

      var options = {
        summoner: event.target.closest('div').getElementsByTagName('input')[0].value
      };
      this.props.searchServer(options, function (data) {
        _this2.setState({ summoner: Object.keys(data)[0] });
        _this2.setState({ currentGame: data[_this2.state.summoner][0], gameList: data[_this2.state.summoner] });
      });
      event.target.closest('div').getElementsByTagName('input')[0].value = '';
    }
  }, {
    key: 'onSearchButtonEnter',
    value: function onSearchButtonEnter(event) {
      var _this3 = this;

      if (event.keyCode === 13) {
        var options = {
          summoner: event.target.closest('div').getElementsByTagName('input')[0].value
        };
        this.props.searchServer(options, function (data) {
          _this3.setState({ summoner: Object.keys(data)[0] });
          _this3.setState({ currentGame: data[_this3.state.summoner][0], gameList: data[_this3.state.summoner] });
        });
        event.target.closest('div').getElementsByTagName('input')[0].value = '';
      }
    }
  }, {
    key: 'displayStatsFunc',
    value: function displayStatsFunc(game) {
      var display = [];
      for (var stat in game) {
        if (stat === 'date') {
          break;
        }
        display.push(stat + ': ' + game[stat]);
      }
      return display;
    }

    //=================================**RENDER FUNCTIONALITY**==================================

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Navbar, { onClickFunc: this.onSearchButtonClick.bind(this), onEnterFunc: this.onSearchButtonEnter.bind(this) }),
        React.createElement(
          'div',
          { className: 'row container-fluid' },
          React.createElement(
            'div',
            { className: 'col-md-6' },
            React.createElement(FeatureGame, { summoner: this.state.summoner, game: this.state.currentGame, statistics: this.displayStatsFunc(this.state.currentGame) })
          ),
          React.createElement(
            'div',
            { className: 'col-md-6' },
            React.createElement(GameList, { onClickFunc: this.onGameListClick.bind(this), games: this.state.gameList })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRHYW1lIiwiZ2FtZUxpc3QiLCJzdW1tb25lciIsImdhbWUiLCIkIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInNldFN0YXRlIiwiZXZlbnQiLCJvcHRpb25zIiwidGFyZ2V0IiwiY2xvc2VzdCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidmFsdWUiLCJzZWFyY2hTZXJ2ZXIiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsImtleUNvZGUiLCJkaXNwbGF5Iiwic3RhdCIsInB1c2giLCJvblNlYXJjaEJ1dHRvbkNsaWNrIiwiYmluZCIsIm9uU2VhcmNoQnV0dG9uRW50ZXIiLCJkaXNwbGF5U3RhdHNGdW5jIiwib25HYW1lTGlzdENsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBRUo7QUFDQSxlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxtQkFBYSxFQURGO0FBRVhDLGdCQUFVLEVBRkM7QUFHWEMsZ0JBQVU7QUFIQyxLQUFiO0FBSGlCO0FBUWxCOztBQUVEOzs7O29DQUVnQkMsSSxFQUFNO0FBQ3BCQyxRQUFFLFlBQUYsRUFBZ0JDLE9BQWhCLENBQXdCLEVBQUVDLFdBQVcsQ0FBYixFQUF4QixFQUEwQyxNQUExQztBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUNaUCxxQkFBYUc7QUFERCxPQUFkO0FBR0Q7O0FBR0Q7Ozs7d0NBRW9CSyxLLEVBQU87QUFBQTs7QUFDekIsVUFBSUMsVUFBVTtBQUNaUCxrQkFBVU0sTUFBTUUsTUFBTixDQUFhQyxPQUFiLENBQXFCLEtBQXJCLEVBQTRCQyxvQkFBNUIsQ0FBaUQsT0FBakQsRUFBMEQsQ0FBMUQsRUFBNkRDO0FBRDNELE9BQWQ7QUFHQSxXQUFLZixLQUFMLENBQVdnQixZQUFYLENBQXdCTCxPQUF4QixFQUFpQyxVQUFDTSxJQUFELEVBQVU7QUFDekMsZUFBS1IsUUFBTCxDQUFjLEVBQUNMLFVBQVVjLE9BQU9DLElBQVAsQ0FBWUYsSUFBWixFQUFrQixDQUFsQixDQUFYLEVBQWQ7QUFDQSxlQUFLUixRQUFMLENBQWMsRUFBRVAsYUFBYWUsS0FBSyxPQUFLaEIsS0FBTCxDQUFXRyxRQUFoQixFQUEwQixDQUExQixDQUFmLEVBQTZDRCxVQUFVYyxLQUFLLE9BQUtoQixLQUFMLENBQVdHLFFBQWhCLENBQXZELEVBQWQ7QUFDRCxPQUhEO0FBSUFNLFlBQU1FLE1BQU4sQ0FBYUMsT0FBYixDQUFxQixLQUFyQixFQUE0QkMsb0JBQTVCLENBQWlELE9BQWpELEVBQTBELENBQTFELEVBQTZEQyxLQUE3RCxHQUFxRSxFQUFyRTtBQUNEOzs7d0NBRW1CTCxLLEVBQU87QUFBQTs7QUFDekIsVUFBSUEsTUFBTVUsT0FBTixLQUFrQixFQUF0QixFQUEwQjtBQUN4QixZQUFJVCxVQUFVO0FBQ1pQLG9CQUFVTSxNQUFNRSxNQUFOLENBQWFDLE9BQWIsQ0FBcUIsS0FBckIsRUFBNEJDLG9CQUE1QixDQUFpRCxPQUFqRCxFQUEwRCxDQUExRCxFQUE2REM7QUFEM0QsU0FBZDtBQUdBLGFBQUtmLEtBQUwsQ0FBV2dCLFlBQVgsQ0FBd0JMLE9BQXhCLEVBQWlDLFVBQUNNLElBQUQsRUFBVTtBQUN6QyxpQkFBS1IsUUFBTCxDQUFjLEVBQUNMLFVBQVVjLE9BQU9DLElBQVAsQ0FBWUYsSUFBWixFQUFrQixDQUFsQixDQUFYLEVBQWQ7QUFDQSxpQkFBS1IsUUFBTCxDQUFjLEVBQUVQLGFBQWFlLEtBQUssT0FBS2hCLEtBQUwsQ0FBV0csUUFBaEIsRUFBMEIsQ0FBMUIsQ0FBZixFQUE2Q0QsVUFBVWMsS0FBSyxPQUFLaEIsS0FBTCxDQUFXRyxRQUFoQixDQUF2RCxFQUFkO0FBQ0QsU0FIRDtBQUlBTSxjQUFNRSxNQUFOLENBQWFDLE9BQWIsQ0FBcUIsS0FBckIsRUFBNEJDLG9CQUE1QixDQUFpRCxPQUFqRCxFQUEwRCxDQUExRCxFQUE2REMsS0FBN0QsR0FBcUUsRUFBckU7QUFDRDtBQUNGOzs7cUNBRWdCVixJLEVBQU07QUFDckIsVUFBSWdCLFVBQVUsRUFBZDtBQUNBLFdBQUssSUFBSUMsSUFBVCxJQUFpQmpCLElBQWpCLEVBQXVCO0FBQ3JCLFlBQUlpQixTQUFTLE1BQWIsRUFBcUI7QUFDbkI7QUFDRDtBQUNERCxnQkFBUUUsSUFBUixDQUFhRCxPQUFPLElBQVAsR0FBY2pCLEtBQUtpQixJQUFMLENBQTNCO0FBQ0Q7QUFDRCxhQUFPRCxPQUFQO0FBQ0Q7O0FBRUQ7Ozs7NkJBQ1M7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLE1BQUQsSUFBUSxhQUFhLEtBQUtHLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4QixJQUE5QixDQUFyQixFQUEwRCxhQUFhLEtBQUtDLG1CQUFMLENBQXlCRCxJQUF6QixDQUE4QixJQUE5QixDQUF2RSxHQURGO0FBRUk7QUFBQTtBQUFBLFlBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUNFLGdDQUFDLFdBQUQsSUFBYSxVQUFVLEtBQUt4QixLQUFMLENBQVdHLFFBQWxDLEVBQTRDLE1BQU0sS0FBS0gsS0FBTCxDQUFXQyxXQUE3RCxFQUEwRSxZQUFZLEtBQUt5QixnQkFBTCxDQUFzQixLQUFLMUIsS0FBTCxDQUFXQyxXQUFqQyxDQUF0RjtBQURGLFdBREY7QUFJRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFVBQWY7QUFDRSxnQ0FBQyxRQUFELElBQVUsYUFBYSxLQUFLMEIsZUFBTCxDQUFxQkgsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdkIsRUFBd0QsT0FBTyxLQUFLeEIsS0FBTCxDQUFXRSxRQUExRTtBQURGO0FBSkY7QUFGSixPQURGO0FBYUQ7Ozs7RUEzRWUwQixNQUFNQyxTOztBQThFeEJDLE9BQU9oQyxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSoqSU5JVCBGVU5DVElPTkFMSVRZKio9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnRHYW1lOiB7fSxcbiAgICAgIGdhbWVMaXN0OiBbXSxcbiAgICAgIHN1bW1vbmVyOiAnJ1xuICAgIH07XG4gIH1cblxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSoqR0FNRSBMSVNUIEZVTkNUSU9OQUxJVFkqKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgXG4gIG9uR2FtZUxpc3RDbGljayhnYW1lKSB7XG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgJ2Zhc3QnKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRHYW1lOiBnYW1lXG4gICAgfSk7XG4gIH1cblxuXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KipTVU1NT05FUiBTRUFSQ0ggQkFSIEZVTkNUSU9OQUxJVFkqKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBvblNlYXJjaEJ1dHRvbkNsaWNrKGV2ZW50KSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBzdW1tb25lcjogZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2RpdicpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdLnZhbHVlXG4gICAgfTtcbiAgICB0aGlzLnByb3BzLnNlYXJjaFNlcnZlcihvcHRpb25zLCAoZGF0YSkgPT4geyBcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3N1bW1vbmVyOiBPYmplY3Qua2V5cyhkYXRhKVswXX0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRHYW1lOiBkYXRhW3RoaXMuc3RhdGUuc3VtbW9uZXJdWzBdLCBnYW1lTGlzdDogZGF0YVt0aGlzLnN0YXRlLnN1bW1vbmVyXSB9KTsgXG4gICAgfSk7XG4gICAgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2RpdicpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdLnZhbHVlID0gJyc7XG4gIH1cblxuICBvblNlYXJjaEJ1dHRvbkVudGVyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgc3VtbW9uZXI6IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkaXYnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXS52YWx1ZVxuICAgICAgfTtcbiAgICAgIHRoaXMucHJvcHMuc2VhcmNoU2VydmVyKG9wdGlvbnMsIChkYXRhKSA9PiB7IFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdW1tb25lcjogT2JqZWN0LmtleXMoZGF0YSlbMF19KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRHYW1lOiBkYXRhW3RoaXMuc3RhdGUuc3VtbW9uZXJdWzBdLCBnYW1lTGlzdDogZGF0YVt0aGlzLnN0YXRlLnN1bW1vbmVyXSB9KTsgXG4gICAgICB9KTtcbiAgICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkaXYnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlTdGF0c0Z1bmMoZ2FtZSkge1xuICAgIHZhciBkaXNwbGF5ID0gW107XG4gICAgZm9yICh2YXIgc3RhdCBpbiBnYW1lKSB7XG4gICAgICBpZiAoc3RhdCA9PT0gJ2RhdGUnKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGlzcGxheS5wdXNoKHN0YXQgKyAnOiAnICsgZ2FtZVtzdGF0XSk7XG4gICAgfVxuICAgIHJldHVybiBkaXNwbGF5O1xuICB9XG5cbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qKlJFTkRFUiBGVU5DVElPTkFMSVRZKio9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdmJhciBvbkNsaWNrRnVuYz17dGhpcy5vblNlYXJjaEJ1dHRvbkNsaWNrLmJpbmQodGhpcyl9IG9uRW50ZXJGdW5jPXt0aGlzLm9uU2VhcmNoQnV0dG9uRW50ZXIuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICA8RmVhdHVyZUdhbWUgc3VtbW9uZXI9e3RoaXMuc3RhdGUuc3VtbW9uZXJ9IGdhbWU9e3RoaXMuc3RhdGUuY3VycmVudEdhbWV9IHN0YXRpc3RpY3M9e3RoaXMuZGlzcGxheVN0YXRzRnVuYyh0aGlzLnN0YXRlLmN1cnJlbnRHYW1lKX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgIDxHYW1lTGlzdCBvbkNsaWNrRnVuYz17dGhpcy5vbkdhbWVMaXN0Q2xpY2suYmluZCh0aGlzKX0gZ2FtZXM9e3RoaXMuc3RhdGUuZ2FtZUxpc3R9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwO1xuIl19