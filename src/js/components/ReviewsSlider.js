class ReviewsSlider {
  constructor(containerSelector, reviews) {
    this.container = document.querySelector(containerSelector);
    this.reviews = reviews;

    this.ratingClasses = {
      5: "slide-reviews__source--five-stars",
      4: "slide-reviews__source--four-stars",
      3: "slide-reviews__source--three-stars",
      2: "slide-reviews__source--two-stars",
      1: "slide-reviews__source--one-star"
    };

    this.sourceNames = {
      yandex: "Яндекс",
      "2gis": "2ГИС"
    };

    if (!this.container) return;

    this.init();
  }

  getRatingClass(rating) {
    return this.ratingClasses[parseInt(rating, 10)] || "";
  }

  getSourceName(source) {
    return this.sourceNames[source] || source;
  }

  createReviewSlide(review) {
    const ratingClass = this.getRatingClass(review.rating);
    const sourceName = this.getSourceName(review.source);

    const slide = document.createElement("div");
    slide.className = "swiper-slide slider-reviews__slide";

    const wrapper = document.createElement("div");
    wrapper.className = "slide-reviews";

    const header = document.createElement("div");
    header.className = "slide-reviews__header";

    const headerContent = document.createElement("div");
    headerContent.className = "slide-reviews__header-content";
    headerContent.dataset.reviewsSource = review.source;

    const nameEl = document.createElement("span");
    nameEl.className = "slide-reviews__name";
    nameEl.textContent = review.name;

    const sourceEl = document.createElement("span");
    sourceEl.className = `slide-reviews__source ${ratingClass}`;
    sourceEl.dataset.reviewsRating = review.rating;
    sourceEl.textContent = `Оставлен в ${sourceName} ${review.date}`;

    headerContent.append(nameEl, sourceEl);
    header.appendChild(headerContent);

    const blockquote = document.createElement("blockquote");
    blockquote.className = "blockquote-reset slide-reviews__content";

    const textEl = document.createElement("p");
    textEl.className = "slide-reviews__text";
    textEl.textContent = review.text;

    blockquote.appendChild(textEl);

    wrapper.append(header, blockquote);
    slide.appendChild(wrapper);

    return slide;
  }

  render() {
    this.container.innerHTML = "";
    const fragment = document.createDocumentFragment();

    this.reviews.forEach(review => {
      fragment.appendChild(this.createReviewSlide(review));
    });

    this.container.appendChild(fragment);
  }

  init() {
    this.render();
  }
}

export default ReviewsSlider;