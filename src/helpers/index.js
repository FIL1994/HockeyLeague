export const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

export function getUniq(array, getItem) {
  let item = getItem();
  if (array.includes(item)) {
    item = getUniq(array, getItem);
  }
  return item;
}
