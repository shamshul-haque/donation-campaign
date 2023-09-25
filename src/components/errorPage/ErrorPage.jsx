const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-2">
      <h2 className="text-6xl text-gray-500 font-bold">404</h2>
      <p className="text-3xl font-bold text-gray-500">Not Found</p>
      <p className="text-lg text-center">
        The resource requested could not be found on this server!
      </p>
    </div>
  );
};

export default ErrorPage;
