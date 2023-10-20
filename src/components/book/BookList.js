import Book from "./Book";
import Filters from "../Filters";

function BookList({
    handleChange,
    handleReset,
    filterValues,
    filters,
    books,
    setFilters,
    getBooks,
    isAdmin,
    cartItemsNumber,
    setCartItemsNumber
}) {
    const sortedBooks = [...books];
    if (filters.sort === "title_asc") {
        sortedBooks.sort((a, b) => {
            console.log("sort by title")
            return a.name.localeCompare(b.name);
        });
        // console.log(sortedBooks);
        // console.log("##########");
        // console.log(books);
    } else if (filters.sort === "title_des") {
        sortedBooks.sort((a, b) => {
            return b.name.localeCompare(a.name);
        })
    } else if (filters.sort === "author_asc") {
        sortedBooks.sort((a, b) => {
            return a.author.localeCompare(b.author);
        })
    } else if (filters.sort === "author_des") {
        sortedBooks.sort((a, b) => {
            return b.author.localeCompare(a.author);
        })
    } else if (filters.sort === "asc") {
        // Handle other sorting options
    }

    return (
        <>
            <Filters
                filterValues={filterValues}
                filters={filters}
                setFilters={setFilters}
                handleChange={handleChange}
                handleReset={handleReset}
            />
            <div className="container mt-3 mb-3">
                <div className="row" id="book-row">
                    {sortedBooks.map((item) => (
                        <Book
                            key={item.id}
                            id={item.id}
                            date={item.availability_date}
                            discount={item.discount}
                            name={item.name}
                            author={item.author}
                            category={item.category}
                            image={item.image}
                            brand={item.brand}
                            publishing_house={item.publishing_house}
                            price={item.price}
                            quantity={item.quantity}
                            rating={item.rating}
                            getBooks={getBooks}
                            isAdmin={isAdmin}
                            cartItemsNumber={cartItemsNumber}
                            setCartItemsNumber={setCartItemsNumber}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default BookList;
