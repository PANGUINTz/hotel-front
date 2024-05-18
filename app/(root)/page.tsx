import CardBooking from "@/components/elements/CardBooking";
import FormSearch from "@/components/elements/FormSearch";
import Search from "@/components/elements/Search";

export default function Home() {
  return (
    <div className="mt-5">
      <Search />
      <h1 className="text-4xl text-blue-700/50 mt-14">
        What Are You Looking For?
      </h1>
      <FormSearch />
      <div>
        <h2 className="mt-5">Recent Searches</h2>
        <CardBooking />
        <CardBooking />
        <CardBooking />
        <CardBooking />
      </div>
    </div>
  );
}
