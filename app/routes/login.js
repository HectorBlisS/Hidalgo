import Ember from 'ember';

export default Ember.Route.extend({

	beforeModel(){
			let self = this;
			this.get('session')
			.fetch()
			.then(function(){
				self.transitionTo('projects');
			})
			.catch(function(){});
	},
	model(){
		this.store.createRecord('user');
	}

	
	// 
	// actions:{
	// 	login(provider){
	// 		let self=this;
	// 		this.get('session').open('firebase',{provider:provider})
	// 		.then(function(){
	// 			let usuario = self.get('session.currentUser');
	// 			self.store.createRecord('user',{
	// 				displayName:usuario.displayName,
	// 				email:usuario.email,
	// 				photoURL:usuario.photoURL,
	// 				id:usuario.uid
	// 			}).save();
	// 		});
	// 		this.transitionTo('projects');
	// 	},
	// 	logout(){
	// 		this.get('session').close();
	// 		this.transitionTo('index');
	// 	}
	// }
});
