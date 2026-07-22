const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

const portfolio = [
  {
    src: "assets/portfolio/portfolio-01.jpg",
    alt: "Exterior repaint project",
    title: "Exterior Repaint",
    text: "Fresh exterior finish with clean trims and a sharp street-facing result.",
  },
  {
    src: "assets/portfolio/portfolio-02.jpg",
    alt: "Kitchen repaint project",
    title: "Kitchen Repaint",
    text: "Bright walls, crisp ceiling lines, and a clean modern look.",
  },
  {
    src: "assets/portfolio/portfolio-03.jpg",
    alt: "Modern home repaint project",
    title: "Modern Home Repaint",
    text: "Updated exterior surfaces with a polished neutral colour palette.",
  },
  {
    src: "assets/portfolio/portfolio-04.jpg",
    alt: "Bathroom painting finish",
    title: "Bathroom Finish",
    text: "Neat wet-area painting with clean edges around fixtures.",
  },
  {
    src: "assets/portfolio/portfolio-05.jpg",
    alt: "Exterior wall repaint project",
    title: "Exterior Walls",
    text: "Smooth rendered walls with strong trim contrast.",
  },
  {
    src: "assets/portfolio/portfolio-06.jpg",
    alt: "Weatherboard repaint project",
    title: "Weatherboard Refresh",
    text: "Fresh weatherboards and tidy exterior detail work.",
  },
  {
    src: "assets/portfolio/portfolio-07.jpg",
    alt: "Living room repaint project",
    title: "Living Room Repaint",
    text: "Soft neutral walls with careful trim and feature details.",
  },
  {
    src: "assets/portfolio/portfolio-08.jpg",
    alt: "Commercial repaint project",
    title: "Commercial Repaint",
    text: "Sharp shopfront colour, clean edges, and a tidy finish.",
  },
  {
    src: "assets/portfolio/portfolio-09.jpg",
    alt: "Hallway and stairs repaint project",
    title: "Hallway and Stairs",
    text: "Long sightlines, smooth walls, and precise stair detailing.",
  },
  {
    src: "assets/portfolio/portfolio-10.jpg",
    alt: "Garage exterior repaint project",
    title: "Garage Exterior",
    text: "Modern exterior repaint with a clean entry and garage finish.",
  },
];

const portfolioRoot = document.querySelector("[data-portfolio]");

if (portfolioRoot) {
  const image = portfolioRoot.querySelector("[data-portfolio-image]");
  const title = portfolioRoot.querySelector("[data-portfolio-title]");
  const text = portfolioRoot.querySelector("[data-portfolio-text]");
  const previous = portfolioRoot.querySelector("[data-portfolio-prev]");
  const next = portfolioRoot.querySelector("[data-portfolio-next]");
  const thumbs = [...portfolioRoot.querySelectorAll("[data-portfolio-thumb]")];
  let activeIndex = 0;

  const showPortfolioItem = (index) => {
    activeIndex = (index + portfolio.length) % portfolio.length;
    const item = portfolio[activeIndex];
    image.src = item.src;
    image.alt = item.alt;
    title.textContent = item.title;
    text.textContent = item.text;
    thumbs.forEach((thumb, thumbIndex) => {
      thumb.classList.toggle("is-active", thumbIndex === activeIndex);
    });
  };

  previous.addEventListener("click", () => showPortfolioItem(activeIndex - 1));
  next.addEventListener("click", () => showPortfolioItem(activeIndex + 1));

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      showPortfolioItem(Number(thumb.dataset.portfolioThumb));
    });
  });

  portfolioRoot.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") showPortfolioItem(activeIndex - 1);
    if (event.key === "ArrowRight") showPortfolioItem(activeIndex + 1);
  });
}
