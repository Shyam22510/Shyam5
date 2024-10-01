const movies = [
    { title: 'Avengers: Endgame', releaseDate: 2019, image: 'Endgame.jpg', link: 'endgame.html' },
    { title: 'Spider-Man: No Way Home', releaseDate: 2021, image: 'nwh.jpg', link: 'spiderman.html' },
    { title: 'Captain Marvel', releaseDate: 2019, image: 'CaptainMarvel.jpg', link: 'captainmarvel.html' },
    { title: 'Captain America:The First Avenger', releaseDate: 2011, image: 'Cp1.jpg', link: 'Theavengers.html' },
    { title: 'Captain America:The Winter Soldier', releaseDate: 2018, image: 'Cp2.jpg', link: 'avengersmdl.html' },
    { title: 'Captain America:Civil War', releaseDate: 2016, image: 'Cp3.jpg', link: 'Theavengers.html' },
    { title: 'Iron Man 2', releaseDate: 2010, image: 'IM2.jpg', link: 'deadpool1.html' },
    { title: 'Iron Man 3', releaseDate: 2013, image: 'IM3.jpg', link: 'ironman.html' },
    { title: 'Thor 1', releaseDate: 2011, image: 'Thor1.jpg', link: 'endgame.html' },
    { title: 'Thor 2', releaseDate: 2013, image: 'Thor2.jpg', link: 'spiderman.html' },
    { title: 'Thor 3', releaseDate: 2017, image: 'Thor3.jpg', link: 'captainmarvel.html' },
    { title: 'The Avengers: Age Of Ultron', releaseDate: 2015, image: 'Avengers2.jpg', link: 'Theavengers.html' },
    { title: 'Avengers: Infinity War', releaseDate: 2018, image: 'infinitywar.jpg', link: 'avengersmdl.html' },
    { title: 'Guardians of the Galaxy', releaseDate: 2014, image: 'Gog1.jpg', link: 'Theavengers.html' },
    { title: 'Spider-Man: Homecoming', releaseDate: 2017, image: 'hcm.jpeg', link: 'deadpool1.html' },
    { title: 'Black Panther', releaseDate: 2018, image: 'Bp.jpeg', link: 'ironman.html' },
    { title: 'Ant-Man', releaseDate: 2015, image: 'AM1.jpg', link: 'endgame.html' },
    { title: 'Ant-Man and The Wasp', releaseDate: 2018, image: 'AM2.jpg', link: 'spiderman.html' },
    { title: 'The Incredible Hulk', releaseDate: 2008, image: 'Hulk.jpg', link: 'captainmarvel.html' },
    { title: 'Black Widow', releaseDate: 2021, image: 'BW.jpg', link: 'Theavengers.html' },
    { title: 'Shang-Chi and the Legend of the Ten Rings', releaseDate: 2021, image: 'Shangchi.jpg', link: 'avengersmdl.html' },
    { title: 'Eternals', releaseDate: 2021, image: 'Eternal.jpg', link: 'Theavengers.html' },
    { title: 'Doctor Strange in the Multiverse of Madness', releaseDate: 2022, image: 'Doctor Strange2.jpg', link: 'deadpool1.html' },
    { title: 'Black Panther: Wakanda Forever', releaseDate: 2022, image: 'Bp2.jpg', link: 'ironman.html' },
    { title: 'Ant-Man and The Wasp: Quantumania', releaseDate: 2023, image: 'AM3.jpg', link: 'endgame.html' },
    { title: 'Guardians of the Galaxy Vol. 3', releaseDate: 2023, image: 'Gog3.jpg', link: 'spiderman.html' },
    { title: 'The Marvels', releaseDate: 2023, image: 'The marvels.jpeg', link: 'captainmarvel.html' },
    { title: 'Guardians of the Galaxy Vol. 2', releaseDate: 2017, image: 'Gog2.jpg', link: 'captainmarvel.html' },
    { title: 'Deadpool 2', releaseDate: 2018, image: 'Dp2.jpg', link: 'https:rubyvid.comjbafmg69zl32.html' },
    // Your movie data...
];


const colors = ['white']; // Different colors for movie titles

let currentPage = 1;
const moviesPerPage = 8;

window.onload = () => {
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        displayMovies(); // Display the existing featured movies
        displayTopRatedMovies(); // Display the top-rated movies in the first section
        displayTopRatedMovies2(); // Display the top-rated movies in the second section
        
    }, 2000); // Simulates 2 seconds of loading time
};

function displayMovies() {
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = ''; // Clear the grid
    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const currentMovies = movies.slice(startIndex, endIndex);

    currentMovies.forEach((movie, index) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.style.margin = '10px'; // Add margin here for spacing
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3 style="color: ${colors[index % colors.length]}">${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        movieGrid.appendChild(movieCard);
    });
}


// Remove horizontal scroll functionality by not applying the flex and overflow styling
function updateHorizontalScroll(gridId) {
    const grid = document.getElementById(gridId);
    grid.style.display = '';  // Reset display to default, which will use the existing grid or block layout
    grid.style.overflowX = '';  // Remove horizontal scroll
    grid.style.scrollSnapType = '';  // Disable scroll snapping

    const cards = grid.querySelectorAll('.movie-card');
    cards.forEach(card => {
        card.style.flex = '';  // Reset flexbox behavior
        card.style.scrollSnapAlign = '';  // Remove snap alignment
    });
}
function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayMovies();
    }
}

function nextPage() {
    const totalPages = Math.ceil(movies.length / moviesPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayMovies();
    }
}

function goToPage(pageNumber) {
    currentPage = pageNumber;
    displayMovies();
}




// Function to filter and display movies
function searchMovies() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = ''; // Clear the grid

    // Filtering movies based on search input
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchInput));

    // Displaying filtered movies
    filteredMovies.forEach((movie, index) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3 style="color: ${colors[index % colors.length]}">${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        movieGrid.appendChild(movieCard);
    });

    // Optionally update horizontal scroll functionality if needed
    updateHorizontalScroll('movieGrid');
}

// Function to handle the Enter key event for search
document.getElementById('searchInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        searchMovies(); // Trigger search when Enter is pressed
    }
});

/// Select the elements
const searchButton = document.querySelector('.search-container button');
const searchInput = document.querySelector('.search-container input');
const mainContent = document.querySelector('main'); // Or the main container for the website content

// Expand the search bar and blur background
searchButton.addEventListener('click', () => {
    searchInput.classList.toggle('expanded');

    if (searchInput.classList.contains('expanded')) {
        mainContent.classList.add('blur-background'); // Add blur effect
    } else {
        mainContent.classList.remove('blur-background'); // Remove blur effect
    }
});

// Remove blur when clicking outside the search input
document.addEventListener('click', (e) => {
    if (!document.querySelector('.search-container').contains(e.target)) {
        searchInput.classList.remove('expanded');
        mainContent.classList.remove('blur-background');
    }
});

// Remove blur when pressing Enter in the search input
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchInput.classList.remove('expanded');
        mainContent.classList.remove('blur-background');
        // Add functionality to handle search action here if needed
    }
});





function toggleMenu() {
    const sideNav = document.getElementById("sideNav");
    const menuToggle = document.querySelector(".menu-toggle");

    if (sideNav.classList.contains("open")) {
        sideNav.classList.remove("open");
        menuToggle.classList.remove("hidden"); // Show the menu toggle button when sideNav is closed
    } else {
        sideNav.classList.add("open");
        menuToggle.classList.add("hidden"); // Hide the menu toggle button when sideNav is open
    }
}

// Variables to store the previous scroll position and the navbar element
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

// Function to handle scroll events
const handleScroll = () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Check if scrolling down
    if (currentScroll > lastScrollTop) {
        // Scrolling down, hide the navbar
        navbar.classList.add('hidden');
    } else {
        // Scrolling up, show the navbar
        navbar.classList.remove('hidden');
    }

    // Update the last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
};

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// JavaScript to show/hide scroll-to-top button
const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

// Scroll to top function
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

