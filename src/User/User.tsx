import { useQuery, useQueryCache } from "react-query";
import { getUser } from "./api";

type NameType = { title: string; first: string; last: string } | null;

export function User() {
  const userQuery = useQuery("user", getUser, { staleTime: Infinity });
  const cache = useQueryCache();

  const name: NameType = userQuery.isFetched ? userQuery.data.name : null;

  return (
    <>
      <h2>Async API call stored to cache</h2>

      {userQuery.isFetching ? (
        <div>Loading</div>
      ) : (
        <p>User: {`${name?.title} ${name?.first} ${name?.last}`}</p>
      )}

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
