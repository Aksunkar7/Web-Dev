alert('Hello');
alert('World');

// A semicolon may be omitted in most cases when a line break exists.
// This would also work:
alert('Hello')
alert('World')


// There are cases when a newline does not mean a semicolon. For example:
alert(3 +
    1
    + 2);

alert("Hello");
[1, 2].forEach(alert);

// снизу не работает потому что перед квадратной скобки требуется семиколон
alert("Hello")
[1, 2].forEach(alert);
// и читает как 
alert("Hello")[1, 2].forEach(alert);

