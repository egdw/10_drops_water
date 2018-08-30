
var app = angular.module('myApp', []);
app.controller('gameCtrl', function ($scope) {
    $scope.dots = 10;
    $scope.clicktime = 0;
    $scope.level = 1;
    $scope.gameArr = [
        [2, 1, 3, 2, 2, 3],
        [3, 4, 3, 2, 0, 2],
        [0, 1, 4, 0, 2, 1],
        [2, 0, 0, 1, 1, 0],
        [2, 0, 3, 1, 3, 1],
        [2, 0, 4, 3, 3, 4]
    ];
    $scope.clickConfig = function (x, y) {
        $scope.clicktime++;
        $scope.dots--;
        if($scope.gameArr[x][y] == 0){
            $scope.gameArr[x][y]++;
        }else{
            dotblast($scope.gameArr, x, y);
        }
        if ($scope.dots === 0) {
            alert("you died!");
        }
    }
});

// console.log(angular.element(document.getElementById('main')).scope())
function dotblast(arr, x, y) {
    var tempX = x;
    var tempY = y;
    if (x == -1 || y == -1) {
        return false;
    }
    if (arr[x][y] >= 4) {
        //首先把当前的水滴清零.然后向四周发射
        arr[x][y] = 0;
        //这里规定发射时候肯定需要一个顺序.
        //我规定左上右下.依照顺序发射
        while (dotblast(arr, left(arr, tempX, tempY)[0], left(arr, tempX, tempY)[1])) {
            tempX--;
        }
        tempX = x;
        while (dotblast(arr, up(arr, tempX, tempY)[0], up(arr, tempX, tempY)[1])) {
            tempY--;
        }
        tempY = y;
        while (dotblast(arr, right(arr, tempX, tempY)[0], right(arr, tempX, tempY)[1])) {
            tempX++;
        }
        console.log(arr)
        tempX = x;
        while (dotblast(arr, down(arr, tempX, tempY)[0], down(arr, tempX, tempY)[1])) {
            tempY++;
        }
        tempY = y;
    } else if (arr[x][y] > 0) {
        arr[x][y]++;
        return false;
    } else if (arr[x][y] == 0) {
        //如果找到了arr[x][y] == 0 的话跳过,继续一个
        return true;
    }
    return false;
}


function up(arr, x, y) {
    if (x >= arr[0].length || y >= arr.length || y - 1 < 0) {
        //说明数组越界
        return [-1, -1];
    }
    return [x, y - 1]
}

function down(arr, x, y) {
    if (x >= arr[0].length || y >= arr.length || y + 1 <= arr.length) {
        return [-1, -1];
    }
    return [x, y + 1];
}


function left(arr, x, y) {
    if (x >= arr[0].length || y >= arr.length || x - 1 < 0) {
        return [-1, -1];
    }
    return [x - 1, y];
}

function right(arr, x, y) {
    if (x >= arr[0].length || y >= arr.length || x + 1 >= arr.length) {
        return [-1, -1];
    }
    return [x + 1, y];
}
