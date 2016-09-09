import Ember from 'ember'
import { MAX_FILE_SIZE } from 'tmp-for-all/constants'

const { get, $ } = Ember

export default Ember.Component.extend({
  tagName: 'span',
  maxFileSize: MAX_FILE_SIZE,
  acceptFilter: 'application/pdf,image/*',
  actions: {
    didSelectFiles () {
      let selection = []
      const files = this.$('input')[0].files
      for (let i = 0; i < files.length; i++) {
        selection.pushObject(files[i])
      }
      $('input').val('')
      get(this, 'addFiles')(selection)
    }
  }
})
