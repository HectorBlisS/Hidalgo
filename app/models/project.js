import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	titulo: DS.attr('string'),
	desc: DS.attr('string'),
	img: DS.attr('string'),
	video: DS.attr('string'),
	categoria: DS.attr('string'),
	usuario: DS.belongsTo('user'),
	votos: DS.hasMany('voto'),
	votos_number: Ember.computed('votos.[]',function(){
		  if (this.hasMany('votos').value() === null) {
		    return 'Aún no hay votos';
		  }

		  return this.hasMany('votos').ids().length;

	})

});
