class EventEmeitter {
  constructor() {
    this.events = this.events || new Map();
    this.maxListeners = this.maxListeners || 10;
  }
  emit(type, ...args) {
    let handler = this.events.get(type);
    if(Array.isArray(handler)) {
      for(let i = 0; i < handler.length; i++) {
        if(args.length > 0) {
          handler[i].apply(this, args);
        } else {
          handler[i].call(this);
        }
      }
    } else {
      if (args.length > 0) {
        handler.apply(this, args);
      } else {
        handler.call(this);
      }
    }
  }
  addListener(type, callback) {
    const 
  }
}