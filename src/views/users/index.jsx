import { useState, useEffect } from "react";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";

async function getUsers() {
  const res = await fetch("https://66c9fca059f4350f064e16fc.mockapi.io/crud");
  const data = await res.json();
  return data;
}

export default function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const users = await getUsers();
      setData(users);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-3">
      <div className="container !w-1/2 !mx-auto">
        <h1 className="text-4xl font-bold my-8 text-center">Show All Users</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
