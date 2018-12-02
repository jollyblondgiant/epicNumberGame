$(document).ready(function(){
    
    var socket = io.connect();
    socket.on('connect', function(data){
        socket.emit('join', "Hello Server!")
    })
    $("#count").click(function(){
        socket.emit('click')
    })
    $("#reset").click(function(){
        socket.emit('reset')
    })
    socket.on('broad', function(counter){
        $("h2").html("Score: "+counter)
    })
})