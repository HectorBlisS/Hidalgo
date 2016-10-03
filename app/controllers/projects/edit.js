import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		guardar(model){
			let uid = this.get('session.currentUser').uid;
			this.store.findRecord('user',uid)
			.then(function(user){
				model.set('usuario',user);
				model.save();

			});
			this.transitionToRoute('projects.details',model);
			
		}
	}
});
