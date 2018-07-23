
var app = angular.module('myApp',[]);
app.controller('gameCtrl',function($scope){
    $scope.dots=10;
    $scope.clicktime=0;
    $scope.level=1;
    $scope.gameArr=[
        [2,1,3,2,2,3],
        [3,4,3,2,0,2],
        [0,1,4,0,2,1],
        [2,0,0,1,1,0],
        [2,0,3,1,3,1],
        [2,0,4,3,3,4]
    ];
    $scope.clickConfig=function(x,y){
        $scope.clicktime++;
        $scope.dots--;
        $scope.gameArr[x][y]++;
        if($scope.gameArr[x][y]===5)
        {
            dotblast($scope.gameArr,x,y);
            $scope.gameArr[x][y]=0;
        }
        if($scope.dots===0) {
            alert("you died!");
        }
    }
});

function dotblast(arr,x,y){
    console.log('local:('+x+','+y+')');
    let tempArr=[x-1,y-1,x+1,y+1];//先向四个方向分别进一步
    for(let i=1;i<6;i++){
        for(let j=0;j<4;j++){//遍历四个方向
            if(tempArr[j]>=0&&tempArr[j]<=5){//如果某个方向超出范围那么直接跳过
                switch (j){
                    case 0:tempArr[j]=x-i;break;
                    case 1:tempArr[j]=y-i;break;
                    case 2:tempArr[j]=x+i;break;
                    case 3:tempArr[j]=y+i;break;
                }
            }
        }
        console.log(tempArr);
        console.log('up:('+tempArr[0]+','+y+')');
        console.log('left:('+x+','+tempArr[1]+')');
        console.log('down:('+tempArr[2]+','+y+')');
        console.log('right:('+x+','+tempArr[3]+')');
        for(j=0;j<4;j++){//遍历四个方向
            if(tempArr[j]>=0 && tempArr[j]<=5){
                switch(j){
                    case 0:
                        if(arr[tempArr[j]][y]!==0){
                            console.log('arr['+tempArr[j]+']['+y+']='+arr[tempArr[j]][y]);
                            arr[tempArr[j]][y]++;
                            tempArr[j]=-1;
                        }
                        break;
                    case 1:
                        if(arr[x][tempArr[j]]!==0){
                            console.log('arr['+x+']['+tempArr[j]+']='+arr[x][tempArr[j]]);
                            arr[x][tempArr[j]]++;
                            tempArr[j]=-1;
                        }
                        break;
                    case 2:
                        if(arr[tempArr[j]][y]!==0){
                            console.log('arr['+tempArr[j]+']['+y+']='+arr[tempArr[j]][y]);
                            arr[tempArr[j]][y]++;
                            tempArr[j]=6;
                        }
                        break;
                    case 3:
                        if(arr[x][tempArr[j]]!==0){
                            console.log('arr['+x+']['+tempArr[j]+']='+arr[x][tempArr[j]]);
                            arr[x][tempArr[j]]++;
                            tempArr[j]=6;
                        }
                        break;
                }
            }

        }
        console.log('===============================');
    }

}