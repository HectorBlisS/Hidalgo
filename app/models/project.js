import DS from 'ember-data';

export default DS.Model.extend({
	titulo: DS.attr('string'),
	desc: DS.attr('string'),
	img: DS.attr('string'),
	video: DS.attr('string'),
	categoria: DS.attr('string'),
	usuario: DS.belongsTo('user')
});
