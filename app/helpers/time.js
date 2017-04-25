export const timeStampToString = (timestamp) => {
  const  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date(timestamp);

  return months[date.getUTCMonth()] + ' ' + date.getUTCDate() + ', ' + date.getUTCFullYear();
}

export const formatTime = (date, hour, minute) => {
  return new Date(`${date} ${hour}:${minute}`)
}

export const validateTime = (date, hour, minute) => {
  return formatTime(date, hour, minute).getTime() > Date.now();
}

export const calculateRemainingTime = (end) => {
  var t = Date.parse(end) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)));
  //var days = Math.floor( t/(1000*60*60*24) );

  return `${hours}:${minutes}:${seconds}`;
}