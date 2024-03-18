import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import HomeComponent from "../pages/home/home.component";
import PublicComponent from "../core/layouts/public/public.component";
import AboutComponent from "../pages/about/about.component";
import ProductsComponent from "../pages/products/products.component";
import ContactComponent from "../pages/contact/contact.component";
import ProductDetailComponent from "pages/product-detail/product-detail.component";
import NewsComponent from "pages/news/news.component";
import SearchResultComponent from "pages/search-result/search-result.component";
import NewsSingleComponent from "pages/news-single/news-single.component";
import SignInComponent from "pages/sign-in/sign-in.component";
import SignUPComponent from "pages/sign-up/sign-up.component";
const router = createBrowserRouter(
  [
    {
      path: Routes.default,
      element: <PublicComponent />,
      children: [
        {
          index: true,
          element: <HomeComponent />,
        },
        {
          path: Routes.home,
          element: <HomeComponent />,
        },
        {
          path: Routes.about,
          element: <AboutComponent />,
        },
        {
          path: Routes.news,
          element: <NewsComponent />,
        },
        {
          path: `${Routes.newsdetail}/:id`,
          element: <NewsSingleComponent />,
        },
        {
          path: Routes.products,
          element: <ProductsComponent />,
        },
        {
          path: `${Routes.productdetail}/:id`,
          element: <ProductDetailComponent />,
        },
        {
          path: Routes.contact,
          element: <ContactComponent />,
        },
        {
          path: Routes.search,
          element: <SearchResultComponent />,
        },
        {
          path: Routes.signin,
          element: <SignInComponent />,
        },
        {
          path: Routes.signup,
          element: <SignUPComponent />,
        },
      ],
    },
  ],
  { basename: '/' }
);
  
export default router;
