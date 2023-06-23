import test from 'ava'

import { VsockSocket } from '../index.js'

test('function from native code', (t) => {
	t.is(!!VsockSocket, true);
})
