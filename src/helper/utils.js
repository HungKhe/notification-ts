module.exports = {
    initGetNowDate: () => {
        var date = new Date();
		var d = date.getDate();
		var m = date.getMonth() + 1;
		var y = date.getFullYear();
		return (d <= 9 ? '0' + d : d) + '/' + (m <= 9 ? '0' + m : m) + '/' + y;
	},
	initImageUrl: () => `http://localhost:8888/api/images/`
}