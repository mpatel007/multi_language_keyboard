var $ = jQuery;
$(document).ready(function() {
    $('#checkAvailabilitybtn').on('click', function() {
        var check_geomain_available = $('#multi').val();
        var form = $("#CheckGeonameForm");
        var language = $('input[name="geoname_language"]:checked').val();
        form.validate({
            rules: {
                check_geomain_available: {
                    maxlength: 29,
                    required: true,
                    minlength: 2
                }
            },
        });
        if (form.valid() === true) {
            $("#loader").css('display', 'block');
            $("#geomainNotAvailable").css('display', 'none');
            $("#geomainAvailable").css('display', 'none');
            $.ajax({
                url: ajaxurl,
                type: 'POST',
                data: {
                    language: language,
                    check_geomain_available: check_geomain_available,
                    action: "GeomainController::check_geomain_available"
                },
                success: function(response) {
                    var data = JSON.parse(response);
                    if (data.status == 1) {
                        $("#geomainName").text(data.geomain_name);
                        $("#geomainAvailable").css('display', 'block');
                        $("#loader").css('display', 'none');
                        if (language == "en-us") {
                            $("#congratulations").html("Congratulations");
                            $("#geomain").html("Geomain");
                            $("#isavailable").html("is Available");
                            $("#buyNow").html("Buy Now");
                          } else if (language == "ar") {
                            $("#congratulations").html("تهنئة");
                            $("#geomain").html("جيومين");
                            $("#isavailable").html("متوفرة");
                            $("#buyNow").html("اشتري الآن");
                          } else if(language == "hi"){
                            $("#congratulations").html("बधाई");
                            $("#geomain").html("जियोमेन");
                            $("#isavailable").html("उपलब्ध है.");
                            $("#buyNow").html("अभी खरीदें");
                          } else if(language == "ja"){
                            $("#congratulations").html("おめでとうございます");
                            $("#geomain").html("ジオメイン");
                            $("#isavailable").html("利用可能");
                            $("#buyNow").html("今すぐ購入");
                          } else if(language == "ko"){
                            $("#congratulations").html("축하합니다");
                            $("#geomain").html("기하학");
                            $("#isavailable").html("사용 가능");
                            $("#buyNow").html("지금 구매");
                          } else if(language == "zh"){
                            $("#congratulations").html("祝贺");
                            $("#geomain").html("地主");
                            $("#isavailable").html("可用");
                            $("#buyNow").html("立即购买");
                          } else if(language == "ru"){
                            $("#congratulations").html("Поздравления");
                            $("#geomain").html("геомен");
                            $("#isavailable").html("доступен");
                            $("#buyNow").html("Купи сейчас");
                          }
                    } else {
                        $("#loader").css('display', 'none');
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: data.msg,
                        })
                    }
                },
            });
        }
    });
    $("#buyNow").on('click', function() {
        var geomainName = $('#geomainName').text();
        window.location.replace('https://getgeomains.com/?geomain=' + geomainName)
    });

    $('.lang_chnage').on('change',function(){
        var language = $('input[name="geoname_language"]:checked').val();
        if (language == "en-us") {
            $("#checkAvailabilitybtn").html("Check Availability");
          } else if (language == "ar") {
            $("#checkAvailabilitybtn").html("التحقق من الصلاحية");
          } else if(language == "hi"){
            $("#checkAvailabilitybtn").html("उपलब्धता जाँचें");
          } else if(language == "ja"){
            $("#checkAvailabilitybtn").html("空き状況を確認する");
          } else if(language == "ko"){
            $("#checkAvailabilitybtn").html("이용 가능 여부 확인");
          } else if(language == "zh"){
            $("#checkAvailabilitybtn").html("检查可用性");
          } else if(language == "ru"){
            $("#checkAvailabilitybtn").html("Проверять наличие");
          }
    });
});