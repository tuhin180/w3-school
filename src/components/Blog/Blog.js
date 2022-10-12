import React from "react";

const Blog = () => {
  return (
    <div>
      <section className=" ">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-semibold">Jhonkar vair</h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                  Valobashar Question
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    What is the purpose of React Router?
                  </h3>
                  <p className="mt-3">
                    In traditional websites, the browser requests a document
                    from a web server, downloads and evaluates CSS and
                    JavaScript assets, and renders the HTML sent from the
                    server. When the user clicks a link, it starts the process
                    all over again for a new page.Client side routing allows our
                    app to update the URL from a link click without making
                    another request for another document from the server.
                    Instead, our app can immediately render some new UI and make
                    data requests with fetch to update the page with new
                    information.This enables faster user experiences because the
                    browser doesn't need to request an entirely new document or
                    re-evaluate CSS and JavaScript assets for the next page. It
                    also enables more dynamic user experiences with things like
                    animation.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    How does context api works?
                  </h3>

                  <p className="mt-3">
                    React.createContext() is all you need. It returns a consumer
                    and a provider. Provider is a component that as it's names
                    suggests provides the state to its children. It will hold
                    the "store" and be the parent of all the components that
                    might need that store. Consumer as it so happens is a
                    component that consumes and uses the state.all we need to
                    useContext() to get the data and use it.its super easy and
                    so efficient.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    What is UseRef?
                  </h3>

                  <p className="mt-3">
                    The useRef Hook allows you to persist values between
                    renders. It can be used to store a mutable value that does
                    not cause a re-render when updated. It can be used to access
                    a DOM element directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
