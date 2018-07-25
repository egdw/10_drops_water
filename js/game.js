
var app = angular.module('myApp',[]);
app.controller('gameCtrl',function($scope){
    $scope.dots=10;
    $scope.clicktime=0;
    $scope.level=1;
    $scope.gameArr=[
        [2,1,3,2,2,0],
        [4,4,4,3,0,0],
        [3,1,2,2,2,0],
        [0,2,2,0,3,1],
        [2,4,1,3,1,3],
        [3,0,3,2,3,4]
    ];
    $scope.clickConfig=function(x,y){
        $scope.clicktime++;
        $scope.dots--;
        dotclick($scope.gameArr,x,y);
        console.log($scope.gameArr);
    }
});

function dotclick(arr,x,y) {
    arr[x][y]++;
    if(arr[x][y]>=5){
        arr[x][y]=0;
        dotboom(arr,x,y);
    }

}

function dotboom(arr,x,y) {
    for(let i=1;x-i>=0;i++){
        if(arr[x-i][y]){
            arr[x-i][y]++;console.log('(x-i,y)=('+x+','+y+')');
            if(arr[x-i][y]===5){
                arr[x-i][y]=0;console.log('(x-i,y)=('+(x-i)+','+y+') boom!');
                dotboom(arr,x-i,y);
            }
            break;
        }
    }
    for(let i=1;x+i<=5;i++){
        if(arr[x+i][y]){
            arr[x+i][y]++;console.log('(x+i,y)=('+x+','+y+')');
            if(arr[x+i][y]===5){
                arr[x+i][y]=0;console.log('(x+i,y)=('+(x+i)+','+y+') boom!');
                dotboom(arr,x+i,y);
            }
            break;
        }
    }
    for(let i=1;y-i>=0;i++){
        if(arr[x][y-i]){
            arr[x][y-i]++;console.log('(x,y-i)=('+x+','+y+')');
            if(arr[x][y-i]===5){
                arr[x][y-i]=0;console.log('(x,y-i)=('+x+','+(y-i)+') boom!');
                dotboom(arr,x,y-i);
            }
            break;
        }
    }
    for(let i=1;y+i<=5;i++){
        if(arr[x][y+i]){
            arr[x][y+i]++;console.log('(x,y+i)=('+x+','+y+')');
            if(arr[x][y+i]===5){
                arr[x][y+i]=0;console.log('(x,y+i)=('+x+','+(y+i)+') boom!');
                dotboom(arr,x,y+i);
            }
            break;
        }
    }
    console.log('=========================');
}