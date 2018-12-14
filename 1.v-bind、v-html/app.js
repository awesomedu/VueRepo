new Vue({
	el:"#l1",
	data:{
		name:"l1-test",
		website:"www.baidu.com",
		bindValue:"mr_r",
		message:'<h1>testV-html</h1>'
	},
	methods:{
		greet:function(time){
			return 'good' + time;
		}
	}
});