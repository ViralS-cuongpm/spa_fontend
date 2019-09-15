const timezones = {
    '720'        : undefined,
    '660'        : undefined,
    '60'         : 'Pacific/Honolulu',
    '540'        : undefined,
    '480'        : 'America/Los_Angeles',// America/Vancouver
    '420'        : 'America/Phoenix',// US/Mountain
    '360'        : 'America/Chicago',// America/El_Salvador, America/Mexico_City
    '300'        : 'America/New_York',// America/Toronto, America/Bogota
    '240'        : 'America/Caracas',
    '180'        : 'America/Argentina/Buenos_Aires',// America/Sao_Paulo
    '120'        : undefined,
    '60'         : undefined,
    '0'          : 'Europe/London',
    '-60'        : 'Europe/Berlin',// Europe/Madrid, Europe/Paris, Europe/Warsaw, Europe/Zurich
    '-120'       : 'Europe/Athens',// Europe/Istanbul, Africa/Johannesburg
    '-180'       : 'Europe/Moscow',
    '-210'       : 'Asia/Tehran',
    '-240'       : 'Asia/Dubai',
    '-300'       : 'Asia/Ashkhabad',
    '-330'       : 'Asia/Kolkata',
    '-345'       : 'Asia/Kathmandu',
    '-360'       : 'Asia/Almaty',
    '-420'       : 'Asia/Bangkok',
    '-480'       : 'Asia/Taipei',// Asia/Singapore, Asia/Shanghai, Asia/Hong_Kong
    '-540'       : 'Asia/Tokyo',// Asia/Seoul
    '-570'       : 'Australia/Adelaide',
    '-600'       : 'Australia/Sydney',// Australia/Brisbane, Australia/ACT
    '-660'       : undefined,
    '-720'       : 'Pacific/Auckland',
    '-765'       : 'Pacific/Chatham',
    '-780'       : 'Pacific/Fakaofo',
  };

export default {

  getTimezoneOffset() {
    let d = new Date();
    return d.getTimezoneOffset();
  },

  getTimezone() {
    const timeOffset = this.getTimezoneOffset();
    return timezones[timeOffset] || 'Asia/Bangkok';
  }
}
