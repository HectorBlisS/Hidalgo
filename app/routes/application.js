import Ember from 'ember';

export default Ember.Route.extend({
	didInsertElement(){
		this._super();
		Ember.run.scheduleOnce('afterRender',this,function(){
			//jquery
			Ember.$('.materialboxed').materialbox();
		});
	},
	beforeModel(){
			let self = this;
			return this.get('session').fetch()
			.then(function(){
				console.log('funciona estas logueado'+self.get('session.currentUser').displayName);
			})
			.catch(function(){});
	},
	actions:{
		logout(){
			this.get('session').close();
			this.transitionTo('index');
		}
	}
});
