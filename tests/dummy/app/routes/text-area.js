import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    return {
      physicalAddress: 'The City Ground,\nTrentside North,\nNottingham,\nNG2 5FJ\nUK',
      errors: {
        physicalAddress: [{
          message: 'This field cannot be blank'
        }]
      }
    }
  }
})
