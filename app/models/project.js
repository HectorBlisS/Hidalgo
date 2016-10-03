import DS from 'ember-data';

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
	// 	  // return "Perras";
	})
	// numero_votos: Ember.computed('votos',function(){
	// 	if(this.belongsTo('votos').value() === null){
	// 		return 'cero';
	// 	}
	// 	return this.belongsTo('votos').get('votantes').ids().length;
	// })
});
