import AppLayout from '@layouts/AppLayout.tsx'
import AuthLayout from '@layouts/AuthLayout.tsx'
import HomePage from '@pages/HomePage'
import LoginPage from '@pages/LoginPage'
import LogoutPage from '@pages/LogoutPage'
import CategoriesPage from "@pages/CategoriesPage";
import CategoriesNewPage from "@pages/CategoriesNewPage";
import CategoriesEditPage from "@pages/CategoriesEditPage";

import { categoriesLoader } from "./loaders/categoriesLoader";

const routes = [
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "categories", Component: CategoriesPage, loader: categoriesLoader},
      { path: "categories/new", Component: CategoriesNewPage, loader: categoriesLoader},
      { path: "categories/:categoryId/edit", Component: CategoriesEditPage }

    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { path: "login", Component: LoginPage },
      { path: "logout", Component: LogoutPage },
    ]
  }
];


export default routes;