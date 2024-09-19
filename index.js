function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
      let distanceBlocks = someValue - 42;
      return distanceBlocks;
    } else {
        let distanceBlocks = 42 - someValue;
        return distanceBlocks;
    }
  }
  
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    if(destination>start){
        return (destination - start) * 264;
    }else{
        return (start - destination) * 264;
    }
  }
  function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    let fare;

    if (feet <= 400) {
        fare = 0; 
    } else if (feet > 400 && feet <= 2000) {
        let d = feet - 400;  
        fare = d * 0.02;     
        fare = parseFloat(fare.toFixed(2)); 
    } else if (feet > 2000 && feet <= 2500) {
        fare = 25;
    } else {
        return 'cannot travel that far';  
    }
    
    return fare;
}

 
