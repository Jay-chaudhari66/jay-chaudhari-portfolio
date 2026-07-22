const LoadingScreen = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#05050A] text-white">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-cyan-400" />
    </div>
  );
};

export default LoadingScreen;
