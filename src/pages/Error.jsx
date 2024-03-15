import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const Error = () => {
  return (
    <>
      <div className="flex flex-col max-h-screen min-w-fit">
        <Navbar/>
        <section className="flex items-center justify-center h-screen">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center text-gray-950 dark:text-white">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl">
                404
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl">
                Something&apos;s missing.
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                Sorry, we can&apos;t find that page. You&apos;ll
                find lots to explore on the home page.
              </p>
              <Link
                to="/"
                className="inline-flex text-white dark:text-gray-900 bg-gray-800 dark:bg-white hover:bg-black dark:hover:bg-gray-200 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
        <Footer className="mt-auto"/>
      </div>
    </>
  );
};

export default Error;