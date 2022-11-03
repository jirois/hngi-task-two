import minimist from "minimist";

export async function cli(args) {
  const argsObj = minimist(args.slice(2));
  console.log(argsObj);
}
