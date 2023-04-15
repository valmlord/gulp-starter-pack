import del from 'del';

// Config
import path from '../config/path';

// Directory deleting
const clear = () => del(path.root);

export default clear;