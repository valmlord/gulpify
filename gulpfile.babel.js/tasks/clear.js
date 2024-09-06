import { deleteAsync } from 'del';

const clear = () => deleteAsync('../build', { force: true });

export default clear;
