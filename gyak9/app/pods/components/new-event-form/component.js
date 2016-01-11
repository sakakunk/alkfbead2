import Ember from 'ember';

export default Ember.Component.extend({
    errors: Ember.Object.create(),
    hasErrors: false,
    
    
    actions: {
        submit(errorid){  // submit gomb megnyomására ez a függvény fut le
            //console.log('faintos szoveg')  // submit actionra kiírja ezt
            
            if(!this.validate()){
                return;
            }
            this.get('onSave')({    // kívülről kapott függvény, visszadja a kitöltött mezők adatait
                footballmatch: errorid,
                playername: this.$('#playername').val(),
                eventtype: this.$('#eventtype').val(),
                time: this.$('#time').val(),
                
            });  
        }
    },
    
    validate() {
        var playername = this.$('#playername').val();   // adatbeolvasása
        var eventtype = this.$('#eventtype').val();
        var time = this.$('#time').val();
        
        this.set('errors.playername', playername === '' ? 'Helyszín kötelező' : '');
        this.set('errors.eventtype', eventtype === '' ? 'Leírás kötelező' : '');
        this.set('errors.time', time === '' ? 'Leírás kötelező' : '');
        
        return this.get('errors.playername') === '' && this.get('errors.eventtype') === '' && this.get('errors.time') === '';
    }
    
});
