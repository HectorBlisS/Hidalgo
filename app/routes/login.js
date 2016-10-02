import Ember from 'ember';

export default Ember.Route.extend({

	beforeModel(){
			let self = this;
			this.get('session')
			.fetch()
			.then(function(){
				// self.transitionTo('login');
			})
			.catch(function(){});
	}

});
