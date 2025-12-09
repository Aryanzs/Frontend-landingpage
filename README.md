


# Amrutam Frontend 🪔

Modern React + Tailwind single-page frontend for an Ayurvedic e-commerce and community platform.

The app has two main experiences:

- **Shop** – browse Ayurvedic products, view product details, related herbs and reviews.
- **Forum** – ask questions, read expert answers, and browse discussions related to Ayurveda.

---

## ✨ Features

### Shop

- **Store hero section** with background artwork and search bar.
- **Category filters** for quickly switching between product types.
- **Reusable product carousel**:
  - Card-based layout (`ProductCard`)
  - Ratings, price, size and CTA styling that matches the Figma.
- **Product details page**:
  - Hero block with images, name, price, rating & actions.
  - Section for **ingredients / herbs** used in the product.
  - **Reviews** section with rating breakdown.
  - “**People also bought**” carousel for related products.
  - “**Meet our Experts**” strip.
  - App download CTA and footer.

### Ingredient / Herb Detail

- Dedicated page for each herb accessed via `/ingredients/:id`.
- Uses structured sections (Prakriti impact, benefits, properties, etc. – implemented in `IngredientDetailsComponents`) to show full Ayurvedic information.

### Forum / Community

- **Forum hero** banner with background pattern and page title.
- Tabbed interface for:
  - `Questions` (implemented)
  - `Thoughts` (placeholder state)
- **Questions list** (`QuestionsPage.jsx`):
  - Avatar, name, time-ago, question title & body.
  - Inline answer preview card with expert avatar and stats.
  - Per-question actions: Like, Reply, Save (with local state).
- **Ask Question workflow**:
  - Separate **modal component** `AskQuestionModal.jsx` rendered on top of the page.
  - Fields: visibility (Public), title, attachments row, optional description.
  - Anonymous toggle & validation for required fields.
  - On submit, new question is prepended to the questions list.

### Layout & Navigation

- **Top bar** with contact number (`TopBar.jsx`).
- **Navbar** with:
  - Centered “AMRUTAM” logo.
  - Links: Home, Find Doctors, Lab Tests, Shop, Forum, About Us.
  - Wallet / cart / bell / user icons with badges and hover animations.
  - Fully responsive – custom mobile menu with hamburger animation.
- **Scroll restoration** via `ScrollToTop.jsx` so every route change scrolls to the top.
- Responsive layout for all sections (desktop, tablet, mobile).

---

## 🧱 Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Tailwind CSS (new `@import "tailwindcss";` setup)
- **Routing**: `react-router-dom`
- **Icons**: `lucide-react` + custom SVG assets
- **Deployment**: Vercel (via `vercel.json`)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/amrutam-frontend.git
cd amrutam-frontend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`). Open it in your browser.

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build (optional)

```bash
npm run preview
```

---

## 📁 Project Structure

```text
amrutam-frontend/
├─ public/
├─ src/
│  ├─ assets/                # Images, icons, backgrounds
│  ├─ components/
│  │  ├─ IngredientDetailsComponents/
│  │  ├─ ProductDetailsComponents/
│  │  ├─ AppDownloadSection.jsx
│  │  ├─ AskQuestionModal.jsx
│  │  ├─ CategoryFilters.jsx
│  │  ├─ ExpertCard.jsx
│  │  ├─ Footer.jsx
│  │  ├─ ForumHeroSection.jsx
│  │  ├─ MeetOurExpertsSection.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ ProductCard.jsx
│  │  ├─ ProductCarouselSection.jsx
│  │  ├─ QuestionsPage.jsx
│  │  ├─ ScrollToTop.jsx
│  │  ├─ StoreHeroSection.jsx
│  │  └─ TopBar.jsx
│  ├─ data/
│  │  ├─ herbs.js
│  │  ├─ products.js
│  │  └─ questions.js
│  ├─ layouts/
│  │  └─ MainLayout.jsx
│  ├─ pages/
│  │  ├─ ForumPage.jsx
│  │  ├─ IngredientDetailsPage.jsx
│  │  ├─ ProductDetailsPage.jsx
│  │  └─ Shop.jsx
│  ├─ routes/
│  │  └─ AppRoutes.jsx
│  ├─ App.css
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ vercel.json
├─ vite.config.js
├─ package.json
└─ README.md
```

---

## 🧭 Routing Overview

All routes are configured in `src/routes/AppRoutes.jsx` and wrapped by `ScrollToTop`:

```jsx


      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/ingredients/:id" element={<IngredientDetailsPage />} />
      </Routes>

```

`App.jsx` typically renders `MainLayout` which then includes `AppRoutes`.

---

## 🧩 Key Pages & Components

### `Shop.jsx`

```jsx



 
    <TopBar />
    <Navbar />
    <StoreHeroSection />
    <CategoryFilters />
    <ProductCarouselSection />
    <ProductCarouselSection />
    <AppDownloadSection />
    <Footer />



```

* Landing page for `/`.
* Uses shared layout blocks for reusability.
* Carousels are data-driven via `products.js`.

### `ProductDetailsPage.jsx`

```jsx

const ProductDetailsPage = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const product = products.find((p) => p.id === numericId) || products[0];

  const productReviews = product.reviews || [];
  const productHerbs =
    (product.ingredients || [])
      .map((herbId) => herbs.find((h) => h.id === herbId))
      .filter(Boolean);

  return (
    <main className="min-h-screen bg-brand-cream">
      <TopBar />
      <Navbar />
      <StoreHeroSection />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 pt-8 pb-16">
        <BackLink />
        <ProductHeroSection product={product} herbs={productHerbs} />
        <ReviewsSection
          rating={product.rating}
          reviewCount={product.reviewCount}
          reviews={productReviews}
        />
        <section className="mt-12 border-t border-[#E5DCC8] pt-8">
          <ProductCarouselSection
            title="People also bought"
            titleAlign="center"
          />
        </section>
      </div>
      <MeetOurExpertsSection />
      <AppDownloadSection />
      <Footer />
    </main>
  );
};

export default ProductDetailsPage;
```

**Responsibilities:**

* Resolve `:id` from the URL and fetch the correct product from `data/products.js`.
* Map ingredient IDs to full herb objects from `data/herbs.js`.
* Render hero, reviews, related products, experts & footers.

### `IngredientDetailsPage.jsx`

* Uses multiple sub-components under `IngredientDetailsComponents/`:

  * Prakriti Impact ring visualization
  * Benefits cards
  * Ayurvedic Properties row
  * Important Formulations chips
  * Therapeutic Uses icons
  * Plant Parts and Purpose cards
  * “Best combined with” and Geographical locations sections
* All content is driven by the selected herb object from `data/herbs.js`.

### `ForumPage.jsx`

* Wraps:

  * `TopBar`
  * `Navbar`
  * `ForumHeroSection`
  * `QuestionsPage`
  * `Footer`

### `QuestionsPage.jsx`

* Holds forum state and orchestrates the Q&A UI.
* Imports initial static data from `src/data/questions.js`:

```jsx
import { initialQuestions } from "../data/questions";
```

* Local state:

```jsx
const [activeTab, setActiveTab] = useState("questions");
const [questions, setQuestions] = useState(initialQuestions);
const [showAskModal, setShowAskModal] = useState(false);
```

* Renders `AskQuestionModal` when `showAskModal` is `true` and passes down:

  * `currentUser`
  * `onSubmit` for creating a new question
  * `onClose` to hide the modal

### `AskQuestionModal.jsx`

* Centered overlay modal for creating a new question.
* Features:

  * User avatar & name
  * Visibility dropdown (Public)
  * Input for question title (max ~50 words hint)
  * Attachments row with icon buttons
  * Optional description toggle
  * Close (`×`) button and main “Ask” submit button

---

## 📊 Data Files

### `src/data/products.js`

* Exports an array of product objects with fields like:

```js
{
  id,
  name,
  price,
  size,
  rating,
  reviewCount,
  image,
  ingredients: [herbId1, herbId2, ...],
  reviews: [ ... ]
}
```

Used in:

* `ProductCarouselSection`
* `ProductDetailsPage`

### `src/data/herbs.js`

* Exports structured info for individual herbs.
* Each herb is referenced by ID from product ingredients and used in the ingredient details page.

### `src/data/questions.js`

* Initial seed data for the forum:

```js
export const initialQuestions = [
  {
    id: 1,
    author: "Anonymous",
    avatar: null,
    timeAgo: "5 days ago",
    title: "...",
    body: "...",
    repliesCount: 9,
    replyPreviewCount: 1,
    likes: 23,
    replies: 1,
    saves: 3,
    answers: [
      {
        id: 1,
        author: "Dr. Mathew Adams",
        avatar: "...",
        timeAgo: "5 days ago",
        body: "Ans. ...",
        likes: 2,
        replies: 2,
      },
    ],
  },
];
```

---

## ➕ Adding New Content

### Add a new product

1. Open `src/data/products.js`.
2. Append a new object with a unique `id`.
3. (Optional) Add corresponding herbs to `herbs.js` and refer to their IDs in the product’s `ingredients` array.
4. The product will automatically appear in carousels and be available at `/products/<id>`.

### Add a new herb

1. Open `src/data/herbs.js`.
2. Add a new herb object with a unique `id`.
3. Use that `id` in any product’s `ingredients` array or link to it manually using `/ingredients/<id>`.

### Seed a new forum question

1. Open `src/data/questions.js`.
2. Add a new question object in the `initialQuestions` array following the existing shape.

---

## 🌐 Deployment (Vercel)

The project is set up to deploy easily on **Vercel**:

1. Push code to GitHub.
2. In Vercel dashboard, **Import Project** from the GitHub repo.
3. Vercel automatically detects **Vite** and uses:

   * **Build command**: `npm run build`
   * **Output directory**: `dist`
4. Click **Deploy**.

`vercel.json` in the root can be used to customize additional behavior if needed (rewrites, headers, etc.).

---

## 🧩 Development Notes

* Styling is done with Tailwind utility classes and small theme tokens defined in `index.css`.
* State is handled with React hooks (`useState`, `useEffect`) inside each component.
* Icons are a combination of:

  * `lucide-react` icons
  * Static SVGs in `src/assets/icons/`
* All routing is client-side; reloading a dynamic route (`/products/:id`, `/ingredients/:id`, `/forum`) is handled by `react-router-dom`.

---

