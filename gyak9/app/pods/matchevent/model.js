import DS from 'ember-data';

const MatchEventModel = DS.Model.extend({
    playername: DS.attr(),
    eventtype: DS.attr(),
    time: DS.attr(),
    footballmatch: DS.attr()
});


// változót exportáljuk
export default MatchEventModel;
