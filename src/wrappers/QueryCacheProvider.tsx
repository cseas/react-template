import { ReactNode } from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

type QueryCacheProviderProps = { children?: ReactNode };

export function QueryCacheProvider(props: QueryCacheProviderProps) {
  const queryCache = new QueryCache();

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      {props.children}
    </ReactQueryCacheProvider>
  );
}
