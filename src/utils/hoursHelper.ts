import { BUSINESS_INFO } from '../data/businessData';

export interface BusinessStatus {
  isOpen: boolean;
  statusText: string;
  nextEventText: string;
  todayHours: string;
  currentDayName: string;
}

/**
 * Calculates current business open/closed status in Indian Standard Time (UTC+5:30).
 */
export function getBusinessStatus(currentDate = new Date()): BusinessStatus {
  // Convert current time to Indian Standard Time (IST) offset +5:30
  const utc = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
  const istOffset = 5.5 * 3600000;
  const istTime = new Date(utc + istOffset);

  const dayIndex = istTime.getDay(); // 0 is Sunday, 1 is Monday, ...
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayName = dayNames[dayIndex];

  const currentHour = istTime.getHours();
  const currentMinute = istTime.getMinutes();
  const currentTimeDecimal = currentHour + (currentMinute / 60);

  // Find today's hours from BUSINESS_INFO
  const todaySchedule = BUSINESS_INFO.weeklyHours.find(h => h.day === currentDayName) || BUSINESS_INFO.weeklyHours[0];

  let isOpen = false;
  let statusText = "Closed Now";
  let nextEventText = "";

  if (currentTimeDecimal >= todaySchedule.openTime && currentTimeDecimal < todaySchedule.closeTime) {
    isOpen = true;
    const closeHoursInt = Math.floor(todaySchedule.closeTime);
    const closeMinutes = Math.round((todaySchedule.closeTime - closeHoursInt) * 60);
    const displayClose = `${closeHoursInt > 12 ? closeHoursInt - 12 : closeHoursInt}:${closeMinutes === 0 ? '00' : closeMinutes} ${closeHoursInt >= 12 ? 'PM' : 'AM'}`;
    statusText = "Open Now";
    nextEventText = `Closes today at ${displayClose}`;
  } else if (currentTimeDecimal < todaySchedule.openTime) {
    isOpen = false;
    const openHoursInt = Math.floor(todaySchedule.openTime);
    const openMinutes = Math.round((todaySchedule.openTime - openHoursInt) * 60);
    const displayOpen = `${openHoursInt > 12 ? openHoursInt - 12 : openHoursInt}:${openMinutes === 0 ? '00' : openMinutes} ${openHoursInt >= 12 ? 'PM' : 'AM'}`;
    statusText = "Closed Now";
    nextEventText = `Opens today at ${displayOpen}`;
  } else {
    // Already closed for the day, check tomorrow
    const nextDayIndex = (dayIndex + 1) % 7;
    const nextDayName = dayNames[nextDayIndex];
    const tomorrowSchedule = BUSINESS_INFO.weeklyHours.find(h => h.day === nextDayName) || BUSINESS_INFO.weeklyHours[0];
    const openHoursInt = Math.floor(tomorrowSchedule.openTime);
    const openMinutes = Math.round((tomorrowSchedule.openTime - openHoursInt) * 60);
    const displayOpen = `${openHoursInt > 12 ? openHoursInt - 12 : openHoursInt}:${openMinutes === 0 ? '00' : openMinutes} ${openHoursInt >= 12 ? 'PM' : 'AM'}`;
    statusText = "Closed for the day";
    nextEventText = `Reopens ${nextDayName} at ${displayOpen}`;
  }

  return {
    isOpen,
    statusText,
    nextEventText,
    todayHours: todaySchedule.hours,
    currentDayName,
  };
}
