function getSleepHours(day) {
    switch (day) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 10;
      case 'wednesday':
        return 7;
      case 'thursday':
        return 6;
      case 'friday':
        return 9;
      case 'saturday':
        return 7;
      case 'sunday':
        return 12;
    }
  }
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  }
  
  const getIdealSleepHours = () => {
    const idealHours = 8 * 7;
    return idealHours;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the right amounut of sleep');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep than needed');
      console.log('You were over by ' + (actualSleepHours - idealSleepHours));
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You need to sleep more!');
      console.log('You were under by ' + (idealSleepHours - actualSleepHours));
    }
  }
  
  calculateSleepDebt();