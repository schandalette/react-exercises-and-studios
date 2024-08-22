export default function BookList() {
   let pageTitle = "Books and More Books!";
   let book1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIuK37gP1TPcO0tf5yh1wiK9iQwTJZWK2owQ&s";
   let book2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQympEjXw7RdBxDOQX0UuYBXHQO4oOBPPzzLg&s";
   let book3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3c_BEAd4j6zlx_l4Z0iJGguwI4CoRPvR5KQ&s";

   return (
      <div style={{ border: '1px solid #000' }}>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="A Cat Named Balston" style={{ width: '180px', height: '250px' }} />
         <img src={book2} alt="All Your Perfects" style={{ width: '180px', height: '250px' }} />
         <img src={book3} alt="Silver Nitrate" style={{ width: '180px', height: '250px' }} />
      </div>
   );
}