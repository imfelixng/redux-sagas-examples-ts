let initialNumber = 0;

export const generateNewNumber = () : Promise<number> => {
  const promise = new Promise<number>((resolve) => {
    setTimeout(() => {
      initialNumber += 5;
      resolve(initialNumber)
    }, 3000)
  });

  return promise;
}