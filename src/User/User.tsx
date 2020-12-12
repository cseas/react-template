import { useQuery, useQueryCache } from "react-query";
import { getUser } from "./api";

type NameType = { title: string; first: string; last: string };

export function User() {
  const userQuery = useQuery("user", getUser, { staleTime: Infinity });
  const cache = useQueryCache();

  const name: NameType = userQuery.data.name;

  return (
    <>
      <h2>Async API call stored to cache</h2>
      <p>User: {`${name.title} ${name.first} ${name.last}`}</p>
      <button
        onClick={() => {
          cache.invalidateQueries("user");
        }}
      >
        Fetch user
      </button>
    </>
  );
}
