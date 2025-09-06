import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';

import App from './App.jsx'

function MyApp() {
    return(
        <div>
            <h1>Custom APP</h1>
        </div>
    )
}

const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
)

const anotherUser = "Chai aur React!!"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click Me to Visit Google',
    anotherUser
)

createRoot(document.getElementById('root'))
.render(
    // <MyApp />
    // anotherElement
    reactElement

    // <App/>
)
