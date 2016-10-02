import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		login(provider){
			let self=this;
			this.get('session').open('firebase',{provider:provider})
			.then(function(){
				let usuario = self.get('session.currentUser');
				self.store.createRecord('user',{
					displayName:usuario.displayName,
					email:usuario.email,
					photoURL:usuario.photoURL,
					id:usuario.uid
				}).save();
			});
			this.transitionToRoute('projects');
	}
}
});
