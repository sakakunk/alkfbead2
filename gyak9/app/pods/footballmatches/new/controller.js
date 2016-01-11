import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newFootballmatch(formData) {
            console.log(formData);
            console.log('Liszt Ferenc');
            var footballmatch = this.store.createRecord('footballmatch', Object.assign({  // error modelben adjuk meg az objektumot
                home: 'h',  // alapértékek adása az adattagoknak
                away: 'a',
                result: 'r',
            }, formData));  // formData - ami bejön a formon érték az felül írja az alapértéket
            footballmatch.save();
            this.transitionToRoute('footballmatches.list');
        }
    }
});
