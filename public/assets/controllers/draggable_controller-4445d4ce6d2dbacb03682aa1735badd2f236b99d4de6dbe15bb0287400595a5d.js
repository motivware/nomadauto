import { Controller } from 'stimulus'
import { Sortable } from '@shopify/draggable'

export default class extends Controller {
  static targets = ['column', 'item']
  initialize() {}
  connect() {
    if (this.hasItemTarget) {      
      const sortable = new Sortable(this.columnTargets, {
        draggable: 'li',
        mirror: {
          constrainDimensions: true,
          cursorOffsetX: 0,
          cursorOffsetY: 0
        },
      });
      this.itemTargets.forEach(item => {
        // item.setAttribute('style', 'z-index: 1000;')
        const mirror = document.querySelectorAll('.draggable-item')
        for (var i = 0; i < mirror.length;  i++) {
          console.log(mirror)
          mirror.setAttribute('style', 'display: none;')          
        }
      })
     
      sortable.on('sortable:stop', function(event) {
        let url = event.dragEvent.source.getAttribute('data-url')
        let column = event.newContainer.getAttribute('data-id')
        let data = { item: { column_id: column } }

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
        location.reload();

      })
    }
  }
  disconnect() {}
};
