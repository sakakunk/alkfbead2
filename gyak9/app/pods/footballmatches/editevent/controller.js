import Ember from 'ember';

export default Ember.Controller.extend({
     actions: {
        modifyEvent(formData) {
            //console.log(formData);
             
            var event = this.get('model');
            //error.set('location', formData.location);  // location részt beállítja a formData értékére
            //error.set('description', formData.description);
           // event.setProperties(formData);  // előző két sort ezzel az eggyel is le lehet írni
            event.set('playername', formData.playername);
            event.set('time', formData.time);
            event.set('eventtype', formData.eventtype);
            
            return event.save().then(() => {
                this.transitionToRoute('footballmatches.listevents');
            });
        }
    }
});
