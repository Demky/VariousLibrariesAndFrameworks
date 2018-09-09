Vue.component('input-password', {
	template: '<span class="input-password">' +
		'<input v-show="!visible" type="password" v-model="password" placeholder="Mot de passe" name="password" id="password">' +
		'<input v-show="visible" type="text" v-model="password" placeholder="Mot de passe">' + 
		'<button @click.prevent @mousedown.prevent="set_visible()" @mouseup.prevent="set_visible()" :class="{ visible: visible }"></button>' +
	'</span>',
	data: function() {
		return {
			password: 'Hello world !',
			visible: false
		}
	},
	methods: {
		set_visible: function() {
			this.visible = !this.visible;
		}
	}
});

var app = new Vue({
	el: '#app'
});