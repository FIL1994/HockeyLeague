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

const label = ([raw]) => {
  const [color, label, ...message] = raw.split(' ')
  return [
      `%c${label}%c ${message.join(' ')}`,
      `color: white; background-color: ${color}; padding: 0 .5em 0 .5em`,
      ''
  ]
}
