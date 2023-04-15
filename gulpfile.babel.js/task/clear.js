import del from 'del';

// Config
import path from '../config/path.js';

// Directory deleting
export default () => {
  return del(path.root);
};
