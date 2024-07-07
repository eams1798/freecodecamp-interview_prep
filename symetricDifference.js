function sym(...args) {
  let result = []
  const arrayArgs = [...args]

  for (const arg of arrayArgs) {
    const unqRes = [...(new Set(result))]
    const unqArg = [...(new Set(arg))]
    const resDiffArg = unqRes.filter(el => !unqArg.includes(el))
    const argDiffRes = unqArg.filter(el => !unqRes.includes(el))

    result = resDiffArg.concat(argDiffRes)
  }

  return result;
}

sym([1, 2, 3], [5, 2, 1, 4]);
