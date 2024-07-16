export default function Error() {
  const message = "Data fetching failed, please check your network connection";
  return <div className="mt-28 text-red-500 text-xl font-bold">{message}</div>;
}
