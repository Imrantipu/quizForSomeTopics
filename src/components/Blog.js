import React from 'react';

const Blog = () => {
    return (
        <div className=" m-5">
      <div className="mt-5">
        <h3 className='text-2xl font-sans font-bold text-amber-300'>What is the purpose of react router?</h3>
        <p className='font-bold text-amber-100'>
          Routing is a process in which a user is directed to different pages
          based on their action or request. ReactJS Router is mainly used for
          developing Single Page Web Applications. React Router is used to
          define multiple routes in the application. When a user types a
          specific URL into the browser, and if this URL path matches any
          'route' inside the router file, the user will be redirected to that
          particular route.
        </p>
      </div>
      <div className="mt-5">
        <h3 className='text-2xl font-sans font-bold text-amber-300'>How does context api works?</h3>
        <p className='font-bold text-amber-100'>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>
      <div className="mt-5">
        <h3 className='text-2xl font-sans font-bold text-amber-300'>Brief introduction about useRef?</h3>
        <p className='font-bold text-amber-100'>
          Ref means just reference, so it can be a reference to anything (DOM
          node, Javascript value, etc). The useRef hook returns a mutable object
          which doesn’t re-render the component when it’s changed. Think it like
          useState, but unlike useState, doesn’t trigger re-render of the
          component. The object that useRef returns have a current property that
          can hold any modifiable value.
        </p>
      </div>
    </div>
    );
};

export default Blog;