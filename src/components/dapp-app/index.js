

import { PolymerElement, html } from '@polymer/polymer/polymer-element';

import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-icon-button/paper-icon-button.js';

import '../my-icons.js';
import '../snack-bar.js';
import SharedStyles from '../shared-styles.html';

import { connect } from 'pwa-helpers/connect-mixin.js';
import { installRouter } from 'pwa-helpers/router.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

import { store } from '../../store.js';
import { navigate, updateOffline, updateLayout } from '../../actions/app.js';
import template from './template.html';

class DappApp extends connect(store)(PolymerElement) {
  static get template() {
    return html([
      template +
      SharedStyles
    ]);
  }

  static get properties() {
    return {
      appTitle: String,
      _page: String,
      _drawerOpened: Boolean,
      _snackbarOpened: Boolean,
      _offline: Boolean,
      hasHeader: {
        type: Boolean,
        reflectToAttribute: true
      }
    }
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/2.0/docs/devguide/gesture-events#use-passive-gesture-listeners
    setPassiveTouchGestures(true);
  }

  static get observers(){
    return [
      '_pageChanged(_page)',
      '_hasHeaderChanged(hasHeader)'
    ]
  }
  connectedCallback() {
    super.connectedCallback();
    installRouter((location) => store.dispatch(navigate(window.decodeURIComponent(location.pathname))));
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 460px)`,
      (matches) => store.dispatch(updateLayout(matches)));
  }

  is_selected(_page, view){
    return _page === view;
  }

  updateDrawerState(e) {
    this._drawerOpened = false;
  }

  _pageChanged(page){
    if (['category', 'class'].indexOf(page) != -1) {
      this.hasHeader = false;
    }else {
      this.hasHeader = true;
    }
  }

  _hasHeaderChanged(hasHeader){
    hasHeader 
      ? this._showHeader() : this._hideHeader();
  }

  _showHeader(){
    //add padding on main
    //slide it down
    //fire done
    this.$.main.classList.remove('no-pad');
    this.$.header.classList.remove('hide');
  }

  _hideHeader(){
    this.$.header.classList.add('hide');
    this.$.main.classList.add('no-pad');
    //slide it up
    //remove the padding on main
    //fire done
  }

  _toggleDrawer() {
    this._drawerOpened = !this._drawerOpened;
  }

  // _didRender(properties, changeList) {
  //   if ('_page' in changeList) {
  //     const pageTitle = properties.appTitle + ' - ' + changeList._page;
  //     updateMetadata({
  //       title: pageTitle,
  //       description: pageTitle
  //       // This object also takes an image property, that points to an img src.
  //     });
  //   }
  // }

  _stateChanged(state) {
    this._page = state.app.page;
    this._offline = state.app.offline;
    this._snackbarOpened = state.app.snackbarOpened;
    this._drawerOpened = state.app.drawerOpened;
  }
}

window.customElements.define('dapp-app', DappApp);