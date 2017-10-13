var app = angular.module("app",[]);

app.controller("controller", function($scope) {
  $scope.numFrets = 22;
  $scope.jointPosition = 0;
  $scope.neckAngle = 0;
  $scope.stringHeight = 2.0;
  $scope.fretHeight = 1.3;
  $scope.fingerboardThickness = 6.0;
  $scope.saddleHeight = 0;
  $scope.saddlePosition = 0;
  $scope.numberOfStrings = 6;
  $scope.pitchAtNut = 7;
  $scope.pitchAtSaddle = 10.5;
  $scope.sideSpacing = 3.5;
  $scope.fingerboardWidthSaddle = 0.0;
  $scope.fingerboardWidthNut = 0.0;
  $scope.fingerboardLength = 0.0;
  $scope.tab = 0;
  $scope.frets = [];
  $scope.models = [
    {name:'', scale:635},
    {name:'Gibson LesPaul (628mm)', scale:628},
    {name:'Gibson SG (628mm)', scale:628},
    {name:'Gibson ES-335 (628mm)', scale:628},
    {name:'PRS (635mm)', scale:635},
    {name:'Fender Stratocaster (648mm)', scale:648},
    {name:'Fender Telecaster (648mm)', scale:648},
    {name:'Fender Jazz Master (648mm)', scale:648},
    {name:'Fender Mustang (609mm)', scale:609},
    {name:'Martin OOO (632mm)', scale:632},
    {name:'Martin OM (645mm)', scale:645}
  ];
  $scope.selectedModel = $scope.models[0];
  $scope.scale = $scope.selectedModel.scale;

  $scope.applyModel = function() {
      $scope.scale = $scope.selectedModel.scale;
  };

  $scope.calcFretPositions = function() {
    var f = $scope.scale;
    var lastPos = 0.0;
    var frets = [];
    for (var i = 0; i < $scope.numFrets + 1; i++) {
      var pos = f / 17.817;
      var p = {};
      f -= pos;
      p["fret"] = i+1;
      p["positionFromNut"] = lastPos + pos;
      p["positionFromFret"] = pos;
      frets.push(p);
      lastPos += pos;
    }
    $scope.frets = frets;
  };

  $scope.calcSaddlePositionAndHeight = function() {
    var height = ($scope.scale - $scope.jointPosition) * Math.sin($scope.neckAngle * Math.PI/ 180.0);
    var strHeight = ($scope.stringHeight - 0.1) * 2.0 + $scope.fretHeight;
    $scope.saddlePosition = ($scope.scale - $scope.jointPosition) * Math.cos($scope.neckAngle * Math.PI / 180.0);
    $scope.saddleHeight = height + strHeight + $scope.fingerboardThickness;
  };

  $scope.calcFingerboardSize = function() {
    $scope.fingerboardLength = ($scope.scale - $scope.scale / Math.pow(2.0, ($scope.numFrets + 1.0)/12.0));
    $scope.fingerboardWidthNut = $scope.pitchAtNut * ($scope.numberOfStrings - 1) + $scope.sideSpacing * 2;
    var w = $scope.pitchAtSaddle * ($scope.numberOfStrings - 1) + $scope.sideSpacing * 2;
    $scope.fingerboardWidthSaddle = $scope.fingerboardWidthNut + (w - $scope.fingerboardWidthNut) * ($scope.fingerboardLength / $scope.scale);
  };

  $scope.calcFretPositions();
}
);
