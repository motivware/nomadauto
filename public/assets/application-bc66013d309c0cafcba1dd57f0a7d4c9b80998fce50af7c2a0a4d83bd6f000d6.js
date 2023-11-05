(() => {
  // node_modules/@hotwired/stimulus/dist/stimulus.js
  var EventListener = class {
    constructor(eventTarget, eventName, eventOptions) {
      this.eventTarget = eventTarget;
      this.eventName = eventName;
      this.eventOptions = eventOptions;
      this.unorderedBindings = /* @__PURE__ */ new Set();
    }
    connect() {
      this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
    }
    disconnect() {
      this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
    }
    bindingConnected(binding) {
      this.unorderedBindings.add(binding);
    }
    bindingDisconnected(binding) {
      this.unorderedBindings.delete(binding);
    }
    handleEvent(event) {
      const extendedEvent = extendEvent(event);
      for (const binding of this.bindings) {
        if (extendedEvent.immediatePropagationStopped) {
          break;
        } else {
          binding.handleEvent(extendedEvent);
        }
      }
    }
    hasBindings() {
      return this.unorderedBindings.size > 0;
    }
    get bindings() {
      return Array.from(this.unorderedBindings).sort((left, right) => {
        const leftIndex = left.index, rightIndex = right.index;
        return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
      });
    }
  };
  function extendEvent(event) {
    if ("immediatePropagationStopped" in event) {
      return event;
    } else {
      const { stopImmediatePropagation } = event;
      return Object.assign(event, {
        immediatePropagationStopped: false,
        stopImmediatePropagation() {
          this.immediatePropagationStopped = true;
          stopImmediatePropagation.call(this);
        }
      });
    }
  }
  var Dispatcher = class {
    constructor(application2) {
      this.application = application2;
      this.eventListenerMaps = /* @__PURE__ */ new Map();
      this.started = false;
    }
    start() {
      if (!this.started) {
        this.started = true;
        this.eventListeners.forEach((eventListener) => eventListener.connect());
      }
    }
    stop() {
      if (this.started) {
        this.started = false;
        this.eventListeners.forEach((eventListener) => eventListener.disconnect());
      }
    }
    get eventListeners() {
      return Array.from(this.eventListenerMaps.values()).reduce((listeners, map) => listeners.concat(Array.from(map.values())), []);
    }
    bindingConnected(binding) {
      this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    }
    bindingDisconnected(binding, clearEventListeners = false) {
      this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
      if (clearEventListeners)
        this.clearEventListenersForBinding(binding);
    }
    handleError(error2, message, detail = {}) {
      this.application.handleError(error2, `Error ${message}`, detail);
    }
    clearEventListenersForBinding(binding) {
      const eventListener = this.fetchEventListenerForBinding(binding);
      if (!eventListener.hasBindings()) {
        eventListener.disconnect();
        this.removeMappedEventListenerFor(binding);
      }
    }
    removeMappedEventListenerFor(binding) {
      const { eventTarget, eventName, eventOptions } = binding;
      const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
      const cacheKey = this.cacheKey(eventName, eventOptions);
      eventListenerMap.delete(cacheKey);
      if (eventListenerMap.size == 0)
        this.eventListenerMaps.delete(eventTarget);
    }
    fetchEventListenerForBinding(binding) {
      const { eventTarget, eventName, eventOptions } = binding;
      return this.fetchEventListener(eventTarget, eventName, eventOptions);
    }
    fetchEventListener(eventTarget, eventName, eventOptions) {
      const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
      const cacheKey = this.cacheKey(eventName, eventOptions);
      let eventListener = eventListenerMap.get(cacheKey);
      if (!eventListener) {
        eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
        eventListenerMap.set(cacheKey, eventListener);
      }
      return eventListener;
    }
    createEventListener(eventTarget, eventName, eventOptions) {
      const eventListener = new EventListener(eventTarget, eventName, eventOptions);
      if (this.started) {
        eventListener.connect();
      }
      return eventListener;
    }
    fetchEventListenerMapForEventTarget(eventTarget) {
      let eventListenerMap = this.eventListenerMaps.get(eventTarget);
      if (!eventListenerMap) {
        eventListenerMap = /* @__PURE__ */ new Map();
        this.eventListenerMaps.set(eventTarget, eventListenerMap);
      }
      return eventListenerMap;
    }
    cacheKey(eventName, eventOptions) {
      const parts = [eventName];
      Object.keys(eventOptions).sort().forEach((key) => {
        parts.push(`${eventOptions[key] ? "" : "!"}${key}`);
      });
      return parts.join(":");
    }
  };
  var defaultActionDescriptorFilters = {
    stop({ event, value }) {
      if (value)
        event.stopPropagation();
      return true;
    },
    prevent({ event, value }) {
      if (value)
        event.preventDefault();
      return true;
    },
    self({ event, value, element }) {
      if (value) {
        return element === event.target;
      } else {
        return true;
      }
    }
  };
  var descriptorPattern = /^(?:(?:([^.]+?)\+)?(.+?)(?:\.(.+?))?(?:@(window|document))?->)?(.+?)(?:#([^:]+?))(?::(.+))?$/;
  function parseActionDescriptorString(descriptorString) {
    const source = descriptorString.trim();
    const matches = source.match(descriptorPattern) || [];
    let eventName = matches[2];
    let keyFilter = matches[3];
    if (keyFilter && !["keydown", "keyup", "keypress"].includes(eventName)) {
      eventName += `.${keyFilter}`;
      keyFilter = "";
    }
    return {
      eventTarget: parseEventTarget(matches[4]),
      eventName,
      eventOptions: matches[7] ? parseEventOptions(matches[7]) : {},
      identifier: matches[5],
      methodName: matches[6],
      keyFilter: matches[1] || keyFilter
    };
  }
  function parseEventTarget(eventTargetName) {
    if (eventTargetName == "window") {
      return window;
    } else if (eventTargetName == "document") {
      return document;
    }
  }
  function parseEventOptions(eventOptions) {
    return eventOptions.split(":").reduce((options, token) => Object.assign(options, { [token.replace(/^!/, "")]: !/^!/.test(token) }), {});
  }
  function stringifyEventTarget(eventTarget) {
    if (eventTarget == window) {
      return "window";
    } else if (eventTarget == document) {
      return "document";
    }
  }
  function camelize(value) {
    return value.replace(/(?:[_-])([a-z0-9])/g, (_, char) => char.toUpperCase());
  }
  function namespaceCamelize(value) {
    return camelize(value.replace(/--/g, "-").replace(/__/g, "_"));
  }
  function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  function dasherize(value) {
    return value.replace(/([A-Z])/g, (_, char) => `-${char.toLowerCase()}`);
  }
  function tokenize(value) {
    return value.match(/[^\s]+/g) || [];
  }
  function isSomething(object) {
    return object !== null && object !== void 0;
  }
  function hasProperty(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }
  var allModifiers = ["meta", "ctrl", "alt", "shift"];
  var Action = class {
    constructor(element, index2, descriptor, schema) {
      this.element = element;
      this.index = index2;
      this.eventTarget = descriptor.eventTarget || element;
      this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
      this.eventOptions = descriptor.eventOptions || {};
      this.identifier = descriptor.identifier || error("missing identifier");
      this.methodName = descriptor.methodName || error("missing method name");
      this.keyFilter = descriptor.keyFilter || "";
      this.schema = schema;
    }
    static forToken(token, schema) {
      return new this(token.element, token.index, parseActionDescriptorString(token.content), schema);
    }
    toString() {
      const eventFilter = this.keyFilter ? `.${this.keyFilter}` : "";
      const eventTarget = this.eventTargetName ? `@${this.eventTargetName}` : "";
      return `${this.eventName}${eventFilter}${eventTarget}->${this.identifier}#${this.methodName}`;
    }
    shouldIgnoreKeyboardEvent(event) {
      if (!this.keyFilter) {
        return false;
      }
      const filters = this.keyFilter.split("+");
      if (this.keyFilterDissatisfied(event, filters)) {
        return true;
      }
      const standardFilter = filters.filter((key) => !allModifiers.includes(key))[0];
      if (!standardFilter) {
        return false;
      }
      if (!hasProperty(this.keyMappings, standardFilter)) {
        error(`contains unknown key filter: ${this.keyFilter}`);
      }
      return this.keyMappings[standardFilter].toLowerCase() !== event.key.toLowerCase();
    }
    shouldIgnoreMouseEvent(event) {
      if (!this.keyFilter) {
        return false;
      }
      const filters = [this.keyFilter];
      if (this.keyFilterDissatisfied(event, filters)) {
        return true;
      }
      return false;
    }
    get params() {
      const params = {};
      const pattern = new RegExp(`^data-${this.identifier}-(.+)-param$`, "i");
      for (const { name, value } of Array.from(this.element.attributes)) {
        const match = name.match(pattern);
        const key = match && match[1];
        if (key) {
          params[camelize(key)] = typecast(value);
        }
      }
      return params;
    }
    get eventTargetName() {
      return stringifyEventTarget(this.eventTarget);
    }
    get keyMappings() {
      return this.schema.keyMappings;
    }
    keyFilterDissatisfied(event, filters) {
      const [meta, ctrl, alt, shift] = allModifiers.map((modifier) => filters.includes(modifier));
      return event.metaKey !== meta || event.ctrlKey !== ctrl || event.altKey !== alt || event.shiftKey !== shift;
    }
  };
  var defaultEventNames = {
    a: () => "click",
    button: () => "click",
    form: () => "submit",
    details: () => "toggle",
    input: (e) => e.getAttribute("type") == "submit" ? "click" : "input",
    select: () => "change",
    textarea: () => "input"
  };
  function getDefaultEventNameForElement(element) {
    const tagName = element.tagName.toLowerCase();
    if (tagName in defaultEventNames) {
      return defaultEventNames[tagName](element);
    }
  }
  function error(message) {
    throw new Error(message);
  }
  function typecast(value) {
    try {
      return JSON.parse(value);
    } catch (o_O) {
      return value;
    }
  }
  var Binding = class {
    constructor(context, action) {
      this.context = context;
      this.action = action;
    }
    get index() {
      return this.action.index;
    }
    get eventTarget() {
      return this.action.eventTarget;
    }
    get eventOptions() {
      return this.action.eventOptions;
    }
    get identifier() {
      return this.context.identifier;
    }
    handleEvent(event) {
      const actionEvent = this.prepareActionEvent(event);
      if (this.willBeInvokedByEvent(event) && this.applyEventModifiers(actionEvent)) {
        this.invokeWithEvent(actionEvent);
      }
    }
    get eventName() {
      return this.action.eventName;
    }
    get method() {
      const method = this.controller[this.methodName];
      if (typeof method == "function") {
        return method;
      }
      throw new Error(`Action "${this.action}" references undefined method "${this.methodName}"`);
    }
    applyEventModifiers(event) {
      const { element } = this.action;
      const { actionDescriptorFilters } = this.context.application;
      const { controller } = this.context;
      let passes = true;
      for (const [name, value] of Object.entries(this.eventOptions)) {
        if (name in actionDescriptorFilters) {
          const filter = actionDescriptorFilters[name];
          passes = passes && filter({ name, value, event, element, controller });
        } else {
          continue;
        }
      }
      return passes;
    }
    prepareActionEvent(event) {
      return Object.assign(event, { params: this.action.params });
    }
    invokeWithEvent(event) {
      const { target, currentTarget } = event;
      try {
        this.method.call(this.controller, event);
        this.context.logDebugActivity(this.methodName, { event, target, currentTarget, action: this.methodName });
      } catch (error2) {
        const { identifier, controller, element, index: index2 } = this;
        const detail = { identifier, controller, element, index: index2, event };
        this.context.handleError(error2, `invoking action "${this.action}"`, detail);
      }
    }
    willBeInvokedByEvent(event) {
      const eventTarget = event.target;
      if (event instanceof KeyboardEvent && this.action.shouldIgnoreKeyboardEvent(event)) {
        return false;
      }
      if (event instanceof MouseEvent && this.action.shouldIgnoreMouseEvent(event)) {
        return false;
      }
      if (this.element === eventTarget) {
        return true;
      } else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
        return this.scope.containsElement(eventTarget);
      } else {
        return this.scope.containsElement(this.action.element);
      }
    }
    get controller() {
      return this.context.controller;
    }
    get methodName() {
      return this.action.methodName;
    }
    get element() {
      return this.scope.element;
    }
    get scope() {
      return this.context.scope;
    }
  };
  var ElementObserver = class {
    constructor(element, delegate) {
      this.mutationObserverInit = { attributes: true, childList: true, subtree: true };
      this.element = element;
      this.started = false;
      this.delegate = delegate;
      this.elements = /* @__PURE__ */ new Set();
      this.mutationObserver = new MutationObserver((mutations) => this.processMutations(mutations));
    }
    start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, this.mutationObserverInit);
        this.refresh();
      }
    }
    pause(callback) {
      if (this.started) {
        this.mutationObserver.disconnect();
        this.started = false;
      }
      callback();
      if (!this.started) {
        this.mutationObserver.observe(this.element, this.mutationObserverInit);
        this.started = true;
      }
    }
    stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
    refresh() {
      if (this.started) {
        const matches = new Set(this.matchElementsInTree());
        for (const element of Array.from(this.elements)) {
          if (!matches.has(element)) {
            this.removeElement(element);
          }
        }
        for (const element of Array.from(matches)) {
          this.addElement(element);
        }
      }
    }
    processMutations(mutations) {
      if (this.started) {
        for (const mutation of mutations) {
          this.processMutation(mutation);
        }
      }
    }
    processMutation(mutation) {
      if (mutation.type == "attributes") {
        this.processAttributeChange(mutation.target, mutation.attributeName);
      } else if (mutation.type == "childList") {
        this.processRemovedNodes(mutation.removedNodes);
        this.processAddedNodes(mutation.addedNodes);
      }
    }
    processAttributeChange(element, attributeName) {
      if (this.elements.has(element)) {
        if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
          this.delegate.elementAttributeChanged(element, attributeName);
        } else {
          this.removeElement(element);
        }
      } else if (this.matchElement(element)) {
        this.addElement(element);
      }
    }
    processRemovedNodes(nodes) {
      for (const node of Array.from(nodes)) {
        const element = this.elementFromNode(node);
        if (element) {
          this.processTree(element, this.removeElement);
        }
      }
    }
    processAddedNodes(nodes) {
      for (const node of Array.from(nodes)) {
        const element = this.elementFromNode(node);
        if (element && this.elementIsActive(element)) {
          this.processTree(element, this.addElement);
        }
      }
    }
    matchElement(element) {
      return this.delegate.matchElement(element);
    }
    matchElementsInTree(tree = this.element) {
      return this.delegate.matchElementsInTree(tree);
    }
    processTree(tree, processor) {
      for (const element of this.matchElementsInTree(tree)) {
        processor.call(this, element);
      }
    }
    elementFromNode(node) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        return node;
      }
    }
    elementIsActive(element) {
      if (element.isConnected != this.element.isConnected) {
        return false;
      } else {
        return this.element.contains(element);
      }
    }
    addElement(element) {
      if (!this.elements.has(element)) {
        if (this.elementIsActive(element)) {
          this.elements.add(element);
          if (this.delegate.elementMatched) {
            this.delegate.elementMatched(element);
          }
        }
      }
    }
    removeElement(element) {
      if (this.elements.has(element)) {
        this.elements.delete(element);
        if (this.delegate.elementUnmatched) {
          this.delegate.elementUnmatched(element);
        }
      }
    }
  };
  var AttributeObserver = class {
    constructor(element, attributeName, delegate) {
      this.attributeName = attributeName;
      this.delegate = delegate;
      this.elementObserver = new ElementObserver(element, this);
    }
    get element() {
      return this.elementObserver.element;
    }
    get selector() {
      return `[${this.attributeName}]`;
    }
    start() {
      this.elementObserver.start();
    }
    pause(callback) {
      this.elementObserver.pause(callback);
    }
    stop() {
      this.elementObserver.stop();
    }
    refresh() {
      this.elementObserver.refresh();
    }
    get started() {
      return this.elementObserver.started;
    }
    matchElement(element) {
      return element.hasAttribute(this.attributeName);
    }
    matchElementsInTree(tree) {
      const match = this.matchElement(tree) ? [tree] : [];
      const matches = Array.from(tree.querySelectorAll(this.selector));
      return match.concat(matches);
    }
    elementMatched(element) {
      if (this.delegate.elementMatchedAttribute) {
        this.delegate.elementMatchedAttribute(element, this.attributeName);
      }
    }
    elementUnmatched(element) {
      if (this.delegate.elementUnmatchedAttribute) {
        this.delegate.elementUnmatchedAttribute(element, this.attributeName);
      }
    }
    elementAttributeChanged(element, attributeName) {
      if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
        this.delegate.elementAttributeValueChanged(element, attributeName);
      }
    }
  };
  function add(map, key, value) {
    fetch2(map, key).add(value);
  }
  function del(map, key, value) {
    fetch2(map, key).delete(value);
    prune(map, key);
  }
  function fetch2(map, key) {
    let values = map.get(key);
    if (!values) {
      values = /* @__PURE__ */ new Set();
      map.set(key, values);
    }
    return values;
  }
  function prune(map, key) {
    const values = map.get(key);
    if (values != null && values.size == 0) {
      map.delete(key);
    }
  }
  var Multimap = class {
    constructor() {
      this.valuesByKey = /* @__PURE__ */ new Map();
    }
    get keys() {
      return Array.from(this.valuesByKey.keys());
    }
    get values() {
      const sets = Array.from(this.valuesByKey.values());
      return sets.reduce((values, set) => values.concat(Array.from(set)), []);
    }
    get size() {
      const sets = Array.from(this.valuesByKey.values());
      return sets.reduce((size, set) => size + set.size, 0);
    }
    add(key, value) {
      add(this.valuesByKey, key, value);
    }
    delete(key, value) {
      del(this.valuesByKey, key, value);
    }
    has(key, value) {
      const values = this.valuesByKey.get(key);
      return values != null && values.has(value);
    }
    hasKey(key) {
      return this.valuesByKey.has(key);
    }
    hasValue(value) {
      const sets = Array.from(this.valuesByKey.values());
      return sets.some((set) => set.has(value));
    }
    getValuesForKey(key) {
      const values = this.valuesByKey.get(key);
      return values ? Array.from(values) : [];
    }
    getKeysForValue(value) {
      return Array.from(this.valuesByKey).filter(([_key, values]) => values.has(value)).map(([key, _values]) => key);
    }
  };
  var SelectorObserver = class {
    constructor(element, selector, delegate, details) {
      this._selector = selector;
      this.details = details;
      this.elementObserver = new ElementObserver(element, this);
      this.delegate = delegate;
      this.matchesByElement = new Multimap();
    }
    get started() {
      return this.elementObserver.started;
    }
    get selector() {
      return this._selector;
    }
    set selector(selector) {
      this._selector = selector;
      this.refresh();
    }
    start() {
      this.elementObserver.start();
    }
    pause(callback) {
      this.elementObserver.pause(callback);
    }
    stop() {
      this.elementObserver.stop();
    }
    refresh() {
      this.elementObserver.refresh();
    }
    get element() {
      return this.elementObserver.element;
    }
    matchElement(element) {
      const { selector } = this;
      if (selector) {
        const matches = element.matches(selector);
        if (this.delegate.selectorMatchElement) {
          return matches && this.delegate.selectorMatchElement(element, this.details);
        }
        return matches;
      } else {
        return false;
      }
    }
    matchElementsInTree(tree) {
      const { selector } = this;
      if (selector) {
        const match = this.matchElement(tree) ? [tree] : [];
        const matches = Array.from(tree.querySelectorAll(selector)).filter((match2) => this.matchElement(match2));
        return match.concat(matches);
      } else {
        return [];
      }
    }
    elementMatched(element) {
      const { selector } = this;
      if (selector) {
        this.selectorMatched(element, selector);
      }
    }
    elementUnmatched(element) {
      const selectors = this.matchesByElement.getKeysForValue(element);
      for (const selector of selectors) {
        this.selectorUnmatched(element, selector);
      }
    }
    elementAttributeChanged(element, _attributeName) {
      const { selector } = this;
      if (selector) {
        const matches = this.matchElement(element);
        const matchedBefore = this.matchesByElement.has(selector, element);
        if (matches && !matchedBefore) {
          this.selectorMatched(element, selector);
        } else if (!matches && matchedBefore) {
          this.selectorUnmatched(element, selector);
        }
      }
    }
    selectorMatched(element, selector) {
      this.delegate.selectorMatched(element, selector, this.details);
      this.matchesByElement.add(selector, element);
    }
    selectorUnmatched(element, selector) {
      this.delegate.selectorUnmatched(element, selector, this.details);
      this.matchesByElement.delete(selector, element);
    }
  };
  var StringMapObserver = class {
    constructor(element, delegate) {
      this.element = element;
      this.delegate = delegate;
      this.started = false;
      this.stringMap = /* @__PURE__ */ new Map();
      this.mutationObserver = new MutationObserver((mutations) => this.processMutations(mutations));
    }
    start() {
      if (!this.started) {
        this.started = true;
        this.mutationObserver.observe(this.element, { attributes: true, attributeOldValue: true });
        this.refresh();
      }
    }
    stop() {
      if (this.started) {
        this.mutationObserver.takeRecords();
        this.mutationObserver.disconnect();
        this.started = false;
      }
    }
    refresh() {
      if (this.started) {
        for (const attributeName of this.knownAttributeNames) {
          this.refreshAttribute(attributeName, null);
        }
      }
    }
    processMutations(mutations) {
      if (this.started) {
        for (const mutation of mutations) {
          this.processMutation(mutation);
        }
      }
    }
    processMutation(mutation) {
      const attributeName = mutation.attributeName;
      if (attributeName) {
        this.refreshAttribute(attributeName, mutation.oldValue);
      }
    }
    refreshAttribute(attributeName, oldValue) {
      const key = this.delegate.getStringMapKeyForAttribute(attributeName);
      if (key != null) {
        if (!this.stringMap.has(attributeName)) {
          this.stringMapKeyAdded(key, attributeName);
        }
        const value = this.element.getAttribute(attributeName);
        if (this.stringMap.get(attributeName) != value) {
          this.stringMapValueChanged(value, key, oldValue);
        }
        if (value == null) {
          const oldValue2 = this.stringMap.get(attributeName);
          this.stringMap.delete(attributeName);
          if (oldValue2)
            this.stringMapKeyRemoved(key, attributeName, oldValue2);
        } else {
          this.stringMap.set(attributeName, value);
        }
      }
    }
    stringMapKeyAdded(key, attributeName) {
      if (this.delegate.stringMapKeyAdded) {
        this.delegate.stringMapKeyAdded(key, attributeName);
      }
    }
    stringMapValueChanged(value, key, oldValue) {
      if (this.delegate.stringMapValueChanged) {
        this.delegate.stringMapValueChanged(value, key, oldValue);
      }
    }
    stringMapKeyRemoved(key, attributeName, oldValue) {
      if (this.delegate.stringMapKeyRemoved) {
        this.delegate.stringMapKeyRemoved(key, attributeName, oldValue);
      }
    }
    get knownAttributeNames() {
      return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
    }
    get currentAttributeNames() {
      return Array.from(this.element.attributes).map((attribute) => attribute.name);
    }
    get recordedAttributeNames() {
      return Array.from(this.stringMap.keys());
    }
  };
  var TokenListObserver = class {
    constructor(element, attributeName, delegate) {
      this.attributeObserver = new AttributeObserver(element, attributeName, this);
      this.delegate = delegate;
      this.tokensByElement = new Multimap();
    }
    get started() {
      return this.attributeObserver.started;
    }
    start() {
      this.attributeObserver.start();
    }
    pause(callback) {
      this.attributeObserver.pause(callback);
    }
    stop() {
      this.attributeObserver.stop();
    }
    refresh() {
      this.attributeObserver.refresh();
    }
    get element() {
      return this.attributeObserver.element;
    }
    get attributeName() {
      return this.attributeObserver.attributeName;
    }
    elementMatchedAttribute(element) {
      this.tokensMatched(this.readTokensForElement(element));
    }
    elementAttributeValueChanged(element) {
      const [unmatchedTokens, matchedTokens] = this.refreshTokensForElement(element);
      this.tokensUnmatched(unmatchedTokens);
      this.tokensMatched(matchedTokens);
    }
    elementUnmatchedAttribute(element) {
      this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
    }
    tokensMatched(tokens) {
      tokens.forEach((token) => this.tokenMatched(token));
    }
    tokensUnmatched(tokens) {
      tokens.forEach((token) => this.tokenUnmatched(token));
    }
    tokenMatched(token) {
      this.delegate.tokenMatched(token);
      this.tokensByElement.add(token.element, token);
    }
    tokenUnmatched(token) {
      this.delegate.tokenUnmatched(token);
      this.tokensByElement.delete(token.element, token);
    }
    refreshTokensForElement(element) {
      const previousTokens = this.tokensByElement.getValuesForKey(element);
      const currentTokens = this.readTokensForElement(element);
      const firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(([previousToken, currentToken]) => !tokensAreEqual(previousToken, currentToken));
      if (firstDifferingIndex == -1) {
        return [[], []];
      } else {
        return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
      }
    }
    readTokensForElement(element) {
      const attributeName = this.attributeName;
      const tokenString = element.getAttribute(attributeName) || "";
      return parseTokenString(tokenString, element, attributeName);
    }
  };
  function parseTokenString(tokenString, element, attributeName) {
    return tokenString.trim().split(/\s+/).filter((content) => content.length).map((content, index2) => ({ element, attributeName, content, index: index2 }));
  }
  function zip(left, right) {
    const length = Math.max(left.length, right.length);
    return Array.from({ length }, (_, index2) => [left[index2], right[index2]]);
  }
  function tokensAreEqual(left, right) {
    return left && right && left.index == right.index && left.content == right.content;
  }
  var ValueListObserver = class {
    constructor(element, attributeName, delegate) {
      this.tokenListObserver = new TokenListObserver(element, attributeName, this);
      this.delegate = delegate;
      this.parseResultsByToken = /* @__PURE__ */ new WeakMap();
      this.valuesByTokenByElement = /* @__PURE__ */ new WeakMap();
    }
    get started() {
      return this.tokenListObserver.started;
    }
    start() {
      this.tokenListObserver.start();
    }
    stop() {
      this.tokenListObserver.stop();
    }
    refresh() {
      this.tokenListObserver.refresh();
    }
    get element() {
      return this.tokenListObserver.element;
    }
    get attributeName() {
      return this.tokenListObserver.attributeName;
    }
    tokenMatched(token) {
      const { element } = token;
      const { value } = this.fetchParseResultForToken(token);
      if (value) {
        this.fetchValuesByTokenForElement(element).set(token, value);
        this.delegate.elementMatchedValue(element, value);
      }
    }
    tokenUnmatched(token) {
      const { element } = token;
      const { value } = this.fetchParseResultForToken(token);
      if (value) {
        this.fetchValuesByTokenForElement(element).delete(token);
        this.delegate.elementUnmatchedValue(element, value);
      }
    }
    fetchParseResultForToken(token) {
      let parseResult = this.parseResultsByToken.get(token);
      if (!parseResult) {
        parseResult = this.parseToken(token);
        this.parseResultsByToken.set(token, parseResult);
      }
      return parseResult;
    }
    fetchValuesByTokenForElement(element) {
      let valuesByToken = this.valuesByTokenByElement.get(element);
      if (!valuesByToken) {
        valuesByToken = /* @__PURE__ */ new Map();
        this.valuesByTokenByElement.set(element, valuesByToken);
      }
      return valuesByToken;
    }
    parseToken(token) {
      try {
        const value = this.delegate.parseValueForToken(token);
        return { value };
      } catch (error2) {
        return { error: error2 };
      }
    }
  };
  var BindingObserver = class {
    constructor(context, delegate) {
      this.context = context;
      this.delegate = delegate;
      this.bindingsByAction = /* @__PURE__ */ new Map();
    }
    start() {
      if (!this.valueListObserver) {
        this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
        this.valueListObserver.start();
      }
    }
    stop() {
      if (this.valueListObserver) {
        this.valueListObserver.stop();
        delete this.valueListObserver;
        this.disconnectAllActions();
      }
    }
    get element() {
      return this.context.element;
    }
    get identifier() {
      return this.context.identifier;
    }
    get actionAttribute() {
      return this.schema.actionAttribute;
    }
    get schema() {
      return this.context.schema;
    }
    get bindings() {
      return Array.from(this.bindingsByAction.values());
    }
    connectAction(action) {
      const binding = new Binding(this.context, action);
      this.bindingsByAction.set(action, binding);
      this.delegate.bindingConnected(binding);
    }
    disconnectAction(action) {
      const binding = this.bindingsByAction.get(action);
      if (binding) {
        this.bindingsByAction.delete(action);
        this.delegate.bindingDisconnected(binding);
      }
    }
    disconnectAllActions() {
      this.bindings.forEach((binding) => this.delegate.bindingDisconnected(binding, true));
      this.bindingsByAction.clear();
    }
    parseValueForToken(token) {
      const action = Action.forToken(token, this.schema);
      if (action.identifier == this.identifier) {
        return action;
      }
    }
    elementMatchedValue(element, action) {
      this.connectAction(action);
    }
    elementUnmatchedValue(element, action) {
      this.disconnectAction(action);
    }
  };
  var ValueObserver = class {
    constructor(context, receiver) {
      this.context = context;
      this.receiver = receiver;
      this.stringMapObserver = new StringMapObserver(this.element, this);
      this.valueDescriptorMap = this.controller.valueDescriptorMap;
    }
    start() {
      this.stringMapObserver.start();
      this.invokeChangedCallbacksForDefaultValues();
    }
    stop() {
      this.stringMapObserver.stop();
    }
    get element() {
      return this.context.element;
    }
    get controller() {
      return this.context.controller;
    }
    getStringMapKeyForAttribute(attributeName) {
      if (attributeName in this.valueDescriptorMap) {
        return this.valueDescriptorMap[attributeName].name;
      }
    }
    stringMapKeyAdded(key, attributeName) {
      const descriptor = this.valueDescriptorMap[attributeName];
      if (!this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), descriptor.writer(descriptor.defaultValue));
      }
    }
    stringMapValueChanged(value, name, oldValue) {
      const descriptor = this.valueDescriptorNameMap[name];
      if (value === null)
        return;
      if (oldValue === null) {
        oldValue = descriptor.writer(descriptor.defaultValue);
      }
      this.invokeChangedCallback(name, value, oldValue);
    }
    stringMapKeyRemoved(key, attributeName, oldValue) {
      const descriptor = this.valueDescriptorNameMap[key];
      if (this.hasValue(key)) {
        this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), oldValue);
      } else {
        this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue), oldValue);
      }
    }
    invokeChangedCallbacksForDefaultValues() {
      for (const { key, name, defaultValue, writer } of this.valueDescriptors) {
        if (defaultValue != void 0 && !this.controller.data.has(key)) {
          this.invokeChangedCallback(name, writer(defaultValue), void 0);
        }
      }
    }
    invokeChangedCallback(name, rawValue, rawOldValue) {
      const changedMethodName = `${name}Changed`;
      const changedMethod = this.receiver[changedMethodName];
      if (typeof changedMethod == "function") {
        const descriptor = this.valueDescriptorNameMap[name];
        try {
          const value = descriptor.reader(rawValue);
          let oldValue = rawOldValue;
          if (rawOldValue) {
            oldValue = descriptor.reader(rawOldValue);
          }
          changedMethod.call(this.receiver, value, oldValue);
        } catch (error2) {
          if (error2 instanceof TypeError) {
            error2.message = `Stimulus Value "${this.context.identifier}.${descriptor.name}" - ${error2.message}`;
          }
          throw error2;
        }
      }
    }
    get valueDescriptors() {
      const { valueDescriptorMap } = this;
      return Object.keys(valueDescriptorMap).map((key) => valueDescriptorMap[key]);
    }
    get valueDescriptorNameMap() {
      const descriptors = {};
      Object.keys(this.valueDescriptorMap).forEach((key) => {
        const descriptor = this.valueDescriptorMap[key];
        descriptors[descriptor.name] = descriptor;
      });
      return descriptors;
    }
    hasValue(attributeName) {
      const descriptor = this.valueDescriptorNameMap[attributeName];
      const hasMethodName = `has${capitalize(descriptor.name)}`;
      return this.receiver[hasMethodName];
    }
  };
  var TargetObserver = class {
    constructor(context, delegate) {
      this.context = context;
      this.delegate = delegate;
      this.targetsByName = new Multimap();
    }
    start() {
      if (!this.tokenListObserver) {
        this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this);
        this.tokenListObserver.start();
      }
    }
    stop() {
      if (this.tokenListObserver) {
        this.disconnectAllTargets();
        this.tokenListObserver.stop();
        delete this.tokenListObserver;
      }
    }
    tokenMatched({ element, content: name }) {
      if (this.scope.containsElement(element)) {
        this.connectTarget(element, name);
      }
    }
    tokenUnmatched({ element, content: name }) {
      this.disconnectTarget(element, name);
    }
    connectTarget(element, name) {
      var _a;
      if (!this.targetsByName.has(name, element)) {
        this.targetsByName.add(name, element);
        (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.targetConnected(element, name));
      }
    }
    disconnectTarget(element, name) {
      var _a;
      if (this.targetsByName.has(name, element)) {
        this.targetsByName.delete(name, element);
        (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.targetDisconnected(element, name));
      }
    }
    disconnectAllTargets() {
      for (const name of this.targetsByName.keys) {
        for (const element of this.targetsByName.getValuesForKey(name)) {
          this.disconnectTarget(element, name);
        }
      }
    }
    get attributeName() {
      return `data-${this.context.identifier}-target`;
    }
    get element() {
      return this.context.element;
    }
    get scope() {
      return this.context.scope;
    }
  };
  function readInheritableStaticArrayValues(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor(constructor);
    return Array.from(ancestors.reduce((values, constructor2) => {
      getOwnStaticArrayValues(constructor2, propertyName).forEach((name) => values.add(name));
      return values;
    }, /* @__PURE__ */ new Set()));
  }
  function readInheritableStaticObjectPairs(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor(constructor);
    return ancestors.reduce((pairs, constructor2) => {
      pairs.push(...getOwnStaticObjectPairs(constructor2, propertyName));
      return pairs;
    }, []);
  }
  function getAncestorsForConstructor(constructor) {
    const ancestors = [];
    while (constructor) {
      ancestors.push(constructor);
      constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors.reverse();
  }
  function getOwnStaticArrayValues(constructor, propertyName) {
    const definition = constructor[propertyName];
    return Array.isArray(definition) ? definition : [];
  }
  function getOwnStaticObjectPairs(constructor, propertyName) {
    const definition = constructor[propertyName];
    return definition ? Object.keys(definition).map((key) => [key, definition[key]]) : [];
  }
  var OutletObserver = class {
    constructor(context, delegate) {
      this.started = false;
      this.context = context;
      this.delegate = delegate;
      this.outletsByName = new Multimap();
      this.outletElementsByName = new Multimap();
      this.selectorObserverMap = /* @__PURE__ */ new Map();
      this.attributeObserverMap = /* @__PURE__ */ new Map();
    }
    start() {
      if (!this.started) {
        this.outletDefinitions.forEach((outletName) => {
          this.setupSelectorObserverForOutlet(outletName);
          this.setupAttributeObserverForOutlet(outletName);
        });
        this.started = true;
        this.dependentContexts.forEach((context) => context.refresh());
      }
    }
    refresh() {
      this.selectorObserverMap.forEach((observer) => observer.refresh());
      this.attributeObserverMap.forEach((observer) => observer.refresh());
    }
    stop() {
      if (this.started) {
        this.started = false;
        this.disconnectAllOutlets();
        this.stopSelectorObservers();
        this.stopAttributeObservers();
      }
    }
    stopSelectorObservers() {
      if (this.selectorObserverMap.size > 0) {
        this.selectorObserverMap.forEach((observer) => observer.stop());
        this.selectorObserverMap.clear();
      }
    }
    stopAttributeObservers() {
      if (this.attributeObserverMap.size > 0) {
        this.attributeObserverMap.forEach((observer) => observer.stop());
        this.attributeObserverMap.clear();
      }
    }
    selectorMatched(element, _selector, { outletName }) {
      const outlet = this.getOutlet(element, outletName);
      if (outlet) {
        this.connectOutlet(outlet, element, outletName);
      }
    }
    selectorUnmatched(element, _selector, { outletName }) {
      const outlet = this.getOutletFromMap(element, outletName);
      if (outlet) {
        this.disconnectOutlet(outlet, element, outletName);
      }
    }
    selectorMatchElement(element, { outletName }) {
      const selector = this.selector(outletName);
      const hasOutlet = this.hasOutlet(element, outletName);
      const hasOutletController = element.matches(`[${this.schema.controllerAttribute}~=${outletName}]`);
      if (selector) {
        return hasOutlet && hasOutletController && element.matches(selector);
      } else {
        return false;
      }
    }
    elementMatchedAttribute(_element, attributeName) {
      const outletName = this.getOutletNameFromOutletAttributeName(attributeName);
      if (outletName) {
        this.updateSelectorObserverForOutlet(outletName);
      }
    }
    elementAttributeValueChanged(_element, attributeName) {
      const outletName = this.getOutletNameFromOutletAttributeName(attributeName);
      if (outletName) {
        this.updateSelectorObserverForOutlet(outletName);
      }
    }
    elementUnmatchedAttribute(_element, attributeName) {
      const outletName = this.getOutletNameFromOutletAttributeName(attributeName);
      if (outletName) {
        this.updateSelectorObserverForOutlet(outletName);
      }
    }
    connectOutlet(outlet, element, outletName) {
      var _a;
      if (!this.outletElementsByName.has(outletName, element)) {
        this.outletsByName.add(outletName, outlet);
        this.outletElementsByName.add(outletName, element);
        (_a = this.selectorObserverMap.get(outletName)) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.outletConnected(outlet, element, outletName));
      }
    }
    disconnectOutlet(outlet, element, outletName) {
      var _a;
      if (this.outletElementsByName.has(outletName, element)) {
        this.outletsByName.delete(outletName, outlet);
        this.outletElementsByName.delete(outletName, element);
        (_a = this.selectorObserverMap.get(outletName)) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.outletDisconnected(outlet, element, outletName));
      }
    }
    disconnectAllOutlets() {
      for (const outletName of this.outletElementsByName.keys) {
        for (const element of this.outletElementsByName.getValuesForKey(outletName)) {
          for (const outlet of this.outletsByName.getValuesForKey(outletName)) {
            this.disconnectOutlet(outlet, element, outletName);
          }
        }
      }
    }
    updateSelectorObserverForOutlet(outletName) {
      const observer = this.selectorObserverMap.get(outletName);
      if (observer) {
        observer.selector = this.selector(outletName);
      }
    }
    setupSelectorObserverForOutlet(outletName) {
      const selector = this.selector(outletName);
      const selectorObserver = new SelectorObserver(document.body, selector, this, { outletName });
      this.selectorObserverMap.set(outletName, selectorObserver);
      selectorObserver.start();
    }
    setupAttributeObserverForOutlet(outletName) {
      const attributeName = this.attributeNameForOutletName(outletName);
      const attributeObserver = new AttributeObserver(this.scope.element, attributeName, this);
      this.attributeObserverMap.set(outletName, attributeObserver);
      attributeObserver.start();
    }
    selector(outletName) {
      return this.scope.outlets.getSelectorForOutletName(outletName);
    }
    attributeNameForOutletName(outletName) {
      return this.scope.schema.outletAttributeForScope(this.identifier, outletName);
    }
    getOutletNameFromOutletAttributeName(attributeName) {
      return this.outletDefinitions.find((outletName) => this.attributeNameForOutletName(outletName) === attributeName);
    }
    get outletDependencies() {
      const dependencies = new Multimap();
      this.router.modules.forEach((module) => {
        const constructor = module.definition.controllerConstructor;
        const outlets = readInheritableStaticArrayValues(constructor, "outlets");
        outlets.forEach((outlet) => dependencies.add(outlet, module.identifier));
      });
      return dependencies;
    }
    get outletDefinitions() {
      return this.outletDependencies.getKeysForValue(this.identifier);
    }
    get dependentControllerIdentifiers() {
      return this.outletDependencies.getValuesForKey(this.identifier);
    }
    get dependentContexts() {
      const identifiers = this.dependentControllerIdentifiers;
      return this.router.contexts.filter((context) => identifiers.includes(context.identifier));
    }
    hasOutlet(element, outletName) {
      return !!this.getOutlet(element, outletName) || !!this.getOutletFromMap(element, outletName);
    }
    getOutlet(element, outletName) {
      return this.application.getControllerForElementAndIdentifier(element, outletName);
    }
    getOutletFromMap(element, outletName) {
      return this.outletsByName.getValuesForKey(outletName).find((outlet) => outlet.element === element);
    }
    get scope() {
      return this.context.scope;
    }
    get schema() {
      return this.context.schema;
    }
    get identifier() {
      return this.context.identifier;
    }
    get application() {
      return this.context.application;
    }
    get router() {
      return this.application.router;
    }
  };
  var Context = class {
    constructor(module, scope) {
      this.logDebugActivity = (functionName, detail = {}) => {
        const { identifier, controller, element } = this;
        detail = Object.assign({ identifier, controller, element }, detail);
        this.application.logDebugActivity(this.identifier, functionName, detail);
      };
      this.module = module;
      this.scope = scope;
      this.controller = new module.controllerConstructor(this);
      this.bindingObserver = new BindingObserver(this, this.dispatcher);
      this.valueObserver = new ValueObserver(this, this.controller);
      this.targetObserver = new TargetObserver(this, this);
      this.outletObserver = new OutletObserver(this, this);
      try {
        this.controller.initialize();
        this.logDebugActivity("initialize");
      } catch (error2) {
        this.handleError(error2, "initializing controller");
      }
    }
    connect() {
      this.bindingObserver.start();
      this.valueObserver.start();
      this.targetObserver.start();
      this.outletObserver.start();
      try {
        this.controller.connect();
        this.logDebugActivity("connect");
      } catch (error2) {
        this.handleError(error2, "connecting controller");
      }
    }
    refresh() {
      this.outletObserver.refresh();
    }
    disconnect() {
      try {
        this.controller.disconnect();
        this.logDebugActivity("disconnect");
      } catch (error2) {
        this.handleError(error2, "disconnecting controller");
      }
      this.outletObserver.stop();
      this.targetObserver.stop();
      this.valueObserver.stop();
      this.bindingObserver.stop();
    }
    get application() {
      return this.module.application;
    }
    get identifier() {
      return this.module.identifier;
    }
    get schema() {
      return this.application.schema;
    }
    get dispatcher() {
      return this.application.dispatcher;
    }
    get element() {
      return this.scope.element;
    }
    get parentElement() {
      return this.element.parentElement;
    }
    handleError(error2, message, detail = {}) {
      const { identifier, controller, element } = this;
      detail = Object.assign({ identifier, controller, element }, detail);
      this.application.handleError(error2, `Error ${message}`, detail);
    }
    targetConnected(element, name) {
      this.invokeControllerMethod(`${name}TargetConnected`, element);
    }
    targetDisconnected(element, name) {
      this.invokeControllerMethod(`${name}TargetDisconnected`, element);
    }
    outletConnected(outlet, element, name) {
      this.invokeControllerMethod(`${namespaceCamelize(name)}OutletConnected`, outlet, element);
    }
    outletDisconnected(outlet, element, name) {
      this.invokeControllerMethod(`${namespaceCamelize(name)}OutletDisconnected`, outlet, element);
    }
    invokeControllerMethod(methodName, ...args) {
      const controller = this.controller;
      if (typeof controller[methodName] == "function") {
        controller[methodName](...args);
      }
    }
  };
  function bless(constructor) {
    return shadow(constructor, getBlessedProperties(constructor));
  }
  function shadow(constructor, properties) {
    const shadowConstructor = extend(constructor);
    const shadowProperties = getShadowProperties(constructor.prototype, properties);
    Object.defineProperties(shadowConstructor.prototype, shadowProperties);
    return shadowConstructor;
  }
  function getBlessedProperties(constructor) {
    const blessings = readInheritableStaticArrayValues(constructor, "blessings");
    return blessings.reduce((blessedProperties, blessing) => {
      const properties = blessing(constructor);
      for (const key in properties) {
        const descriptor = blessedProperties[key] || {};
        blessedProperties[key] = Object.assign(descriptor, properties[key]);
      }
      return blessedProperties;
    }, {});
  }
  function getShadowProperties(prototype, properties) {
    return getOwnKeys(properties).reduce((shadowProperties, key) => {
      const descriptor = getShadowedDescriptor(prototype, properties, key);
      if (descriptor) {
        Object.assign(shadowProperties, { [key]: descriptor });
      }
      return shadowProperties;
    }, {});
  }
  function getShadowedDescriptor(prototype, properties, key) {
    const shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
    const shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;
    if (!shadowedByValue) {
      const descriptor = Object.getOwnPropertyDescriptor(properties, key).value;
      if (shadowingDescriptor) {
        descriptor.get = shadowingDescriptor.get || descriptor.get;
        descriptor.set = shadowingDescriptor.set || descriptor.set;
      }
      return descriptor;
    }
  }
  var getOwnKeys = (() => {
    if (typeof Object.getOwnPropertySymbols == "function") {
      return (object) => [...Object.getOwnPropertyNames(object), ...Object.getOwnPropertySymbols(object)];
    } else {
      return Object.getOwnPropertyNames;
    }
  })();
  var extend = (() => {
    function extendWithReflect(constructor) {
      function extended() {
        return Reflect.construct(constructor, arguments, new.target);
      }
      extended.prototype = Object.create(constructor.prototype, {
        constructor: { value: extended }
      });
      Reflect.setPrototypeOf(extended, constructor);
      return extended;
    }
    function testReflectExtension() {
      const a = function() {
        this.a.call(this);
      };
      const b = extendWithReflect(a);
      b.prototype.a = function() {
      };
      return new b();
    }
    try {
      testReflectExtension();
      return extendWithReflect;
    } catch (error2) {
      return (constructor) => class extended extends constructor {
      };
    }
  })();
  function blessDefinition(definition) {
    return {
      identifier: definition.identifier,
      controllerConstructor: bless(definition.controllerConstructor)
    };
  }
  var Module = class {
    constructor(application2, definition) {
      this.application = application2;
      this.definition = blessDefinition(definition);
      this.contextsByScope = /* @__PURE__ */ new WeakMap();
      this.connectedContexts = /* @__PURE__ */ new Set();
    }
    get identifier() {
      return this.definition.identifier;
    }
    get controllerConstructor() {
      return this.definition.controllerConstructor;
    }
    get contexts() {
      return Array.from(this.connectedContexts);
    }
    connectContextForScope(scope) {
      const context = this.fetchContextForScope(scope);
      this.connectedContexts.add(context);
      context.connect();
    }
    disconnectContextForScope(scope) {
      const context = this.contextsByScope.get(scope);
      if (context) {
        this.connectedContexts.delete(context);
        context.disconnect();
      }
    }
    fetchContextForScope(scope) {
      let context = this.contextsByScope.get(scope);
      if (!context) {
        context = new Context(this, scope);
        this.contextsByScope.set(scope, context);
      }
      return context;
    }
  };
  var ClassMap = class {
    constructor(scope) {
      this.scope = scope;
    }
    has(name) {
      return this.data.has(this.getDataKey(name));
    }
    get(name) {
      return this.getAll(name)[0];
    }
    getAll(name) {
      const tokenString = this.data.get(this.getDataKey(name)) || "";
      return tokenize(tokenString);
    }
    getAttributeName(name) {
      return this.data.getAttributeNameForKey(this.getDataKey(name));
    }
    getDataKey(name) {
      return `${name}-class`;
    }
    get data() {
      return this.scope.data;
    }
  };
  var DataMap = class {
    constructor(scope) {
      this.scope = scope;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get(key) {
      const name = this.getAttributeNameForKey(key);
      return this.element.getAttribute(name);
    }
    set(key, value) {
      const name = this.getAttributeNameForKey(key);
      this.element.setAttribute(name, value);
      return this.get(key);
    }
    has(key) {
      const name = this.getAttributeNameForKey(key);
      return this.element.hasAttribute(name);
    }
    delete(key) {
      if (this.has(key)) {
        const name = this.getAttributeNameForKey(key);
        this.element.removeAttribute(name);
        return true;
      } else {
        return false;
      }
    }
    getAttributeNameForKey(key) {
      return `data-${this.identifier}-${dasherize(key)}`;
    }
  };
  var Guide = class {
    constructor(logger) {
      this.warnedKeysByObject = /* @__PURE__ */ new WeakMap();
      this.logger = logger;
    }
    warn(object, key, message) {
      let warnedKeys = this.warnedKeysByObject.get(object);
      if (!warnedKeys) {
        warnedKeys = /* @__PURE__ */ new Set();
        this.warnedKeysByObject.set(object, warnedKeys);
      }
      if (!warnedKeys.has(key)) {
        warnedKeys.add(key);
        this.logger.warn(message, object);
      }
    }
  };
  function attributeValueContainsToken(attributeName, token) {
    return `[${attributeName}~="${token}"]`;
  }
  var TargetSet = class {
    constructor(scope) {
      this.scope = scope;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get schema() {
      return this.scope.schema;
    }
    has(targetName) {
      return this.find(targetName) != null;
    }
    find(...targetNames) {
      return targetNames.reduce((target, targetName) => target || this.findTarget(targetName) || this.findLegacyTarget(targetName), void 0);
    }
    findAll(...targetNames) {
      return targetNames.reduce((targets, targetName) => [
        ...targets,
        ...this.findAllTargets(targetName),
        ...this.findAllLegacyTargets(targetName)
      ], []);
    }
    findTarget(targetName) {
      const selector = this.getSelectorForTargetName(targetName);
      return this.scope.findElement(selector);
    }
    findAllTargets(targetName) {
      const selector = this.getSelectorForTargetName(targetName);
      return this.scope.findAllElements(selector);
    }
    getSelectorForTargetName(targetName) {
      const attributeName = this.schema.targetAttributeForScope(this.identifier);
      return attributeValueContainsToken(attributeName, targetName);
    }
    findLegacyTarget(targetName) {
      const selector = this.getLegacySelectorForTargetName(targetName);
      return this.deprecate(this.scope.findElement(selector), targetName);
    }
    findAllLegacyTargets(targetName) {
      const selector = this.getLegacySelectorForTargetName(targetName);
      return this.scope.findAllElements(selector).map((element) => this.deprecate(element, targetName));
    }
    getLegacySelectorForTargetName(targetName) {
      const targetDescriptor = `${this.identifier}.${targetName}`;
      return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
    }
    deprecate(element, targetName) {
      if (element) {
        const { identifier } = this;
        const attributeName = this.schema.targetAttribute;
        const revisedAttributeName = this.schema.targetAttributeForScope(identifier);
        this.guide.warn(element, `target:${targetName}`, `Please replace ${attributeName}="${identifier}.${targetName}" with ${revisedAttributeName}="${targetName}". The ${attributeName} attribute is deprecated and will be removed in a future version of Stimulus.`);
      }
      return element;
    }
    get guide() {
      return this.scope.guide;
    }
  };
  var OutletSet = class {
    constructor(scope, controllerElement) {
      this.scope = scope;
      this.controllerElement = controllerElement;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get schema() {
      return this.scope.schema;
    }
    has(outletName) {
      return this.find(outletName) != null;
    }
    find(...outletNames) {
      return outletNames.reduce((outlet, outletName) => outlet || this.findOutlet(outletName), void 0);
    }
    findAll(...outletNames) {
      return outletNames.reduce((outlets, outletName) => [...outlets, ...this.findAllOutlets(outletName)], []);
    }
    getSelectorForOutletName(outletName) {
      const attributeName = this.schema.outletAttributeForScope(this.identifier, outletName);
      return this.controllerElement.getAttribute(attributeName);
    }
    findOutlet(outletName) {
      const selector = this.getSelectorForOutletName(outletName);
      if (selector)
        return this.findElement(selector, outletName);
    }
    findAllOutlets(outletName) {
      const selector = this.getSelectorForOutletName(outletName);
      return selector ? this.findAllElements(selector, outletName) : [];
    }
    findElement(selector, outletName) {
      const elements = this.scope.queryElements(selector);
      return elements.filter((element) => this.matchesElement(element, selector, outletName))[0];
    }
    findAllElements(selector, outletName) {
      const elements = this.scope.queryElements(selector);
      return elements.filter((element) => this.matchesElement(element, selector, outletName));
    }
    matchesElement(element, selector, outletName) {
      const controllerAttribute = element.getAttribute(this.scope.schema.controllerAttribute) || "";
      return element.matches(selector) && controllerAttribute.split(" ").includes(outletName);
    }
  };
  var Scope = class _Scope {
    constructor(schema, element, identifier, logger) {
      this.targets = new TargetSet(this);
      this.classes = new ClassMap(this);
      this.data = new DataMap(this);
      this.containsElement = (element2) => {
        return element2.closest(this.controllerSelector) === this.element;
      };
      this.schema = schema;
      this.element = element;
      this.identifier = identifier;
      this.guide = new Guide(logger);
      this.outlets = new OutletSet(this.documentScope, element);
    }
    findElement(selector) {
      return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
    }
    findAllElements(selector) {
      return [
        ...this.element.matches(selector) ? [this.element] : [],
        ...this.queryElements(selector).filter(this.containsElement)
      ];
    }
    queryElements(selector) {
      return Array.from(this.element.querySelectorAll(selector));
    }
    get controllerSelector() {
      return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
    }
    get isDocumentScope() {
      return this.element === document.documentElement;
    }
    get documentScope() {
      return this.isDocumentScope ? this : new _Scope(this.schema, document.documentElement, this.identifier, this.guide.logger);
    }
  };
  var ScopeObserver = class {
    constructor(element, schema, delegate) {
      this.element = element;
      this.schema = schema;
      this.delegate = delegate;
      this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
      this.scopesByIdentifierByElement = /* @__PURE__ */ new WeakMap();
      this.scopeReferenceCounts = /* @__PURE__ */ new WeakMap();
    }
    start() {
      this.valueListObserver.start();
    }
    stop() {
      this.valueListObserver.stop();
    }
    get controllerAttribute() {
      return this.schema.controllerAttribute;
    }
    parseValueForToken(token) {
      const { element, content: identifier } = token;
      return this.parseValueForElementAndIdentifier(element, identifier);
    }
    parseValueForElementAndIdentifier(element, identifier) {
      const scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
      let scope = scopesByIdentifier.get(identifier);
      if (!scope) {
        scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
        scopesByIdentifier.set(identifier, scope);
      }
      return scope;
    }
    elementMatchedValue(element, value) {
      const referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
      this.scopeReferenceCounts.set(value, referenceCount);
      if (referenceCount == 1) {
        this.delegate.scopeConnected(value);
      }
    }
    elementUnmatchedValue(element, value) {
      const referenceCount = this.scopeReferenceCounts.get(value);
      if (referenceCount) {
        this.scopeReferenceCounts.set(value, referenceCount - 1);
        if (referenceCount == 1) {
          this.delegate.scopeDisconnected(value);
        }
      }
    }
    fetchScopesByIdentifierForElement(element) {
      let scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
      if (!scopesByIdentifier) {
        scopesByIdentifier = /* @__PURE__ */ new Map();
        this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
      }
      return scopesByIdentifier;
    }
  };
  var Router = class {
    constructor(application2) {
      this.application = application2;
      this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
      this.scopesByIdentifier = new Multimap();
      this.modulesByIdentifier = /* @__PURE__ */ new Map();
    }
    get element() {
      return this.application.element;
    }
    get schema() {
      return this.application.schema;
    }
    get logger() {
      return this.application.logger;
    }
    get controllerAttribute() {
      return this.schema.controllerAttribute;
    }
    get modules() {
      return Array.from(this.modulesByIdentifier.values());
    }
    get contexts() {
      return this.modules.reduce((contexts, module) => contexts.concat(module.contexts), []);
    }
    start() {
      this.scopeObserver.start();
    }
    stop() {
      this.scopeObserver.stop();
    }
    loadDefinition(definition) {
      this.unloadIdentifier(definition.identifier);
      const module = new Module(this.application, definition);
      this.connectModule(module);
      const afterLoad = definition.controllerConstructor.afterLoad;
      if (afterLoad) {
        afterLoad.call(definition.controllerConstructor, definition.identifier, this.application);
      }
    }
    unloadIdentifier(identifier) {
      const module = this.modulesByIdentifier.get(identifier);
      if (module) {
        this.disconnectModule(module);
      }
    }
    getContextForElementAndIdentifier(element, identifier) {
      const module = this.modulesByIdentifier.get(identifier);
      if (module) {
        return module.contexts.find((context) => context.element == element);
      }
    }
    proposeToConnectScopeForElementAndIdentifier(element, identifier) {
      const scope = this.scopeObserver.parseValueForElementAndIdentifier(element, identifier);
      if (scope) {
        this.scopeObserver.elementMatchedValue(scope.element, scope);
      } else {
        console.error(`Couldn't find or create scope for identifier: "${identifier}" and element:`, element);
      }
    }
    handleError(error2, message, detail) {
      this.application.handleError(error2, message, detail);
    }
    createScopeForElementAndIdentifier(element, identifier) {
      return new Scope(this.schema, element, identifier, this.logger);
    }
    scopeConnected(scope) {
      this.scopesByIdentifier.add(scope.identifier, scope);
      const module = this.modulesByIdentifier.get(scope.identifier);
      if (module) {
        module.connectContextForScope(scope);
      }
    }
    scopeDisconnected(scope) {
      this.scopesByIdentifier.delete(scope.identifier, scope);
      const module = this.modulesByIdentifier.get(scope.identifier);
      if (module) {
        module.disconnectContextForScope(scope);
      }
    }
    connectModule(module) {
      this.modulesByIdentifier.set(module.identifier, module);
      const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach((scope) => module.connectContextForScope(scope));
    }
    disconnectModule(module) {
      this.modulesByIdentifier.delete(module.identifier);
      const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
      scopes.forEach((scope) => module.disconnectContextForScope(scope));
    }
  };
  var defaultSchema = {
    controllerAttribute: "data-controller",
    actionAttribute: "data-action",
    targetAttribute: "data-target",
    targetAttributeForScope: (identifier) => `data-${identifier}-target`,
    outletAttributeForScope: (identifier, outlet) => `data-${identifier}-${outlet}-outlet`,
    keyMappings: Object.assign(Object.assign({ enter: "Enter", tab: "Tab", esc: "Escape", space: " ", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", home: "Home", end: "End", page_up: "PageUp", page_down: "PageDown" }, objectFromEntries("abcdefghijklmnopqrstuvwxyz".split("").map((c) => [c, c]))), objectFromEntries("0123456789".split("").map((n) => [n, n])))
  };
  function objectFromEntries(array) {
    return array.reduce((memo, [k, v]) => Object.assign(Object.assign({}, memo), { [k]: v }), {});
  }
  var Application = class {
    constructor(element = document.documentElement, schema = defaultSchema) {
      this.logger = console;
      this.debug = false;
      this.logDebugActivity = (identifier, functionName, detail = {}) => {
        if (this.debug) {
          this.logFormattedMessage(identifier, functionName, detail);
        }
      };
      this.element = element;
      this.schema = schema;
      this.dispatcher = new Dispatcher(this);
      this.router = new Router(this);
      this.actionDescriptorFilters = Object.assign({}, defaultActionDescriptorFilters);
    }
    static start(element, schema) {
      const application2 = new this(element, schema);
      application2.start();
      return application2;
    }
    async start() {
      await domReady();
      this.logDebugActivity("application", "starting");
      this.dispatcher.start();
      this.router.start();
      this.logDebugActivity("application", "start");
    }
    stop() {
      this.logDebugActivity("application", "stopping");
      this.dispatcher.stop();
      this.router.stop();
      this.logDebugActivity("application", "stop");
    }
    register(identifier, controllerConstructor) {
      this.load({ identifier, controllerConstructor });
    }
    registerActionOption(name, filter) {
      this.actionDescriptorFilters[name] = filter;
    }
    load(head, ...rest) {
      const definitions = Array.isArray(head) ? head : [head, ...rest];
      definitions.forEach((definition) => {
        if (definition.controllerConstructor.shouldLoad) {
          this.router.loadDefinition(definition);
        }
      });
    }
    unload(head, ...rest) {
      const identifiers = Array.isArray(head) ? head : [head, ...rest];
      identifiers.forEach((identifier) => this.router.unloadIdentifier(identifier));
    }
    get controllers() {
      return this.router.contexts.map((context) => context.controller);
    }
    getControllerForElementAndIdentifier(element, identifier) {
      const context = this.router.getContextForElementAndIdentifier(element, identifier);
      return context ? context.controller : null;
    }
    handleError(error2, message, detail) {
      var _a;
      this.logger.error(`%s

%o

%o`, message, error2, detail);
      (_a = window.onerror) === null || _a === void 0 ? void 0 : _a.call(window, message, "", 0, 0, error2);
    }
    logFormattedMessage(identifier, functionName, detail = {}) {
      detail = Object.assign({ application: this }, detail);
      this.logger.groupCollapsed(`${identifier} #${functionName}`);
      this.logger.log("details:", Object.assign({}, detail));
      this.logger.groupEnd();
    }
  };
  function domReady() {
    return new Promise((resolve) => {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", () => resolve());
      } else {
        resolve();
      }
    });
  }
  function ClassPropertiesBlessing(constructor) {
    const classes = readInheritableStaticArrayValues(constructor, "classes");
    return classes.reduce((properties, classDefinition) => {
      return Object.assign(properties, propertiesForClassDefinition(classDefinition));
    }, {});
  }
  function propertiesForClassDefinition(key) {
    return {
      [`${key}Class`]: {
        get() {
          const { classes } = this;
          if (classes.has(key)) {
            return classes.get(key);
          } else {
            const attribute = classes.getAttributeName(key);
            throw new Error(`Missing attribute "${attribute}"`);
          }
        }
      },
      [`${key}Classes`]: {
        get() {
          return this.classes.getAll(key);
        }
      },
      [`has${capitalize(key)}Class`]: {
        get() {
          return this.classes.has(key);
        }
      }
    };
  }
  function OutletPropertiesBlessing(constructor) {
    const outlets = readInheritableStaticArrayValues(constructor, "outlets");
    return outlets.reduce((properties, outletDefinition) => {
      return Object.assign(properties, propertiesForOutletDefinition(outletDefinition));
    }, {});
  }
  function getOutletController(controller, element, identifier) {
    return controller.application.getControllerForElementAndIdentifier(element, identifier);
  }
  function getControllerAndEnsureConnectedScope(controller, element, outletName) {
    let outletController = getOutletController(controller, element, outletName);
    if (outletController)
      return outletController;
    controller.application.router.proposeToConnectScopeForElementAndIdentifier(element, outletName);
    outletController = getOutletController(controller, element, outletName);
    if (outletController)
      return outletController;
  }
  function propertiesForOutletDefinition(name) {
    const camelizedName = namespaceCamelize(name);
    return {
      [`${camelizedName}Outlet`]: {
        get() {
          const outletElement = this.outlets.find(name);
          const selector = this.outlets.getSelectorForOutletName(name);
          if (outletElement) {
            const outletController = getControllerAndEnsureConnectedScope(this, outletElement, name);
            if (outletController)
              return outletController;
            throw new Error(`The provided outlet element is missing an outlet controller "${name}" instance for host controller "${this.identifier}"`);
          }
          throw new Error(`Missing outlet element "${name}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${selector}".`);
        }
      },
      [`${camelizedName}Outlets`]: {
        get() {
          const outlets = this.outlets.findAll(name);
          if (outlets.length > 0) {
            return outlets.map((outletElement) => {
              const outletController = getControllerAndEnsureConnectedScope(this, outletElement, name);
              if (outletController)
                return outletController;
              console.warn(`The provided outlet element is missing an outlet controller "${name}" instance for host controller "${this.identifier}"`, outletElement);
            }).filter((controller) => controller);
          }
          return [];
        }
      },
      [`${camelizedName}OutletElement`]: {
        get() {
          const outletElement = this.outlets.find(name);
          const selector = this.outlets.getSelectorForOutletName(name);
          if (outletElement) {
            return outletElement;
          } else {
            throw new Error(`Missing outlet element "${name}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${selector}".`);
          }
        }
      },
      [`${camelizedName}OutletElements`]: {
        get() {
          return this.outlets.findAll(name);
        }
      },
      [`has${capitalize(camelizedName)}Outlet`]: {
        get() {
          return this.outlets.has(name);
        }
      }
    };
  }
  function TargetPropertiesBlessing(constructor) {
    const targets = readInheritableStaticArrayValues(constructor, "targets");
    return targets.reduce((properties, targetDefinition) => {
      return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
    }, {});
  }
  function propertiesForTargetDefinition(name) {
    return {
      [`${name}Target`]: {
        get() {
          const target = this.targets.find(name);
          if (target) {
            return target;
          } else {
            throw new Error(`Missing target element "${name}" for "${this.identifier}" controller`);
          }
        }
      },
      [`${name}Targets`]: {
        get() {
          return this.targets.findAll(name);
        }
      },
      [`has${capitalize(name)}Target`]: {
        get() {
          return this.targets.has(name);
        }
      }
    };
  }
  function ValuePropertiesBlessing(constructor) {
    const valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
    const propertyDescriptorMap = {
      valueDescriptorMap: {
        get() {
          return valueDefinitionPairs.reduce((result, valueDefinitionPair) => {
            const valueDescriptor = parseValueDefinitionPair(valueDefinitionPair, this.identifier);
            const attributeName = this.data.getAttributeNameForKey(valueDescriptor.key);
            return Object.assign(result, { [attributeName]: valueDescriptor });
          }, {});
        }
      }
    };
    return valueDefinitionPairs.reduce((properties, valueDefinitionPair) => {
      return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
    }, propertyDescriptorMap);
  }
  function propertiesForValueDefinitionPair(valueDefinitionPair, controller) {
    const definition = parseValueDefinitionPair(valueDefinitionPair, controller);
    const { key, name, reader: read, writer: write } = definition;
    return {
      [name]: {
        get() {
          const value = this.data.get(key);
          if (value !== null) {
            return read(value);
          } else {
            return definition.defaultValue;
          }
        },
        set(value) {
          if (value === void 0) {
            this.data.delete(key);
          } else {
            this.data.set(key, write(value));
          }
        }
      },
      [`has${capitalize(name)}`]: {
        get() {
          return this.data.has(key) || definition.hasCustomDefaultValue;
        }
      }
    };
  }
  function parseValueDefinitionPair([token, typeDefinition], controller) {
    return valueDescriptorForTokenAndTypeDefinition({
      controller,
      token,
      typeDefinition
    });
  }
  function parseValueTypeConstant(constant) {
    switch (constant) {
      case Array:
        return "array";
      case Boolean:
        return "boolean";
      case Number:
        return "number";
      case Object:
        return "object";
      case String:
        return "string";
    }
  }
  function parseValueTypeDefault(defaultValue) {
    switch (typeof defaultValue) {
      case "boolean":
        return "boolean";
      case "number":
        return "number";
      case "string":
        return "string";
    }
    if (Array.isArray(defaultValue))
      return "array";
    if (Object.prototype.toString.call(defaultValue) === "[object Object]")
      return "object";
  }
  function parseValueTypeObject(payload) {
    const { controller, token, typeObject } = payload;
    const hasType = isSomething(typeObject.type);
    const hasDefault = isSomething(typeObject.default);
    const fullObject = hasType && hasDefault;
    const onlyType = hasType && !hasDefault;
    const onlyDefault = !hasType && hasDefault;
    const typeFromObject = parseValueTypeConstant(typeObject.type);
    const typeFromDefaultValue = parseValueTypeDefault(payload.typeObject.default);
    if (onlyType)
      return typeFromObject;
    if (onlyDefault)
      return typeFromDefaultValue;
    if (typeFromObject !== typeFromDefaultValue) {
      const propertyPath = controller ? `${controller}.${token}` : token;
      throw new Error(`The specified default value for the Stimulus Value "${propertyPath}" must match the defined type "${typeFromObject}". The provided default value of "${typeObject.default}" is of type "${typeFromDefaultValue}".`);
    }
    if (fullObject)
      return typeFromObject;
  }
  function parseValueTypeDefinition(payload) {
    const { controller, token, typeDefinition } = payload;
    const typeObject = { controller, token, typeObject: typeDefinition };
    const typeFromObject = parseValueTypeObject(typeObject);
    const typeFromDefaultValue = parseValueTypeDefault(typeDefinition);
    const typeFromConstant = parseValueTypeConstant(typeDefinition);
    const type = typeFromObject || typeFromDefaultValue || typeFromConstant;
    if (type)
      return type;
    const propertyPath = controller ? `${controller}.${typeDefinition}` : token;
    throw new Error(`Unknown value type "${propertyPath}" for "${token}" value`);
  }
  function defaultValueForDefinition(typeDefinition) {
    const constant = parseValueTypeConstant(typeDefinition);
    if (constant)
      return defaultValuesByType[constant];
    const hasDefault = hasProperty(typeDefinition, "default");
    const hasType = hasProperty(typeDefinition, "type");
    const typeObject = typeDefinition;
    if (hasDefault)
      return typeObject.default;
    if (hasType) {
      const { type } = typeObject;
      const constantFromType = parseValueTypeConstant(type);
      if (constantFromType)
        return defaultValuesByType[constantFromType];
    }
    return typeDefinition;
  }
  function valueDescriptorForTokenAndTypeDefinition(payload) {
    const { token, typeDefinition } = payload;
    const key = `${dasherize(token)}-value`;
    const type = parseValueTypeDefinition(payload);
    return {
      type,
      key,
      name: camelize(key),
      get defaultValue() {
        return defaultValueForDefinition(typeDefinition);
      },
      get hasCustomDefaultValue() {
        return parseValueTypeDefault(typeDefinition) !== void 0;
      },
      reader: readers[type],
      writer: writers[type] || writers.default
    };
  }
  var defaultValuesByType = {
    get array() {
      return [];
    },
    boolean: false,
    number: 0,
    get object() {
      return {};
    },
    string: ""
  };
  var readers = {
    array(value) {
      const array = JSON.parse(value);
      if (!Array.isArray(array)) {
        throw new TypeError(`expected value of type "array" but instead got value "${value}" of type "${parseValueTypeDefault(array)}"`);
      }
      return array;
    },
    boolean(value) {
      return !(value == "0" || String(value).toLowerCase() == "false");
    },
    number(value) {
      return Number(value.replace(/_/g, ""));
    },
    object(value) {
      const object = JSON.parse(value);
      if (object === null || typeof object != "object" || Array.isArray(object)) {
        throw new TypeError(`expected value of type "object" but instead got value "${value}" of type "${parseValueTypeDefault(object)}"`);
      }
      return object;
    },
    string(value) {
      return value;
    }
  };
  var writers = {
    default: writeString,
    array: writeJSON,
    object: writeJSON
  };
  function writeJSON(value) {
    return JSON.stringify(value);
  }
  function writeString(value) {
    return `${value}`;
  }
  var Controller = class {
    constructor(context) {
      this.context = context;
    }
    static get shouldLoad() {
      return true;
    }
    static afterLoad(_identifier, _application) {
      return;
    }
    get application() {
      return this.context.application;
    }
    get scope() {
      return this.context.scope;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get targets() {
      return this.scope.targets;
    }
    get outlets() {
      return this.scope.outlets;
    }
    get classes() {
      return this.scope.classes;
    }
    get data() {
      return this.scope.data;
    }
    initialize() {
    }
    connect() {
    }
    disconnect() {
    }
    dispatch(eventName, { target = this.element, detail = {}, prefix = this.identifier, bubbles = true, cancelable = true } = {}) {
      const type = prefix ? `${prefix}:${eventName}` : eventName;
      const event = new CustomEvent(type, { detail, bubbles, cancelable });
      target.dispatchEvent(event);
      return event;
    }
  };
  Controller.blessings = [
    ClassPropertiesBlessing,
    TargetPropertiesBlessing,
    ValuePropertiesBlessing,
    OutletPropertiesBlessing
  ];
  Controller.targets = [];
  Controller.outlets = [];
  Controller.values = {};

  // app/javascript/controllers/application.js
  var application = Application.start();
  application.debug = false;
  window.Stimulus = application;

  // node_modules/stimulus/dist/stimulus.js
  function camelize2(value) {
    return value.replace(/(?:[_-])([a-z0-9])/g, (_, char) => char.toUpperCase());
  }
  function namespaceCamelize2(value) {
    return camelize2(value.replace(/--/g, "-").replace(/__/g, "_"));
  }
  function capitalize2(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  function dasherize2(value) {
    return value.replace(/([A-Z])/g, (_, char) => `-${char.toLowerCase()}`);
  }
  function isSomething2(object) {
    return object !== null && object !== void 0;
  }
  function hasProperty2(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }
  function readInheritableStaticArrayValues2(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor2(constructor);
    return Array.from(ancestors.reduce((values, constructor2) => {
      getOwnStaticArrayValues2(constructor2, propertyName).forEach((name) => values.add(name));
      return values;
    }, /* @__PURE__ */ new Set()));
  }
  function readInheritableStaticObjectPairs2(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor2(constructor);
    return ancestors.reduce((pairs, constructor2) => {
      pairs.push(...getOwnStaticObjectPairs2(constructor2, propertyName));
      return pairs;
    }, []);
  }
  function getAncestorsForConstructor2(constructor) {
    const ancestors = [];
    while (constructor) {
      ancestors.push(constructor);
      constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors.reverse();
  }
  function getOwnStaticArrayValues2(constructor, propertyName) {
    const definition = constructor[propertyName];
    return Array.isArray(definition) ? definition : [];
  }
  function getOwnStaticObjectPairs2(constructor, propertyName) {
    const definition = constructor[propertyName];
    return definition ? Object.keys(definition).map((key) => [key, definition[key]]) : [];
  }
  var getOwnKeys2 = (() => {
    if (typeof Object.getOwnPropertySymbols == "function") {
      return (object) => [...Object.getOwnPropertyNames(object), ...Object.getOwnPropertySymbols(object)];
    } else {
      return Object.getOwnPropertyNames;
    }
  })();
  var extend2 = (() => {
    function extendWithReflect(constructor) {
      function extended() {
        return Reflect.construct(constructor, arguments, new.target);
      }
      extended.prototype = Object.create(constructor.prototype, {
        constructor: { value: extended }
      });
      Reflect.setPrototypeOf(extended, constructor);
      return extended;
    }
    function testReflectExtension() {
      const a = function() {
        this.a.call(this);
      };
      const b = extendWithReflect(a);
      b.prototype.a = function() {
      };
      return new b();
    }
    try {
      testReflectExtension();
      return extendWithReflect;
    } catch (error2) {
      return (constructor) => class extended extends constructor {
      };
    }
  })();
  var defaultSchema2 = {
    controllerAttribute: "data-controller",
    actionAttribute: "data-action",
    targetAttribute: "data-target",
    targetAttributeForScope: (identifier) => `data-${identifier}-target`,
    outletAttributeForScope: (identifier, outlet) => `data-${identifier}-${outlet}-outlet`,
    keyMappings: Object.assign(Object.assign({ enter: "Enter", tab: "Tab", esc: "Escape", space: " ", up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", home: "Home", end: "End", page_up: "PageUp", page_down: "PageDown" }, objectFromEntries2("abcdefghijklmnopqrstuvwxyz".split("").map((c) => [c, c]))), objectFromEntries2("0123456789".split("").map((n) => [n, n])))
  };
  function objectFromEntries2(array) {
    return array.reduce((memo, [k, v]) => Object.assign(Object.assign({}, memo), { [k]: v }), {});
  }
  function ClassPropertiesBlessing2(constructor) {
    const classes = readInheritableStaticArrayValues2(constructor, "classes");
    return classes.reduce((properties, classDefinition) => {
      return Object.assign(properties, propertiesForClassDefinition2(classDefinition));
    }, {});
  }
  function propertiesForClassDefinition2(key) {
    return {
      [`${key}Class`]: {
        get() {
          const { classes } = this;
          if (classes.has(key)) {
            return classes.get(key);
          } else {
            const attribute = classes.getAttributeName(key);
            throw new Error(`Missing attribute "${attribute}"`);
          }
        }
      },
      [`${key}Classes`]: {
        get() {
          return this.classes.getAll(key);
        }
      },
      [`has${capitalize2(key)}Class`]: {
        get() {
          return this.classes.has(key);
        }
      }
    };
  }
  function OutletPropertiesBlessing2(constructor) {
    const outlets = readInheritableStaticArrayValues2(constructor, "outlets");
    return outlets.reduce((properties, outletDefinition) => {
      return Object.assign(properties, propertiesForOutletDefinition2(outletDefinition));
    }, {});
  }
  function getOutletController2(controller, element, identifier) {
    return controller.application.getControllerForElementAndIdentifier(element, identifier);
  }
  function getControllerAndEnsureConnectedScope2(controller, element, outletName) {
    let outletController = getOutletController2(controller, element, outletName);
    if (outletController)
      return outletController;
    controller.application.router.proposeToConnectScopeForElementAndIdentifier(element, outletName);
    outletController = getOutletController2(controller, element, outletName);
    if (outletController)
      return outletController;
  }
  function propertiesForOutletDefinition2(name) {
    const camelizedName = namespaceCamelize2(name);
    return {
      [`${camelizedName}Outlet`]: {
        get() {
          const outletElement = this.outlets.find(name);
          const selector = this.outlets.getSelectorForOutletName(name);
          if (outletElement) {
            const outletController = getControllerAndEnsureConnectedScope2(this, outletElement, name);
            if (outletController)
              return outletController;
            throw new Error(`The provided outlet element is missing an outlet controller "${name}" instance for host controller "${this.identifier}"`);
          }
          throw new Error(`Missing outlet element "${name}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${selector}".`);
        }
      },
      [`${camelizedName}Outlets`]: {
        get() {
          const outlets = this.outlets.findAll(name);
          if (outlets.length > 0) {
            return outlets.map((outletElement) => {
              const outletController = getControllerAndEnsureConnectedScope2(this, outletElement, name);
              if (outletController)
                return outletController;
              console.warn(`The provided outlet element is missing an outlet controller "${name}" instance for host controller "${this.identifier}"`, outletElement);
            }).filter((controller) => controller);
          }
          return [];
        }
      },
      [`${camelizedName}OutletElement`]: {
        get() {
          const outletElement = this.outlets.find(name);
          const selector = this.outlets.getSelectorForOutletName(name);
          if (outletElement) {
            return outletElement;
          } else {
            throw new Error(`Missing outlet element "${name}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${selector}".`);
          }
        }
      },
      [`${camelizedName}OutletElements`]: {
        get() {
          return this.outlets.findAll(name);
        }
      },
      [`has${capitalize2(camelizedName)}Outlet`]: {
        get() {
          return this.outlets.has(name);
        }
      }
    };
  }
  function TargetPropertiesBlessing2(constructor) {
    const targets = readInheritableStaticArrayValues2(constructor, "targets");
    return targets.reduce((properties, targetDefinition) => {
      return Object.assign(properties, propertiesForTargetDefinition2(targetDefinition));
    }, {});
  }
  function propertiesForTargetDefinition2(name) {
    return {
      [`${name}Target`]: {
        get() {
          const target = this.targets.find(name);
          if (target) {
            return target;
          } else {
            throw new Error(`Missing target element "${name}" for "${this.identifier}" controller`);
          }
        }
      },
      [`${name}Targets`]: {
        get() {
          return this.targets.findAll(name);
        }
      },
      [`has${capitalize2(name)}Target`]: {
        get() {
          return this.targets.has(name);
        }
      }
    };
  }
  function ValuePropertiesBlessing2(constructor) {
    const valueDefinitionPairs = readInheritableStaticObjectPairs2(constructor, "values");
    const propertyDescriptorMap = {
      valueDescriptorMap: {
        get() {
          return valueDefinitionPairs.reduce((result, valueDefinitionPair) => {
            const valueDescriptor = parseValueDefinitionPair2(valueDefinitionPair, this.identifier);
            const attributeName = this.data.getAttributeNameForKey(valueDescriptor.key);
            return Object.assign(result, { [attributeName]: valueDescriptor });
          }, {});
        }
      }
    };
    return valueDefinitionPairs.reduce((properties, valueDefinitionPair) => {
      return Object.assign(properties, propertiesForValueDefinitionPair2(valueDefinitionPair));
    }, propertyDescriptorMap);
  }
  function propertiesForValueDefinitionPair2(valueDefinitionPair, controller) {
    const definition = parseValueDefinitionPair2(valueDefinitionPair, controller);
    const { key, name, reader: read, writer: write } = definition;
    return {
      [name]: {
        get() {
          const value = this.data.get(key);
          if (value !== null) {
            return read(value);
          } else {
            return definition.defaultValue;
          }
        },
        set(value) {
          if (value === void 0) {
            this.data.delete(key);
          } else {
            this.data.set(key, write(value));
          }
        }
      },
      [`has${capitalize2(name)}`]: {
        get() {
          return this.data.has(key) || definition.hasCustomDefaultValue;
        }
      }
    };
  }
  function parseValueDefinitionPair2([token, typeDefinition], controller) {
    return valueDescriptorForTokenAndTypeDefinition2({
      controller,
      token,
      typeDefinition
    });
  }
  function parseValueTypeConstant2(constant) {
    switch (constant) {
      case Array:
        return "array";
      case Boolean:
        return "boolean";
      case Number:
        return "number";
      case Object:
        return "object";
      case String:
        return "string";
    }
  }
  function parseValueTypeDefault2(defaultValue) {
    switch (typeof defaultValue) {
      case "boolean":
        return "boolean";
      case "number":
        return "number";
      case "string":
        return "string";
    }
    if (Array.isArray(defaultValue))
      return "array";
    if (Object.prototype.toString.call(defaultValue) === "[object Object]")
      return "object";
  }
  function parseValueTypeObject2(payload) {
    const { controller, token, typeObject } = payload;
    const hasType = isSomething2(typeObject.type);
    const hasDefault = isSomething2(typeObject.default);
    const fullObject = hasType && hasDefault;
    const onlyType = hasType && !hasDefault;
    const onlyDefault = !hasType && hasDefault;
    const typeFromObject = parseValueTypeConstant2(typeObject.type);
    const typeFromDefaultValue = parseValueTypeDefault2(payload.typeObject.default);
    if (onlyType)
      return typeFromObject;
    if (onlyDefault)
      return typeFromDefaultValue;
    if (typeFromObject !== typeFromDefaultValue) {
      const propertyPath = controller ? `${controller}.${token}` : token;
      throw new Error(`The specified default value for the Stimulus Value "${propertyPath}" must match the defined type "${typeFromObject}". The provided default value of "${typeObject.default}" is of type "${typeFromDefaultValue}".`);
    }
    if (fullObject)
      return typeFromObject;
  }
  function parseValueTypeDefinition2(payload) {
    const { controller, token, typeDefinition } = payload;
    const typeObject = { controller, token, typeObject: typeDefinition };
    const typeFromObject = parseValueTypeObject2(typeObject);
    const typeFromDefaultValue = parseValueTypeDefault2(typeDefinition);
    const typeFromConstant = parseValueTypeConstant2(typeDefinition);
    const type = typeFromObject || typeFromDefaultValue || typeFromConstant;
    if (type)
      return type;
    const propertyPath = controller ? `${controller}.${typeDefinition}` : token;
    throw new Error(`Unknown value type "${propertyPath}" for "${token}" value`);
  }
  function defaultValueForDefinition2(typeDefinition) {
    const constant = parseValueTypeConstant2(typeDefinition);
    if (constant)
      return defaultValuesByType2[constant];
    const hasDefault = hasProperty2(typeDefinition, "default");
    const hasType = hasProperty2(typeDefinition, "type");
    const typeObject = typeDefinition;
    if (hasDefault)
      return typeObject.default;
    if (hasType) {
      const { type } = typeObject;
      const constantFromType = parseValueTypeConstant2(type);
      if (constantFromType)
        return defaultValuesByType2[constantFromType];
    }
    return typeDefinition;
  }
  function valueDescriptorForTokenAndTypeDefinition2(payload) {
    const { token, typeDefinition } = payload;
    const key = `${dasherize2(token)}-value`;
    const type = parseValueTypeDefinition2(payload);
    return {
      type,
      key,
      name: camelize2(key),
      get defaultValue() {
        return defaultValueForDefinition2(typeDefinition);
      },
      get hasCustomDefaultValue() {
        return parseValueTypeDefault2(typeDefinition) !== void 0;
      },
      reader: readers2[type],
      writer: writers2[type] || writers2.default
    };
  }
  var defaultValuesByType2 = {
    get array() {
      return [];
    },
    boolean: false,
    number: 0,
    get object() {
      return {};
    },
    string: ""
  };
  var readers2 = {
    array(value) {
      const array = JSON.parse(value);
      if (!Array.isArray(array)) {
        throw new TypeError(`expected value of type "array" but instead got value "${value}" of type "${parseValueTypeDefault2(array)}"`);
      }
      return array;
    },
    boolean(value) {
      return !(value == "0" || String(value).toLowerCase() == "false");
    },
    number(value) {
      return Number(value.replace(/_/g, ""));
    },
    object(value) {
      const object = JSON.parse(value);
      if (object === null || typeof object != "object" || Array.isArray(object)) {
        throw new TypeError(`expected value of type "object" but instead got value "${value}" of type "${parseValueTypeDefault2(object)}"`);
      }
      return object;
    },
    string(value) {
      return value;
    }
  };
  var writers2 = {
    default: writeString2,
    array: writeJSON2,
    object: writeJSON2
  };
  function writeJSON2(value) {
    return JSON.stringify(value);
  }
  function writeString2(value) {
    return `${value}`;
  }
  var Controller2 = class {
    constructor(context) {
      this.context = context;
    }
    static get shouldLoad() {
      return true;
    }
    static afterLoad(_identifier, _application) {
      return;
    }
    get application() {
      return this.context.application;
    }
    get scope() {
      return this.context.scope;
    }
    get element() {
      return this.scope.element;
    }
    get identifier() {
      return this.scope.identifier;
    }
    get targets() {
      return this.scope.targets;
    }
    get outlets() {
      return this.scope.outlets;
    }
    get classes() {
      return this.scope.classes;
    }
    get data() {
      return this.scope.data;
    }
    initialize() {
    }
    connect() {
    }
    disconnect() {
    }
    dispatch(eventName, { target = this.element, detail = {}, prefix = this.identifier, bubbles = true, cancelable = true } = {}) {
      const type = prefix ? `${prefix}:${eventName}` : eventName;
      const event = new CustomEvent(type, { detail, bubbles, cancelable });
      target.dispatchEvent(event);
      return event;
    }
  };
  Controller2.blessings = [
    ClassPropertiesBlessing2,
    TargetPropertiesBlessing2,
    ValuePropertiesBlessing2,
    OutletPropertiesBlessing2
  ];
  Controller2.targets = [];
  Controller2.outlets = [];
  Controller2.values = {};

  // node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs
  var AbstractEvent = class {
    constructor(data) {
      this._canceled = false;
      this.data = data;
    }
    get type() {
      return this.constructor.type;
    }
    get cancelable() {
      return this.constructor.cancelable;
    }
    cancel() {
      this._canceled = true;
    }
    canceled() {
      return this._canceled;
    }
    clone(data) {
      return new this.constructor({
        ...this.data,
        ...data
      });
    }
  };
  AbstractEvent.type = "event";
  AbstractEvent.cancelable = false;

  // node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs
  var AbstractPlugin = class {
    constructor(draggable) {
      this.draggable = draggable;
    }
    attach() {
      throw new Error("Not Implemented");
    }
    detach() {
      throw new Error("Not Implemented");
    }
  };

  // node_modules/@shopify/draggable/build/esm/Draggable/Sensors/Sensor/Sensor.mjs
  var defaultDelay = {
    mouse: 0,
    drag: 0,
    touch: 100
  };
  var Sensor = class {
    constructor(containers = [], options = {}) {
      this.containers = [...containers];
      this.options = {
        ...options
      };
      this.dragging = false;
      this.currentContainer = null;
      this.originalSource = null;
      this.startEvent = null;
      this.delay = calcDelay(options.delay);
    }
    attach() {
      return this;
    }
    detach() {
      return this;
    }
    addContainer(...containers) {
      this.containers = [...this.containers, ...containers];
    }
    removeContainer(...containers) {
      this.containers = this.containers.filter((container) => !containers.includes(container));
    }
    trigger(element, sensorEvent) {
      const event = document.createEvent("Event");
      event.detail = sensorEvent;
      event.initEvent(sensorEvent.type, true, true);
      element.dispatchEvent(event);
      this.lastEvent = sensorEvent;
      return sensorEvent;
    }
  };
  function calcDelay(optionsDelay) {
    const delay = {};
    if (optionsDelay === void 0) {
      return {
        ...defaultDelay
      };
    }
    if (typeof optionsDelay === "number") {
      for (const key in defaultDelay) {
        if (Object.prototype.hasOwnProperty.call(defaultDelay, key)) {
          delay[key] = optionsDelay;
        }
      }
      return delay;
    }
    for (const key in defaultDelay) {
      if (Object.prototype.hasOwnProperty.call(defaultDelay, key)) {
        if (optionsDelay[key] === void 0) {
          delay[key] = defaultDelay[key];
        } else {
          delay[key] = optionsDelay[key];
        }
      }
    }
    return delay;
  }

  // node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs
  function closest(node, value) {
    if (node == null) {
      return null;
    }
    function conditionFn(currentNode) {
      if (currentNode == null || value == null) {
        return false;
      } else if (isSelector(value)) {
        return Element.prototype.matches.call(currentNode, value);
      } else if (isNodeList(value)) {
        return [...value].includes(currentNode);
      } else if (isElement(value)) {
        return value === currentNode;
      } else if (isFunction(value)) {
        return value(currentNode);
      } else {
        return false;
      }
    }
    let current = node;
    do {
      current = current.correspondingUseElement || current.correspondingElement || current;
      if (conditionFn(current)) {
        return current;
      }
      current = current?.parentNode || null;
    } while (current != null && current !== document.body && current !== document);
    return null;
  }
  function isSelector(value) {
    return Boolean(typeof value === "string");
  }
  function isNodeList(value) {
    return Boolean(value instanceof NodeList || value instanceof Array);
  }
  function isElement(value) {
    return Boolean(value instanceof Node);
  }
  function isFunction(value) {
    return Boolean(typeof value === "function");
  }

  // node_modules/@shopify/draggable/build/esm/shared/utils/distance/distance.mjs
  function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  // node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs
  var SensorEvent = class extends AbstractEvent {
    get originalEvent() {
      return this.data.originalEvent;
    }
    get clientX() {
      return this.data.clientX;
    }
    get clientY() {
      return this.data.clientY;
    }
    get target() {
      return this.data.target;
    }
    get container() {
      return this.data.container;
    }
    get originalSource() {
      return this.data.originalSource;
    }
    get pressure() {
      return this.data.pressure;
    }
  };
  var DragStartSensorEvent = class extends SensorEvent {
  };
  DragStartSensorEvent.type = "drag:start";
  var DragMoveSensorEvent = class extends SensorEvent {
  };
  DragMoveSensorEvent.type = "drag:move";
  var DragStopSensorEvent = class extends SensorEvent {
  };
  DragStopSensorEvent.type = "drag:stop";
  var DragPressureSensorEvent = class extends SensorEvent {
  };
  DragPressureSensorEvent.type = "drag:pressure";

  // node_modules/@shopify/draggable/build/esm/Draggable/Sensors/MouseSensor/MouseSensor.mjs
  var onContextMenuWhileDragging = Symbol("onContextMenuWhileDragging");
  var onMouseDown = Symbol("onMouseDown");
  var onMouseMove = Symbol("onMouseMove");
  var onMouseUp = Symbol("onMouseUp");
  var startDrag = Symbol("startDrag");
  var onDistanceChange = Symbol("onDistanceChange");
  var MouseSensor = class extends Sensor {
    constructor(containers = [], options = {}) {
      super(containers, options);
      this.mouseDownTimeout = null;
      this.pageX = null;
      this.pageY = null;
      this[onContextMenuWhileDragging] = this[onContextMenuWhileDragging].bind(this);
      this[onMouseDown] = this[onMouseDown].bind(this);
      this[onMouseMove] = this[onMouseMove].bind(this);
      this[onMouseUp] = this[onMouseUp].bind(this);
      this[startDrag] = this[startDrag].bind(this);
      this[onDistanceChange] = this[onDistanceChange].bind(this);
    }
    attach() {
      document.addEventListener("mousedown", this[onMouseDown], true);
    }
    detach() {
      document.removeEventListener("mousedown", this[onMouseDown], true);
    }
    [onMouseDown](event) {
      if (event.button !== 0 || event.ctrlKey || event.metaKey) {
        return;
      }
      const container = closest(event.target, this.containers);
      if (!container) {
        return;
      }
      if (this.options.handle && event.target && !closest(event.target, this.options.handle)) {
        return;
      }
      const originalSource = closest(event.target, this.options.draggable);
      if (!originalSource) {
        return;
      }
      const {
        delay
      } = this;
      const {
        pageX,
        pageY
      } = event;
      Object.assign(this, {
        pageX,
        pageY
      });
      this.onMouseDownAt = Date.now();
      this.startEvent = event;
      this.currentContainer = container;
      this.originalSource = originalSource;
      document.addEventListener("mouseup", this[onMouseUp]);
      document.addEventListener("dragstart", preventNativeDragStart);
      document.addEventListener("mousemove", this[onDistanceChange]);
      this.mouseDownTimeout = window.setTimeout(() => {
        this[onDistanceChange]({
          pageX: this.pageX,
          pageY: this.pageY
        });
      }, delay.mouse);
    }
    [startDrag]() {
      const startEvent = this.startEvent;
      const container = this.currentContainer;
      const originalSource = this.originalSource;
      const dragStartEvent = new DragStartSensorEvent({
        clientX: startEvent.clientX,
        clientY: startEvent.clientY,
        target: startEvent.target,
        container,
        originalSource,
        originalEvent: startEvent
      });
      this.trigger(this.currentContainer, dragStartEvent);
      this.dragging = !dragStartEvent.canceled();
      if (this.dragging) {
        document.addEventListener("contextmenu", this[onContextMenuWhileDragging], true);
        document.addEventListener("mousemove", this[onMouseMove]);
      }
    }
    [onDistanceChange](event) {
      const {
        pageX,
        pageY
      } = event;
      const {
        distance: distance$1
      } = this.options;
      const {
        startEvent,
        delay
      } = this;
      Object.assign(this, {
        pageX,
        pageY
      });
      if (!this.currentContainer) {
        return;
      }
      const timeElapsed = Date.now() - this.onMouseDownAt;
      const distanceTravelled = distance(startEvent.pageX, startEvent.pageY, pageX, pageY) || 0;
      clearTimeout(this.mouseDownTimeout);
      if (timeElapsed < delay.mouse) {
        document.removeEventListener("mousemove", this[onDistanceChange]);
      } else if (distanceTravelled >= distance$1) {
        document.removeEventListener("mousemove", this[onDistanceChange]);
        this[startDrag]();
      }
    }
    [onMouseMove](event) {
      if (!this.dragging) {
        return;
      }
      const target = document.elementFromPoint(event.clientX, event.clientY);
      const dragMoveEvent = new DragMoveSensorEvent({
        clientX: event.clientX,
        clientY: event.clientY,
        target,
        container: this.currentContainer,
        originalEvent: event
      });
      this.trigger(this.currentContainer, dragMoveEvent);
    }
    [onMouseUp](event) {
      clearTimeout(this.mouseDownTimeout);
      if (event.button !== 0) {
        return;
      }
      document.removeEventListener("mouseup", this[onMouseUp]);
      document.removeEventListener("dragstart", preventNativeDragStart);
      document.removeEventListener("mousemove", this[onDistanceChange]);
      if (!this.dragging) {
        return;
      }
      const target = document.elementFromPoint(event.clientX, event.clientY);
      const dragStopEvent = new DragStopSensorEvent({
        clientX: event.clientX,
        clientY: event.clientY,
        target,
        container: this.currentContainer,
        originalEvent: event
      });
      this.trigger(this.currentContainer, dragStopEvent);
      document.removeEventListener("contextmenu", this[onContextMenuWhileDragging], true);
      document.removeEventListener("mousemove", this[onMouseMove]);
      this.currentContainer = null;
      this.dragging = false;
      this.startEvent = null;
    }
    [onContextMenuWhileDragging](event) {
      event.preventDefault();
    }
  };
  function preventNativeDragStart(event) {
    event.preventDefault();
  }

  // node_modules/@shopify/draggable/build/esm/shared/utils/touchCoords/touchCoords.mjs
  function touchCoords(event) {
    const {
      touches,
      changedTouches
    } = event;
    return touches && touches[0] || changedTouches && changedTouches[0];
  }

  // node_modules/@shopify/draggable/build/esm/Draggable/Sensors/TouchSensor/TouchSensor.mjs
  var onTouchStart = Symbol("onTouchStart");
  var onTouchEnd = Symbol("onTouchEnd");
  var onTouchMove = Symbol("onTouchMove");
  var startDrag2 = Symbol("startDrag");
  var onDistanceChange2 = Symbol("onDistanceChange");
  var preventScrolling = false;
  window.addEventListener("touchmove", (event) => {
    if (!preventScrolling) {
      return;
    }
    event.preventDefault();
  }, {
    passive: false
  });
  var TouchSensor = class extends Sensor {
    constructor(containers = [], options = {}) {
      super(containers, options);
      this.currentScrollableParent = null;
      this.tapTimeout = null;
      this.touchMoved = false;
      this.pageX = null;
      this.pageY = null;
      this[onTouchStart] = this[onTouchStart].bind(this);
      this[onTouchEnd] = this[onTouchEnd].bind(this);
      this[onTouchMove] = this[onTouchMove].bind(this);
      this[startDrag2] = this[startDrag2].bind(this);
      this[onDistanceChange2] = this[onDistanceChange2].bind(this);
    }
    attach() {
      document.addEventListener("touchstart", this[onTouchStart]);
    }
    detach() {
      document.removeEventListener("touchstart", this[onTouchStart]);
    }
    [onTouchStart](event) {
      const container = closest(event.target, this.containers);
      if (!container) {
        return;
      }
      if (this.options.handle && event.target && !closest(event.target, this.options.handle)) {
        return;
      }
      const originalSource = closest(event.target, this.options.draggable);
      if (!originalSource) {
        return;
      }
      const {
        distance: distance2 = 0
      } = this.options;
      const {
        delay
      } = this;
      const {
        pageX,
        pageY
      } = touchCoords(event);
      Object.assign(this, {
        pageX,
        pageY
      });
      this.onTouchStartAt = Date.now();
      this.startEvent = event;
      this.currentContainer = container;
      this.originalSource = originalSource;
      document.addEventListener("touchend", this[onTouchEnd]);
      document.addEventListener("touchcancel", this[onTouchEnd]);
      document.addEventListener("touchmove", this[onDistanceChange2]);
      container.addEventListener("contextmenu", onContextMenu);
      if (distance2) {
        preventScrolling = true;
      }
      this.tapTimeout = window.setTimeout(() => {
        this[onDistanceChange2]({
          touches: [{
            pageX: this.pageX,
            pageY: this.pageY
          }]
        });
      }, delay.touch);
    }
    [startDrag2]() {
      const startEvent = this.startEvent;
      const container = this.currentContainer;
      const touch = touchCoords(startEvent);
      const originalSource = this.originalSource;
      const dragStartEvent = new DragStartSensorEvent({
        clientX: touch.pageX,
        clientY: touch.pageY,
        target: startEvent.target,
        container,
        originalSource,
        originalEvent: startEvent
      });
      this.trigger(this.currentContainer, dragStartEvent);
      this.dragging = !dragStartEvent.canceled();
      if (this.dragging) {
        document.addEventListener("touchmove", this[onTouchMove]);
      }
      preventScrolling = this.dragging;
    }
    [onDistanceChange2](event) {
      const {
        distance: distance$1
      } = this.options;
      const {
        startEvent,
        delay
      } = this;
      const start = touchCoords(startEvent);
      const current = touchCoords(event);
      const timeElapsed = Date.now() - this.onTouchStartAt;
      const distanceTravelled = distance(start.pageX, start.pageY, current.pageX, current.pageY);
      Object.assign(this, current);
      clearTimeout(this.tapTimeout);
      if (timeElapsed < delay.touch) {
        document.removeEventListener("touchmove", this[onDistanceChange2]);
      } else if (distanceTravelled >= distance$1) {
        document.removeEventListener("touchmove", this[onDistanceChange2]);
        this[startDrag2]();
      }
    }
    [onTouchMove](event) {
      if (!this.dragging) {
        return;
      }
      const {
        pageX,
        pageY
      } = touchCoords(event);
      const target = document.elementFromPoint(pageX - window.scrollX, pageY - window.scrollY);
      const dragMoveEvent = new DragMoveSensorEvent({
        clientX: pageX,
        clientY: pageY,
        target,
        container: this.currentContainer,
        originalEvent: event
      });
      this.trigger(this.currentContainer, dragMoveEvent);
    }
    [onTouchEnd](event) {
      clearTimeout(this.tapTimeout);
      preventScrolling = false;
      document.removeEventListener("touchend", this[onTouchEnd]);
      document.removeEventListener("touchcancel", this[onTouchEnd]);
      document.removeEventListener("touchmove", this[onDistanceChange2]);
      if (this.currentContainer) {
        this.currentContainer.removeEventListener("contextmenu", onContextMenu);
      }
      if (!this.dragging) {
        return;
      }
      document.removeEventListener("touchmove", this[onTouchMove]);
      const {
        pageX,
        pageY
      } = touchCoords(event);
      const target = document.elementFromPoint(pageX - window.scrollX, pageY - window.scrollY);
      event.preventDefault();
      const dragStopEvent = new DragStopSensorEvent({
        clientX: pageX,
        clientY: pageY,
        target,
        container: this.currentContainer,
        originalEvent: event
      });
      this.trigger(this.currentContainer, dragStopEvent);
      this.currentContainer = null;
      this.dragging = false;
      this.startEvent = null;
    }
  };
  function onContextMenu(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  // node_modules/@shopify/draggable/build/esm/Draggable/Sensors/DragSensor/DragSensor.mjs
  var onMouseDown2 = Symbol("onMouseDown");
  var onMouseUp2 = Symbol("onMouseUp");
  var onDragStart = Symbol("onDragStart");
  var onDragOver = Symbol("onDragOver");
  var onDragEnd = Symbol("onDragEnd");
  var onDrop = Symbol("onDrop");
  var reset = Symbol("reset");
  var DragSensor = class extends Sensor {
    constructor(containers = [], options = {}) {
      super(containers, options);
      this.mouseDownTimeout = null;
      this.draggableElement = null;
      this.nativeDraggableElement = null;
      this[onMouseDown2] = this[onMouseDown2].bind(this);
      this[onMouseUp2] = this[onMouseUp2].bind(this);
      this[onDragStart] = this[onDragStart].bind(this);
      this[onDragOver] = this[onDragOver].bind(this);
      this[onDragEnd] = this[onDragEnd].bind(this);
      this[onDrop] = this[onDrop].bind(this);
    }
    attach() {
      document.addEventListener("mousedown", this[onMouseDown2], true);
    }
    detach() {
      document.removeEventListener("mousedown", this[onMouseDown2], true);
    }
    [onDragStart](event) {
      event.dataTransfer.setData("text", "");
      event.dataTransfer.effectAllowed = this.options.type;
      const target = document.elementFromPoint(event.clientX, event.clientY);
      const originalSource = this.draggableElement;
      if (!originalSource) {
        return;
      }
      const dragStartEvent = new DragStartSensorEvent({
        clientX: event.clientX,
        clientY: event.clientY,
        target,
        originalSource,
        container: this.currentContainer,
        originalEvent: event
      });
      setTimeout(() => {
        this.trigger(this.currentContainer, dragStartEvent);
        if (dragStartEvent.canceled()) {
          this.dragging = false;
        } else {
          this.dragging = true;
        }
      }, 0);
    }
    [onDragOver](event) {
      if (!this.dragging) {
        return;
      }
      const target = document.elementFromPoint(event.clientX, event.clientY);
      const container = this.currentContainer;
      const dragMoveEvent = new DragMoveSensorEvent({
        clientX: event.clientX,
        clientY: event.clientY,
        target,
        container,
        originalEvent: event
      });
      this.trigger(container, dragMoveEvent);
      if (!dragMoveEvent.canceled()) {
        event.preventDefault();
        event.dataTransfer.dropEffect = this.options.type;
      }
    }
    [onDragEnd](event) {
      if (!this.dragging) {
        return;
      }
      document.removeEventListener("mouseup", this[onMouseUp2], true);
      const target = document.elementFromPoint(event.clientX, event.clientY);
      const container = this.currentContainer;
      const dragStopEvent = new DragStopSensorEvent({
        clientX: event.clientX,
        clientY: event.clientY,
        target,
        container,
        originalEvent: event
      });
      this.trigger(container, dragStopEvent);
      this.dragging = false;
      this.startEvent = null;
      this[reset]();
    }
    [onDrop](event) {
      event.preventDefault();
    }
    [onMouseDown2](event) {
      if (event.target && (event.target.form || event.target.contenteditable)) {
        return;
      }
      const target = event.target;
      this.currentContainer = closest(target, this.containers);
      if (!this.currentContainer) {
        return;
      }
      if (this.options.handle && target && !closest(target, this.options.handle)) {
        return;
      }
      const originalSource = closest(target, this.options.draggable);
      if (!originalSource) {
        return;
      }
      const nativeDraggableElement = closest(event.target, (element) => element.draggable);
      if (nativeDraggableElement) {
        nativeDraggableElement.draggable = false;
        this.nativeDraggableElement = nativeDraggableElement;
      }
      document.addEventListener("mouseup", this[onMouseUp2], true);
      document.addEventListener("dragstart", this[onDragStart], false);
      document.addEventListener("dragover", this[onDragOver], false);
      document.addEventListener("dragend", this[onDragEnd], false);
      document.addEventListener("drop", this[onDrop], false);
      this.startEvent = event;
      this.mouseDownTimeout = setTimeout(() => {
        originalSource.draggable = true;
        this.draggableElement = originalSource;
      }, this.delay.drag);
    }
    [onMouseUp2]() {
      this[reset]();
    }
    [reset]() {
      clearTimeout(this.mouseDownTimeout);
      document.removeEventListener("mouseup", this[onMouseUp2], true);
      document.removeEventListener("dragstart", this[onDragStart], false);
      document.removeEventListener("dragover", this[onDragOver], false);
      document.removeEventListener("dragend", this[onDragEnd], false);
      document.removeEventListener("drop", this[onDrop], false);
      if (this.nativeDraggableElement) {
        this.nativeDraggableElement.draggable = true;
        this.nativeDraggableElement = null;
      }
      if (this.draggableElement) {
        this.draggableElement.draggable = false;
        this.draggableElement = null;
      }
    }
  };

  // node_modules/@shopify/draggable/build/esm/Draggable/Sensors/ForceTouchSensor/ForceTouchSensor.mjs
  var onMouseForceWillBegin = Symbol("onMouseForceWillBegin");
  var onMouseForceDown = Symbol("onMouseForceDown");
  var onMouseDown3 = Symbol("onMouseDown");
  var onMouseForceChange = Symbol("onMouseForceChange");
  var onMouseMove2 = Symbol("onMouseMove");
  var onMouseUp3 = Symbol("onMouseUp");
  var onMouseForceGlobalChange = Symbol("onMouseForceGlobalChange");
  var ForceTouchSensor = class extends Sensor {
    constructor(containers = [], options = {}) {
      super(containers, options);
      this.mightDrag = false;
      this[onMouseForceWillBegin] = this[onMouseForceWillBegin].bind(this);
      this[onMouseForceDown] = this[onMouseForceDown].bind(this);
      this[onMouseDown3] = this[onMouseDown3].bind(this);
      this[onMouseForceChange] = this[onMouseForceChange].bind(this);
      this[onMouseMove2] = this[onMouseMove2].bind(this);
      this[onMouseUp3] = this[onMouseUp3].bind(this);
    }
    attach() {
      for (const container of this.containers) {
        container.addEventListener("webkitmouseforcewillbegin", this[onMouseForceWillBegin], false);
        container.addEventListener("webkitmouseforcedown", this[onMouseForceDown], false);
        container.addEventListener("mousedown", this[onMouseDown3], true);
        container.addEventListener("webkitmouseforcechanged", this[onMouseForceChange], false);
      }
      document.addEventListener("mousemove", this[onMouseMove2]);
      document.addEventListener("mouseup", this[onMouseUp3]);
    }
    detach() {
      for (const container of this.containers) {
        container.removeEventListener("webkitmouseforcewillbegin", this[onMouseForceWillBegin], false);
        container.removeEventListener("webkitmouseforcedown", this[onMouseForceDown], false);
        container.removeEventListener("mousedown", this[onMouseDown3], true);
        container.removeEventListener("webkitmouseforcechanged", this[onMouseForceChange], false);
      }
      document.removeEventListener("mousemove", this[onMouseMove2]);
      document.removeEventListener("mouseup", this[onMouseUp3]);
    }
    [onMouseForceWillBegin](event) {
      event.preventDefault();
      this.mightDrag = true;
    }
    [onMouseForceDown](event) {
      if (this.dragging) {
        return;
      }
      const target = document.elementFromPoint(event.clientX, event.clientY);
      const container = event.currentTarget;
      if (this.options.handle && target && !closest(target, this.options.handle)) {
        return;
      }
      const originalSource = closest(target, this.options.draggable);
      if (!originalSource) {
        return;
      }
      const dragStartEvent = new DragStartSensorEvent({
        clientX: event.clientX,
        clientY: event.clientY,
        target,
        container,
        originalSource,
        originalEvent: event
      });
      this.trigger(container, dragStartEvent);
      this.currentContainer = container;
      this.dragging = !dragStartEvent.canceled();
      this.mightDrag = false;
    }
    [onMouseUp3](event) {
      if (!this.dragging) {
        return;
      }
      const dragStopEvent = new DragStopSensorEvent({
        clientX: event.clientX,
        clientY: event.clientY,
        target: null,
        container: this.currentContainer,
        originalEvent: event
      });
      this.trigger(this.currentContainer, dragStopEvent);
      this.currentContainer = null;
      this.dragging = false;
      this.mightDrag = false;
    }
    [onMouseDown3](event) {
      if (!this.mightDrag) {
        return;
      }
      event.stopPropagation();
      event.stopImmediatePropagation();
      event.preventDefault();
    }
    [onMouseMove2](event) {
      if (!this.dragging) {
        return;
      }
      const target = document.elementFromPoint(event.clientX, event.clientY);
      const dragMoveEvent = new DragMoveSensorEvent({
        clientX: event.clientX,
        clientY: event.clientY,
        target,
        container: this.currentContainer,
        originalEvent: event
      });
      this.trigger(this.currentContainer, dragMoveEvent);
    }
    [onMouseForceChange](event) {
      if (this.dragging) {
        return;
      }
      const target = event.target;
      const container = event.currentTarget;
      const dragPressureEvent = new DragPressureSensorEvent({
        pressure: event.webkitForce,
        clientX: event.clientX,
        clientY: event.clientY,
        target,
        container,
        originalEvent: event
      });
      this.trigger(container, dragPressureEvent);
    }
    [onMouseForceGlobalChange](event) {
      if (!this.dragging) {
        return;
      }
      const target = event.target;
      const dragPressureEvent = new DragPressureSensorEvent({
        pressure: event.webkitForce,
        clientX: event.clientX,
        clientY: event.clientY,
        target,
        container: this.currentContainer,
        originalEvent: event
      });
      this.trigger(this.currentContainer, dragPressureEvent);
    }
  };

  // node_modules/@shopify/draggable/build/esm/Plugins/Collidable/CollidableEvent/CollidableEvent.mjs
  var CollidableEvent = class extends AbstractEvent {
    constructor(data) {
      super(data);
      this.data = data;
    }
    get dragEvent() {
      return this.data.dragEvent;
    }
  };
  CollidableEvent.type = "collidable";
  var CollidableInEvent = class extends CollidableEvent {
    get collidingElement() {
      return this.data.collidingElement;
    }
  };
  CollidableInEvent.type = "collidable:in";
  var CollidableOutEvent = class extends CollidableEvent {
    get collidingElement() {
      return this.data.collidingElement;
    }
  };
  CollidableOutEvent.type = "collidable:out";

  // node_modules/@shopify/draggable/build/esm/Plugins/Collidable/Collidable.mjs
  var onDragMove = Symbol("onDragMove");
  var onDragStop = Symbol("onDragStop");
  var onRequestAnimationFrame = Symbol("onRequestAnimationFrame");
  var Collidable = class extends AbstractPlugin {
    constructor(draggable) {
      super(draggable);
      this.currentlyCollidingElement = null;
      this.lastCollidingElement = null;
      this.currentAnimationFrame = null;
      this[onDragMove] = this[onDragMove].bind(this);
      this[onDragStop] = this[onDragStop].bind(this);
      this[onRequestAnimationFrame] = this[onRequestAnimationFrame].bind(this);
    }
    attach() {
      this.draggable.on("drag:move", this[onDragMove]).on("drag:stop", this[onDragStop]);
    }
    detach() {
      this.draggable.off("drag:move", this[onDragMove]).off("drag:stop", this[onDragStop]);
    }
    getCollidables() {
      const collidables = this.draggable.options.collidables;
      if (typeof collidables === "string") {
        return Array.prototype.slice.call(document.querySelectorAll(collidables));
      } else if (collidables instanceof NodeList || collidables instanceof Array) {
        return Array.prototype.slice.call(collidables);
      } else if (collidables instanceof HTMLElement) {
        return [collidables];
      } else if (typeof collidables === "function") {
        return collidables();
      } else {
        return [];
      }
    }
    [onDragMove](event) {
      const target = event.sensorEvent.target;
      this.currentAnimationFrame = requestAnimationFrame(this[onRequestAnimationFrame](target));
      if (this.currentlyCollidingElement) {
        event.cancel();
      }
      const collidableInEvent = new CollidableInEvent({
        dragEvent: event,
        collidingElement: this.currentlyCollidingElement
      });
      const collidableOutEvent = new CollidableOutEvent({
        dragEvent: event,
        collidingElement: this.lastCollidingElement
      });
      const enteringCollidable = Boolean(this.currentlyCollidingElement && this.lastCollidingElement !== this.currentlyCollidingElement);
      const leavingCollidable = Boolean(!this.currentlyCollidingElement && this.lastCollidingElement);
      if (enteringCollidable) {
        if (this.lastCollidingElement) {
          this.draggable.trigger(collidableOutEvent);
        }
        this.draggable.trigger(collidableInEvent);
      } else if (leavingCollidable) {
        this.draggable.trigger(collidableOutEvent);
      }
      this.lastCollidingElement = this.currentlyCollidingElement;
    }
    [onDragStop](event) {
      const lastCollidingElement = this.currentlyCollidingElement || this.lastCollidingElement;
      const collidableOutEvent = new CollidableOutEvent({
        dragEvent: event,
        collidingElement: lastCollidingElement
      });
      if (lastCollidingElement) {
        this.draggable.trigger(collidableOutEvent);
      }
      this.lastCollidingElement = null;
      this.currentlyCollidingElement = null;
    }
    [onRequestAnimationFrame](target) {
      return () => {
        const collidables = this.getCollidables();
        this.currentlyCollidingElement = closest(target, (element) => collidables.includes(element));
      };
    }
  };

  // node_modules/@shopify/draggable/build/esm/_virtual/_rollupPluginBabelHelpers.mjs
  function createAddInitializerMethod(e, t) {
    return function(r) {
      assertNotFinished(t, "addInitializer"), assertCallable(r, "An initializer"), e.push(r);
    };
  }
  function assertInstanceIfPrivate(e, t) {
    if (!e(t))
      throw new TypeError("Attempted to access private element on non-instance");
  }
  function memberDec(e, t, r, a, n, i, s, o, c, l, u) {
    var f;
    switch (i) {
      case 1:
        f = "accessor";
        break;
      case 2:
        f = "method";
        break;
      case 3:
        f = "getter";
        break;
      case 4:
        f = "setter";
        break;
      default:
        f = "field";
    }
    var d, p, h = {
      kind: f,
      name: o ? "#" + r : r,
      static: s,
      private: o,
      metadata: u
    }, v = {
      v: false
    };
    if (0 !== i && (h.addInitializer = createAddInitializerMethod(n, v)), o || 0 !== i && 2 !== i) {
      if (2 === i)
        d = function(e2) {
          return assertInstanceIfPrivate(l, e2), a.value;
        };
      else {
        var y = 0 === i || 1 === i;
        (y || 3 === i) && (d = o ? function(e2) {
          return assertInstanceIfPrivate(l, e2), a.get.call(e2);
        } : function(e2) {
          return a.get.call(e2);
        }), (y || 4 === i) && (p = o ? function(e2, t2) {
          assertInstanceIfPrivate(l, e2), a.set.call(e2, t2);
        } : function(e2, t2) {
          a.set.call(e2, t2);
        });
      }
    } else
      d = function(e2) {
        return e2[r];
      }, 0 === i && (p = function(e2, t2) {
        e2[r] = t2;
      });
    var m = o ? l.bind() : function(e2) {
      return r in e2;
    };
    h.access = d && p ? {
      get: d,
      set: p,
      has: m
    } : d ? {
      get: d,
      has: m
    } : {
      set: p,
      has: m
    };
    try {
      return e.call(t, c, h);
    } finally {
      v.v = true;
    }
  }
  function assertNotFinished(e, t) {
    if (e.v)
      throw new Error("attempted to call " + t + " after decoration was finished");
  }
  function assertCallable(e, t) {
    if ("function" != typeof e)
      throw new TypeError(t + " must be a function");
  }
  function assertValidReturnValue(e, t) {
    var r = typeof t;
    if (1 === e) {
      if ("object" !== r || null === t)
        throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      void 0 !== t.get && assertCallable(t.get, "accessor.get"), void 0 !== t.set && assertCallable(t.set, "accessor.set"), void 0 !== t.init && assertCallable(t.init, "accessor.init");
    } else if ("function" !== r) {
      var a;
      throw a = 0 === e ? "field" : 5 === e ? "class" : "method", new TypeError(a + " decorators must return a function or void 0");
    }
  }
  function curryThis1(e) {
    return function() {
      return e(this);
    };
  }
  function curryThis2(e) {
    return function(t) {
      e(this, t);
    };
  }
  function applyMemberDec(e, t, r, a, n, i, s, o, c, l, u) {
    var f, d, p, h, v, y, m = r[0];
    a || Array.isArray(m) || (m = [m]), o ? f = 0 === i || 1 === i ? {
      get: curryThis1(r[3]),
      set: curryThis2(r[4])
    } : 3 === i ? {
      get: r[3]
    } : 4 === i ? {
      set: r[3]
    } : {
      value: r[3]
    } : 0 !== i && (f = Object.getOwnPropertyDescriptor(t, n)), 1 === i ? p = {
      get: f.get,
      set: f.set
    } : 2 === i ? p = f.value : 3 === i ? p = f.get : 4 === i && (p = f.set);
    for (var g = a ? 2 : 1, b = m.length - 1; b >= 0; b -= g) {
      var I;
      if (void 0 !== (h = memberDec(m[b], a ? m[b - 1] : void 0, n, f, c, i, s, o, p, l, u)))
        assertValidReturnValue(i, h), 0 === i ? I = h : 1 === i ? (I = h.init, v = h.get || p.get, y = h.set || p.set, p = {
          get: v,
          set: y
        }) : p = h, void 0 !== I && (void 0 === d ? d = I : "function" == typeof d ? d = [d, I] : d.push(I));
    }
    if (0 === i || 1 === i) {
      if (void 0 === d)
        d = function(e2, t2) {
          return t2;
        };
      else if ("function" != typeof d) {
        var w = d;
        d = function(e2, t2) {
          for (var r2 = t2, a2 = w.length - 1; a2 >= 0; a2--)
            r2 = w[a2].call(e2, r2);
          return r2;
        };
      } else {
        var M = d;
        d = function(e2, t2) {
          return M.call(e2, t2);
        };
      }
      e.push(d);
    }
    0 !== i && (1 === i ? (f.get = p.get, f.set = p.set) : 2 === i ? f.value = p : 3 === i ? f.get = p : 4 === i && (f.set = p), o ? 1 === i ? (e.push(function(e2, t2) {
      return p.get.call(e2, t2);
    }), e.push(function(e2, t2) {
      return p.set.call(e2, t2);
    })) : 2 === i ? e.push(p) : e.push(function(e2, t2) {
      return p.call(e2, t2);
    }) : Object.defineProperty(t, n, f));
  }
  function applyMemberDecs(e, t, r, a) {
    for (var n, i, s, o = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = 0; u < t.length; u++) {
      var f = t[u];
      if (Array.isArray(f)) {
        var d, p, h = f[1], v = f[2], y = f.length > 3, m = 16 & h, g = !!(8 & h), b = r;
        if (h &= 7, g ? (d = e, 0 !== h && (p = i = i || []), y && !s && (s = function(t2) {
          return _checkInRHS(t2) === e;
        }), b = s) : (d = e.prototype, 0 !== h && (p = n = n || [])), 0 !== h && !y) {
          var I = g ? l : c, w = I.get(v) || 0;
          if (true === w || 3 === w && 4 !== h || 4 === w && 3 !== h)
            throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + v);
          I.set(v, !(!w && h > 2) || h);
        }
        applyMemberDec(o, d, f, m, v, h, g, y, p, b, a);
      }
    }
    return pushInitializers(o, n), pushInitializers(o, i), o;
  }
  function pushInitializers(e, t) {
    t && e.push(function(e2) {
      for (var r = 0; r < t.length; r++)
        t[r].call(e2);
      return e2;
    });
  }
  function applyClassDecs(e, t, r, a) {
    if (t.length) {
      for (var n = [], i = e, s = e.name, o = r ? 2 : 1, c = t.length - 1; c >= 0; c -= o) {
        var l = {
          v: false
        };
        try {
          var u = t[c].call(r ? t[c - 1] : void 0, i, {
            kind: "class",
            name: s,
            addInitializer: createAddInitializerMethod(n, l),
            metadata: a
          });
        } finally {
          l.v = true;
        }
        void 0 !== u && (assertValidReturnValue(5, u), i = u);
      }
      return [defineMetadata(i, a), function() {
        for (var e2 = 0; e2 < n.length; e2++)
          n[e2].call(i);
      }];
    }
  }
  function defineMetadata(e, t) {
    return Object.defineProperty(e, Symbol.metadata || Symbol.for("Symbol.metadata"), {
      configurable: true,
      enumerable: true,
      value: t
    });
  }
  function _applyDecs2305(e, t, r, a, n, i) {
    if (arguments.length >= 6)
      var s = i[Symbol.metadata || Symbol.for("Symbol.metadata")];
    var o = Object.create(void 0 === s ? null : s), c = applyMemberDecs(e, t, n, o);
    return r.length || defineMetadata(e, o), {
      e: c,
      get c() {
        return applyClassDecs(e, r, a, o);
      }
    };
  }
  function _checkInRHS(e) {
    if (Object(e) !== e)
      throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e ? typeof e : "null"));
    return e;
  }

  // node_modules/@shopify/draggable/build/esm/shared/utils/decorators/AutoBind.mjs
  function AutoBind(originalMethod, {
    name,
    addInitializer
  }) {
    addInitializer(function() {
      this[name] = originalMethod.bind(this);
    });
  }

  // node_modules/@shopify/draggable/build/esm/shared/utils/requestNextAnimationFrame/requestNextAnimationFrame.mjs
  function requestNextAnimationFrame(callback) {
    return requestAnimationFrame(() => {
      requestAnimationFrame(callback);
    });
  }

  // node_modules/@shopify/draggable/build/esm/Draggable/DragEvent/DragEvent.mjs
  var DragEvent = class extends AbstractEvent {
    constructor(data) {
      super(data);
      this.data = data;
    }
    get source() {
      return this.data.source;
    }
    get originalSource() {
      return this.data.originalSource;
    }
    get mirror() {
      return this.data.mirror;
    }
    get sourceContainer() {
      return this.data.sourceContainer;
    }
    get sensorEvent() {
      return this.data.sensorEvent;
    }
    get originalEvent() {
      if (this.sensorEvent) {
        return this.sensorEvent.originalEvent;
      }
      return null;
    }
  };
  DragEvent.type = "drag";
  var DragStartEvent = class extends DragEvent {
  };
  DragStartEvent.type = "drag:start";
  DragStartEvent.cancelable = true;
  var DragMoveEvent = class extends DragEvent {
  };
  DragMoveEvent.type = "drag:move";
  var DragOverEvent = class extends DragEvent {
    get overContainer() {
      return this.data.overContainer;
    }
    get over() {
      return this.data.over;
    }
  };
  DragOverEvent.type = "drag:over";
  DragOverEvent.cancelable = true;
  function isDragOverEvent(event) {
    return event.type === DragOverEvent.type;
  }
  var DragOutEvent = class extends DragEvent {
    get overContainer() {
      return this.data.overContainer;
    }
    get over() {
      return this.data.over;
    }
  };
  DragOutEvent.type = "drag:out";
  var DragOverContainerEvent = class extends DragEvent {
    get overContainer() {
      return this.data.overContainer;
    }
  };
  DragOverContainerEvent.type = "drag:over:container";
  var DragOutContainerEvent = class extends DragEvent {
    get overContainer() {
      return this.data.overContainer;
    }
  };
  DragOutContainerEvent.type = "drag:out:container";
  var DragPressureEvent = class extends DragEvent {
    get pressure() {
      return this.data.pressure;
    }
  };
  DragPressureEvent.type = "drag:pressure";
  var DragStopEvent = class extends DragEvent {
  };
  DragStopEvent.type = "drag:stop";
  DragStopEvent.cancelable = true;
  var DragStoppedEvent = class extends DragEvent {
  };
  DragStoppedEvent.type = "drag:stopped";

  // node_modules/@shopify/draggable/build/esm/Plugins/ResizeMirror/ResizeMirror.mjs
  var _initProto;
  var _class;
  var ResizeMirror = class extends AbstractPlugin {
    constructor(draggable) {
      _initProto(super(draggable));
      this.lastWidth = 0;
      this.lastHeight = 0;
      this.mirror = null;
    }
    attach() {
      this.draggable.on("mirror:created", this.onMirrorCreated).on("drag:over", this.onDragOver).on("drag:over:container", this.onDragOver);
    }
    detach() {
      this.draggable.off("mirror:created", this.onMirrorCreated).off("mirror:destroy", this.onMirrorDestroy).off("drag:over", this.onDragOver).off("drag:over:container", this.onDragOver);
    }
    getOptions() {
      return this.draggable.options.resizeMirror || {};
    }
    onMirrorCreated({
      mirror
    }) {
      this.mirror = mirror;
    }
    onMirrorDestroy() {
      this.mirror = null;
    }
    onDragOver(dragEvent) {
      this.resize(dragEvent);
    }
    resize(dragEvent) {
      requestAnimationFrame(() => {
        let over = null;
        const {
          overContainer
        } = dragEvent;
        if (this.mirror == null || this.mirror.parentNode == null) {
          return;
        }
        if (this.mirror.parentNode !== overContainer) {
          overContainer.appendChild(this.mirror);
        }
        if (isDragOverEvent(dragEvent)) {
          over = dragEvent.over;
        }
        const overElement = over || this.draggable.getDraggableElementsForContainer(overContainer)[0];
        if (!overElement) {
          return;
        }
        requestNextAnimationFrame(() => {
          const overRect = overElement.getBoundingClientRect();
          if (this.mirror == null || this.lastHeight === overRect.height && this.lastWidth === overRect.width) {
            return;
          }
          this.mirror.style.width = `${overRect.width}px`;
          this.mirror.style.height = `${overRect.height}px`;
          this.lastWidth = overRect.width;
          this.lastHeight = overRect.height;
        });
      });
    }
  };
  _class = ResizeMirror;
  [_initProto] = _applyDecs2305(_class, [[AutoBind, 2, "onMirrorCreated"], [AutoBind, 2, "onMirrorDestroy"], [AutoBind, 2, "onDragOver"]], [], 0, void 0, AbstractPlugin).e;

  // node_modules/@shopify/draggable/build/esm/Plugins/Snappable/SnappableEvent/SnappableEvent.mjs
  var SnapEvent = class extends AbstractEvent {
    get dragEvent() {
      return this.data.dragEvent;
    }
    get snappable() {
      return this.data.snappable;
    }
  };
  SnapEvent.type = "snap";
  var SnapInEvent = class extends SnapEvent {
  };
  SnapInEvent.type = "snap:in";
  SnapInEvent.cancelable = true;
  var SnapOutEvent = class extends SnapEvent {
  };
  SnapOutEvent.type = "snap:out";
  SnapOutEvent.cancelable = true;

  // node_modules/@shopify/draggable/build/esm/Plugins/Snappable/Snappable.mjs
  var onDragStart2 = Symbol("onDragStart");
  var onDragStop2 = Symbol("onDragStop");
  var onDragOver2 = Symbol("onDragOver");
  var onDragOut = Symbol("onDragOut");
  var onMirrorCreated = Symbol("onMirrorCreated");
  var onMirrorDestroy = Symbol("onMirrorDestroy");
  var Snappable = class extends AbstractPlugin {
    constructor(draggable) {
      super(draggable);
      this.firstSource = null;
      this.mirror = null;
      this[onDragStart2] = this[onDragStart2].bind(this);
      this[onDragStop2] = this[onDragStop2].bind(this);
      this[onDragOver2] = this[onDragOver2].bind(this);
      this[onDragOut] = this[onDragOut].bind(this);
      this[onMirrorCreated] = this[onMirrorCreated].bind(this);
      this[onMirrorDestroy] = this[onMirrorDestroy].bind(this);
    }
    attach() {
      this.draggable.on("drag:start", this[onDragStart2]).on("drag:stop", this[onDragStop2]).on("drag:over", this[onDragOver2]).on("drag:out", this[onDragOut]).on("droppable:over", this[onDragOver2]).on("droppable:out", this[onDragOut]).on("mirror:created", this[onMirrorCreated]).on("mirror:destroy", this[onMirrorDestroy]);
    }
    detach() {
      this.draggable.off("drag:start", this[onDragStart2]).off("drag:stop", this[onDragStop2]).off("drag:over", this[onDragOver2]).off("drag:out", this[onDragOut]).off("droppable:over", this[onDragOver2]).off("droppable:out", this[onDragOut]).off("mirror:created", this[onMirrorCreated]).off("mirror:destroy", this[onMirrorDestroy]);
    }
    [onDragStart2](event) {
      if (event.canceled()) {
        return;
      }
      this.firstSource = event.source;
    }
    [onDragStop2]() {
      this.firstSource = null;
    }
    [onDragOver2](event) {
      if (event.canceled()) {
        return;
      }
      const source = event.source || event.dragEvent.source;
      if (source === this.firstSource) {
        this.firstSource = null;
        return;
      }
      const snapInEvent = new SnapInEvent({
        dragEvent: event,
        snappable: event.over || event.droppable
      });
      this.draggable.trigger(snapInEvent);
      if (snapInEvent.canceled()) {
        return;
      }
      if (this.mirror) {
        this.mirror.style.display = "none";
      }
      source.classList.remove(...this.draggable.getClassNamesFor("source:dragging"));
      source.classList.add(...this.draggable.getClassNamesFor("source:placed"));
      setTimeout(() => {
        source.classList.remove(...this.draggable.getClassNamesFor("source:placed"));
      }, this.draggable.options.placedTimeout);
    }
    [onDragOut](event) {
      if (event.canceled()) {
        return;
      }
      const source = event.source || event.dragEvent.source;
      const snapOutEvent = new SnapOutEvent({
        dragEvent: event,
        snappable: event.over || event.droppable
      });
      this.draggable.trigger(snapOutEvent);
      if (snapOutEvent.canceled()) {
        return;
      }
      if (this.mirror) {
        this.mirror.style.display = "";
      }
      source.classList.add(...this.draggable.getClassNamesFor("source:dragging"));
    }
    [onMirrorCreated]({
      mirror
    }) {
      this.mirror = mirror;
    }
    [onMirrorDestroy]() {
      this.mirror = null;
    }
  };

  // node_modules/@shopify/draggable/build/esm/Plugins/SwapAnimation/SwapAnimation.mjs
  var _initProto2;
  var _class2;
  var defaultOptions = {
    duration: 150,
    easingFunction: "ease-in-out",
    horizontal: false
  };
  var SwapAnimation = class extends AbstractPlugin {
    constructor(draggable) {
      _initProto2(super(draggable));
      this.options = {
        ...defaultOptions,
        ...this.getOptions()
      };
      this.lastAnimationFrame = null;
    }
    attach() {
      this.draggable.on("sortable:sorted", this.onSortableSorted);
    }
    detach() {
      this.draggable.off("sortable:sorted", this.onSortableSorted);
    }
    getOptions() {
      return this.draggable.options.swapAnimation || {};
    }
    onSortableSorted({
      oldIndex,
      newIndex,
      dragEvent
    }) {
      const {
        source,
        over
      } = dragEvent;
      if (this.lastAnimationFrame) {
        cancelAnimationFrame(this.lastAnimationFrame);
      }
      this.lastAnimationFrame = requestAnimationFrame(() => {
        if (oldIndex >= newIndex) {
          animate(source, over, this.options);
        } else {
          animate(over, source, this.options);
        }
      });
    }
  };
  _class2 = SwapAnimation;
  [_initProto2] = _applyDecs2305(_class2, [[AutoBind, 2, "onSortableSorted"]], [], 0, void 0, AbstractPlugin).e;
  function animate(from, to, {
    duration,
    easingFunction,
    horizontal
  }) {
    for (const element of [from, to]) {
      element.style.pointerEvents = "none";
    }
    if (horizontal) {
      const width = from.offsetWidth;
      from.style.transform = `translate3d(${width}px, 0, 0)`;
      to.style.transform = `translate3d(-${width}px, 0, 0)`;
    } else {
      const height = from.offsetHeight;
      from.style.transform = `translate3d(0, ${height}px, 0)`;
      to.style.transform = `translate3d(0, -${height}px, 0)`;
    }
    requestAnimationFrame(() => {
      for (const element of [from, to]) {
        element.addEventListener("transitionend", resetElementOnTransitionEnd);
        element.style.transition = `transform ${duration}ms ${easingFunction}`;
        element.style.transform = "";
      }
    });
  }
  function resetElementOnTransitionEnd(event) {
    if (event.target == null || !isHTMLElement(event.target)) {
      return;
    }
    event.target.style.transition = "";
    event.target.style.pointerEvents = "";
    event.target.removeEventListener("transitionend", resetElementOnTransitionEnd);
  }
  function isHTMLElement(eventTarget) {
    return Boolean("style" in eventTarget);
  }

  // node_modules/@shopify/draggable/build/esm/Plugins/SortAnimation/SortAnimation.mjs
  var onSortableSorted = Symbol("onSortableSorted");
  var onSortableSort = Symbol("onSortableSort");
  var defaultOptions2 = {
    duration: 150,
    easingFunction: "ease-in-out"
  };
  var SortAnimation = class extends AbstractPlugin {
    constructor(draggable) {
      super(draggable);
      this.options = {
        ...defaultOptions2,
        ...this.getOptions()
      };
      this.lastAnimationFrame = null;
      this.lastElements = [];
      this[onSortableSorted] = this[onSortableSorted].bind(this);
      this[onSortableSort] = this[onSortableSort].bind(this);
    }
    attach() {
      this.draggable.on("sortable:sort", this[onSortableSort]);
      this.draggable.on("sortable:sorted", this[onSortableSorted]);
    }
    detach() {
      this.draggable.off("sortable:sort", this[onSortableSort]);
      this.draggable.off("sortable:sorted", this[onSortableSorted]);
    }
    getOptions() {
      return this.draggable.options.sortAnimation || {};
    }
    [onSortableSort]({
      dragEvent
    }) {
      const {
        sourceContainer
      } = dragEvent;
      const elements = this.draggable.getDraggableElementsForContainer(sourceContainer);
      this.lastElements = Array.from(elements).map((el) => {
        return {
          domEl: el,
          offsetTop: el.offsetTop,
          offsetLeft: el.offsetLeft
        };
      });
    }
    [onSortableSorted]({
      oldIndex,
      newIndex
    }) {
      if (oldIndex === newIndex) {
        return;
      }
      const effectedElements = [];
      let start;
      let end;
      let num;
      if (oldIndex > newIndex) {
        start = newIndex;
        end = oldIndex - 1;
        num = 1;
      } else {
        start = oldIndex + 1;
        end = newIndex;
        num = -1;
      }
      for (let i = start; i <= end; i++) {
        const from = this.lastElements[i];
        const to = this.lastElements[i + num];
        effectedElements.push({
          from,
          to
        });
      }
      cancelAnimationFrame(this.lastAnimationFrame);
      this.lastAnimationFrame = requestAnimationFrame(() => {
        effectedElements.forEach((element) => animate2(element, this.options));
      });
    }
  };
  function animate2({
    from,
    to
  }, {
    duration,
    easingFunction
  }) {
    const domEl = from.domEl;
    const x = from.offsetLeft - to.offsetLeft;
    const y = from.offsetTop - to.offsetTop;
    domEl.style.pointerEvents = "none";
    domEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    requestAnimationFrame(() => {
      domEl.addEventListener("transitionend", resetElementOnTransitionEnd2);
      domEl.style.transition = `transform ${duration}ms ${easingFunction}`;
      domEl.style.transform = "";
    });
  }
  function resetElementOnTransitionEnd2(event) {
    event.target.style.transition = "";
    event.target.style.pointerEvents = "";
    event.target.removeEventListener("transitionend", resetElementOnTransitionEnd2);
  }

  // node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Announcement/Announcement.mjs
  var onInitialize = Symbol("onInitialize");
  var onDestroy = Symbol("onDestroy");
  var announceEvent = Symbol("announceEvent");
  var announceMessage = Symbol("announceMessage");
  var ARIA_RELEVANT = "aria-relevant";
  var ARIA_ATOMIC = "aria-atomic";
  var ARIA_LIVE = "aria-live";
  var ROLE = "role";
  var defaultOptions4 = {
    expire: 7e3
  };
  var Announcement = class extends AbstractPlugin {
    constructor(draggable) {
      super(draggable);
      this.options = {
        ...defaultOptions4,
        ...this.getOptions()
      };
      this.originalTriggerMethod = this.draggable.trigger;
      this[onInitialize] = this[onInitialize].bind(this);
      this[onDestroy] = this[onDestroy].bind(this);
    }
    attach() {
      this.draggable.on("draggable:initialize", this[onInitialize]);
    }
    detach() {
      this.draggable.off("draggable:destroy", this[onDestroy]);
    }
    getOptions() {
      return this.draggable.options.announcements || {};
    }
    [announceEvent](event) {
      const message = this.options[event.type];
      if (message && typeof message === "string") {
        this[announceMessage](message);
      }
      if (message && typeof message === "function") {
        this[announceMessage](message(event));
      }
    }
    [announceMessage](message) {
      announce(message, {
        expire: this.options.expire
      });
    }
    [onInitialize]() {
      this.draggable.trigger = (event) => {
        try {
          this[announceEvent](event);
        } finally {
          this.originalTriggerMethod.call(this.draggable, event);
        }
      };
    }
    [onDestroy]() {
      this.draggable.trigger = this.originalTriggerMethod;
    }
  };
  var liveRegion = createRegion();
  function announce(message, {
    expire
  }) {
    const element = document.createElement("div");
    element.textContent = message;
    liveRegion.appendChild(element);
    return setTimeout(() => {
      liveRegion.removeChild(element);
    }, expire);
  }
  function createRegion() {
    const element = document.createElement("div");
    element.setAttribute("id", "draggable-live-region");
    element.setAttribute(ARIA_RELEVANT, "additions");
    element.setAttribute(ARIA_ATOMIC, "true");
    element.setAttribute(ARIA_LIVE, "assertive");
    element.setAttribute(ROLE, "log");
    element.style.position = "fixed";
    element.style.width = "1px";
    element.style.height = "1px";
    element.style.top = "-1px";
    element.style.overflow = "hidden";
    return element;
  }
  document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(liveRegion);
  });

  // node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Focusable/Focusable.mjs
  var onInitialize2 = Symbol("onInitialize");
  var onDestroy2 = Symbol("onDestroy");
  var defaultOptions5 = {};
  var Focusable = class extends AbstractPlugin {
    constructor(draggable) {
      super(draggable);
      this.options = {
        ...defaultOptions5,
        ...this.getOptions()
      };
      this[onInitialize2] = this[onInitialize2].bind(this);
      this[onDestroy2] = this[onDestroy2].bind(this);
    }
    attach() {
      this.draggable.on("draggable:initialize", this[onInitialize2]).on("draggable:destroy", this[onDestroy2]);
    }
    detach() {
      this.draggable.off("draggable:initialize", this[onInitialize2]).off("draggable:destroy", this[onDestroy2]);
      this[onDestroy2]();
    }
    getOptions() {
      return this.draggable.options.focusable || {};
    }
    getElements() {
      return [...this.draggable.containers, ...this.draggable.getDraggableElements()];
    }
    [onInitialize2]() {
      requestAnimationFrame(() => {
        this.getElements().forEach((element) => decorateElement(element));
      });
    }
    [onDestroy2]() {
      requestAnimationFrame(() => {
        this.getElements().forEach((element) => stripElement(element));
      });
    }
  };
  var elementsWithMissingTabIndex = [];
  function decorateElement(element) {
    const hasMissingTabIndex = Boolean(!element.getAttribute("tabindex") && element.tabIndex === -1);
    if (hasMissingTabIndex) {
      elementsWithMissingTabIndex.push(element);
      element.tabIndex = 0;
    }
  }
  function stripElement(element) {
    const tabIndexElementPosition = elementsWithMissingTabIndex.indexOf(element);
    if (tabIndexElementPosition !== -1) {
      element.tabIndex = -1;
      elementsWithMissingTabIndex.splice(tabIndexElementPosition, 1);
    }
  }

  // node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs
  var MirrorEvent = class extends AbstractEvent {
    constructor(data) {
      super(data);
      this.data = data;
    }
    get source() {
      return this.data.source;
    }
    get originalSource() {
      return this.data.originalSource;
    }
    get sourceContainer() {
      return this.data.sourceContainer;
    }
    get sensorEvent() {
      return this.data.sensorEvent;
    }
    get dragEvent() {
      return this.data.dragEvent;
    }
    get originalEvent() {
      if (this.sensorEvent) {
        return this.sensorEvent.originalEvent;
      }
      return null;
    }
  };
  var MirrorCreateEvent = class extends MirrorEvent {
  };
  MirrorCreateEvent.type = "mirror:create";
  var MirrorCreatedEvent = class extends MirrorEvent {
    get mirror() {
      return this.data.mirror;
    }
  };
  MirrorCreatedEvent.type = "mirror:created";
  var MirrorAttachedEvent = class extends MirrorEvent {
    get mirror() {
      return this.data.mirror;
    }
  };
  MirrorAttachedEvent.type = "mirror:attached";
  var MirrorMoveEvent = class extends MirrorEvent {
    get mirror() {
      return this.data.mirror;
    }
    get passedThreshX() {
      return this.data.passedThreshX;
    }
    get passedThreshY() {
      return this.data.passedThreshY;
    }
  };
  MirrorMoveEvent.type = "mirror:move";
  MirrorMoveEvent.cancelable = true;
  var MirrorMovedEvent = class extends MirrorEvent {
    get mirror() {
      return this.data.mirror;
    }
    get passedThreshX() {
      return this.data.passedThreshX;
    }
    get passedThreshY() {
      return this.data.passedThreshY;
    }
  };
  MirrorMovedEvent.type = "mirror:moved";
  var MirrorDestroyEvent = class extends MirrorEvent {
    get mirror() {
      return this.data.mirror;
    }
  };
  MirrorDestroyEvent.type = "mirror:destroy";
  MirrorDestroyEvent.cancelable = true;

  // node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/Mirror.mjs
  var onDragStart3 = Symbol("onDragStart");
  var onDragMove2 = Symbol("onDragMove");
  var onDragStop3 = Symbol("onDragStop");
  var onMirrorCreated2 = Symbol("onMirrorCreated");
  var onMirrorMove = Symbol("onMirrorMove");
  var onScroll = Symbol("onScroll");
  var getAppendableContainer = Symbol("getAppendableContainer");
  var defaultOptions6 = {
    constrainDimensions: false,
    xAxis: true,
    yAxis: true,
    cursorOffsetX: null,
    cursorOffsetY: null,
    thresholdX: null,
    thresholdY: null
  };
  var Mirror = class extends AbstractPlugin {
    constructor(draggable) {
      super(draggable);
      this.options = {
        ...defaultOptions6,
        ...this.getOptions()
      };
      this.scrollOffset = {
        x: 0,
        y: 0
      };
      this.initialScrollOffset = {
        x: window.scrollX,
        y: window.scrollY
      };
      this[onDragStart3] = this[onDragStart3].bind(this);
      this[onDragMove2] = this[onDragMove2].bind(this);
      this[onDragStop3] = this[onDragStop3].bind(this);
      this[onMirrorCreated2] = this[onMirrorCreated2].bind(this);
      this[onMirrorMove] = this[onMirrorMove].bind(this);
      this[onScroll] = this[onScroll].bind(this);
    }
    attach() {
      this.draggable.on("drag:start", this[onDragStart3]).on("drag:move", this[onDragMove2]).on("drag:stop", this[onDragStop3]).on("mirror:created", this[onMirrorCreated2]).on("mirror:move", this[onMirrorMove]);
    }
    detach() {
      this.draggable.off("drag:start", this[onDragStart3]).off("drag:move", this[onDragMove2]).off("drag:stop", this[onDragStop3]).off("mirror:created", this[onMirrorCreated2]).off("mirror:move", this[onMirrorMove]);
    }
    getOptions() {
      return this.draggable.options.mirror || {};
    }
    [onDragStart3](dragEvent) {
      if (dragEvent.canceled()) {
        return;
      }
      if ("ontouchstart" in window) {
        document.addEventListener("scroll", this[onScroll], true);
      }
      this.initialScrollOffset = {
        x: window.scrollX,
        y: window.scrollY
      };
      const {
        source,
        originalSource,
        sourceContainer,
        sensorEvent
      } = dragEvent;
      this.lastMirrorMovedClient = {
        x: sensorEvent.clientX,
        y: sensorEvent.clientY
      };
      const mirrorCreateEvent = new MirrorCreateEvent({
        source,
        originalSource,
        sourceContainer,
        sensorEvent,
        dragEvent
      });
      this.draggable.trigger(mirrorCreateEvent);
      if (isNativeDragEvent(sensorEvent) || mirrorCreateEvent.canceled()) {
        return;
      }
      const appendableContainer = this[getAppendableContainer](source) || sourceContainer;
      this.mirror = source.cloneNode(true);
      const mirrorCreatedEvent = new MirrorCreatedEvent({
        source,
        originalSource,
        sourceContainer,
        sensorEvent,
        dragEvent,
        mirror: this.mirror
      });
      const mirrorAttachedEvent = new MirrorAttachedEvent({
        source,
        originalSource,
        sourceContainer,
        sensorEvent,
        dragEvent,
        mirror: this.mirror
      });
      this.draggable.trigger(mirrorCreatedEvent);
      appendableContainer.appendChild(this.mirror);
      this.draggable.trigger(mirrorAttachedEvent);
    }
    [onDragMove2](dragEvent) {
      if (!this.mirror || dragEvent.canceled()) {
        return;
      }
      const {
        source,
        originalSource,
        sourceContainer,
        sensorEvent
      } = dragEvent;
      let passedThreshX = true;
      let passedThreshY = true;
      if (this.options.thresholdX || this.options.thresholdY) {
        const {
          x: lastX,
          y: lastY
        } = this.lastMirrorMovedClient;
        if (Math.abs(lastX - sensorEvent.clientX) < this.options.thresholdX) {
          passedThreshX = false;
        } else {
          this.lastMirrorMovedClient.x = sensorEvent.clientX;
        }
        if (Math.abs(lastY - sensorEvent.clientY) < this.options.thresholdY) {
          passedThreshY = false;
        } else {
          this.lastMirrorMovedClient.y = sensorEvent.clientY;
        }
        if (!passedThreshX && !passedThreshY) {
          return;
        }
      }
      const mirrorMoveEvent = new MirrorMoveEvent({
        source,
        originalSource,
        sourceContainer,
        sensorEvent,
        dragEvent,
        mirror: this.mirror,
        passedThreshX,
        passedThreshY
      });
      this.draggable.trigger(mirrorMoveEvent);
    }
    [onDragStop3](dragEvent) {
      if ("ontouchstart" in window) {
        document.removeEventListener("scroll", this[onScroll], true);
      }
      this.initialScrollOffset = {
        x: 0,
        y: 0
      };
      this.scrollOffset = {
        x: 0,
        y: 0
      };
      if (!this.mirror) {
        return;
      }
      const {
        source,
        sourceContainer,
        sensorEvent
      } = dragEvent;
      const mirrorDestroyEvent = new MirrorDestroyEvent({
        source,
        mirror: this.mirror,
        sourceContainer,
        sensorEvent,
        dragEvent
      });
      this.draggable.trigger(mirrorDestroyEvent);
      if (!mirrorDestroyEvent.canceled()) {
        this.mirror.remove();
      }
    }
    [onScroll]() {
      this.scrollOffset = {
        x: window.scrollX - this.initialScrollOffset.x,
        y: window.scrollY - this.initialScrollOffset.y
      };
    }
    [onMirrorCreated2]({
      mirror,
      source,
      sensorEvent
    }) {
      const mirrorClasses = this.draggable.getClassNamesFor("mirror");
      const setState = ({
        mirrorOffset,
        initialX,
        initialY,
        ...args
      }) => {
        this.mirrorOffset = mirrorOffset;
        this.initialX = initialX;
        this.initialY = initialY;
        this.lastMovedX = initialX;
        this.lastMovedY = initialY;
        return {
          mirrorOffset,
          initialX,
          initialY,
          ...args
        };
      };
      mirror.style.display = "none";
      const initialState = {
        mirror,
        source,
        sensorEvent,
        mirrorClasses,
        scrollOffset: this.scrollOffset,
        options: this.options,
        passedThreshX: true,
        passedThreshY: true
      };
      return Promise.resolve(initialState).then(computeMirrorDimensions).then(calculateMirrorOffset).then(resetMirror).then(addMirrorClasses).then(positionMirror({
        initial: true
      })).then(removeMirrorID).then(setState);
    }
    [onMirrorMove](mirrorEvent) {
      if (mirrorEvent.canceled()) {
        return null;
      }
      const setState = ({
        lastMovedX,
        lastMovedY,
        ...args
      }) => {
        this.lastMovedX = lastMovedX;
        this.lastMovedY = lastMovedY;
        return {
          lastMovedX,
          lastMovedY,
          ...args
        };
      };
      const triggerMoved = (args) => {
        const mirrorMovedEvent = new MirrorMovedEvent({
          source: mirrorEvent.source,
          originalSource: mirrorEvent.originalSource,
          sourceContainer: mirrorEvent.sourceContainer,
          sensorEvent: mirrorEvent.sensorEvent,
          dragEvent: mirrorEvent.dragEvent,
          mirror: this.mirror,
          passedThreshX: mirrorEvent.passedThreshX,
          passedThreshY: mirrorEvent.passedThreshY
        });
        this.draggable.trigger(mirrorMovedEvent);
        return args;
      };
      const initialState = {
        mirror: mirrorEvent.mirror,
        sensorEvent: mirrorEvent.sensorEvent,
        mirrorOffset: this.mirrorOffset,
        options: this.options,
        initialX: this.initialX,
        initialY: this.initialY,
        scrollOffset: this.scrollOffset,
        passedThreshX: mirrorEvent.passedThreshX,
        passedThreshY: mirrorEvent.passedThreshY,
        lastMovedX: this.lastMovedX,
        lastMovedY: this.lastMovedY
      };
      return Promise.resolve(initialState).then(positionMirror({
        raf: true
      })).then(setState).then(triggerMoved);
    }
    [getAppendableContainer](source) {
      const appendTo = this.options.appendTo;
      if (typeof appendTo === "string") {
        return document.querySelector(appendTo);
      } else if (appendTo instanceof HTMLElement) {
        return appendTo;
      } else if (typeof appendTo === "function") {
        return appendTo(source);
      } else {
        return source.parentNode;
      }
    }
  };
  function computeMirrorDimensions({
    source,
    ...args
  }) {
    return withPromise((resolve) => {
      const sourceRect = source.getBoundingClientRect();
      resolve({
        source,
        sourceRect,
        ...args
      });
    });
  }
  function calculateMirrorOffset({
    sensorEvent,
    sourceRect,
    options,
    ...args
  }) {
    return withPromise((resolve) => {
      const top = options.cursorOffsetY === null ? sensorEvent.clientY - sourceRect.top : options.cursorOffsetY;
      const left = options.cursorOffsetX === null ? sensorEvent.clientX - sourceRect.left : options.cursorOffsetX;
      const mirrorOffset = {
        top,
        left
      };
      resolve({
        sensorEvent,
        sourceRect,
        mirrorOffset,
        options,
        ...args
      });
    });
  }
  function resetMirror({
    mirror,
    source,
    options,
    ...args
  }) {
    return withPromise((resolve) => {
      let offsetHeight;
      let offsetWidth;
      if (options.constrainDimensions) {
        const computedSourceStyles = getComputedStyle(source);
        offsetHeight = computedSourceStyles.getPropertyValue("height");
        offsetWidth = computedSourceStyles.getPropertyValue("width");
      }
      mirror.style.display = null;
      mirror.style.position = "fixed";
      mirror.style.pointerEvents = "none";
      mirror.style.top = 0;
      mirror.style.left = 0;
      mirror.style.margin = 0;
      if (options.constrainDimensions) {
        mirror.style.height = offsetHeight;
        mirror.style.width = offsetWidth;
      }
      resolve({
        mirror,
        source,
        options,
        ...args
      });
    });
  }
  function addMirrorClasses({
    mirror,
    mirrorClasses,
    ...args
  }) {
    return withPromise((resolve) => {
      mirror.classList.add(...mirrorClasses);
      resolve({
        mirror,
        mirrorClasses,
        ...args
      });
    });
  }
  function removeMirrorID({
    mirror,
    ...args
  }) {
    return withPromise((resolve) => {
      mirror.removeAttribute("id");
      delete mirror.id;
      resolve({
        mirror,
        ...args
      });
    });
  }
  function positionMirror({
    withFrame = false,
    initial = false
  } = {}) {
    return ({
      mirror,
      sensorEvent,
      mirrorOffset,
      initialY,
      initialX,
      scrollOffset,
      options,
      passedThreshX,
      passedThreshY,
      lastMovedX,
      lastMovedY,
      ...args
    }) => {
      return withPromise((resolve) => {
        const result = {
          mirror,
          sensorEvent,
          mirrorOffset,
          options,
          ...args
        };
        if (mirrorOffset) {
          const x = passedThreshX ? Math.round((sensorEvent.clientX - mirrorOffset.left - scrollOffset.x) / (options.thresholdX || 1)) * (options.thresholdX || 1) : Math.round(lastMovedX);
          const y = passedThreshY ? Math.round((sensorEvent.clientY - mirrorOffset.top - scrollOffset.y) / (options.thresholdY || 1)) * (options.thresholdY || 1) : Math.round(lastMovedY);
          if (options.xAxis && options.yAxis || initial) {
            mirror.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          } else if (options.xAxis && !options.yAxis) {
            mirror.style.transform = `translate3d(${x}px, ${initialY}px, 0)`;
          } else if (options.yAxis && !options.xAxis) {
            mirror.style.transform = `translate3d(${initialX}px, ${y}px, 0)`;
          }
          if (initial) {
            result.initialX = x;
            result.initialY = y;
          }
          result.lastMovedX = x;
          result.lastMovedY = y;
        }
        resolve(result);
      }, {
        frame: withFrame
      });
    };
  }
  function withPromise(callback, {
    raf = false
  } = {}) {
    return new Promise((resolve, reject) => {
      if (raf) {
        requestAnimationFrame(() => {
          callback(resolve, reject);
        });
      } else {
        callback(resolve, reject);
      }
    });
  }
  function isNativeDragEvent(sensorEvent) {
    return /^drag/.test(sensorEvent.originalEvent.type);
  }

  // node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Scrollable/Scrollable.mjs
  var onDragStart4 = Symbol("onDragStart");
  var onDragMove3 = Symbol("onDragMove");
  var onDragStop4 = Symbol("onDragStop");
  var scroll = Symbol("scroll");
  var defaultOptions7 = {
    speed: 6,
    sensitivity: 50,
    scrollableElements: []
  };
  var Scrollable = class extends AbstractPlugin {
    constructor(draggable) {
      super(draggable);
      this.options = {
        ...defaultOptions7,
        ...this.getOptions()
      };
      this.currentMousePosition = null;
      this.scrollAnimationFrame = null;
      this.scrollableElement = null;
      this.findScrollableElementFrame = null;
      this[onDragStart4] = this[onDragStart4].bind(this);
      this[onDragMove3] = this[onDragMove3].bind(this);
      this[onDragStop4] = this[onDragStop4].bind(this);
      this[scroll] = this[scroll].bind(this);
    }
    attach() {
      this.draggable.on("drag:start", this[onDragStart4]).on("drag:move", this[onDragMove3]).on("drag:stop", this[onDragStop4]);
    }
    detach() {
      this.draggable.off("drag:start", this[onDragStart4]).off("drag:move", this[onDragMove3]).off("drag:stop", this[onDragStop4]);
    }
    getOptions() {
      return this.draggable.options.scrollable || {};
    }
    getScrollableElement(target) {
      if (this.hasDefinedScrollableElements()) {
        return closest(target, this.options.scrollableElements) || document.documentElement;
      } else {
        return closestScrollableElement(target);
      }
    }
    hasDefinedScrollableElements() {
      return Boolean(this.options.scrollableElements.length !== 0);
    }
    [onDragStart4](dragEvent) {
      this.findScrollableElementFrame = requestAnimationFrame(() => {
        this.scrollableElement = this.getScrollableElement(dragEvent.source);
      });
    }
    [onDragMove3](dragEvent) {
      this.findScrollableElementFrame = requestAnimationFrame(() => {
        this.scrollableElement = this.getScrollableElement(dragEvent.sensorEvent.target);
      });
      if (!this.scrollableElement) {
        return;
      }
      const sensorEvent = dragEvent.sensorEvent;
      const scrollOffset = {
        x: 0,
        y: 0
      };
      if ("ontouchstart" in window) {
        scrollOffset.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        scrollOffset.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
      }
      this.currentMousePosition = {
        clientX: sensorEvent.clientX - scrollOffset.x,
        clientY: sensorEvent.clientY - scrollOffset.y
      };
      this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
    }
    [onDragStop4]() {
      cancelAnimationFrame(this.scrollAnimationFrame);
      cancelAnimationFrame(this.findScrollableElementFrame);
      this.scrollableElement = null;
      this.scrollAnimationFrame = null;
      this.findScrollableElementFrame = null;
      this.currentMousePosition = null;
    }
    [scroll]() {
      if (!this.scrollableElement || !this.currentMousePosition) {
        return;
      }
      cancelAnimationFrame(this.scrollAnimationFrame);
      const {
        speed,
        sensitivity
      } = this.options;
      const rect = this.scrollableElement.getBoundingClientRect();
      const bottomCutOff = rect.bottom > window.innerHeight;
      const topCutOff = rect.top < 0;
      const cutOff = topCutOff || bottomCutOff;
      const documentScrollingElement = getDocumentScrollingElement();
      const scrollableElement = this.scrollableElement;
      const clientX = this.currentMousePosition.clientX;
      const clientY = this.currentMousePosition.clientY;
      if (scrollableElement !== document.body && scrollableElement !== document.documentElement && !cutOff) {
        const {
          offsetHeight,
          offsetWidth
        } = scrollableElement;
        if (rect.top + offsetHeight - clientY < sensitivity) {
          scrollableElement.scrollTop += speed;
        } else if (clientY - rect.top < sensitivity) {
          scrollableElement.scrollTop -= speed;
        }
        if (rect.left + offsetWidth - clientX < sensitivity) {
          scrollableElement.scrollLeft += speed;
        } else if (clientX - rect.left < sensitivity) {
          scrollableElement.scrollLeft -= speed;
        }
      } else {
        const {
          innerHeight,
          innerWidth
        } = window;
        if (clientY < sensitivity) {
          documentScrollingElement.scrollTop -= speed;
        } else if (innerHeight - clientY < sensitivity) {
          documentScrollingElement.scrollTop += speed;
        }
        if (clientX < sensitivity) {
          documentScrollingElement.scrollLeft -= speed;
        } else if (innerWidth - clientX < sensitivity) {
          documentScrollingElement.scrollLeft += speed;
        }
      }
      this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
    }
  };
  function hasOverflow(element) {
    const overflowRegex = /(auto|scroll)/;
    const computedStyles = getComputedStyle(element, null);
    const overflow = computedStyles.getPropertyValue("overflow") + computedStyles.getPropertyValue("overflow-y") + computedStyles.getPropertyValue("overflow-x");
    return overflowRegex.test(overflow);
  }
  function isStaticallyPositioned(element) {
    const position = getComputedStyle(element).getPropertyValue("position");
    return position === "static";
  }
  function closestScrollableElement(element) {
    if (!element) {
      return getDocumentScrollingElement();
    }
    const position = getComputedStyle(element).getPropertyValue("position");
    const excludeStaticParents = position === "absolute";
    const scrollableElement = closest(element, (parent) => {
      if (excludeStaticParents && isStaticallyPositioned(parent)) {
        return false;
      }
      return hasOverflow(parent);
    });
    if (position === "fixed" || !scrollableElement) {
      return getDocumentScrollingElement();
    } else {
      return scrollableElement;
    }
  }
  function getDocumentScrollingElement() {
    return document.scrollingElement || document.documentElement;
  }

  // node_modules/@shopify/draggable/build/esm/Draggable/Emitter/Emitter.mjs
  var Emitter = class {
    constructor() {
      this.callbacks = {};
    }
    on(type, ...callbacks) {
      if (!this.callbacks[type]) {
        this.callbacks[type] = [];
      }
      this.callbacks[type].push(...callbacks);
      return this;
    }
    off(type, callback) {
      if (!this.callbacks[type]) {
        return null;
      }
      const copy = this.callbacks[type].slice(0);
      for (let i = 0; i < copy.length; i++) {
        if (callback === copy[i]) {
          this.callbacks[type].splice(i, 1);
        }
      }
      return this;
    }
    trigger(event) {
      if (!this.callbacks[event.type]) {
        return null;
      }
      const callbacks = [...this.callbacks[event.type]];
      const caughtErrors = [];
      for (let i = callbacks.length - 1; i >= 0; i--) {
        const callback = callbacks[i];
        try {
          callback(event);
        } catch (error2) {
          caughtErrors.push(error2);
        }
      }
      if (caughtErrors.length) {
        console.error(`Draggable caught errors while triggering '${event.type}'`, caughtErrors);
      }
      return this;
    }
  };

  // node_modules/@shopify/draggable/build/esm/Draggable/DraggableEvent/DraggableEvent.mjs
  var DraggableEvent = class extends AbstractEvent {
    get draggable() {
      return this.data.draggable;
    }
  };
  DraggableEvent.type = "draggable";
  var DraggableInitializedEvent = class extends DraggableEvent {
  };
  DraggableInitializedEvent.type = "draggable:initialize";
  var DraggableDestroyEvent = class extends DraggableEvent {
  };
  DraggableDestroyEvent.type = "draggable:destroy";

  // node_modules/@shopify/draggable/build/esm/Draggable/Draggable.mjs
  var onDragStart5 = Symbol("onDragStart");
  var onDragMove4 = Symbol("onDragMove");
  var onDragStop5 = Symbol("onDragStop");
  var onDragPressure = Symbol("onDragPressure");
  var dragStop = Symbol("dragStop");
  var defaultAnnouncements = {
    "drag:start": (event) => `Picked up ${event.source.textContent.trim() || event.source.id || "draggable element"}`,
    "drag:stop": (event) => `Released ${event.source.textContent.trim() || event.source.id || "draggable element"}`
  };
  var defaultClasses = {
    "container:dragging": "draggable-container--is-dragging",
    "source:dragging": "draggable-source--is-dragging",
    "source:placed": "draggable-source--placed",
    "container:placed": "draggable-container--placed",
    "body:dragging": "draggable--is-dragging",
    "draggable:over": "draggable--over",
    "container:over": "draggable-container--over",
    "source:original": "draggable--original",
    mirror: "draggable-mirror"
  };
  var defaultOptions8 = {
    draggable: ".draggable-source",
    handle: null,
    delay: {},
    distance: 0,
    placedTimeout: 800,
    plugins: [],
    sensors: [],
    exclude: {
      plugins: [],
      sensors: []
    }
  };
  var Draggable = class _Draggable {
    constructor(containers = [document.body], options = {}) {
      if (containers instanceof NodeList || containers instanceof Array) {
        this.containers = [...containers];
      } else if (containers instanceof HTMLElement) {
        this.containers = [containers];
      } else {
        throw new Error("Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`");
      }
      this.options = {
        ...defaultOptions8,
        ...options,
        classes: {
          ...defaultClasses,
          ...options.classes || {}
        },
        announcements: {
          ...defaultAnnouncements,
          ...options.announcements || {}
        },
        exclude: {
          plugins: options.exclude && options.exclude.plugins || [],
          sensors: options.exclude && options.exclude.sensors || []
        }
      };
      this.emitter = new Emitter();
      this.dragging = false;
      this.plugins = [];
      this.sensors = [];
      this[onDragStart5] = this[onDragStart5].bind(this);
      this[onDragMove4] = this[onDragMove4].bind(this);
      this[onDragStop5] = this[onDragStop5].bind(this);
      this[onDragPressure] = this[onDragPressure].bind(this);
      this[dragStop] = this[dragStop].bind(this);
      document.addEventListener("drag:start", this[onDragStart5], true);
      document.addEventListener("drag:move", this[onDragMove4], true);
      document.addEventListener("drag:stop", this[onDragStop5], true);
      document.addEventListener("drag:pressure", this[onDragPressure], true);
      const defaultPlugins = Object.values(_Draggable.Plugins).filter((Plugin) => !this.options.exclude.plugins.includes(Plugin));
      const defaultSensors = Object.values(_Draggable.Sensors).filter((sensor) => !this.options.exclude.sensors.includes(sensor));
      this.addPlugin(...[...defaultPlugins, ...this.options.plugins]);
      this.addSensor(...[...defaultSensors, ...this.options.sensors]);
      const draggableInitializedEvent = new DraggableInitializedEvent({
        draggable: this
      });
      this.on("mirror:created", ({
        mirror
      }) => this.mirror = mirror);
      this.on("mirror:destroy", () => this.mirror = null);
      this.trigger(draggableInitializedEvent);
    }
    destroy() {
      document.removeEventListener("drag:start", this[onDragStart5], true);
      document.removeEventListener("drag:move", this[onDragMove4], true);
      document.removeEventListener("drag:stop", this[onDragStop5], true);
      document.removeEventListener("drag:pressure", this[onDragPressure], true);
      const draggableDestroyEvent = new DraggableDestroyEvent({
        draggable: this
      });
      this.trigger(draggableDestroyEvent);
      this.removePlugin(...this.plugins.map((plugin) => plugin.constructor));
      this.removeSensor(...this.sensors.map((sensor) => sensor.constructor));
    }
    addPlugin(...plugins) {
      const activePlugins = plugins.map((Plugin) => new Plugin(this));
      activePlugins.forEach((plugin) => plugin.attach());
      this.plugins = [...this.plugins, ...activePlugins];
      return this;
    }
    removePlugin(...plugins) {
      const removedPlugins = this.plugins.filter((plugin) => plugins.includes(plugin.constructor));
      removedPlugins.forEach((plugin) => plugin.detach());
      this.plugins = this.plugins.filter((plugin) => !plugins.includes(plugin.constructor));
      return this;
    }
    addSensor(...sensors) {
      const activeSensors = sensors.map((Sensor2) => new Sensor2(this.containers, this.options));
      activeSensors.forEach((sensor) => sensor.attach());
      this.sensors = [...this.sensors, ...activeSensors];
      return this;
    }
    removeSensor(...sensors) {
      const removedSensors = this.sensors.filter((sensor) => sensors.includes(sensor.constructor));
      removedSensors.forEach((sensor) => sensor.detach());
      this.sensors = this.sensors.filter((sensor) => !sensors.includes(sensor.constructor));
      return this;
    }
    addContainer(...containers) {
      this.containers = [...this.containers, ...containers];
      this.sensors.forEach((sensor) => sensor.addContainer(...containers));
      return this;
    }
    removeContainer(...containers) {
      this.containers = this.containers.filter((container) => !containers.includes(container));
      this.sensors.forEach((sensor) => sensor.removeContainer(...containers));
      return this;
    }
    on(type, ...callbacks) {
      this.emitter.on(type, ...callbacks);
      return this;
    }
    off(type, callback) {
      this.emitter.off(type, callback);
      return this;
    }
    trigger(event) {
      this.emitter.trigger(event);
      return this;
    }
    getClassNameFor(name) {
      return this.getClassNamesFor(name)[0];
    }
    getClassNamesFor(name) {
      const classNames = this.options.classes[name];
      if (classNames instanceof Array) {
        return classNames;
      } else if (typeof classNames === "string" || classNames instanceof String) {
        return [classNames];
      } else {
        return [];
      }
    }
    isDragging() {
      return Boolean(this.dragging);
    }
    getDraggableElements() {
      return this.containers.reduce((current, container) => {
        return [...current, ...this.getDraggableElementsForContainer(container)];
      }, []);
    }
    getDraggableElementsForContainer(container) {
      const allDraggableElements = container.querySelectorAll(this.options.draggable);
      return [...allDraggableElements].filter((childElement) => {
        return childElement !== this.originalSource && childElement !== this.mirror;
      });
    }
    cancel() {
      this[dragStop]();
    }
    [onDragStart5](event) {
      const sensorEvent = getSensorEvent(event);
      const {
        target,
        container,
        originalSource
      } = sensorEvent;
      if (!this.containers.includes(container)) {
        return;
      }
      if (this.options.handle && target && !closest(target, this.options.handle)) {
        sensorEvent.cancel();
        return;
      }
      this.originalSource = originalSource;
      this.sourceContainer = container;
      if (this.lastPlacedSource && this.lastPlacedContainer) {
        clearTimeout(this.placedTimeoutID);
        this.lastPlacedSource.classList.remove(...this.getClassNamesFor("source:placed"));
        this.lastPlacedContainer.classList.remove(...this.getClassNamesFor("container:placed"));
      }
      this.source = this.originalSource.cloneNode(true);
      this.originalSource.parentNode.insertBefore(this.source, this.originalSource);
      this.originalSource.style.display = "none";
      const dragStartEvent = new DragStartEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent
      });
      this.trigger(dragStartEvent);
      this.dragging = !dragStartEvent.canceled();
      if (dragStartEvent.canceled()) {
        this.source.remove();
        this.originalSource.style.display = null;
        return;
      }
      this.originalSource.classList.add(...this.getClassNamesFor("source:original"));
      this.source.classList.add(...this.getClassNamesFor("source:dragging"));
      this.sourceContainer.classList.add(...this.getClassNamesFor("container:dragging"));
      document.body.classList.add(...this.getClassNamesFor("body:dragging"));
      applyUserSelect(document.body, "none");
      requestAnimationFrame(() => {
        const oldSensorEvent = getSensorEvent(event);
        const newSensorEvent = oldSensorEvent.clone({
          target: this.source
        });
        this[onDragMove4]({
          ...event,
          detail: newSensorEvent
        });
      });
    }
    [onDragMove4](event) {
      if (!this.dragging) {
        return;
      }
      const sensorEvent = getSensorEvent(event);
      const {
        container
      } = sensorEvent;
      let target = sensorEvent.target;
      const dragMoveEvent = new DragMoveEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent
      });
      this.trigger(dragMoveEvent);
      if (dragMoveEvent.canceled()) {
        sensorEvent.cancel();
      }
      target = closest(target, this.options.draggable);
      const withinCorrectContainer = closest(sensorEvent.target, this.containers);
      const overContainer = sensorEvent.overContainer || withinCorrectContainer;
      const isLeavingContainer = this.currentOverContainer && overContainer !== this.currentOverContainer;
      const isLeavingDraggable = this.currentOver && target !== this.currentOver;
      const isOverContainer = overContainer && this.currentOverContainer !== overContainer;
      const isOverDraggable = withinCorrectContainer && target && this.currentOver !== target;
      if (isLeavingDraggable) {
        const dragOutEvent = new DragOutEvent({
          source: this.source,
          originalSource: this.originalSource,
          sourceContainer: container,
          sensorEvent,
          over: this.currentOver,
          overContainer: this.currentOverContainer
        });
        this.currentOver.classList.remove(...this.getClassNamesFor("draggable:over"));
        this.currentOver = null;
        this.trigger(dragOutEvent);
      }
      if (isLeavingContainer) {
        const dragOutContainerEvent = new DragOutContainerEvent({
          source: this.source,
          originalSource: this.originalSource,
          sourceContainer: container,
          sensorEvent,
          overContainer: this.currentOverContainer
        });
        this.currentOverContainer.classList.remove(...this.getClassNamesFor("container:over"));
        this.currentOverContainer = null;
        this.trigger(dragOutContainerEvent);
      }
      if (isOverContainer) {
        overContainer.classList.add(...this.getClassNamesFor("container:over"));
        const dragOverContainerEvent = new DragOverContainerEvent({
          source: this.source,
          originalSource: this.originalSource,
          sourceContainer: container,
          sensorEvent,
          overContainer
        });
        this.currentOverContainer = overContainer;
        this.trigger(dragOverContainerEvent);
      }
      if (isOverDraggable) {
        target.classList.add(...this.getClassNamesFor("draggable:over"));
        const dragOverEvent = new DragOverEvent({
          source: this.source,
          originalSource: this.originalSource,
          sourceContainer: container,
          sensorEvent,
          overContainer,
          over: target
        });
        this.currentOver = target;
        this.trigger(dragOverEvent);
      }
    }
    [dragStop](event) {
      if (!this.dragging) {
        return;
      }
      this.dragging = false;
      const dragStopEvent = new DragStopEvent({
        source: this.source,
        originalSource: this.originalSource,
        sensorEvent: event ? event.sensorEvent : null,
        sourceContainer: this.sourceContainer
      });
      this.trigger(dragStopEvent);
      if (!dragStopEvent.canceled())
        this.source.parentNode.insertBefore(this.originalSource, this.source);
      this.source.remove();
      this.originalSource.style.display = "";
      this.source.classList.remove(...this.getClassNamesFor("source:dragging"));
      this.originalSource.classList.remove(...this.getClassNamesFor("source:original"));
      this.originalSource.classList.add(...this.getClassNamesFor("source:placed"));
      this.sourceContainer.classList.add(...this.getClassNamesFor("container:placed"));
      this.sourceContainer.classList.remove(...this.getClassNamesFor("container:dragging"));
      document.body.classList.remove(...this.getClassNamesFor("body:dragging"));
      applyUserSelect(document.body, "");
      if (this.currentOver) {
        this.currentOver.classList.remove(...this.getClassNamesFor("draggable:over"));
      }
      if (this.currentOverContainer) {
        this.currentOverContainer.classList.remove(...this.getClassNamesFor("container:over"));
      }
      this.lastPlacedSource = this.originalSource;
      this.lastPlacedContainer = this.sourceContainer;
      this.placedTimeoutID = setTimeout(() => {
        if (this.lastPlacedSource) {
          this.lastPlacedSource.classList.remove(...this.getClassNamesFor("source:placed"));
        }
        if (this.lastPlacedContainer) {
          this.lastPlacedContainer.classList.remove(...this.getClassNamesFor("container:placed"));
        }
        this.lastPlacedSource = null;
        this.lastPlacedContainer = null;
      }, this.options.placedTimeout);
      const dragStoppedEvent = new DragStoppedEvent({
        source: this.source,
        originalSource: this.originalSource,
        sensorEvent: event ? event.sensorEvent : null,
        sourceContainer: this.sourceContainer
      });
      this.trigger(dragStoppedEvent);
      this.source = null;
      this.originalSource = null;
      this.currentOverContainer = null;
      this.currentOver = null;
      this.sourceContainer = null;
    }
    [onDragStop5](event) {
      this[dragStop](event);
    }
    [onDragPressure](event) {
      if (!this.dragging) {
        return;
      }
      const sensorEvent = getSensorEvent(event);
      const source = this.source || closest(sensorEvent.originalEvent.target, this.options.draggable);
      const dragPressureEvent = new DragPressureEvent({
        sensorEvent,
        source,
        pressure: sensorEvent.pressure
      });
      this.trigger(dragPressureEvent);
    }
  };
  Draggable.Plugins = {
    Announcement,
    Focusable,
    Mirror,
    Scrollable
  };
  Draggable.Sensors = {
    MouseSensor,
    TouchSensor
  };
  function getSensorEvent(event) {
    return event.detail;
  }
  function applyUserSelect(element, value) {
    element.style.webkitUserSelect = value;
    element.style.mozUserSelect = value;
    element.style.msUserSelect = value;
    element.style.oUserSelect = value;
    element.style.userSelect = value;
  }

  // node_modules/@shopify/draggable/build/esm/Droppable/DroppableEvent/DroppableEvent.mjs
  var DroppableEvent = class extends AbstractEvent {
    constructor(data) {
      super(data);
      this.data = data;
    }
    get dragEvent() {
      return this.data.dragEvent;
    }
  };
  DroppableEvent.type = "droppable";
  var DroppableStartEvent = class extends DroppableEvent {
    get dropzone() {
      return this.data.dropzone;
    }
  };
  DroppableStartEvent.type = "droppable:start";
  DroppableStartEvent.cancelable = true;
  var DroppableDroppedEvent = class extends DroppableEvent {
    get dropzone() {
      return this.data.dropzone;
    }
  };
  DroppableDroppedEvent.type = "droppable:dropped";
  DroppableDroppedEvent.cancelable = true;
  var DroppableReturnedEvent = class extends DroppableEvent {
    get dropzone() {
      return this.data.dropzone;
    }
  };
  DroppableReturnedEvent.type = "droppable:returned";
  DroppableReturnedEvent.cancelable = true;
  var DroppableStopEvent = class extends DroppableEvent {
    get dropzone() {
      return this.data.dropzone;
    }
  };
  DroppableStopEvent.type = "droppable:stop";
  DroppableStopEvent.cancelable = true;

  // node_modules/@shopify/draggable/build/esm/Droppable/Droppable.mjs
  var onDragStart6 = Symbol("onDragStart");
  var onDragMove5 = Symbol("onDragMove");
  var onDragStop6 = Symbol("onDragStop");
  var dropInDropzone = Symbol("dropInDropZone");
  var returnToOriginalDropzone = Symbol("returnToOriginalDropzone");
  var closestDropzone = Symbol("closestDropzone");
  var getDropzones = Symbol("getDropzones");
  function onDroppableDroppedDefaultAnnouncement({
    dragEvent,
    dropzone
  }) {
    const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || "draggable element";
    const dropzoneText = dropzone.textContent.trim() || dropzone.id || "droppable element";
    return `Dropped ${sourceText} into ${dropzoneText}`;
  }
  function onDroppableReturnedDefaultAnnouncement({
    dragEvent,
    dropzone
  }) {
    const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || "draggable element";
    const dropzoneText = dropzone.textContent.trim() || dropzone.id || "droppable element";
    return `Returned ${sourceText} from ${dropzoneText}`;
  }
  var defaultAnnouncements2 = {
    "droppable:dropped": onDroppableDroppedDefaultAnnouncement,
    "droppable:returned": onDroppableReturnedDefaultAnnouncement
  };
  var defaultClasses2 = {
    "droppable:active": "draggable-dropzone--active",
    "droppable:occupied": "draggable-dropzone--occupied"
  };
  var defaultOptions9 = {
    dropzone: ".draggable-droppable"
  };
  var Droppable = class extends Draggable {
    constructor(containers = [], options = {}) {
      super(containers, {
        ...defaultOptions9,
        ...options,
        classes: {
          ...defaultClasses2,
          ...options.classes || {}
        },
        announcements: {
          ...defaultAnnouncements2,
          ...options.announcements || {}
        }
      });
      this.dropzones = null;
      this.lastDropzone = null;
      this.initialDropzone = null;
      this[onDragStart6] = this[onDragStart6].bind(this);
      this[onDragMove5] = this[onDragMove5].bind(this);
      this[onDragStop6] = this[onDragStop6].bind(this);
      this.on("drag:start", this[onDragStart6]).on("drag:move", this[onDragMove5]).on("drag:stop", this[onDragStop6]);
    }
    destroy() {
      super.destroy();
      this.off("drag:start", this[onDragStart6]).off("drag:move", this[onDragMove5]).off("drag:stop", this[onDragStop6]);
    }
    [onDragStart6](event) {
      if (event.canceled()) {
        return;
      }
      this.dropzones = [...this[getDropzones]()];
      const dropzone = closest(event.sensorEvent.target, this.options.dropzone);
      if (!dropzone) {
        event.cancel();
        return;
      }
      const droppableStartEvent = new DroppableStartEvent({
        dragEvent: event,
        dropzone
      });
      this.trigger(droppableStartEvent);
      if (droppableStartEvent.canceled()) {
        event.cancel();
        return;
      }
      this.initialDropzone = dropzone;
      for (const dropzoneElement of this.dropzones) {
        if (dropzoneElement.classList.contains(this.getClassNameFor("droppable:occupied"))) {
          continue;
        }
        dropzoneElement.classList.add(...this.getClassNamesFor("droppable:active"));
      }
    }
    [onDragMove5](event) {
      if (event.canceled()) {
        return;
      }
      const dropzone = this[closestDropzone](event.sensorEvent.target);
      const overEmptyDropzone = dropzone && !dropzone.classList.contains(this.getClassNameFor("droppable:occupied"));
      if (overEmptyDropzone && this[dropInDropzone](event, dropzone)) {
        this.lastDropzone = dropzone;
      } else if ((!dropzone || dropzone === this.initialDropzone) && this.lastDropzone) {
        this[returnToOriginalDropzone](event);
        this.lastDropzone = null;
      }
    }
    [onDragStop6](event) {
      const droppableStopEvent = new DroppableStopEvent({
        dragEvent: event,
        dropzone: this.lastDropzone || this.initialDropzone
      });
      this.trigger(droppableStopEvent);
      const occupiedClasses = this.getClassNamesFor("droppable:occupied");
      for (const dropzone of this.dropzones) {
        dropzone.classList.remove(...this.getClassNamesFor("droppable:active"));
      }
      if (this.lastDropzone && this.lastDropzone !== this.initialDropzone) {
        this.initialDropzone.classList.remove(...occupiedClasses);
      }
      this.dropzones = null;
      this.lastDropzone = null;
      this.initialDropzone = null;
    }
    [dropInDropzone](event, dropzone) {
      const droppableDroppedEvent = new DroppableDroppedEvent({
        dragEvent: event,
        dropzone
      });
      this.trigger(droppableDroppedEvent);
      if (droppableDroppedEvent.canceled()) {
        return false;
      }
      const occupiedClasses = this.getClassNamesFor("droppable:occupied");
      if (this.lastDropzone) {
        this.lastDropzone.classList.remove(...occupiedClasses);
      }
      dropzone.appendChild(event.source);
      dropzone.classList.add(...occupiedClasses);
      return true;
    }
    [returnToOriginalDropzone](event) {
      const droppableReturnedEvent = new DroppableReturnedEvent({
        dragEvent: event,
        dropzone: this.lastDropzone
      });
      this.trigger(droppableReturnedEvent);
      if (droppableReturnedEvent.canceled()) {
        return;
      }
      this.initialDropzone.appendChild(event.source);
      this.lastDropzone.classList.remove(...this.getClassNamesFor("droppable:occupied"));
    }
    [closestDropzone](target) {
      if (!this.dropzones) {
        return null;
      }
      return closest(target, this.dropzones);
    }
    [getDropzones]() {
      const dropzone = this.options.dropzone;
      if (typeof dropzone === "string") {
        return document.querySelectorAll(dropzone);
      } else if (dropzone instanceof NodeList || dropzone instanceof Array) {
        return dropzone;
      } else if (typeof dropzone === "function") {
        return dropzone();
      } else {
        return [];
      }
    }
  };

  // node_modules/@shopify/draggable/build/esm/Swappable/SwappableEvent/SwappableEvent.mjs
  var SwappableEvent = class extends AbstractEvent {
    constructor(data) {
      super(data);
      this.data = data;
    }
    get dragEvent() {
      return this.data.dragEvent;
    }
  };
  SwappableEvent.type = "swappable";
  var SwappableStartEvent = class extends SwappableEvent {
  };
  SwappableStartEvent.type = "swappable:start";
  SwappableStartEvent.cancelable = true;
  var SwappableSwapEvent = class extends SwappableEvent {
    get over() {
      return this.data.over;
    }
    get overContainer() {
      return this.data.overContainer;
    }
  };
  SwappableSwapEvent.type = "swappable:swap";
  SwappableSwapEvent.cancelable = true;
  var SwappableSwappedEvent = class extends SwappableEvent {
    get swappedElement() {
      return this.data.swappedElement;
    }
  };
  SwappableSwappedEvent.type = "swappable:swapped";
  var SwappableStopEvent = class extends SwappableEvent {
  };
  SwappableStopEvent.type = "swappable:stop";

  // node_modules/@shopify/draggable/build/esm/Swappable/Swappable.mjs
  var onDragStart7 = Symbol("onDragStart");
  var onDragOver3 = Symbol("onDragOver");
  var onDragStop7 = Symbol("onDragStop");
  function onSwappableSwappedDefaultAnnouncement({
    dragEvent,
    swappedElement
  }) {
    const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || "swappable element";
    const overText = swappedElement.textContent.trim() || swappedElement.id || "swappable element";
    return `Swapped ${sourceText} with ${overText}`;
  }
  var defaultAnnouncements3 = {
    "swappabled:swapped": onSwappableSwappedDefaultAnnouncement
  };
  var Swappable = class extends Draggable {
    constructor(containers = [], options = {}) {
      super(containers, {
        ...options,
        announcements: {
          ...defaultAnnouncements3,
          ...options.announcements || {}
        }
      });
      this.lastOver = null;
      this[onDragStart7] = this[onDragStart7].bind(this);
      this[onDragOver3] = this[onDragOver3].bind(this);
      this[onDragStop7] = this[onDragStop7].bind(this);
      this.on("drag:start", this[onDragStart7]).on("drag:over", this[onDragOver3]).on("drag:stop", this[onDragStop7]);
    }
    destroy() {
      super.destroy();
      this.off("drag:start", this._onDragStart).off("drag:over", this._onDragOver).off("drag:stop", this._onDragStop);
    }
    [onDragStart7](event) {
      const swappableStartEvent = new SwappableStartEvent({
        dragEvent: event
      });
      this.trigger(swappableStartEvent);
      if (swappableStartEvent.canceled()) {
        event.cancel();
      }
    }
    [onDragOver3](event) {
      if (event.over === event.originalSource || event.over === event.source || event.canceled()) {
        return;
      }
      const swappableSwapEvent = new SwappableSwapEvent({
        dragEvent: event,
        over: event.over,
        overContainer: event.overContainer
      });
      this.trigger(swappableSwapEvent);
      if (swappableSwapEvent.canceled()) {
        return;
      }
      if (this.lastOver && this.lastOver !== event.over) {
        swap(this.lastOver, event.source);
      }
      if (this.lastOver === event.over) {
        this.lastOver = null;
      } else {
        this.lastOver = event.over;
      }
      swap(event.source, event.over);
      const swappableSwappedEvent = new SwappableSwappedEvent({
        dragEvent: event,
        swappedElement: event.over
      });
      this.trigger(swappableSwappedEvent);
    }
    [onDragStop7](event) {
      const swappableStopEvent = new SwappableStopEvent({
        dragEvent: event
      });
      this.trigger(swappableStopEvent);
      this.lastOver = null;
    }
  };
  function withTempElement(callback) {
    const tmpElement = document.createElement("div");
    callback(tmpElement);
    tmpElement.remove();
  }
  function swap(source, over) {
    const overParent = over.parentNode;
    const sourceParent = source.parentNode;
    withTempElement((tmpElement) => {
      sourceParent.insertBefore(tmpElement, source);
      overParent.insertBefore(source, over);
      sourceParent.insertBefore(over, tmpElement);
    });
  }

  // node_modules/@shopify/draggable/build/esm/Sortable/SortableEvent/SortableEvent.mjs
  var SortableEvent = class extends AbstractEvent {
    constructor(data) {
      super(data);
      this.data = data;
    }
    get dragEvent() {
      return this.data.dragEvent;
    }
  };
  SortableEvent.type = "sortable";
  var SortableStartEvent = class extends SortableEvent {
    get startIndex() {
      return this.data.startIndex;
    }
    get startContainer() {
      return this.data.startContainer;
    }
  };
  SortableStartEvent.type = "sortable:start";
  SortableStartEvent.cancelable = true;
  var SortableSortEvent = class extends SortableEvent {
    get currentIndex() {
      return this.data.currentIndex;
    }
    get over() {
      return this.data.over;
    }
    get overContainer() {
      return this.data.dragEvent.overContainer;
    }
  };
  SortableSortEvent.type = "sortable:sort";
  SortableSortEvent.cancelable = true;
  var SortableSortedEvent = class extends SortableEvent {
    get oldIndex() {
      return this.data.oldIndex;
    }
    get newIndex() {
      return this.data.newIndex;
    }
    get oldContainer() {
      return this.data.oldContainer;
    }
    get newContainer() {
      return this.data.newContainer;
    }
  };
  SortableSortedEvent.type = "sortable:sorted";
  var SortableStopEvent = class extends SortableEvent {
    get oldIndex() {
      return this.data.oldIndex;
    }
    get newIndex() {
      return this.data.newIndex;
    }
    get oldContainer() {
      return this.data.oldContainer;
    }
    get newContainer() {
      return this.data.newContainer;
    }
  };
  SortableStopEvent.type = "sortable:stop";

  // node_modules/@shopify/draggable/build/esm/Sortable/Sortable.mjs
  var onDragStart8 = Symbol("onDragStart");
  var onDragOverContainer = Symbol("onDragOverContainer");
  var onDragOver4 = Symbol("onDragOver");
  var onDragStop8 = Symbol("onDragStop");
  function onSortableSortedDefaultAnnouncement({
    dragEvent
  }) {
    const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || "sortable element";
    if (dragEvent.over) {
      const overText = dragEvent.over.textContent.trim() || dragEvent.over.id || "sortable element";
      const isFollowing = dragEvent.source.compareDocumentPosition(dragEvent.over) & Node.DOCUMENT_POSITION_FOLLOWING;
      if (isFollowing) {
        return `Placed ${sourceText} after ${overText}`;
      } else {
        return `Placed ${sourceText} before ${overText}`;
      }
    } else {
      return `Placed ${sourceText} into a different container`;
    }
  }
  var defaultAnnouncements4 = {
    "sortable:sorted": onSortableSortedDefaultAnnouncement
  };
  var Sortable = class extends Draggable {
    constructor(containers = [], options = {}) {
      super(containers, {
        ...options,
        announcements: {
          ...defaultAnnouncements4,
          ...options.announcements || {}
        }
      });
      this.startIndex = null;
      this.startContainer = null;
      this[onDragStart8] = this[onDragStart8].bind(this);
      this[onDragOverContainer] = this[onDragOverContainer].bind(this);
      this[onDragOver4] = this[onDragOver4].bind(this);
      this[onDragStop8] = this[onDragStop8].bind(this);
      this.on("drag:start", this[onDragStart8]).on("drag:over:container", this[onDragOverContainer]).on("drag:over", this[onDragOver4]).on("drag:stop", this[onDragStop8]);
    }
    destroy() {
      super.destroy();
      this.off("drag:start", this[onDragStart8]).off("drag:over:container", this[onDragOverContainer]).off("drag:over", this[onDragOver4]).off("drag:stop", this[onDragStop8]);
    }
    index(element) {
      return this.getSortableElementsForContainer(element.parentNode).indexOf(element);
    }
    getSortableElementsForContainer(container) {
      const allSortableElements = container.querySelectorAll(this.options.draggable);
      return [...allSortableElements].filter((childElement) => {
        return childElement !== this.originalSource && childElement !== this.mirror && childElement.parentNode === container;
      });
    }
    [onDragStart8](event) {
      this.startContainer = event.source.parentNode;
      this.startIndex = this.index(event.source);
      const sortableStartEvent = new SortableStartEvent({
        dragEvent: event,
        startIndex: this.startIndex,
        startContainer: this.startContainer
      });
      this.trigger(sortableStartEvent);
      if (sortableStartEvent.canceled()) {
        event.cancel();
      }
    }
    [onDragOverContainer](event) {
      if (event.canceled()) {
        return;
      }
      const {
        source,
        over,
        overContainer
      } = event;
      const oldIndex = this.index(source);
      const sortableSortEvent = new SortableSortEvent({
        dragEvent: event,
        currentIndex: oldIndex,
        source,
        over
      });
      this.trigger(sortableSortEvent);
      if (sortableSortEvent.canceled()) {
        return;
      }
      const children = this.getSortableElementsForContainer(overContainer);
      const moves = move({
        source,
        over,
        overContainer,
        children
      });
      if (!moves) {
        return;
      }
      const {
        oldContainer,
        newContainer
      } = moves;
      const newIndex = this.index(event.source);
      const sortableSortedEvent = new SortableSortedEvent({
        dragEvent: event,
        oldIndex,
        newIndex,
        oldContainer,
        newContainer
      });
      this.trigger(sortableSortedEvent);
    }
    [onDragOver4](event) {
      if (event.over === event.originalSource || event.over === event.source) {
        return;
      }
      const {
        source,
        over,
        overContainer
      } = event;
      const oldIndex = this.index(source);
      const sortableSortEvent = new SortableSortEvent({
        dragEvent: event,
        currentIndex: oldIndex,
        source,
        over
      });
      this.trigger(sortableSortEvent);
      if (sortableSortEvent.canceled()) {
        return;
      }
      const children = this.getDraggableElementsForContainer(overContainer);
      const moves = move({
        source,
        over,
        overContainer,
        children
      });
      if (!moves) {
        return;
      }
      const {
        oldContainer,
        newContainer
      } = moves;
      const newIndex = this.index(source);
      const sortableSortedEvent = new SortableSortedEvent({
        dragEvent: event,
        oldIndex,
        newIndex,
        oldContainer,
        newContainer
      });
      this.trigger(sortableSortedEvent);
    }
    [onDragStop8](event) {
      const sortableStopEvent = new SortableStopEvent({
        dragEvent: event,
        oldIndex: this.startIndex,
        newIndex: this.index(event.source),
        oldContainer: this.startContainer,
        newContainer: event.source.parentNode
      });
      this.trigger(sortableStopEvent);
      this.startIndex = null;
      this.startContainer = null;
    }
  };
  function index(element) {
    return Array.prototype.indexOf.call(element.parentNode.children, element);
  }
  function move({
    source,
    over,
    overContainer,
    children
  }) {
    const emptyOverContainer = !children.length;
    const differentContainer = source.parentNode !== overContainer;
    const sameContainer = over && source.parentNode === over.parentNode;
    if (emptyOverContainer) {
      return moveInsideEmptyContainer(source, overContainer);
    } else if (sameContainer) {
      return moveWithinContainer(source, over);
    } else if (differentContainer) {
      return moveOutsideContainer(source, over, overContainer);
    } else {
      return null;
    }
  }
  function moveInsideEmptyContainer(source, overContainer) {
    const oldContainer = source.parentNode;
    overContainer.appendChild(source);
    return {
      oldContainer,
      newContainer: overContainer
    };
  }
  function moveWithinContainer(source, over) {
    const oldIndex = index(source);
    const newIndex = index(over);
    if (oldIndex < newIndex) {
      source.parentNode.insertBefore(source, over.nextElementSibling);
    } else {
      source.parentNode.insertBefore(source, over);
    }
    return {
      oldContainer: source.parentNode,
      newContainer: source.parentNode
    };
  }
  function moveOutsideContainer(source, over, overContainer) {
    const oldContainer = source.parentNode;
    if (over) {
      over.parentNode.insertBefore(source, over);
    } else {
      overContainer.appendChild(source);
    }
    return {
      oldContainer,
      newContainer: source.parentNode
    };
  }

  // app/javascript/controllers/draggable_controller.js
  var draggable_controller_default = class extends Controller2 {
    static targets = ["column", "item"];
    initialize() {
    }
    connect() {
      if (this.hasItemTarget) {
        this.itemTargets.forEach((item) => {
          item.setAttribute("style", "z-index: 1000;");
        });
        const sortable = new Sortable(this.columnTargets, {
          draggable: "li"
        });
        sortable.on("mirror:attached", function(event) {
          event.mirror.style = "width: 600px";
          event.mirror.style.position = "relative";
        });
        sortable.on("sortable:stop", function(event) {
          let url = event.dragEvent.source.getAttribute("data-url");
          let column = event.newContainer.getAttribute("data-id");
          let data = { item: { column_id: column } };
          let token = document.head.querySelector('meta[name="csrf-token"]').getAttribute("content");
          fetch(url, {
            method: "PUT",
            credentials: "same-origin",
            headers: {
              "X-CSRF-Token": token,
              "Accept": "application/json",
              "Content-type": "application/json"
            },
            body: JSON.stringify(data)
          });
        });
      }
    }
    disconnect() {
    }
  };

  // app/javascript/controllers/dynamic_select_controller.js
  var dynamic_select_controller_default = class extends Controller2 {
    static targets = ["select", "choice", "long", "short"];
    connect() {
      this.selected();
    }
    selected() {
      this.hideFields();
      switch (this.selectTarget.value) {
        case "single_choice":
          this.choiceTarget.classList.remove("hidden");
          break;
        case "multiple_choice":
          this.choiceTarget.classList.remove("hidden");
          break;
        case "long_answer":
          this.longTarget.classList.remove("hidden");
          break;
        case "short_answer":
          this.longTarget.classList.remove("hidden");
          break;
      }
    }
    hideFields() {
      this.choiceTarget.classList.add("hidden");
      this.longTarget.classList.add("hidden");
    }
  };

  // app/javascript/controllers/hello_controller.js
  var hello_controller_default = class extends Controller {
    connect() {
      this.element.textContent = "Hello World!";
    }
  };

  // app/javascript/controllers/nested_form_controller.js
  var nested_form_controller_default = class extends Controller2 {
    static targets = ["add_item", "template"];
    static values = { index: String };
    add_association(event) {
      event.preventDefault();
      var content = this.templateTarget.innerHTML.replace(new RegExp(this.indexValue, "g"), (/* @__PURE__ */ new Date()).valueOf());
      this.add_itemTarget.insertAdjacentHTML("beforebegin", content);
    }
    remove_association(event) {
      event.preventDefault();
      let item = event.target.closest(".nested-fields");
      item.querySelector("input[name*='_destroy']").value = 1;
      item.style.display = "none";
    }
  };

  // app/javascript/controllers/index.js
  application.register("draggable", draggable_controller_default);
  application.register("dynamic-select", dynamic_select_controller_default);
  application.register("hello", hello_controller_default);
  application.register("nested-form", nested_form_controller_default);
})();

