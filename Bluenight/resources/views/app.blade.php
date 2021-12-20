<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- aiz core css -->
    <link rel="stylesheet" href="{{ asset('assets/css/aiz-core.css?v=' . time()) }}">
    <link rel="stylesheet" href="{{ asset('assets/css/vendors.css?v=' . time()) }}"> 

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <script>
        var AIZ = AIZ || {};
        AIZ.local = {
            nothing_found: "{{ ('Nothing found') }}",
            choose_file: "{{ ('Choose file') }}",
            file_selected: "{{ ('File selected') }}",
            files_selected: "{{ ('Files selected') }}",
            add_more_files: "{{ ('Add more files') }}",
            adding_more_files: "{{ ('Adding more files') }}",
            drop_files_here_paste_or: "{{ ('Drop files here, paste or') }}",
            browse: "{{ ('Browse') }}",
            upload_complete: "{{ ('Upload complete') }}",
            upload_paused: "{{ ('Upload paused') }}",
            resume_upload: "{{ ('Resume upload') }}",
            pause_upload: "{{ ('Pause upload') }}",
            retry_upload: "{{ ('Retry upload') }}",
            cancel_upload: "{{ ('Cancel upload') }}",
            uploading: "{{ ('Uploading') }}",
            processing: "{{ ('Processing') }}",
            complete: "{{ ('Complete') }}",
            file: "{{ ('File') }}",
            files: "{{ ('Files') }}",
        }
    </script>
    @yield('css')
</head>

<body>

    <div id="app">
        <router-view></router-view>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    @guest
    <script defer src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js" type="text/javascript"></script>
    @endguest
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('assets/js/vendors.js') }}"></script>
    <script src="{{ asset('assets/js/aiz-core.js') }}"></script>
</body>
</html>
