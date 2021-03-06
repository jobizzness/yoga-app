/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

export class PageViewElement extends PolymerElement {

  static get properties() {
    return {
      selected: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },
      active: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },
    }
  }

  static get observers() {
    return [
      '_onSelectedChange(selected)'
    ]
  }

  _onSelectedChange(selected) {
    if (selected && typeof this.show === "function") {
      this.show();
    } else {
      if (typeof this.hide === "function")
        this.hide();
    }
  }
}