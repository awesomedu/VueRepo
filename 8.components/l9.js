Vue.component("greeting",{
	template:'<p>{{name}}:hello ,@You</p>'
	data:function(){
		return {
			name:"micheal"
		}
	}
})

new Vue({
	el:"#l9"
});