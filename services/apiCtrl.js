app.controller('apiCtrl', function($scope) {
  $scope.results;

  // var indeedAPI = makeIndeedApiCall() + "?callback=JSON_CALLBACK";
  var indeedAPI = "http://api.indeed.com/ads/apisearch?publisher=4019886558740498&q=javascript&l=San Francisco&limit=10&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=0&latlong=1&co=us&chnl=&v=2&format=json";

  $.ajax({
    type:     "GET",
    url:      indeedAPI,
    dataType: "jsonp",
    success: function(data) {
      $scope.results = data.results;
    }
  });
});

// function makeIndeedApiCall(searchTerm, location) {

//   var searchTerm = searchTerm || 'javascript',
//       location = location || 'San Francisco',
//       limit = limit || '100';

//   var response = 'http://api.indeed.com/ads/apisearch?'
//   response += 'publisher=' + '4019886558740498' + '&q='
//   // TODO: hide publisher key
//   response += searchTerm
//   response += '&l='
//   response += location
//   response += '&limit='
//   response += limit
//   response += '&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=0&latlong=1&co=us&chnl=&v=2&format=json'
//   return response;
// };