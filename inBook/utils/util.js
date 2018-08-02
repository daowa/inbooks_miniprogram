function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function pad(str, n) {
  var len = str.length;
  while (len < n) {
    str = str + ' ';
    len++;
  }
  return str + '.';
}

function parseFrom(from_) {
  if(from_ == 'baidubaike')
    return '百度百科';
  else if(from_ == 'doubandushu')
    return '豆瓣读书';
  else if(from_ == 'daizhige')
    return '殆知阁';
  else if(from_ == 'daoon')
    return '道卬'
  else if(from_ == 'shuge')
    return '书格'
  else if (from_.indexOf('ShanghaiLibrary') >= 0)
    return '上海图书馆开放数据'
  return from_
}

module.exports = {
  formatTime: formatTime,
  pad: pad,
  parseFrom: parseFrom,
}