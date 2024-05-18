import { Input } from "antd";
import React from "react";

const Search = () => {
  return (
    <div>
      <Input
        className="bg-slate-200 ring-0 border-0 focus:ring-0 focus:bg-slate-200 px-5 py-2"
        placeholder="Search city, Country, Place, Travel, advisory"
      />
    </div>
  );
};

export default Search;
