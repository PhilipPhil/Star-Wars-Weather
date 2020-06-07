document.addEventListener("mousemove", function () {
    favs = document.getElementsByClassName('notused')
    for (var i = 0; i < favs.length; i++) {
        var fav = favs[i].getElementsByClassName('favorite')[0];
        fav.onclick = function () {
            $('#addModal').modal('show');
        }
    }
});


document.addEventListener("mousemove", function () {
    favs = document.getElementsByClassName('used')
    for (var i = 0; i < favs.length; i++) {
        var favid = favs[i].id
        var fav = favs[i].getElementsByClassName('close')[0];
        fav.onclick = function () {
            $('#removeModal').modal('show');
            var modal = $('#removeModal')
            // modal.find('.modal-title').text('New message to ' + favid)
            modal.find('.modal-body input').val(favid)
            modal.find('g')
        }
    }
});


// $('#addModal').on('show.bs.modal', function (event) {
//     alert('a')
//     // var div = $(event.relatedTarget)
//     // var recipient = div.data('whatever')
//     // var modal = $(this)
//     // modal.find('.modal-title').text('New message to ' + usedindex)
//     // modal.find('.modal-body input').val(recipient)
// })

// $('#removeModal').on('show.bs.modal', function (event) {
//     alert('r')
//     // var div = $(event.relatedTarget)
//     // var recipient = div.data('whatever')
//     // var modal = $(this)
//     // modal.find('.modal-title').text('New message to ' + recipient)
//     // modal.find('.modal-body input').val(recipient)
// })