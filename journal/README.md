# Video Search APP - Learning React and Redux
<br>
![basic sketch](./video browser.png)

Starting out:
> I must separate this into compoents and create a skeleton. It is easy to see 3 or 4 basic components: Seach bar, video list, video and detail. We must also use an API. We will use the  
[Youtube API](https://console.developers.google.com/apis/api/youtube/overview)

 Before writing a compoent: I should ask: <br>Do I expect this component to need to maintain any type of state?


## components:
* search_bar
* video_detail
* video_list
* video_list_item
* and index.js to hold the parent 'App' React component.

#### SearchBar
This will need a search term, so that is a good reason to make this a class with a state.

#### VideoDetail
-its a youtube embed
-we only care about the: title, description and url
-all properties of props from App component.
- No state needed! So just a functional component.

- this issue with: videoId from undefined
-- React likes to load components quickly so we need a check
-- if(!video) { return <div>Loading...</div> }

#### VideoList

#### VideoListItem


### App / index

##### states
* videos
* selectedVideo
  + links clicked from a child component can communicate with App.
  + pass a callback from App to VideoList
  + and from VideoList to VideoListItem

The selectedVideo is set to null and VideoDetail is send a reference. Problem is, at the time of render, 
