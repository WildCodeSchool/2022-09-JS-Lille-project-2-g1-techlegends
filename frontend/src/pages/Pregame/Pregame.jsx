import PropTypes from "prop-types";
import Search from "@components/Search/Search";

export default function Pregame(props) {
  const { searchValue, setSearchValue, user, setUser } = props;
  return (
    <Search
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      user={user}
      setUser={setUser}
    />
  );
}

Pregame.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  setUser: PropTypes.func.isRequired,
};
