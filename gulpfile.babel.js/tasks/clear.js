import { deleteAsync } from 'del';

const clear = () => deleteAsync('./build');

export default clear;
