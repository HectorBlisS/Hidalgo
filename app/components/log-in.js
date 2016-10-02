import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement(){
		this._super();
		Ember.run.scheduleOnce('afterRender',this,function(){
			//jquery
			Ember.$('.modal-trigger').leanModal();
		});
	},
	// beforeModel(){
	// 		// let self = this;
	// 		this.get('session')
	// 		.fetch()
	// 		.then(function(){
	// 			this.transitionTo('projects');
	// 		})
	// 		.catch(function(){});
	// }
	actions:{
		login(provider){
			this.login(provider);
		
		}
	}
	// 	logout(){
	// 		this.get('session').close();
	// 		this.transitionTo('index');
	// 	}
	// } 

});
