import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement(){
		this._super();
		Ember.run.scheduleOnce('afterRender',this,function(){
			//jquery
			Ember.$('.modal-trigger').leanModal();
		});
	} 

});
