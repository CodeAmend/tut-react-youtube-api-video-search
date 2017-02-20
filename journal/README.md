JSX - Is what looks like HTML but it is really Javascript.


Before writing a compoent:
* Do I expect this component to need to maintain any type of state?


VIDEO_LIST

VIDEO_LIST_ITEM

VIDEO_DETAIL
-its a youtube embed
-we only care about the: title, description and url
-all properties of props from App component.
- No state needed! So just a functional component.

- this issue with: videoId from undefined
-- React likes to load components quickly so we need a check
-- if(!video) { return <div>Loading...</div> }
