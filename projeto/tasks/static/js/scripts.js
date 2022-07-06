$(document).ready(function(){

        var baseurl    = 'http://localhost:8000/';
        var deleteBtn  = $('.delete-btn');
        var searchBtn  = $('#search-btn');
        var searchForm = $('#search-form');
        var filter     = $('#filter');

        $(deleteBtn).on('click', function(e) {

        e.preventDefault();

        var dellink = $(this).attr('href');
        var result = confirm("Deseja realmente excluir?");

        if(result){
            window.location.href = dellink;
        }

        });

        $(searchBtn).on('click', function() {
            searchForm.submit();
        
        });

        $(filter).change(function() {
            var filter = $(this).val();
            window.location.href = baseurl + '?filter=' + filter;
        });
}); 