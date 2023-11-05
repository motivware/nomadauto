import { Controller } from 'stimulus'
import { Sortable } from '@shopify/draggable'

export default class extends Controller {
  static targets = ['column', 'item']
  initialize() {}
  connect() {
    if (this.hasItemTarget) {
      this.itemTargets.forEach(item => {
        item.setAttribute('style', 'z-index: 1000;')
      })
      console.log(this.itemTargets)
      const sortable = new Sortable(this.columnTargets, {
        draggable: 'li',
        mirror: {
          constrainDimensions: true,
          cursorOffsetX: 0,
          cursorOffsetY: 0
        },
      });
      
      sortable.on('mirror:destroy', function(event) {
        console.log(event.dragEvent.originalSource.style.display);
        event.dragEvent.originalSource.style.display = ''; 
      })
      sortable.on('sortable:stop', function(event) {
        let url = event.dragEvent.source.getAttribute('data-url')
        console.log(url)
        let column = event.newContainer.getAttribute('data-id')
        console.log(column)
        let data = { item: { column_id: column } }
        console.log(data)

        let token = document.head.querySelector('meta[name="csrf-token"]').getAttribute('content')
        fetch(url, {
          method: 'PUT',
          credentials: 'same-origin',
          headers: {
            "X-CSRF-Token": token,
            "Accept": "application/json",
            "Content-type": "application/json"
          },
          body: JSON.stringify(data)
        })
      })
    }
  }
  disconnect() {}
};
