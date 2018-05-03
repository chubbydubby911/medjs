import { sha3_256 as SHA3256 } from 'js-sha3';

const hashData = (msg) => {
  let message = '';
  switch (typeof msg) {
    case 'string':
      message = msg;
      break;
    case 'object':
    case 'number':
      message = msg.toString();
      break;
    default:
      throw new Error('Invalid msg type');
  }
  const hash = SHA3256.create();
  return hash.update(message).hex();
};

// const hashDataStream = () => {};
const hashTo32Byte = (accessKey) => {
  const hash = SHA3256.create();
  hash.update(accessKey);
  const hashedKey = hash.hex();
  return hashedKey;
};

export default {
  hashData,
  hashTo32Byte,
};