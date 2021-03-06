/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import { html } from '@polymer/polymer/polymer-element.js';
import { PageViewElement } from "../../components/page-view-element";
import { connect } from 'pwa-helpers/connect-mixin.js';

import { store } from '../../store.js';
import template from './template.html';
import { fadeIn, fadeOut } from '../../components/animation.js';

/**
 * `bn-project` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class DappClass extends connect(store)(PageViewElement) {

    static get template() {
        return html([
            template
        ]);
    }

    async hide() {
        const animation = await fadeOut(this).finished;
        this.active = this.selected;
    }

    async show() {
        const animation = await fadeIn(this).finished;
        this.active = this.selected;

    }

    /**
    * Object describing property-related metadata used by Polymer features
    */
    static get properties() {
        return {}
    }


    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

    connectedCallback(){
        super.connectedCallback();
    }

    /**
     * Use for one-time configuration of your component after local DOM is initialized. 
     */
    ready() {
        super.ready();
    }

    _stateChanged(state){
        
    }
}

customElements.define('dapp-class', DappClass);