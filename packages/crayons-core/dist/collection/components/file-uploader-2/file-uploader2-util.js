export class UploaderFile {
  constructor(id, file, progress, lastServerResponse, error) {
    this.id = id;
    this.name = file.name;
    this.progress = progress || 0;
    this.size = file.size;
    this.type = file.type;
    this.file = file;
    this.error = error || '';
    this.lastServerResponse = lastServerResponse || null;
  }
  get state() {
    let state = 'normal';
    if (this.progress === 0 || this.progress === 100) {
      state = 'normal';
    }
    else if (this.progress < 0) {
      state = 'error';
    }
    else {
      state = 'loading';
    }
    return state;
  }
}
