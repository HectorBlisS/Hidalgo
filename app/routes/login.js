import Ember from 'ember';

export default Ember.Route.extend({

	beforeModel(){
			
			this.get('session')
			.fetch()
			.then(function(){
				// self.transitionTo('login');
			})
			.catch(function(){});
	}

});
