import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		votar(model){
			let self=this;
			let uid = this.get('session.currentUser').uid;
			this.store.findRecord('user',uid)
			.then(function(user){
				self.store.createRecord('voto',{
				user:user,
				project:model
			}).save();
			});
			
			
			console.log('votado');
		}
	}
});
