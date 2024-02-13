import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import HomeComponent from "../pages/home/home.component";
import PublicComponent from "../core/layouts/public/public.component";
import AboutComponent from "../pages/about/about.component";
import ProductsComponent from "../pages/products/products.component";
import ContactComponent from "../pages/contact/contact.component";
import ProductDetailComponent from "pages/product-detail/product-detail.component";
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
          element: <ProductsComponent />,
        },
        {
          path: `${Routes.newsdetail}/:id`,
          element: <ProductDetailComponent />,
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
      ],
    },
  ],
  { basename: '/' }
);
  
export default router;
