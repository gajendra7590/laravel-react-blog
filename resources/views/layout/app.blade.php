<!DOCTYPE html>
<html> 
    <head>
        <title>React Blog</title> 
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="keywords" content="Wordwego" />
        <meta name="MobileOptimized" content="320" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="author" content="React Blog">  
        <meta name="theme-color" content="#143A5F">
        <meta name="msapplication-navbutton-color" content="#143A5F">
        <meta name="apple-mobile-web-app-status-bar-style" content="#143A5F">
        <link rel="icon" href="{{ URL::asset('/images/fav_icn.png') }}" type="image/x-icon">

        <!--Template style -->
        <link rel="stylesheet" type="text/css" href="{{ URL::asset('/admin-theme/stylesheets/bootstrap.min.css') }}" />
        <link rel="stylesheet" type="text/css" href="{{ URL::asset('/admin-theme/stylesheets/font-awesome.css') }}" />
        <link rel="stylesheet" type="text/css" href="{{ URL::asset('/admin-theme/stylesheets/flaticon.css') }}" />
        <link rel="stylesheet" type="text/css" href="{{ URL::asset('/admin-theme/stylesheets/style.css') }}" />
        
        <link rel="stylesheet" href="{{ URL::asset('/css/app.css') }}">
    </head>

    <body>
        <div>
            <input type="hidden" name="BS_URL_ASSET" value="{{ URL::asset('/') }}"> 
            <div id="app"></div> 
        </div> 
        <!-- ./wrapper -->
        <script type="text/javascript" src="{{ URL::asset('/js/app.js') }}"></script> 

        <!-- Main Script Start -->
        <script src="{{ URL::asset('/admin-theme/js/jquery-3.2.1.min.js') }}"></script>
        <script src="{{ URL::asset('/admin-theme/js/bootstrap.min.js') }}"></script>
        <script src="{{ URL::asset('/admin-theme/js/custom.js') }}"></script>
        <!-- custom js-->

    </body> 
</html>