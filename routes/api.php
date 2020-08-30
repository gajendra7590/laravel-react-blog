<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//All Routes For FrontEnd
Route::group(['namespace' => 'Api'], function () {
    //All FrontEnd Routes
    Route::group(['namespace' => 'Frontend','prefix' => '/'], function () {
        //Auth
        Route::post('login', 'AuthController@login'); 
        Route::get('getBlogTags' ,'BlogsController@getBlogTags');
    }); 


    //['middleware' => ['auth:api', 'role:artist']
    //All Admin End Routes
    Route::group(['namespace' => 'Admin','prefix' => '/admin'], function () {
        //Auth Routes
        Route::post('login', 'AuthController@login');
        Route::post('forgot-password', 'AuthController@sendResetPasswordLink');
        Route::post('forgot-password-save', 'AuthController@ResetPasswordSetNew');
        Route::post('resendAccountVerifyLink', 'AuthController@sendResetPasswordLink');
        Route::post('verifyTokenStatus', 'AuthController@verifyTokenStatus');
        //Admin All Routes Need Authentication
        Route::group(['middleware' => ['auth:api', 'role:admin']], function () {
            //Admin Profile & Auth
            Route::get('getProfile', 'ProfileController@getProfile');
            Route::get('loggedProfile', 'ProfileController@loggedProfile');
            Route::post('updateProfile', 'ProfileController@updateProfile');
            Route::post('changePassword', 'ProfileController@changePassword');
            Route::post('logout', 'AuthController@logout');
            Route::post('logoutAll', 'AuthController@logoutAll');
            //Dashboard
            Route::get('getDashboardData', 'CommonController@index');
            //Company Detail
            Route::get('getCompanyDetail', 'CompanyDetailController@getCompanyDetail');
            Route::post('saveCompanyDetail', 'CompanyDetailController@saveCompanyDetail'); 
            //Manage Blogs
            Route::get('getBlogs', 'BlogsController@getBlogs');
            Route::get('editBlog/{id}','BlogsController@editBlog');
            Route::post('createBlog', 'BlogsController@createBlog');
            Route::post('updateBlog/{id}', 'BlogsController@updateBlog');
            Route::delete('deleteBlog/{id}', 'BlogsController@deleteBlog');
            //Manage Blog Categories
            Route::get('blogCategories', 'BlogCategoriesController@blogCategories');
            Route::get('getBlogCategories', 'BlogCategoriesController@getBlogCategories');
            Route::get('getBlogCategory/{id}','BlogCategoriesController@getBlogCategory');
            Route::post('createBlogCategory', 'BlogCategoriesController@createBlogCategory');
            Route::post('updateBlogCategory/{id}', 'BlogCategoriesController@updateBlogCategory');
            Route::delete('deleteBlogCategory/{id}', 'BlogCategoriesController@deleteBlogCategory');
            //Manage Blog Tags
            Route::get('blogTags', 'BlogTagsController@blogTags');
            Route::get('getBlogTags', 'BlogTagsController@getBlogTags');
            Route::get('getBlogTag/{id}','BlogTagsController@getBlogTag');
            Route::post('createBlogTag', 'BlogTagsController@createBlogTag');
            Route::post('updateBlogTag/{id}', 'BlogTagsController@updateBlogTag');
            Route::delete('deleteBlogTag/{id}', 'BlogTagsController@deleteBlogTag');
            //Manage Clients
            Route::get('getClients', 'ClientsController@getClients');  
            Route::get('editClients/{id}', 'ClientsController@editClients');
            Route::post('createClients', 'ClientsController@createClients');
            Route::post('updateClients/{id}', 'ClientsController@updateClients');
            Route::delete('deleteClients/{id}', 'ClientsController@deleteClients');
            //Manage Authors
            Route::get('getAuthors', 'AuthorsController@getAuthors'); 
            Route::get('editAuthors/{id}', 'AuthorsController@editAuthors');
            Route::post('createAuthors', 'AuthorsController@createAuthors');
            Route::post('updateAuthors/{id}', 'AuthorsController@updateAuthors');
            Route::delete('deleteAuthors/{id}', 'AuthorsController@deleteAuthors');

        });

    });  
     

});