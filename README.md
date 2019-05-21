## My submission for Interface Challenge

To begin `npm install`

To run `npm start`

Visit `localhost 3000`

#### Overview

###### Fixes
- I no longer mutate the state directly.
- I've fixed all the webpack warnings.
- Moved from array based stores to objects when possible.
- Added missing CSS on search bar focus.
- Make search bars static on scroll, rather than scrolling with results.

###### Notes on Developement

I attempted eliminate the arrays as much as possible and use object keys instead. The main store for the app is `studentsObj` now. The only conscious use of arrays now is when using the search bars, with `studentsArr`, in order to get the search results back in the correct order. Else, they won't display properly.

This doubling up with arrays and objects could be a weakness, and might be able to be fixed in a future iteration, and could be a bit cleaner. i.e. I update all the data stores in `removeStudent` rather than fix the root problem and remove the arrays. But  I thought for now this version I solved the original problem, and also `removeStudent` is an added feature and not part of the original problem set.

A challenge again was finding a font that matched so I did the best I could on this.

###### Added Features

To show my skillset I attemped to add a few extra features.
- Tag Deletion
- Student Deletion
- Tooltip for the icons
- Alerts for the searchbars

*Note on extras*: `removeStudent` is an added feature, and it is not working correctly. I am only submitting it it this state to show that I've improved since the last iteration. Please take this as an example of a TODO for the next hypothetical iteration. Perhaps I should have removed entirley but decided it shows potential and so left it in. If the array problem dicussed above was solved, this would solve the issue here too. The data is being updated in too many places and this is causing the issue.

Thanks
