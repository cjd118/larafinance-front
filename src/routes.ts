import App from './App.tsx'
import HomePage from '@pages/HomePage'
import CategoriesPage from "@pages/CategoriesPage";
import CategoriesNewPage from "@pages/CategoriesNewPage";

import { categoriesLoader } from "./loaders/categoriesLoader";

const routes = [
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: "categories", Component: CategoriesPage, loader: categoriesLoader},
      { path: "categories/new", Component: CategoriesNewPage, loader: categoriesLoader}
    ]
  },
];


export default routes;