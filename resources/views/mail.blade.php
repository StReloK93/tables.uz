
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body bgcolor="#eee">

    <div style="background: #eee;width: 100%; padding: 20px;">
        <h2 style="color:#444;text-transform: uppercase; margin-bottom: 20px;text-align: center">
            Information about the client's choice
        </h2>
        <h3 style="margin: 5px 15px;font-size: 25px">
            Client
        </h3>
        <main bgcolor="#fff">
            @foreach ($details['finished'] as $key => $item)
                <div style="margin: 15px; ">

                    @if($key == 'prefers')
                    <b>How to be contacted</b>
                    @else
                    <b>{{$key}}</b> 
                    @endif
                    : {{$item}}
                </div>
            @endforeach
        </main>
        {{-- <table border="1" bgcolor="#fff" width="500" style="border-collapse: collapse; margin: 15px; border-color: #eee">
            <tr style="text-transform: capitalize">
                @foreach ($details['finished'] as $key => $item)
                    <th style="text-align: center;padding: 10px;">{{$key}} </th>
                @endforeach
            </tr>
            <tr>
                @foreach ($details['finished'] as $key => $item)
                    <td style="text-align: center;padding: 10px;">{{$item}} </td>
                @endforeach
            </tr>
        </table> --}}
        
        <h3 style="margin: 5px 15px;font-size: 25px">
            Legs type page
        </h3>
        <main bgcolor="#fff">
            @foreach ($details['params'] as $key => $item)
                <div style="margin: 15px; ">
                    <b>{{$key}}</b> 
                    : {{$item}}
                </div>
            @endforeach
        </main>
        {{-- <table border="1" bgcolor="#fff" width="500" style="border-collapse: collapse; margin: 15px; border-color: #eee">
            <tr style="text-transform: capitalize">
                @foreach ($details['params'] as $key => $item)
                    <th style="text-align: center;padding: 10px;">{{$key}} </th>
                @endforeach
            </tr>
            <tr>
                @foreach ($details['params'] as $key => $item)
                    <td style="text-align: center;padding: 10px;">{{$item}} </td>
                @endforeach
            </tr>
        </table> --}}

        <h3 style="margin: 5px 15px;font-size: 25px">
            Customization page
        </h3>
        <main bgcolor="#fff">
            @foreach ($details['custom'] as $key => $item)
                <div style="margin: 15px; ">
                    <b>{{$key}}</b> 
                    : {{$item}}
                </div>
            @endforeach
        </main>
        {{-- <table border="1" bgcolor="#fff" width="500" style="border-collapse: collapse; margin: 15px; border-color: #eee">
            <tr style="text-transform: capitalize">
                @foreach ($details['custom'] as $key => $item)
                    <th style="text-align: center;padding: 10px;">{{$key}} </th>
                @endforeach
            </tr>
            <tr>
                @foreach ($details['custom'] as $key => $item)
                    <td style="text-align: center;padding: 10px;">{{$item}} </td>
                @endforeach
            </tr>
        </table> --}}

        <h3 style="margin: 5px 15px; font-size: 25px">
            Size page
        </h3>
        <main bgcolor="#fff">
            @foreach ($details['sizepage'] as $key => $item)
                <div style="margin: 15px; ">
                    <b style="text-transform: capitalize">{{$key}}</b> (mm)
                    :{{$item}}
                </div>
            @endforeach
        </main>
        {{-- <table border="1" bgcolor="#fff" width="500" style="border-collapse: collapse; margin: 15px; border-color: #eee">
            <tr style="text-transform: capitalize">
                @foreach ($details['sizepage'] as $key => $item)
                <th style="text-align: center;padding: 10px;">{{$key}} (mm)</th>
                @endforeach
            </tr>
            <tr>
                @foreach ($details['sizepage'] as $key => $item)
                <td style="text-align: center;padding: 10px;">{{$item}} </td>
                @endforeach
            </tr>
        </table> --}}

        <h3 style="margin: 5px 15px;font-size: 25px">
            Other page
        </h3>
        <main bgcolor="#fff">
            @foreach ($details['otherpage'] as $key => $item)
                <div style="margin: 15px; ">
                    <b style="text-transform: capitalize">{{$key}}</b>
                    @if($key == 'message')
                    <div style="max-width: 400px">{{$item}} </div>
                    @else
                    : {{$item}}
                    @endif
                    @if($key == 'upperlength' || $key == 'lowerlength') cm @endif
                </div>
            @endforeach
        </main>
        {{-- <table border="1" bgcolor="#fff" width="500" style="border-collapse: collapse; margin: 15px; border-color: #eee">
            <tr style="text-transform: capitalize">
                @foreach ($details['otherpage'] as $key => $item)
                    <th style="text-align: center;padding: 10px;">{{$key}} </th>
                @endforeach
            </tr>
            <tr>
                @foreach ($details['otherpage'] as $key => $item)
                    <td style="text-align: center;padding: 10px;">{{$item}} @if($key == 'upperlength' || $key == 'lowerlength') cm @endif </td>
                @endforeach
            </tr>
        </table> --}}
        <h3 style="margin: 5px 15px;font-size: 25px">
            Accessories
        </h3>
        <div style="margin: 15px">
            @foreach ($details['accessories'] as $key => $item)
                <span style="text-align: center;padding: 10px;">{{$item['name']}} </span> ,
            @endforeach
        </div>
    </div>
</body>
</html>