$(function(){
    $(function(){
        $("select").on("change", function(event){
            $("section").fadeOut(400);
            $(".loader").removeClass("hidden")
            $(".logo").css("height", "120px", "width", "120px")
            $("header").css("height", "30vh")
            $selection = $(event.target).val()

            $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${$selection}.json?api-key=WU7IFUdwRwP8g4fBGiav2zqEpSm6VlfG`)
            .done(function(data){
                console.log(data)
                let arrLength = 0;
                $.each(data.results, function(key, value){
                    if(value.multimedia.length !==0 && arrLength < 12){
                        arrLength ++;
                        console.log(key)
                        console.log(value)

                        const section = (`
                                            <section class="newsSection" style="background-image: url(${value.multimedia[4].url});">
                                                <div class="abstract">
                                                    <p>${value.abstract}</p>
                                                </div>
                                            </section>
                        `)
                        $("main").append(section).hide().fadeIn(700)
                        $(".loader").addClass(" hidden")
                    }
                })
            })
        })
    })
})
