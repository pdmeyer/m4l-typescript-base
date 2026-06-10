// Max v8 require() passes the parent's `module` into required files. This must
// be a hoisted `var` at the top of any entry file (before imports compile to
// require), not `const` at the bottom — ES2015+ emit does not hoist `const`.

//eslint-disable-next-line @typescript-eslint/no-unused-vars
const module = {}
export = {}

autowatch = 1
inlets = 1
outlets = 1

const config = {
  outputLogs: true,
}

import { logFactory } from './utils'
const log = logFactory(config)

const INLET_FOO = 0
const OUTLET_FOO = 0

setinletassist(INLET_FOO, 'Description of Inlet')
setoutletassist(OUTLET_FOO, 'Description of Outlet')

log('reloaded')
