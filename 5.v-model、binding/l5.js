new Vue({
	el:"#l5",
	data:{
		name:"",
		age:""
	},
	methods:{
		logName:function(){
			console.log("你正在输入名字");
			this.name = this.$refs.name.value;
		},

		logAge:function(){
			console.log("你正在输入age");
			this.age = this.$refs.age.value;
		}
	}
})