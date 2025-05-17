import AppLayout from '@layouts/AppLayout.tsx'
import AuthLayout from '@layouts/AuthLayout.tsx'
import HomePage from '@pages/HomePage'
import LoginPage from '@pages/LoginPage'
import LogoutPage from '@pages/LogoutPage'
import TransactionCategoriesPage from "@pages/TransactionCategoriesPage";
import TransactionCategoriesNewPage from "@pages/TransactionCategoriesNewPage";
import TransactionCategoriesEditPage from "@pages/TransactionCategoriesEditPage";
import AccountsPage from '@pages/AccountsPage';

import authLoader from './loaders/authLoader';
import { transactionCategoriesLoader } from "./loaders/transactionCategoriesLoader";
import { transactionCategoryLoader } from "./loaders/transactionCategoryLoader";

const routes = [
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: HomePage, loader: authLoader() },
      { path: "transaction-categories", Component: TransactionCategoriesPage, loader: authLoader(transactionCategoriesLoader)},
      { path: "transaction-categories/new", Component: TransactionCategoriesNewPage, loader: authLoader(transactionCategoriesLoader)},
      { path: "transaction-categories/:categoryId", Component: TransactionCategoriesEditPage,loader: authLoader(transactionCategoryLoader) },
      { path: "accounts", Component: AccountsPage,loader: authLoader() }
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