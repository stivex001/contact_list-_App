import { useState, useEffect } from "react";
import useFetch from "react-fetch-hook";
import ContactCard from "./components/ContactCard";
// import Search from "./components/Search";

function App() {
  const url = "https://randomuser.me/api?results=30";
  const { isLoading, data, error } = useFetch(url);
  const [contactList, setContactList] = useState(null);
  const [filterQuery, setFilterQuery] = useState(null);

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
    <div className="bg-[#716458]">
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

      <section className="p-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {contactList?.length < 1 && (
          <h1>No data matches your search</h1>
        )}
        <ContactCard contactList={contactList} />
      </section>
    </div>
  );
}

export default App;
