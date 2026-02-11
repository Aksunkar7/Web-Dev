// The directive looks like a string: "use strict" or 'use strict'. 
// When it is located at the top of a script, the whole script works the “modern” way.

"use strict";
// this code works the modern way


alert("some code");
// "use strict" below is ignored--it must be at the top
"use strict";
// strict mode is not activated


