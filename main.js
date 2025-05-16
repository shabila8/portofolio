let currentIndex = 0;
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteBtn = document.getElementById('new-quote');
    
    // Fetch quotes from your API
    async function fetchQuotes() {
        try {
            const response = await fetch('https://test001-2425.vercel.app/api/quotes');
            if (!response.ok) {
                throw new Error('Failed to fetch quotes');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching quotes:', error);
            return null;
        }
    }
    
    // Display a random quote
    async function displayRandomQuote() {
        const quotes = await fetchQuotes();
        if (quotes && quotes.length > 0) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];
            quoteText.textContent = `${randomQuote.quotes}`;
            quoteAuthor.textContent = `— ${randomQuote.author}`;
        } else {
            quoteText.textContent = "Failed to load quotes. Please try again later.";
            quoteAuthor.textContent = "";
        }
    }
    
    // Initial quote load
    displayRandomQuote();

    // for project section
 document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  });