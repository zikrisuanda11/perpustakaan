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
            <h3>Rekap Peminjaman & Pengembalian Buku</h3>
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
                    <th>Kode</th>
                    <th>Kode Buku</th>
                    <th>Nama</th>
                    {{-- <th>Judul Buku</th> --}}
                    <th>Peminjaman</th>
                    <th>Pengembalian</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                @if ($loans->count() != 0)
                    @foreach ($loans as $loan)
                        <tr>
                            <td>{{ $loan->code }}</td>
                            <td>{{ $loan->book->code }}</td>
                            <td>{{ $loan->user->name }}</td>
                            {{-- <td>{{$loan->book->title}}</td> --}}
                            <td>{{ $loan->loan_date }}</td>
                            <td>{{ $loan->return_date }}</td>
                            <td>{{ $loan->status }}</td>
                        </tr>
                    @endforeach
                @else
                    <tr>
                        <th colspan="6">tidak ada data</th>
                    </tr>
                @endif
            </tbody>
        </table>
        {{-- <div class="tanda-tangan" style=" margin-top: 120px;">
            <table style="width: 100%;">
                <tr>
                    <td style="padding-top: 50px;">
                        <p style="text-align: center">Staff Operasional</p>
                        <br>
                        <p style="text-align: center;">zikri</p>
                    </td>
                    <td>
                        <p style="text-align: center">Balikpapan, 14 Agustus 2023</p>
                        <p style="text-align: center">Manager Pelayanan Kapal</p>
                        <br>
                        <p style="text-align: center">Imam Syariffudin</p>
                    </td>
                </tr>
            </table>
        </div> --}}
    </div>
</body>

</html>
