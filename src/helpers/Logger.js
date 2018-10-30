const label = ([raw]) => {
  const [color, label, ...message] = raw.split(" ");
  return [
    `%c${label}%c ${message.join(" ")}`,
    `color: white; background-color: ${color}; padding: 0 .5em 0 .5em`,
    ""
  ];
};

const Logger = {
  log: (message, color = "", label = "") => {
    console.log(...label`${color} ${message} this is my error message`);
  }
};

export default Logger;
