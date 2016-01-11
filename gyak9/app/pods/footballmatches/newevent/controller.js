import Ember from 'ember';

export default Ember.Controller.extend({
    
    actions: {
        newKiskutya(formData) {
            
            
            var matchevent = this.store.createRecord('matchevent', Object.assign({  // error modelben adjuk meg az objektumot
               // date: Date.now().toString(),  // alapértékek adása az adattagoknak
                playername: 'default',
                eventtype: 'e',
                time: 't',
                footballmatch: null
                
            }, formData));  // formData - ami bejön a formon érték az felül írja az alapértéket
            matchevent.save();
          this.transitionToRoute('footballmatches.list');
        }
    }
});
