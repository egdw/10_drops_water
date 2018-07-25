
var app = angular.module('myApp',[]);
app.controller('gameCtrl',function($scope){
    $scope.dots=10;
    $scope.clicktime=0;
    $scope.level=1;
    $scope.gameArr=[
        [0,0,4,4,4,2],
        [2,1,4,3,2,2],
        [1,4,0,2,1,0],
        [0,1,3,3,3,0],
        [3,2,0,2,3,3],
        [4,1,1,2,3,2]
    ];

    $scope.clickConfig=function(x,y){
        $scope.clicktime++;
        $scope.dots--;
        dotclick(x,y);
        if(checkresult($scope.gameArr)){
            alert("you win!");
            $scope.dots++;
        }
    };

    function dotboom(x,y) {
        for(let i=1;x-i>=0;i++){
            if($scope.gameArr[x-i][y]){
                $scope.gameArr[x-i][y]++;
                console.log('(x-i,y)=('+x+','+y+')');

                    if($scope.gameArr[x-i][y]>=5){
                        $scope.gameArr[x-i][y]=0;console.log('(x-i,y)=('+(x-i)+','+y+') boom!');
                        dotboom(x-i,y);
                        $scope.dots++;
                    }

                break;
            }
        }
        for(let i=1;x+i<=5;i++){
            if($scope.gameArr[x+i][y]){
                $scope.gameArr[x+i][y]++;
                console.log('(x+i,y)=('+x+','+y+')');

                    if($scope.gameArr[x+i][y]>=5){
                        $scope.gameArr[x+i][y]=0;console.log('(x+i,y)=('+(x+i)+','+y+') boom!');
                        dotboom(x+i,y);
                        $scope.dots++;
                    }

                break;
            }
        }
        for(let i=1;y-i>=0;i++){
            if($scope.gameArr[x][y-i]){
                $scope.gameArr[x][y-i]++;
                console.log('(x,y-i)=('+x+','+y+')');

                    if($scope.gameArr[x][y-i]>=5){
                        $scope.gameArr[x][y-i]=0;
                        console.log('(x,y-i)=('+x+','+(y-i)+') boom!');
                        dotboom(x,y-i);
                        $scope.dots++;
                    }

                break;
            }
        }
        for(let i=1;y+i<=5;i++){
            if($scope.gameArr[x][y+i]){
                $scope.gameArr[x][y+i]++;
                console.log('(x,y+I)=('+x+','+y+')');

                    if($scope.gameArr[x][y+i]>=5){
                        $scope.gameArr[x][y+i]=0;console.log('(x,y+i)=('+x+','+(y+i)+') boom!');
                        dotboom(x,y+i);
                        $scope.dots++;
                    }

                break;
            }
        }
        console.log('=========================');
    }
    function dotclick(x,y) {
        $scope.gameArr[x][y]++;
        if($scope.gameArr[x][y]>=5){
            $scope.gameArr[x][y]=0;
            dotboom(x,y);
        }
    }
});

function checkresult(arr) {
    console.log(arr);
    let i,j,arr1;
    for(i=0;i<arr.length;i++){
        arr1=arr[i];
        for(j=0;j<arr1.length;j++){
            if(arr1[j]){
                return false;
            }
        }
    }
    return true;
}
