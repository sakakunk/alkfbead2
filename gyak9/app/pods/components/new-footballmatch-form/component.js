import Ember from 'ember';

export default Ember.Component.extend({
    errors: Ember.Object.create(),
    hasErrors: false,
    
    
    actions: {
        submit1(){  // submit gomb megnyomására ez a függvény fut le
            //console.log('faintos szoveg')  // submit actionra kiírja ezt
            
            if(!this.validate()){
                return;
            }
            
            this.get('onSave')({    // kívülről kapott függvény, visszadja a kitöltött mezők adatait
                home: this.$('#home').val(),
                away: this.$('#away').val(),
                result: this.$('#result').val(),
            });  
        }
    },
    
    validate() {
        var home = this.$('#home').val();   // adatbeolvasása
        var away = this.$('#away').val();
        var result = this.$('#result').val();
        
        this.set('errors.home', home === '' ? 'Kötelező' : '');
        this.set('errors.away', away === '' ? 'Kötelező' : '');
        this.set('errors.result', result === '' ? 'Kötelező' : '');
        
        return this.get('errors.home') === '' && this.get('errors.away') === '' && this.get('errors.result')==='';
    }
    
});
