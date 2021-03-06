'use strict';

var searchServer = function searchServer(options, callback) {
  $.ajax({
    url: 'http://127.0.0.1:1337/name',
    type: 'GET',
    data: options.summoner,
    success: function success(data) {
      callback(JSON.parse(data));
    },
    error: function error(_error) {
      console.log('error: ' + JSON.stringify(_error));
    }
  });
};

window.searchServer = searchServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VhcmNoUmlvdC5qcyJdLCJuYW1lcyI6WyJzZWFyY2hTZXJ2ZXIiLCJvcHRpb25zIiwiY2FsbGJhY2siLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwic3VtbW9uZXIiLCJzdWNjZXNzIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3RyaW5naWZ5Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxPQUFELEVBQVVDLFFBQVYsRUFBdUI7QUFDeENDLElBQUVDLElBQUYsQ0FBTztBQUNMQyxTQUFLLDRCQURBO0FBRUxDLFVBQUssS0FGQTtBQUdMQyxVQUFNTixRQUFRTyxRQUhUO0FBSUxDLGFBQVMsaUJBQVNGLElBQVQsRUFBZTtBQUN0QkwsZUFBU1EsS0FBS0MsS0FBTCxDQUFXSixJQUFYLENBQVQ7QUFDRCxLQU5JO0FBT0xLLFdBQU8sZUFBU0EsTUFBVCxFQUFnQjtBQUNyQkMsY0FBUUMsR0FBUixDQUFZLFlBQVlKLEtBQUtLLFNBQUwsQ0FBZUgsTUFBZixDQUF4QjtBQUNEO0FBVEksR0FBUDtBQVdELENBWkQ7O0FBY0FJLE9BQU9oQixZQUFQLEdBQXNCQSxZQUF0QiIsImZpbGUiOiJzZWFyY2hSaW90LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNlYXJjaFNlcnZlciA9IChvcHRpb25zLCBjYWxsYmFjaykgPT4ge1xuICAkLmFqYXgoe1xuICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MTMzNy9uYW1lJyxcbiAgICB0eXBlOidHRVQnLFxuICAgIGRhdGE6IG9wdGlvbnMuc3VtbW9uZXIsXG4gICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShkYXRhKSk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgfVxuICB9KVxufTtcblxud2luZG93LnNlYXJjaFNlcnZlciA9IHNlYXJjaFNlcnZlcjtcbiJdfQ==