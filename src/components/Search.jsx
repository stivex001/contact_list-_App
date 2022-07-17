import {useState, useEffect} from "react";
import useFetch from "react-fetch-hook";

const Search = () => {
    const [filterQuery, setFilterQuery] = useState(null);
    const [contactList, setContactList] = useState(null);
    const url = "https://randomuser.me/api?results=30";
  const { isLoading, data, error } = useFetch(url);

    useEffect(() => {
        if (filterQuery) {
          const queryString = filterQuery.toLowerCase();
          const filterData = data?.results?.filter(contact => {
            const fullName = `${contact.name.first} ${contact.name.last}`;
    
            if (queryString.length === 1) {
              const firstLetter = fullName.charAt(0).toLowerCase()
              return firstLetter === queryString
            }
            else {
              return fullName.toLowerCase().includes(queryString)
            }
          })
          setContactList(filterData)
        } 
        
        else {
          setContactList(data?.results);
        }
      }, [data, filterQuery]);

  return (
    <section>
      <form>
        <input
          onChange={(e) => setFilterQuery(e.target.value)}
          className="ml-20 mt-6 rounded-md p-2"
          type="text"
          placeholder="Search here to filter..."
        />
      </form>
    </section>
  );
};

export default Search;
