import Ember from 'ember'
const { computed, get } = Ember

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['file-item', 'file-to-upload'],
  classNameBindings: ['fileExceedsMaxSize:oversized-file'],
  fileExceedsMaxSize: computed('file.size', 'maxFileSize', function () {
    const fileSize = get(this, 'file.size')
    const maxFileSize = get(this, 'maxFileSize')
    if (!maxFileSize) return false
    return fileSize > maxFileSize
  }),
  isImage: computed('file', function () {
    return /image\/.*/.test(get(this, 'file.type'))
  })
})
