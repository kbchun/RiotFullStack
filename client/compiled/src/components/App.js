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
      gameList: []
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
        summoner: event.target.closest('div').getElementsByTagName('input')[0].value,
        key: window.RIOT_API_KEY
      };
      this.props.searchServer(options, function (data) {
        _this2.setState({ currentGame: data[0], gameList: data });
      });
      event.target.closest('div').getElementsByTagName('input')[0].value = '';
    }
  }, {
    key: 'onSearchButtonEnter',
    value: function onSearchButtonEnter(event) {
      var _this3 = this;

      if (event.keyCode === 13) {
        var options = {
          summoner: event.target.closest('div').getElementsByTagName('input')[0].value,
          key: window.RIOT_API_KEY
        };
        this.props.searchServer(options, function (data) {
          _this3.setState({ currentGame: data[0], gameList: data });
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
            React.createElement(FeatureGame, { game: this.state.currentGame, statistics: this.displayStatsFunc(this.state.currentGame) })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRHYW1lIiwiZ2FtZUxpc3QiLCJnYW1lIiwiJCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJzZXRTdGF0ZSIsImV2ZW50Iiwib3B0aW9ucyIsInN1bW1vbmVyIiwidGFyZ2V0IiwiY2xvc2VzdCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidmFsdWUiLCJrZXkiLCJ3aW5kb3ciLCJSSU9UX0FQSV9LRVkiLCJzZWFyY2hTZXJ2ZXIiLCJkYXRhIiwia2V5Q29kZSIsImRpc3BsYXkiLCJzdGF0IiwicHVzaCIsIm9uU2VhcmNoQnV0dG9uQ2xpY2siLCJiaW5kIiwib25TZWFyY2hCdXR0b25FbnRlciIsImRpc3BsYXlTdGF0c0Z1bmMiLCJvbkdhbWVMaXN0Q2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFFSjtBQUNBLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG1CQUFhLEVBREY7QUFFWEMsZ0JBQVU7QUFGQyxLQUFiO0FBSGlCO0FBT2xCOztBQUVEOzs7O29DQUVnQkMsSSxFQUFNO0FBQ3BCQyxRQUFFLFlBQUYsRUFBZ0JDLE9BQWhCLENBQXdCLEVBQUVDLFdBQVcsQ0FBYixFQUF4QixFQUEwQyxNQUExQztBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUNaTixxQkFBYUU7QUFERCxPQUFkO0FBR0Q7O0FBR0Q7Ozs7d0NBRW9CSyxLLEVBQU87QUFBQTs7QUFDekIsVUFBSUMsVUFBVTtBQUNaQyxrQkFBVUYsTUFBTUcsTUFBTixDQUFhQyxPQUFiLENBQXFCLEtBQXJCLEVBQTRCQyxvQkFBNUIsQ0FBaUQsT0FBakQsRUFBMEQsQ0FBMUQsRUFBNkRDLEtBRDNEO0FBRVpDLGFBQUtDLE9BQU9DO0FBRkEsT0FBZDtBQUlBLFdBQUtsQixLQUFMLENBQVdtQixZQUFYLENBQXdCVCxPQUF4QixFQUFpQyxVQUFDVSxJQUFELEVBQVU7QUFBRSxlQUFLWixRQUFMLENBQWMsRUFBRU4sYUFBYWtCLEtBQUssQ0FBTCxDQUFmLEVBQXdCakIsVUFBVWlCLElBQWxDLEVBQWQ7QUFBMEQsT0FBdkc7QUFDQVgsWUFBTUcsTUFBTixDQUFhQyxPQUFiLENBQXFCLEtBQXJCLEVBQTRCQyxvQkFBNUIsQ0FBaUQsT0FBakQsRUFBMEQsQ0FBMUQsRUFBNkRDLEtBQTdELEdBQXFFLEVBQXJFO0FBQ0Q7Ozt3Q0FFbUJOLEssRUFBTztBQUFBOztBQUN6QixVQUFJQSxNQUFNWSxPQUFOLEtBQWtCLEVBQXRCLEVBQTBCO0FBQ3hCLFlBQUlYLFVBQVU7QUFDWkMsb0JBQVVGLE1BQU1HLE1BQU4sQ0FBYUMsT0FBYixDQUFxQixLQUFyQixFQUE0QkMsb0JBQTVCLENBQWlELE9BQWpELEVBQTBELENBQTFELEVBQTZEQyxLQUQzRDtBQUVaQyxlQUFLQyxPQUFPQztBQUZBLFNBQWQ7QUFJQSxhQUFLbEIsS0FBTCxDQUFXbUIsWUFBWCxDQUF3QlQsT0FBeEIsRUFBaUMsVUFBQ1UsSUFBRCxFQUFVO0FBQUUsaUJBQUtaLFFBQUwsQ0FBYyxFQUFFTixhQUFha0IsS0FBSyxDQUFMLENBQWYsRUFBd0JqQixVQUFVaUIsSUFBbEMsRUFBZDtBQUEwRCxTQUF2RztBQUNBWCxjQUFNRyxNQUFOLENBQWFDLE9BQWIsQ0FBcUIsS0FBckIsRUFBNEJDLG9CQUE1QixDQUFpRCxPQUFqRCxFQUEwRCxDQUExRCxFQUE2REMsS0FBN0QsR0FBcUUsRUFBckU7QUFDRDtBQUNGOzs7cUNBRWdCWCxJLEVBQU07QUFDckIsVUFBSWtCLFVBQVUsRUFBZDtBQUNBLFdBQUssSUFBSUMsSUFBVCxJQUFpQm5CLElBQWpCLEVBQXVCO0FBQ3JCLFlBQUltQixTQUFTLE1BQWIsRUFBcUI7QUFDbkI7QUFDRDtBQUNERCxnQkFBUUUsSUFBUixDQUFhRCxPQUFPLElBQVAsR0FBY25CLEtBQUttQixJQUFMLENBQTNCO0FBQ0Q7QUFDRCxhQUFPRCxPQUFQO0FBQ0Q7O0FBRUQ7Ozs7NkJBQ1M7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLE1BQUQsSUFBUSxhQUFhLEtBQUtHLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4QixJQUE5QixDQUFyQixFQUEwRCxhQUFhLEtBQUtDLG1CQUFMLENBQXlCRCxJQUF6QixDQUE4QixJQUE5QixDQUF2RSxHQURGO0FBRUk7QUFBQTtBQUFBLFlBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUNFLGdDQUFDLFdBQUQsSUFBYSxNQUFNLEtBQUt6QixLQUFMLENBQVdDLFdBQTlCLEVBQTJDLFlBQVksS0FBSzBCLGdCQUFMLENBQXNCLEtBQUszQixLQUFMLENBQVdDLFdBQWpDLENBQXZEO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUNFLGdDQUFDLFFBQUQsSUFBVSxhQUFhLEtBQUsyQixlQUFMLENBQXFCSCxJQUFyQixDQUEwQixJQUExQixDQUF2QixFQUF3RCxPQUFPLEtBQUt6QixLQUFMLENBQVdFLFFBQTFFO0FBREY7QUFKRjtBQUZKLE9BREY7QUFhRDs7OztFQXRFZTJCLE1BQU1DLFM7O0FBeUV4QmQsT0FBT2xCLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KipJTklUIEZVTkNUSU9OQUxJVFkqKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudEdhbWU6IHt9LFxuICAgICAgZ2FtZUxpc3Q6IFtdXG4gICAgfTtcbiAgfVxuXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KipHQU1FIExJU1QgRlVOQ1RJT05BTElUWSoqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBcbiAgb25HYW1lTGlzdENsaWNrKGdhbWUpIHtcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAnZmFzdCcpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudEdhbWU6IGdhbWVcbiAgICB9KTtcbiAgfVxuXG5cbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qKlNVTU1PTkVSIFNFQVJDSCBCQVIgRlVOQ1RJT05BTElUWSoqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIG9uU2VhcmNoQnV0dG9uQ2xpY2soZXZlbnQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHN1bW1vbmVyOiBldmVudC50YXJnZXQuY2xvc2VzdCgnZGl2JykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF0udmFsdWUsXG4gICAgICBrZXk6IHdpbmRvdy5SSU9UX0FQSV9LRVlcbiAgICB9O1xuICAgIHRoaXMucHJvcHMuc2VhcmNoU2VydmVyKG9wdGlvbnMsIChkYXRhKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50R2FtZTogZGF0YVswXSwgZ2FtZUxpc3Q6IGRhdGEgfSk7IH0pO1xuICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkaXYnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXS52YWx1ZSA9ICcnO1xuICB9XG5cbiAgb25TZWFyY2hCdXR0b25FbnRlcihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIHN1bW1vbmVyOiBldmVudC50YXJnZXQuY2xvc2VzdCgnZGl2JykuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF0udmFsdWUsXG4gICAgICAgIGtleTogd2luZG93LlJJT1RfQVBJX0tFWVxuICAgICAgfTtcbiAgICAgIHRoaXMucHJvcHMuc2VhcmNoU2VydmVyKG9wdGlvbnMsIChkYXRhKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50R2FtZTogZGF0YVswXSwgZ2FtZUxpc3Q6IGRhdGEgfSk7IH0pOyBcbiAgICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkaXYnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlTdGF0c0Z1bmMoZ2FtZSkge1xuICAgIHZhciBkaXNwbGF5ID0gW107XG4gICAgZm9yICh2YXIgc3RhdCBpbiBnYW1lKSB7XG4gICAgICBpZiAoc3RhdCA9PT0gJ2RhdGUnKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGlzcGxheS5wdXNoKHN0YXQgKyAnOiAnICsgZ2FtZVtzdGF0XSk7XG4gICAgfVxuICAgIHJldHVybiBkaXNwbGF5O1xuICB9XG5cbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qKlJFTkRFUiBGVU5DVElPTkFMSVRZKio9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdmJhciBvbkNsaWNrRnVuYz17dGhpcy5vblNlYXJjaEJ1dHRvbkNsaWNrLmJpbmQodGhpcyl9IG9uRW50ZXJGdW5jPXt0aGlzLm9uU2VhcmNoQnV0dG9uRW50ZXIuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICA8RmVhdHVyZUdhbWUgZ2FtZT17dGhpcy5zdGF0ZS5jdXJyZW50R2FtZX0gc3RhdGlzdGljcz17dGhpcy5kaXNwbGF5U3RhdHNGdW5jKHRoaXMuc3RhdGUuY3VycmVudEdhbWUpfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgPEdhbWVMaXN0IG9uQ2xpY2tGdW5jPXt0aGlzLm9uR2FtZUxpc3RDbGljay5iaW5kKHRoaXMpfSBnYW1lcz17dGhpcy5zdGF0ZS5nYW1lTGlzdH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7XG4iXX0=