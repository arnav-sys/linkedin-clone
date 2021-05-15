#linkedin clone with react, redux and firebase

This is a linkedin clone made by react, redux and firebase.

It has login and register functionality. Authentication is handled with firebase

In the app you can post things and all the posts are stored in collection in firebase.

Redux is used to keep track of user.

React hooks and components are used to create the ui of the app.

In the app folder the store is created

In the features folder reducer slice is created

In the components folder all the necessary app components are kept.

In the firebase file all the firebase variables are stored.

There are 5 main components in this app.

The first one is Sidebar in sidebar.js file under components directory where the ui of the sidebar is stored. It also renders a InputOption component where the tagline of the sidebar is rendered.

the second one is the header component in header.js file under components directory where the ui of the header is stored. The file also renders HeaderOption component from headeroption.js file where the icons are created.

in the userslice file a redux slice is created where the intialstate is user which is set to null. There are also redux reducers login and logout. The login reducer adds a user to the intialState of redux and the logout reducer sets the property to null to the intialState of redux. There is also a redux selector called select user which selects the intialState(user) of redux

The third one is the feed component in which all the messages and the mid part of the app is rendered. It renders a chat input component where the person can type in chat and send it. ui icons are also there in the chat component. The value of the input is set to a react state and an onchange function is evoked that changes the state whenever input changes. When we type in enter a function called sendpost is invoked which adds the {name of the user, email of the user, input state, photoUrl, timestamp} into the firebase firestore collection called posts. This saves the message. The name of the user,email, photoUrl comes from user constant which is a redux selector. useEffect hook is also called which sets a posts react state to the collection of posts in firebase. After that it maps over the posts state and renders a Post component from "./Post.js" file which takes name, description, message and photoUrl as props and renders a beatiful ui for the post

the fourth one is the widgets component where the ui for the right side of the app is stored

the last component is the login page which has login and register functionality.
