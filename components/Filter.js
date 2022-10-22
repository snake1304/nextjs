import React, { useState, useEffect } from "react";
import filterSearch from "../utils/filterSearch";
import { getData } from "../utils/fetchData";
import { useRouter } from "next/router";

const Filter = ({ state }) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  const { categories } = state;

  const router = useRouter();

  const handleCategory = (e) => {
    setCategory(e.target.value);
    filterSearch({ router, category: e.target.value });
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    filterSearch({ router, sort: e.target.value });
  };

  // useEffect(() => {
  //     filterSearch({ router, search: search ? search.toLowerCase() : "all" });
  // }, [search]);

  const handleSearch = () => {
    filterSearch({
      router,
      search: search ? search.toLowerCase() : "all",
    });
  };

  return (
    <div className="input-group" style={{ marginTop: "20px" }}>
      <div className="input-group-prepend col-md-2 px-0 mt-2">
        <select
          className="custom-select text-capitalize"
          value={category}
          onChange={handleCategory}
        >
          <option value="all">All Products</option>

          {categories.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <form autoComplete="off" className="mt-2 col-md-7 px-0">
        <input
          style={{ marginLeft: "40px", width: "94%" }}
          type="text"
          placeholder="What your looking for?"
          className="form-control"
          list="title_product"
          value={search.toLowerCase()}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <button
        onClick={handleSearch}
        className="position-adsolute btn"
        type="submit"
        style={{
          top: 0,
          right: 0,
          height: "40px",
          marginTop: "7px",
          marginLeft: "1px",
          height: "39px",
          background: "#f79f8e",
          color: "white",
          fontWeight: "500",
          fontSize: "13px",
        }}
      >
        SEARCH
      </button>
      <div className="input-group-prepend col-md-2 px-0 mt-2">
        <select
          style={{ marginLeft: "40px", width: "400px" }}
          className="custom-select text-capitalize"
          value={sort}
          onChange={handleSort}
        >
          <option value="-createdAt">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="-sold">Best sales</option>
          <option value="-price">Price: Hight-Low</option>
          <option value="price">Price: Low-Hight</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
