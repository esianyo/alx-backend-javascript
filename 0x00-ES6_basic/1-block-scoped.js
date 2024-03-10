export default function taskBlock(trueOrFalse) {
  const task = false; // variable modified to constant
  const task2 = true; // variable modified to constant

  if (trueOrFalse) {
    const task = true; // variable modified to constant
    const task2 = false; // variable modified to constant

    if (task && task2) {
      return [task, task2];
    }
  }

  return [task, task2];
}
