import { i as inflate_1 } from "./pako.esm-C0YWBoLx.js";
import { B as BaseDecoder } from "./index-7umdI4nh.js";
class DeflateDecoder extends BaseDecoder {
  decodeBlock(buffer) {
    return inflate_1(new Uint8Array(buffer)).buffer;
  }
}
export {
  DeflateDecoder as default
};
