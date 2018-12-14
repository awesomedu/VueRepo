new Vue({
	el:"#l2",
	data:{
		age:30,
		x:0,
		y:0
	},
	methods:{
		add:function() {
			this.age++;
		},

		minus:function(){
			this.age--;
		},
		updateXY:function(event){
			console.log(event);
			this.x = event.offsetX;
			this.y = event.offsetY;
		}
	}

});