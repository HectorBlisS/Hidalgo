import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		guardar(){
			this.guardar(this.get('model'));
		},
		cate(){
			this.cate(this.get('model'));
		}
	}

});
