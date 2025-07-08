import { i as inflate_1 } from "./pako.esm-C0YWBoLx.js";
import { B as BaseDecoder } from "./index-D4Q6rquw.js";
class DeflateDecoder extends BaseDecoder {
  decodeBlock(buffer) {
    return inflate_1(new Uint8Array(buffer)).buffer;
  }
}
export {
  DeflateDecoder as default
};
