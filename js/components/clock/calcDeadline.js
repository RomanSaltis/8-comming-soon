function calcDeadline(targetDate) {                             // 04-19 10:00:00
    const clock = new Date();
    const currentYear = clock.getFullYear();                    // 2021
    const now = Date.now();                                     // 1620897774902

    let fullTargetDate = `${currentYear}-${targetDate}`;        // 2021-04-19 10:00:00
    let targetClock = new Date(fullTargetDate);
    let timeInMiliseconds = targetClock.getTime();              // 1618815600000

    if (timeInMiliseconds < now) {                              // true
        fullTargetDate = `${currentYear + 1}-${targetDate}`;    // 2022
        targetClock = new Date(fullTargetDate);
        timeInMiliseconds = targetClock.getTime();              // 1650351600000
    }

    const timeLeftInMiliseconds = timeInMiliseconds - now;
    let timeLeftInSeconds = Math.round(timeLeftInMiliseconds / 1000);

    const days = Math.floor(timeLeftInSeconds / 60 / 60 / 24);
    timeLeftInSeconds -= days * 60 * 60 * 24;

    const hours = Math.floor(timeLeftInSeconds / 60 / 60);
    timeLeftInSeconds -= hours * 60 * 60;

    const minutes = Math.floor(timeLeftInSeconds / 60);
    timeLeftInSeconds -= minutes * 60;

    return [days, hours, minutes, timeLeftInSeconds];
}

export { calcDeadline }