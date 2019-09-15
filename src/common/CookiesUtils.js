import zlib from 'browserify-zlib';
import buffer from 'buffer';

export default {

  saveItem(name, value) {
    try {
      const zipData = zlib.gzipSync(JSON.stringify(value)).toString('base64');
      document.cookie = `${name}=${zipData}`;
    } catch(err) {
      window.app.$broadcast('EVENT_COMMON_ERROR', err);
    }
  },

  getItem(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (!match) {
      return null;
    }
    const zipData = match[2];
    const buf = buffer.Buffer.from(zipData, 'base64');
    const unzipData = zlib.unzipSync(buf).toString();
    return JSON.parse(unzipData);
  }
}
