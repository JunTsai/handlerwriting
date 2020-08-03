// class Publisher {
//   constructor() {
//     this.watchers = {};
//   }
//   addWatcher(type, cb) {
//     if (!this.watchers[type]) {
//       this.watchers[type] = [];
//     }
//     this.watchers[type].push(cb);
//   }
//   removeWatcher(type, cb) {
//     var cbs = this.watchers[type];
//     if (!cbs) {
//       return false;
//     }
//     if (!cb) {
//       cbs && (cbs.length = 0);
//     } else {
//       for(let i = 0; i < cbs.length; i++) {
//         if(cb === cbs[i]) {
//           cbs.splice(i, 1);
//         }
//       }
//     }
//   }
//   on() {
//     var type = [].shift.call(arguments);
//     var cbs = this.watchers[type];
//     if(!cbs || cbs.length == 0) {
//       return false;
//     }
//     for(var i=0; i < cbs.length; i++) {
//       cbs[i].apply(this, arguments);
//     }
//   }
// }

class Publisher {
  constructor() {
    this.watchers = {}
  }
  add(type, fn) {
    if(!this.watchers[type]) {
      this.watchers[type] = [];
    }
    this.watchers[type].push(fn);
  }
  remove(type, fn) {
    const fns = this.watchers[type];
    if(!fns) {
      return false;
    }
    if(!fn) {
      fns && (fns.length = 0);
    } else {
      for(let i = 0; i < fns.length; i++) {
        if(fn = fns[i]) {
          fns.splice(i, 1);
        }
      }
    }
  }
  on() {
    let type = [].shift.call(arguments);
    let fns = this.watchers[type];
    if(!fns || fns.length === 0) {
      return false;
    }
    for(let i = 0; i < fns.length; i++) {
      fns[i].apply(this, arguments);
    }
  }
}
const watcher = new Publisher();
watcher.add('console', function(message) {
  console.log('222', message);
})
watcher.on('console', '触发console');