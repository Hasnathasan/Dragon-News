import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
        <h3 className="text-2xl font-semibold">All Category</h3>
      <div className="flex flex-col">
        {categories.map((category) => (
            <Link to={`categories/${category.id}`}  className="p-3 hover:bg-slate-200">
                    {category.name}
            </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
