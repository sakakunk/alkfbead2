import DS from 'ember-data';

const FootballMatchModel = DS.Model.extend({
    matchevents: DS.attr(),
    home: DS.attr(),
    away: DS.attr(),
    result: DS.attr(),
});


// változót exportáljuk
export default FootballMatchModel;