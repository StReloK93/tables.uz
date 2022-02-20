
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
        <h3 style="margin: 5px 15px;">
            Client data
        </h3>
        <table border="1" bgcolor="#fff" width="500" style="border-collapse: collapse; margin: 15px; border-color: #eee">
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
        </table>
        
        <h3 style="margin: 5px 15px;">
            Legs type page
        </h3>
        <table border="1" bgcolor="#fff" width="500" style="border-collapse: collapse; margin: 15px; border-color: #eee">
            <tr style="text-transform: capitalize">
                @foreach ($details['params'] as $key => $item)
                    @if($key != 'deskMaterial' && $key != 'activeFolder')
                        <th style="text-align: center;padding: 10px;">{{$key}} </th>
                    @endif
                @endforeach
            </tr>
            <tr>
                @foreach ($details['params'] as $key => $item)
                @if($key != 'deskMaterial' && $key != 'activeFolder')
                    <td style="text-align: center;padding: 10px;">{{$item}} </td>
                @endif
                @endforeach
            </tr>
        </table>

        <h3 style="margin: 5px 15px;">
            Customization page
        </h3>
        <table border="1" bgcolor="#fff" width="500" style="border-collapse: collapse; margin: 15px; border-color: #eee">
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
        </table>

        <h3 style="margin: 5px 15px;">
            Size page
        </h3>
        <table border="1" bgcolor="#fff" width="500" style="border-collapse: collapse; margin: 15px; border-color: #eee">
            <tr style="text-transform: capitalize">
                @foreach ($details['sizepage'] as $key => $item)
                    <th style="text-align: center;padding: 10px;">{{$key}} </th>
                @endforeach
            </tr>
            <tr>
                @foreach ($details['sizepage'] as $key => $item)
                    <td style="text-align: center;padding: 10px;">{{$item}} </td>
                @endforeach
            </tr>
        </table>

        <h3 style="margin: 5px 15px;">
            Other page
        </h3>
        <table border="1" bgcolor="#fff" width="500" style="border-collapse: collapse; margin: 15px; border-color: #eee">
            <tr style="text-transform: capitalize">
                @foreach ($details['otherpage'] as $key => $item)
                    <th style="text-align: center;padding: 10px;">{{$key}} </th>
                @endforeach
            </tr>
            <tr>
                @foreach ($details['otherpage'] as $key => $item)
                    <td style="text-align: center;padding: 10px;">{{$item}} </td>
                @endforeach
            </tr>
        </table>
        <h3 style="margin: 5px 15px;">
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