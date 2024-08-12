import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-neutral-950">
      <section className="flex flex-col items-center justify-center flex-grow py-8 px-4 mx-auto max-w-screen-xl">
        <div className="text-center text-gray-950 dark:text-white max-w-screen-sm">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Something&apos;s missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center text-white dark:text-gray-900 bg-gray-800 dark:bg-white hover:bg-black dark:hover:bg-gray-200 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            aria-label="Back to Home"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Error;
