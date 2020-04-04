/*!
 * vue-tailwind-icons v0.0.1
 * (c) Grant Williams
 * Released under the MIT License.
 */
'use strict';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  props: {
    name: {
      type: String,
      required: true
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.name === 'arrow-down' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M19 14l-7 7m0 0l-7-7m7 7V3"
    }
  })]) : _vm.name === 'arrow-left' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M10 19l-7-7m0 0l7-7m-7 7h18"
    }
  })]) : _vm.name === 'arrow-right' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M14 5l7 7m0 0l-7 7m7-7H3"
    }
  })]) : _vm.name === 'arrow-up' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M5 10l7-7m0 0l7 7m-7-7v18"
    }
  })]) : _vm.name === 'arrow-narrow-down' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M16 17l-4 4m0 0l-4-4m4 4V3"
    }
  })]) : _vm.name === 'arrow-narrow-left' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M7 16l-4-4m0 0l4-4m-4 4h18"
    }
  })]) : _vm.name === 'arrow-narrow-right' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M17 8l4 4m0 0l-4 4m4-4H3"
    }
  })]) : _vm.name === 'arrow-narrow-up' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M8 7l4-4m0 0l4 4m-4-4v18"
    }
  })]) : _vm.name === 'check' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M5 13l4 4L19 7"
    }
  })]) : _vm.name === 'cheveron-down' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M19 9l-7 7-7-7"
    }
  })]) : _vm.name === 'cheveron-left' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M15 19l-7-7 7-7"
    }
  })]) : _vm.name === 'cheveron-right' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M9 5l7 7-7 7"
    }
  })]) : _vm.name === 'cheveron-up' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M5 15l7-7 7 7"
    }
  })]) : _vm.name === 'exclamation' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    }
  })]) : _vm.name === 'filter' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
    }
  })]) : _vm.name === 'home' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    }
  })]) : _vm.name === 'lock-closed' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    }
  })]) : _vm.name === 'office-building' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    }
  })]) : _vm.name === 'pencil' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    }
  })]) : _vm.name === 'plus-circle' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  })]) : _vm.name === 'search' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    }
  })]) : _vm.name === 'shield-check' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    }
  })]) : _vm.name === 'trash' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    }
  })]) : _vm.name === 'user' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    }
  })]) : _vm.name === 'users' ? _c('svg', {
    attrs: {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    }
  })]) : _vm._e();
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$1 = {
  props: {
    name: {
      type: String,
      required: true
    }
  }
};

/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.name === 'check' ? _c('svg', {
    attrs: {
      "viewBox": "0 0 20 20",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
      "clip-rule": "evenodd"
    }
  })]) : _vm.name === 'cheveron-down' ? _c('svg', {
    attrs: {
      "viewBox": "0 0 20 20",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    }
  })]) : _vm.name === 'cheveron-left' ? _c('svg', {
    attrs: {
      "viewBox": "0 0 20 20",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
      "clip-rule": "evenodd"
    }
  })]) : _vm.name === 'cheveron-right' ? _c('svg', {
    attrs: {
      "viewBox": "0 0 20 20",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
      "clip-rule": "evenodd"
    }
  })]) : _vm.name === 'cheveron-up' ? _c('svg', {
    attrs: {
      "viewBox": "0 0 20 20",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
      "clip-rule": "evenodd"
    }
  })]) : _vm.name === 'filter' ? _c('svg', {
    attrs: {
      "viewBox": "0 0 20 20",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
      "clip-rule": "evenodd"
    }
  })]) : _vm.name === 'lock-closed' ? _c('svg', {
    attrs: {
      "viewBox": "0 0 20 20",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
      "clip-rule": "evenodd"
    }
  })]) : _vm.name === 'pencil' ? _c('svg', {
    attrs: {
      "viewBox": "0 0 20 20",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "d": "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
    }
  })]) : _vm.name === 'plus-circle' ? _c('svg', {
    attrs: {
      "viewBox": "0 0 20 20",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",
      "clip-rule": "evenodd"
    }
  })]) : _vm.name === 'search' ? _c('svg', {
    attrs: {
      "viewBox": "0 0 20 20",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
      "clip-rule": "evenodd"
    }
  })]) : _vm.name === 'trash' ? _c('svg', {
    attrs: {
      "viewBox": "0 0 20 20",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
      "clip-rule": "evenodd"
    }
  })]) : _vm._e();
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

//
var script$2 = {
  props: {
    name: {
      type: String,
      required: true
    },
    set: {
      type: String
    }
  },
  components: {
    heroIconsOutline: __vue_component__,
    heroIconsSolid: __vue_component__$1
  },
  computed: {
    iconSet: function iconSet() {
      return this.set ? this.set : this.defaultSet;
    }
  }
};

/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.iconSet === 'outline' ? _c('hero-icons-outline', {
    attrs: {
      "name": _vm.name
    }
  }) : _vm.iconSet === 'solid' ? _c('hero-icons-solid', {
    attrs: {
      "name": _vm.name
    }
  }) : _vm._e();
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = undefined;
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

var VueTailwindIcons = {
  install: function install(Vue, options) {
    if (!options) {
      options = {
        set: 'solid'
      };
    }

    Vue.component('icon', {
      "extends": __vue_component__$2,
      data: function data() {
        return {
          defaultSet: options.set
        };
      }
    });
  }
};

module.exports = VueTailwindIcons;
