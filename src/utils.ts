export function logFactory({ outputLogs = true }) {
  function log(...args: any[]) {
    post(Array.prototype.slice.call(arguments).join(' '), '\n')
  }
  if (!outputLogs) {
    return () => {}
  }
  return log
}