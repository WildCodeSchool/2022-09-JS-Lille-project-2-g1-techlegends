import Search from "@components/Search/Search";
import { useState } from "react";

export default function Pregame() {
  const [searchValue, setSearchValue] = useState("Official Music Video");
  const [user, setUser] = useState("Unknow");
  return (
    <Search
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      user={user}
      setUser={setUser}
    />
  );
}
