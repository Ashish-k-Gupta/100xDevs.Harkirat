 Single page application - React is a single page application. 
 Client side bundle
 Client side routing


 what is Lazy Loading?
When a user comes to a website. It doesn't necessary that he will go to all the pages on your website. It can be possible that he can only come the landing page and after that he leaves the site. Other scenario is that he can come go through a few pages and then leave. 
But if we keep sending our all the pages at once to user it will take a bit more to load the website and put more weight on our servers.

Lazy loading in React refers to a technique used to improve performance by delaying the loading of certain components until they are actually needed. This is particularly useful for large applications with many components, where loading everything upfront can slow down the initial rendering process and increase the time it takes for the application to become interactive.



``` javascript
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Landing} from './components/Landing';
const Dashboard = React.lazy(() => import("./components/Dashboard"));

function App(){
    <BrowserRouter>
            <Routes>
                <Route path = "/dashboard" element ={
                    <Dashboard/>
                }>

                <Route  path ="/" element={<Landing/>}>
            </Routes>
    </BrowserRouter>
}

export default App


```

PROP DRILLING
Usually, you will pass information from a parent component to a child component via props. But passing props can become verbose and inconvenient if you have to pass them through many components in the middle, or if many components in your app need the same information. Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.


CONTEXT API

if you use context API, you are pushing your state management outside the core react components


<!-- https://x.com/Hritik_86/status/1728782968376762577  >Read this later-->