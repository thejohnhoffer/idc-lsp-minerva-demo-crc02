import { B as BaseDecoder } from "./index-BYSh-HED.js";
class RawDecoder extends BaseDecoder {
  decodeBlock(buffer) {
    return buffer;
  }
}
export {
  RawDecoder as default
};
