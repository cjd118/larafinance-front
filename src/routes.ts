import App from './App.tsx'
import HomePage from './pages/HomePage'
import CategoriesPage from "./pages/CategoriesPage.tsx";

import { categoriesLoader } from "./loaders/categoriesLoader";

const routes = [
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: "categories", Component: CategoriesPage, loader: categoriesLoader}
    ]
  },
];


export default routes;