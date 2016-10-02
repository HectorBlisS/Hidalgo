import Ember from 'ember';

export default Ember.Route.extend({

  	didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
    	// perform your jQuery logic here
    	Ember.$("#test").fadeOut("slow");
			Ember.$('select').material_select();
    });
  }
});
