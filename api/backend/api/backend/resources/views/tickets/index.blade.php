@extends('master-material')
@section('title', 'View all ticketssss')
@section('content')

    <div class="container col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h2> Tickets s</h2>
                </div>
                @if (session('status'))
                   <div class="alert alert-success">
                 {{ session('status') }}
                 </div>
                @endif
                
                @if ($tickets->isEmpty())
                    <p> There is no ticket.</p>
                @else
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($tickets as $ticket)
                                <tr>
                                    <td>{!! $ticket->id !!} </td>
                                   <!-- <td>{!! $ticket->title !!}</td>  without action link -->
                                     <td> <a href="{!! action('TicketsController@show', $ticket->slug) !!}">{!! $ticket->title !!} </a></td>

                                     <!--- alternatively action('TicketsController@show', ['slug' => $ticket->slug]) -->
                                    <td>{!! $ticket->status ? 'Pending' : 'Answered' !!}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                @endif
            </div>
    </div>

@endsection