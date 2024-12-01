// module.exports.hourly_count_data = (data) => {
//   const n = 8; //offset hr from 12:00
//   var arr = data.map(({ hour, count }) => {
//     return { x: hour, y: count };
//   });
//   arr.push(...arr.slice(0, n));
//   return arr.slice(n);
// };

module.exports.active_time = (data) => {
  if (data == 0) return "12 AM";
  if (data == 12) return "12 PM";
  return data < 12 ? data + " AM" : data - 12 + " PM";
};
module.exports.getArora = (data) => {
  let arora = "Arora: "

  const days_gap = 1;
  const chat_responsiveness = 0.5;
  if (days_gap < 2)
    arora += "SoulMates";

  if (chat_responsiveness > 0.85)
    arora += "Besties";
  if (chat_responsiveness < 0.85)
    arora += "Friends";
  if (chat_responsiveness < 0.5)
    arora += "Acquaintances";
  if (chat_responsiveness < 0.25)
    arora += "Strangers";


  return arora;
};

module.exports.active_time_type = (data) => {
  return data < 12 && data > 4
    ? "Looks like y'all are Early Birds"
    : data > 20 || (data > 0 && data < 4)
      ? "Looks like y'all are Night Owls 🦉"
      : "";
};

module.exports.is_night_owl = (data) => {
  return data < 12 && data > 4
    ? false
    : data > 20 || (data > 0 && data < 4)
      ? true
      : false;
};

module.exports.months = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
};

module.exports.monthly_count_data = (data) => {
  return data.map(({ month, count }) => {
    return { x: month, y: count };
  });
};

module.exports.hourly_count_data = (data) => {
  return data.map(({ hour, count }) => {
    return { x: hour, y: count };
  });
};

module.exports.format_time_gap = (data) => {
  return timeConverter(data);
};

module.exports.time_gap = ({ start_time, end_time }) => {
  var a = new Date(start_time);
  var b = new Date(end_time);

  return Math.floor((b - a) / 86400000);
};
function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + " " + month;
  return time;
}
module.exports.no_of_days_talked = (string) => {
  // console.log(string);
  return string.split("").filter((z) => {
    return z === "0" ? true : false;
  }).length;
};

function generateHash(seed) {
  var hash = 0;
  for (var i = 0; i < seed.length; i++) {
    var char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

module.exports.get_random_element = (array, random_key) => {
  if (random_key == undefined)
    random_key = (Math.random().toString());
  const hash = generateHash(random_key.toString()) % array.length;
  // console.log(hash);

  return array[hash];
};
