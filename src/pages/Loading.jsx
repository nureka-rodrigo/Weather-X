const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-neutral-950">
      <img
        className="h-16 w-auto dark:invert animate-pulse"
        src="/logo.svg"
        alt="Brand"
      />
    </div>
  );
};

export default Loading;
