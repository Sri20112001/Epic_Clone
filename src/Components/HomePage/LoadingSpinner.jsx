export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500"></div>
      <p className="mt-4 text-xl text-blue-500">Loading...</p>
    </div>
  );
};
