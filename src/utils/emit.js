class Emitter {
  constructor() {
    this.map = {};
  }
  on(type, method) {
    const map = this.map;
    if (!map[type]) map[type] = [];
    map[type].push(method);
  }
  emit(type, ...args) {
    if (!type) return;
    if (!this.map[type]) return;
    this.map[type].forEach((method) => {
      method.apply(null, args);
    });
  }
}

export default new Emitter();
