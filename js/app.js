$(function(){

    //Custom Select Button using Pretty-Dropdowns: "https://github.com/thdoan/pretty-dropdowns"
    //Implemented but prefferd my original idea. Uncomment to view.

    // $('select').prettyDropdown({
    //     height: 30,
    //     classic: true,

    // });

    $(function(){

        $("select").on("change", function(event){
            $selection = $(event.target).val()
            if($selection === "") return;

            if($(window).width() < 768){
                $(".logo").addClass(" logoShrinkMo")
                $("header").addClass(" headerShrinkMo")
                
            }else if($(window).width() > 767 ){
                $(".logo").addClass(" logoShrinkTa")
                $("header").addClass(" headerShrinkTa")
            }

            $("section").fadeOut(400);
            $(".loader").removeClass("hidden")

            $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${$selection}.json?api-key=WU7IFUdwRwP8g4fBGiav2zqEpSm6VlfG`)
            .done(function(data){
                let $arrLength = 0;
                
                $.each(data.results, function(key, value){
                    if(value.multimedia.length !==0 && $arrLength < 12){
                        $arrLength += 1;
                        const $section = (`
                                            <a href="${value.short_url}"><section class="newsSection" 
                                                style="background-image: url(${value.multimedia[4].url});">
                                                <div class="abstract">
                                                    <p>${value.abstract}</p>
                                                </div>
                                            </section></a>
                        `)

                        $("main").append($section).hide().fadeIn(700)
                        $(".loader").addClass(" hidden")
                    }
                })

                setTimeout(function(){
                    $("footer").fadeIn(1);
                }, 1000)

                $("section").mouseover(function(){
                    $(this).children().slideDown("fast")
                })

                $("section").mouseout(function (){
                    $(this).children().slideUp("fast")
                })

            })
        })
    })
})


