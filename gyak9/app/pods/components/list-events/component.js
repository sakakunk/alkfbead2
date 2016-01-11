import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
    deleteEvent(event) {
            event.deleteRecord();
            event.save();   // a változást is mentse el az adatbázisban
        }
    }
});
