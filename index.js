const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, string) {
    const driverFilter = drivers.filter(function(driver){
        return driver.toLowerCase() === string.toLowerCase();
    });
    return driverFilter;
}

console.log(findMatching(drivers, 'Bobby'));

function fuzzyMatch(drivers, string){
    const driverFilter = drivers.filter(function (driver){
        return driver.toLowerCase().substring(0,2) === string.toLowerCase().substring(0,2);
    });
    return driverFilter;
}

console.log(fuzzyMatch(drivers, 'Sa'))

const driversObjects = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName (driversObjects, string){
    const driverFilter = driversObjects.filter(function(driver){
        return string === driver.name;
    })
    return driverFilter;
  }

  console.log(matchName(driversObjects, 'Bobby'))