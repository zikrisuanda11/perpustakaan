<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Rekap</title>
    <style>
        body {
            margin: auto;
            padding: 30px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
            font-size: 16px;
            line-height: 24px;
            color: #555;
        }

        h3 {
            text-align: center;
        }

        .report {
            width: 100%;
            text-align: left;
            border-collapse: collapse;
        }

        .report th,
        .report td {
            padding-bottom: 5px;
            border: 1px solid #999;
            font-size: 12px;
            padding-left: 5px;
            padding-right: 5px;
        }

        .report {
            margin-top: 20px;
        }

        .report tbody {
            text-align: center;
        }
    </style>
</head>

<body>
    <div>
        <div>
            <h3>Rekap Data Anggota</h3>
            <h3>{{ $formatTanggal }}</h3>
            {{-- <table>
                <tbody>
                    <tr>
                        <td>Total Anggota</td>
                        <td>: {{ $member }}</td>
                    </tr>
                    <tr>
                        <td>Total Buku</td>
                        <td>: {{ $book }}</td>
                    </tr>
                </tbody>
            </table> --}}
        </div>
        <table class="report">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Alamat</th>
                    <th>Divisi</th>
                    <th>Jabatan</th>
                    <th>No HP</th>
                </tr>
            </thead>
            <tbody>
                @if ($users->count() != 0)
                    @foreach ($users as $user)
                        <tr>x
                            <td>{{ $user->id }}</td>
                            <td>{{ $user->name }}</td>
                            <td>{{ $user->email }}</td>
                            <td>{{ $user->address }}</td>
                            <td>{{ $user->division }}</td>
                            <td>{{ $user->position }}</td>
                            <td>{{ $user->phone }}</td>
                        </tr>
                    @endforeach
                @else
                    <tr>
                        <th colspan="8">tidak ada data</th>
                    </tr>
                @endif
            </tbody>
        </table>
    </div>
</body>

</html>
