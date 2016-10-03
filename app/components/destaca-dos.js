import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement(){
		this._super();
		Ember.run.scheduleOnce('afterRender',this,function(){
			//jquery
			 Ember.$("#owl-demo").owlCarousel({
		 
		      autoPlay: 3000, //Set AutoPlay to 3 seconds
		 
		      navigation : false, // Show next and prev buttons
		      slideSpeed : 300,
		      paginationSpeed : 400,
		      singleItem:false,
		      items:2
		  });
		});
	}
});
