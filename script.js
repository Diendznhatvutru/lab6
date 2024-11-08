class Card {
  constructor(title, badge, description) {
    this.title = title;
    this.badge = badge;
    this.description = description;

    this.imgSrc = `https://picsum.photos/100/100?random=${Math.floor(
      Math.random() * 1000
    )}`; // Kích thước ảnh nhỏ
  }

  createCard() {
    return `
            <div class="col">
                <div class="card h-100 text-center p-3 shadow-sm">
                    <!-- Đặt ảnh nhỏ và tròn như icon -->
                    <img src="${this.imgSrc}" class="mx-auto my-3 rounded-circle" alt="${this.title}" style="width: 50px; height: 50px; object-fit: cover;">
                    <h5 class="fw-bold">${this.title} <span class="badge bg-dark">${this.badge}</span></h5>
                    <p class="text-muted">${this.description}</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="continue.html" class="btn btn-primary">Continue</a>
                        <button class="btn btn-outline-secondary">Guide</button>
                    </div>
                </div>
            </div>
        `;
  }
}

class CardRenderer {
  constructor(cardsData) {
    this.cardsData = cardsData;
  }

  renderCards() {
    const cardContainer = document.getElementById("cardContainer");
    this.cardsData.forEach((card) => {
      const cardObj = new Card(card.title, card.badge, card.description);
      cardContainer.innerHTML += cardObj.createCard();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const cardsData = [
    {
      title: "JavaScript",
      badge: "Mocha",
      description:
        "Use the Mocha testing framework and create unit tests to grade solutions.",
    },
    {
      title: "TypeScript",
      badge: "Mocha",
      description:
        "Use the Mocha testing framework and create unit tests to grade solutions.",
    },
    {
      title: "Python",
      badge: "pytest",
      description:
        "pytest is the most popular and fully-featured Python testing framework.",
    },
    {
      title: "PHP",
      badge: "PHPUnit",
      description:
        "PHPUnit is a programmer-oriented testing framework for PHP.",
    },
    {
      title: "Java",
      badge: "JUnit",
      description:
        "JUnit is a popular unit-testing framework in the Java ecosystem.",
    },
    {
      title: "Kotlin",
      badge: "JUnit",
      description:
        "JUnit is a popular unit-testing framework in the Kotlin ecosystem.",
    },
  ];

  const cardRenderer = new CardRenderer(cardsData);
  cardRenderer.renderCards();
});
