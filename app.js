$(function(){
    $(function(){
        $("select").on("change", function(event){
            $selection = $(event.target).val()
            // console.log($selection);
            $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${$selection}.json?api-key=WU7IFUdwRwP8g4fBGiav2zqEpSm6VlfG`)
            .done(function(data){
                console.log(data)
                $("section").remove();
                $.each(data.results, function(key, value){
                    console.log(key)
                    console.log(value)
                    $("main").append(`
                    <section style="background-image: url(${value.multimedia[4].url});">
                    <div class="abstract">
                        <p>${value.abstract}</p>
                    </div>
                        
                    </section>`)
                })
            })
        })
    })
})
