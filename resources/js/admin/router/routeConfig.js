//protected Imports
import Dashboard from '../components/protected/dashboard/Dashboard';

import AuthorsList from '../components/protected/authors/AuthorsList';
import AuthorsAdd from '../components/protected/authors/AuthorsAdd'; 

import ListUser from '../components/protected/users/ListUser';
import AddUser from '../components/protected/users/AddUser'; 

import BlogsList from '../components/protected/blogs/BlogsList';
import BlogsCategoryList from '../components/protected/blogs/BlogsCategoryList'; 
import BlogsTagsList from '../components/protected/blogs/BlogsTagsList'; 

import Profile from '../components/protected/profile/Profile';

//Public Imports
import Login from '../components/public/Login';
import ForgotPassword from '../components/public/ForgotPassword';


//Protected Routes Object
export const protectedRoutes = [
    {
        key: "profile",
        path: "/admin/profile",
        component: Profile,
        exact: true
    },
    {
        key: "dashboard",
        path: "/admin/dashboard",
        component: Dashboard,
        exact: true
    },
    {
      key: "authors",
      path: "/admin/authors",
      component: AuthorsList,
      exact: true
    },
    {
        key: "authors-add",
        path: "/admin/authors/add",
        component: AuthorsAdd,
        exact: true
    },
    {
        key: "authors-edit",        
        path: "/admin/authors/edit/:id",
        component: AuthorsAdd,
        exact: true
    },
    {
        key: "users",
        path: "/admin/users",
        component: ListUser,
        exact: true
    },
    {
        key: "users-add",
        path: "/admin/users/add",
        component: AddUser,
        exact: true
    },
    {
        key: "blogs",
        path: "/admin/blogs",
        component: BlogsList,
        exact: true
    },
    {
        key: "blog-categories",
        path: "/admin/blog-categories",
        component: BlogsCategoryList,
        exact: true
    },
    {
        key: "blog-tags",
        path: "/admin/blog-tags",
        component: BlogsTagsList,
        exact: true
    }
];

//Public Routes Object
export const publicRoutes = [
    {
        key: "admin-login",
        path: "/admin/login",
        component: Login,
        exact: true
    },
    {
        key: "admin-forgot-password",
        path: "/admin/forgot-password",
        component: ForgotPassword,
        exact: true
    },
     
];