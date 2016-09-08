# Phone Number Formatter (US)
Format phone number in (xxx) xxx-xxxx format.

### Usage
```
var format = require ('./phone-number-formatter')

console.log(format('1234567890'));
```
Result:
`(123) 456-7890`

### Features
- Reject non numeric characters
- Truncate longer than 10 digits
- Partial completion
