const ContactCard = ({ contactList }) => {
  contactList && console.log(contactList)
  return (
    <>
      {contactList?.map((contact, index) => (
        <figure
          key={index}
          className="bg-[#b6947f] h-80 rounded-lg shadow-md pt-7"
        >
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src={contact.picture.large}
            alt="user"
          />
          <figcaption className="text-center mt-5">
            <p className="text-[#d6cbc0] font-semibold text-xl mb-2">
              {contact.name.first} {contact.name.last}
            </p>
            <p className="text-[#e5dbd1] ">
              <span className="font-medium">email:</span>{" "}
              {contact.email}
            </p>
            <p className="text-[#e5dbd1]">
              <span className="font-medium">Phone:</span> {contact.phone}
            </p>
            <p className="text-[#e5dbd1]">
              <span className="font-medium">City:</span> {contact.location.city}
            </p>
          </figcaption>
        </figure>
      ))}
    </>
  );
};

export default ContactCard;
