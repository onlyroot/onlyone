
<!DOCTYPE html>
<html lang="en" class="no-js">

    <head>

        <meta charset="utf-8">
        <title>Fullscreen Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <!-- CSS -->
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=PT+Sans:400,700'>
        <link rel="stylesheet" href="css/admin/reset.css">
        <link rel="stylesheet" href="css/admin/supersized.css">
        <link rel="stylesheet" href="css/admin/style.css">
        <!--引入wbox弹出层插件 -->
        <script type="text/javascript" src="{{ asset('/plugins/wbox/jquery1.4.2.js')}}"></script>
        <script type="text/javascript" src="{{ asset('/plugins/wbox/mapapi.js')}}"></script>
        <script type="text/javascript" srx="{{ asset('/plugins/wbox/wbox.js')}}"></script>
        <link rel="stylesheet" type="text/css" href="{{ asset('/plugins/wbox/wbox/wbox.css')}}" />
    </head>

    <body>

        <div class="page-container">
            <h1>登录</h1>
            <form method="post" name="login" action="/logTodo">
            <!-- <input type="hidden" name="_token" value="{{csrf_token()}}" /> -->
                <input type="text" name="uname" class="uname" placeholder="输入账号">
                <input type="password" name="password" class="password" placeholder="输入密码">
                <input id='inp' type="text" name="code" value=""  placeholder="输入验证码"> <img src="{{url('/captcha').'/'.rand()}}" align="top" onclick="this.src = this.src.replace(/\d+$/,' ') + Math.random(); ">
                <button type="submit">登录</button> <button type="button" id='btn' value="弹出一个层"></button>
                <div class="error"><span>+</span></div>
            </form>
            <div class="connect">
            </div>
        </div>
        <div align="center" ><b>看大片就点&nbsp&nbsp</b><a href="#" target="_blank" title="lamp143">&copylamp143</a></div>

        <!-- Javascript -->
        <script src="js/jquery-1.8.2.min.js"></script>
        <script src="js/supersized.3.2.7.min.js"></script>
        <script src="js/supersized-init.js"></script>
        <script src="js/scripts.js"></script>
      
    </body>

</html>

