//https://leetcode.com/problems/container-with-most-water/

console.log("Container with Most Water");
/*
Find the shortest distance between the two heights
Example:
if i=0, outer = heightArray[0] = 1
   and j=1, inner = heightArray[1] = 8
the shortest height would be 1
*/
let minHeight2 = function(a,b){

    let shortest = 0;

    if( a > b ){
        shortest = b;
    }else{
        shortest = a;
    }

    return shortest;
};

let maxContainer2 = function(heightArray){

    if(heightArray.length == 0 || heightArray.length == 1){
        return 0;
    }else{
        let answer = 0;
        let innerAnswer = 0;
        let outerAnswer = 0;

        for(let i = 0; i <  heightArray.length; i++){

            for(let j = 0; j <  heightArray.length; j++){

                /*
                 Calculate the area by taking the shortest height times distance between the two heights
                 For Example: i = 0 , j = 1
                 The distance between the two height is (i = 1) - (j = 0) = 1
                 When you do to subtract operation (bigger number - small number) so I will not get negative
                 number.
                 */
                let total = 0;
                if( i > j ){ //(i = 5) > (j = 3)
                    total = minHeight2(heightArray[j],heightArray[i]) * ( i - j );
                }else{
                    total = minHeight2(heightArray[j],heightArray[i]) * ( j - i );
                }

                //Checking for bigger container
                if (total > answer){
                    answer = total;
                    innerAnswer = i;
                    outerAnswer = j;

                }
            }
        }

        console.log(`innerAnswer = ${innerAnswer}`);
        console.log(`outerAnswer = ${outerAnswer}`);

        return answer;
    }
    return 0;
};


describe( 'ContainerWithMostWater 2', function (){

    it('Height of 2 should be shorter than 3', function (){

        expect( minHeight2(2,3) ) .toEqual(2);
    });

    it('Height of 8 should be shorter than 9', function (){

        expect( minHeight2(8,9) ) .toEqual(8);
    });

    it('for array [] the answer should be 0', function (){
        let containHeight = [];

        let answer = maxContainer2( containHeight );

        console.log("ANSWER : " +  answer);

        expect( answer ) .toEqual(0);
    });

    it('for array [1] the answer should be 0', function (){
        let containHeight = [1];

        let answer = maxContainer2( containHeight );

        console.log("ANSWER : " +  answer);

        expect( answer ) .toEqual(0);
    });

    it('for array [1,1] the answer should be 1', function (){
        let containHeight = [1,1];

        let answer = maxContainer2( containHeight );

        console.log("ANSWER : " +  answer);

        expect( answer ) .toEqual(1);
    });

    it('for array [1,8,6,2,5,4,8,3,7] the answer should be 49', function (){
        let containHeight = [1,8,6,2,5,4,8,3,7];

        let answer = maxContainer2( containHeight );

        console.log("ANSWER : " +  answer);

        expect( answer ) .toEqual(49);
    });

    it('for array [5,3,2,1,4] the answer should be 16', function (){
        let containHeight = [5,3,2,1,4];

        let answer = maxContainer2( containHeight );

        console.log("ANSWER : " +  answer);

        expect( answer ) .toEqual(16);
    });

    it('for array [5,9,2,1,4] the answer should be 16', function (){
        let containHeight = [5,9,2,1,4];

        let answer = maxContainer2( containHeight );

        console.log("ANSWER : " +  answer);

        expect( answer ) .toEqual(16);
    });

});
