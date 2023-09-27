import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-2">
      <h2 className="text-6xl text-gray-500 font-bold">404</h2>
      <p className="text-3xl font-bold text-gray-500">Not Found</p>
      <p className="text-lg text-center">
        The resource requested could not be found on this server!
      </p>
      <button
        className="bg-red-500 py-2 px-3 text-white font-bold rounded-md"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
