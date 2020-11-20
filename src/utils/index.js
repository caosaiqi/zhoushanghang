const formatNumber = n => {
	n = n.toString()
	return n[1] ? n : '0' + n
}
const utils = {
  toFix(e) {
		let num = e || 0
		let str = ""; //字符串累加
		str = (Math.round(num * 100) / 100)
			.toFixed(2)
			.toString()
			.replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
				return $1 + ",";
			});
		return str; //字符串=>数组=>反转=>字符串
	},
	
	//时间戳转日期
	timeStamp(time) {
		const dates = new Date(time*1)
		const year = dates.getFullYear()
		const month = dates.getMonth() + 1
		const date = dates.getDate()
		const day = dates.getDay()
		const hour = dates.getHours()
		const min = dates.getMinutes()
		const send = dates.getSeconds()
		const days = ['日', '一', '二', '三', '四', '五', '六']
		return {
			fullDate:`${year}-${formatNumber(month)}-${formatNumber(date)} ${formatNumber(hour)}:${formatNumber(min)}:${formatNumber(send)}`, //返回日期 2020/04/24
			allDate: `${year}/${formatNumber(month)}/${formatNumber(date)}`, //返回日期 2020/04/24
			date: `${formatNumber(month)}-${formatNumber(date)}`, //返回的日期 07-01
			day: `星期${days[day]}`, //返回的礼拜天数  星期一
			hour: formatNumber(hour) + ':' + formatNumber(min) //返回的时钟 08:00
		}
	},
	formatTime(date, type) {
		if (!date) {
			return
		}
		let newdate = ''
		newdate = date
		if (typeof(date) != 'object') {
			newdate = new Date(date.replace(/-/g, "/"));
		}
		let year = newdate.getFullYear()
		let month = newdate.getMonth() + 1
		if (month < 10) {
			month = '0' + month
		}
		let day = newdate.getDate()
		let hour = newdate.getHours()
		let minute = newdate.getMinutes()
		let second = newdate.getSeconds()
		switch (type) {
			case "ymd":
				return [year, month, day].map(formatNumber).join('-')
				break;
			case "hms":
				return [hour, minute, second].map(formatNumber).join(':')
				break;
			case "notM":
				return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')
				break;
			case "notY":
				return month + '月' + day + '日' + ' ' + [hour, minute, second].map(formatNumber).join(':')
				break;
			case "end":
				year = year + 2;
				return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')
				break;
			default:
				return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
				break;
		}

	},
	// 增加指定小时
	addHours(date, hours) {
		let a = date.replace(/-/g, "/")
		let dates = new Date(a);
		dates.setHours(dates.getHours() + Number(hours));
		let year = dates.getFullYear()
		let month = dates.getMonth() + 1;
		let day = dates.getDate();
		let hour = dates.getHours()
		let minute = dates.getMinutes()
		let second = dates.getSeconds()
		return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
	},
	// 当前日期
	nowTime() {
		let timestamp = Date.parse(new Date());
		let date = new Date(timestamp);
		return utils.formatTime(date)
	},
	// 增加指定天数
	addDate(date, days,fulldate) {
		let dates = new Date(date.replace(/-/g, "/"));
		dates.setDate(dates.getDate() + days);
		let year = dates.getFullYear()
		let month = dates.getMonth() + 1;
		let day = dates.getDate();
		let hour = dates.getHours()
		let minute = dates.getMinutes()
		let second = dates.getSeconds()
		if(fulldate){
			return [year, month, day].map(formatNumber).join('-')+ ' ' + [hour, minute,second].map(formatNumber).join(':')
		}else{
			return [year, month, day].map(formatNumber).join('-')
		}
	},
}
export default utils