//https://leetcode.com/problems/container-with-most-water/

console.log("Container with Most Water");

let maxContainer1 = function(heightArray){

    let answer = 0;
    let innerAnswer = 0;
    let outerAnswer = 0;

    for(let i = 0; i <  heightArray.length; i++){

        for(let j = 0; j <  heightArray.length; j++){

            let outer = heightArray[i];
            let inner = heightArray[j];

            let shortest = 0;

            if( i != j){

            console.log( "i: " + i + " j:" + j );

            /*
             Find the shortest distance between the two heights
             Example:
                if i=0, outer = heightArray[0] = 1
                   and j=1, inner = heightArray[1] = 8
             the shortest height would be 1
             */
            if( outer > inner ){ // (outer = 1) > (inner = 8)
                shortest = inner
            }else{
                shortest = outer
            }

            let total = 0;

            /*
             Calculate the area by taking the shortest height times distance between the two heights
             For Example: i = 0 , j = 1
             The distance between the two height is (i = 1) - (j = 0) = 1
             When you do to subtract operation (bigger number - small number) so I will not get negative
             number.
             */
            if( i > j ){ //(i = 5) > (j = 3)
                total = shortest * ( i - j );
            }else{
                total = shortest * ( j - i );
            }

            //Checking for bigger container
            if (total > answer){
                answer = total;
                innerAnswer = i;
                outerAnswer = j;

            }
        }

    }
}

/*
    console.log(`innerAnswer = ${innerAnswer}`);
    console.log(`outerAnswer = ${outerAnswer}`);
*/

    return answer;
}

describe( 'ContainerWithMostWater 1', function (){

    it('for array [1,8,6,2,5,4,8,3,7] the answer should be 49', function (){
        let containHeight = [1,8,6,2,5,4,8,3,7];

        let answer = maxContainer1( containHeight );

        console.log("ANSWER : " +  answer);

        expect( answer ) .toEqual(49);
    });

});


