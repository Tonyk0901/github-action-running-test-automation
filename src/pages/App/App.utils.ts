export const addNumbers = (...args: number[]): number => {
  return args.reduce((acc, curr) => acc + curr, 0);
};
