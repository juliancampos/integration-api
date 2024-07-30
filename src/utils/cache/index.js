import NodeCache from 'node-cache';

const nodeCache = new NodeCache();

const add = (key, value, ttl) => nodeCache.set(key, value, ttl);
const get = (key) => nodeCache.get(key);
const remove = (key) => nodeCache.del(key);
const has = (key) => nodeCache.has(key);

export default {
  add,
  get,
  remove,
  has
};