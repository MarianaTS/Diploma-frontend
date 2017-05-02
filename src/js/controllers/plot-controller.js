app.controller('plotController', function($scope, $http) {

$scope.configVariable = false;
$scope.imgVariable = true;
$scope.resultVariable = false;
$scope.sendVariable = false;
$scope.contactVariable = false;
$scope.name = " ";
$scope.response = " ";
$scope.uploadme = " ";
$scope.cropper = {};
$scope.cropper.sourceImage = null;
$scope.cropper.croppedImage   = null;
$scope.bounds = {};
$scope.bounds.left = 0;
$scope.bounds.right = 0;
$scope.bounds.top = 0;
$scope.bounds.bottom = 0;



$scope.showConfig = function() {
	 $scope.configVariable = true;
	 $scope.imgVariable = false;
	 $scope.resultVariable = false;
	 $scope.sendVariable = false;
	 $scope.contactVariable = false;
};

$scope.showDownload = function() {
	 $scope.configVariable = false;
	 $scope.imgVariable = true;
	 $scope.resultVariable = false;
	 $scope.sendVariable = false;
	 $scope.contactVariable = false;
};

$scope.showResult = function() {
	 $scope.configVariable = false;
	 $scope.imgVariable = false;
	 $scope.resultVariable = true;
	 $scope.sendVariable = false;
	 $scope.contactVariable = false;
};

$scope.showSend = function() {
	 $scope.configVariable = false;
	 $scope.imgVariable = false;
	 $scope.resultVariable = false;
	 $scope.sendVariable = true;
	 $scope.contactVariable = false;
};

$scope.showContact = function() {
	 $scope.configVariable = false;
	 $scope.imgVariable = false;
	 $scope.resultVariable = false;
	 $scope.sendVariable = false;
	 $scope.contactVariable = true;
};

$scope.sendResponse = function(name, response) {
	console.log("Sended "+name+" "+ response);
};

$scope.crop = function() {
	$scope.uploadme = $scope.cropper.croppedImage;
	$scope.cropper.croppedImage = null;
};


    $scope.uploadImage = function() {
      var fd = new FormData();
      var imgBlob = dataURItoBlob($scope.uploadme);
      fd.append('file', imgBlob);
      $http.post(
          'imageURL',
          fd, {
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }
        )
        .success(function(response) {
          console.log('success', response);
        })
        .error(function(response) {
          console.log('error', response);
        });
    };
        function dataURItoBlob(dataURI) {
      var binary = atob(dataURI.split(',')[1]);
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      var array = [];
      for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], {
        type: mimeString
      });
    }

});
app.directive("fileread", [
  function() {
    return {
      scope: {
        fileread: "="
      },
      link: function(scope, element, attributes) {
        element.bind("change", function(changeEvent) {
          var reader = new FileReader();
          reader.onload = function(loadEvent) {
            scope.$apply(function() {
              scope.fileread = loadEvent.target.result;
            });
          };
          reader.readAsDataURL(changeEvent.target.files[0]);
        });
      }
    };
  }
]);