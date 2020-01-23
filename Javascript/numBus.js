//https://www.codewars.com/kata/number-of-people-in-the-bus/train/javascript

var number = function(busStops){
    // Task is to return number of people who are still in the bus after 
    //the last bus station (after the last array).
    
    let remainingPeople = 0;
    
    busStops.forEach(stop => {
        remainingPeople += (stop[0] - stop[1])
    }); //end forEach
 //   console.log(remainingPeople);
    return remainingPeople;

  }//end function
number([[10,0],[3,5],[5,8]]);

/*
Create algorithm to iterate through array of arrays, representing bus stops. 
Of which,first value are people getting on, second value are people getting off.
Final return is either 0 or more, representing sleeping passengers.

Solution:  
Create people variable
Iterate through array of arrays, tally people


*/

/*
Ruby Version

def number(bus_stops)
  # Happy Coding
  people = 0
  bus_stops.each { |stop| people += (stop[0] - stop[1]) }
  people
end
*/