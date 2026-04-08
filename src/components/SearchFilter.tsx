import { useState } from "react";

type SearchTaskProps = {
  query: string;
  onSearch: (value: string) => void;
};

export default function SearchApp({ query, onSearch }: SearchTaskProps) {
  return (
    <input
      value={query}
      onChange={(e) => onSearch(e.target.value)}
      type="text"
    />
  );
}
