import React from "react";
import "./styles.css";
import { useQuery } from "@apollo/client";
import { MY_QUERY } from ".";

export default function App() {
  const { data, error, loading } = useQuery(MY_QUERY);

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
