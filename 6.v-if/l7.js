new Vue({
	el:"#l7",
	data:{
		error:true,
		name:"test"
	},
	methods:{
		clickErr:function(){
			this.error = !this.error;
		}
	}
});