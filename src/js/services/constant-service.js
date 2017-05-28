app.service('constantsService', function($http, applicationConstants) {
    return {
        getResultList: function (startX, startY, endX, endY, h) {
            return $http.get(applicationConstants.baseUrl + '/api/result?startX='+startX+'&startY=' +
                ''+startY+'&endX='+endX+'&endY='+endY+'&h='+h);
        },
        sendToEmail: function (email, result) {
             return $http.get(applicationConstants.baseUrl + '/api/sendResult?email='+email+'&result='+angular.toJson(result));
        }
    };
});

