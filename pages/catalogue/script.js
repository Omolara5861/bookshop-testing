/* Create site structural elements */

window.onload = () => {
    const fragment = new DocumentFragment();
    fragment.append(
        createHeader(),
        createMain(),
        createFooter()
    );
    document.body.append(fragment);
}

/* Create header element*/

const createHeader = () => {
    const header = document.createElement("header");
    header.className = "header";

    const heading = document.createElement("h1");
    heading.innerHTML = "Welcome to our amazing bookshop";
    heading.className = "welcome-msg";

    const btnCheck = document.createElement("btn");
    btnCheck.innerHTML = "check our books";
    btnCheck.className = "btn-check";

    header.append(heading, btnCheck);

    return header;
}

/* Create main element */

const createMain = () => {
    const main = document.createElement("main");
    main.className = "main";

    main.append(catalogueTitle(), createBookCard());
    console.log(main)
    return main;
}

/* Create abook catalogue title */

const catalogueTitle = () => {
    const catalogueTitle = document.createElement("h2");
    catalogueTitle.className = "catalogue-title";
    catalogueTitle.innerHTML = "Book Catalogue";

    return catalogueTitle;
}

/* Create a books catalogue */


fetch('../../assets/data/books.json')
    .then(response => {
        return response.json();
    })
    .then(books => {
        // console.log(books)
        books.forEach(book => (createBookCard(book)));
    });


/* Create a single book card */

const createBookCard = (book) => {
    const catalogueContainer = document.createElement("section");
    catalogueContainer.className = "catalogue-container";
    const bookCard = document.createElement("div");
    const bookCover = document.createElement("img");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("h4");
    const bookPrice = document.createElement("p");
    const bookBtnsContainer = document.createElement("div");
    const btnShowMore = document.createElement("btn");
    const btnAddToCart = document.createElement("btn");

    bookCard.className = "book-card";
    bookCover.className = "book-card-img";
    bookTitle.className = "book-title";
    bookAuthor.className = "book-author";
    bookPrice.className = "book-price";
    bookBtnsContainer.className = "book-btns-container";
    btnShowMore.className = "btn, btn-show-more";
    btnAddToCart.className = "btn, btn-add-to-cart";
    // bookCover.src = `${book.imageLink}`;
    // bookTitle.innerText = `${book.title}`;
    // bookAuthor.innerText = `${book.author}`;
    // bookPrice.innerText = `${book.price}`;
    btnShowMore.textContent = "Show More";
    btnAddToCart.textContent = "Add to Cart";

    bookCard.append(bookAuthor, bookPrice, bookBtnsContainer, btnShowMore, btnAddToCart);
    catalogueContainer.append(bookCard);

    // console.log('somone called me')
    // console.log(catalogueContainer);

    return catalogueContainer;
}

/* Create footer element */

const createFooter = () => {
    const footer = document.createElement("footer");
    footer.className = "footer";

    const designInfo = document.createElement("div");
    designInfo.className = "design-info";

    const authorName = document.createElement("p");
    authorName.innerHTML = "&copy; iLonaDev";

    const designDate = document.createElement("p");
    designDate.innerHTML = "Nov 2022";

    designInfo.append(authorName, designDate);
    footer.append(designInfo);

    return footer;
}