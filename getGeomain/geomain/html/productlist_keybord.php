
        <!-- jQuery -->

    <!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script> -->
    <link href="https://getgeomains.com/assets/css/custom.css" rel='stylesheet' type='text/css' />
    <link href="https://getgeomains.com/assets/css/jquery-ui.min.css" rel='stylesheet' type='text/css' />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.2/jquery.validate.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.13.1/additional-methods.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    
    <style>
       form .error {
        color: #ff0000;
      }
      
    </style>

    <div id="loader" class="loader" style="display: none;"></div>
    <div>
        <form id="CheckGeonameForm" method="post">
            <label style="padding-right: 15px; margin-left: 10px;">
                <input type="radio" name="geoname_language" class="lang_chnage" value="en-us" checked> English &nbsp;
            </label>
            <label style="padding-right: 15px;">
                <input type="radio" name="geoname_language" class="lang_chnage" value="ar"> Arabic اللغة العربية &nbsp;
            </label>
            <label style="padding-right: 15px;">
                <input type="radio" name="geoname_language" class="lang_chnage" value="hi"> Hindi हिन्दी भाषा &nbsp;
            </label>
            <label style="padding-right: 15px;">
                <input type="radio" name="geoname_language" class="lang_chnage" value="ja"> Japanese 日本語 &nbsp;
            </label>
            <label style="padding-right: 15px;">
                <input type="radio" name="geoname_language" class="lang_chnage" value="ko"> Korean 한국어 &nbsp;
            </label>
            <label style="padding-right: 15px;">
                <input type="radio" name="geoname_language" class="lang_chnage" value="zh"> Mandarin 普通话语言 &nbsp;
            </label>
            <label>
                <input type="radio" name="geoname_language" class="lang_chnage" value="ru"> Russian русский Язык &nbsp;
            </label>

            <div>
                <div style="margin-top:5px">
                    <input type="text" style="width: 100%;" placeholder="Select a language and choose a Geomain you want to buy" class="form-control check_geomain ui-keyboard-input ui-widget-content ui-corner-all ui-keyboard-input-current" name="check_geomain_available" id="multi" autocomplete="off">
                </div>
                <div >
                    <button class="btn btn-info" type="button" id="checkAvailabilitybtn" name="checkAvailabilitybtn">Check Availability</button>
                </div>
            </div>
        </form>
    </div>
    <div style="display:none;" id="geomainAvailable" style="background-color: lightgrey">
		<table>
			<tr>
				<td>
					<h2 id="congratulations">Congratulations</h2>
					<div>
							<p><span id="geomain">Geomain</span> "<span id="geomainName"></span>" <span id="isavailable">is available</span>.</p>
					</div>
				</td>
				<td>
					<button class="btn btn-sm btn-info ml-5" id="buyNow" name="buyNow" style="float:right;">Buy now</button>
				</td>
			</tr>
        
		</table>
    </div>
    <!-- alert -->


<script type="text/javascript">
    var ajaxurl = "<?php echo admin_url('admin-ajax.php'); ?>";
    
</script>

<script>
    var $ = jQuery;
            $(function () {


                var t,
                        o = '',
                        r = '',
                        layouts = [];

                // Change display language, if the definitions are available
                showKb = function (layout) {

                    var kb = $('#multi').getkeyboard();
                    kb.options.layout = layout;
                    // redraw keyboard with new layout
                    kb.redraw();
                    $("#multi_keyboard").draggable();

                };

                $.each(jQuery.keyboard.layouts, function (i, l) {
                    if (l.name) {
                        layouts.push([i, l.name]);
                    }
                });
                // sort select options by language name, not
                layouts.sort(function (a, b) {
                    return a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0;
                });
                $.each(layouts, function (i, l) {
                    o += '<option value="' + l[0] + '">' + l[1] + '</option>';
                    r += '<input style="margin-left: 5px;" name="geoname_language" enabled="enabled" value="' + l[0] + '"  type="radio">' + l[1] + '';
                });

                $('#multi').keyboard({

                    //$( "#mydiv").draggable();
                    layout: 'qwerty',
                    stayOpen: true,
                })
                        // activate the typing extension
                        .addTyping({
                            showTyping: true,
                            delay: 200
                        })
                        .previewKeyset();
                $('.lang_chnage').change(function () {
                    var radioValue = $("input[name='geoname_language']:checked").val();
                        if (radioValue == "en-us") {
                            var placehoder = "Enter Geomain";
                        } else if (radioValue == "ar") {
                            var placehoder = "أدخلجيومين";
                        } else if(radioValue == "hi"){
                            var placehoder = "जियोमेन दर्ज करें";
                        } else if(radioValue == "ja"){
                            var placehoder = "ジオメイン入力";
                        } else if(radioValue == "ko"){
                            var placehoder = "지오메인입력하다";
                        } else if(radioValue == "zh"){
                            var placehoder = "进入地主";
                        } else if(radioValue == "ru"){
                            var placehoder = "Введите геомен";
                        }
                   // $("input[name='geoname_language']:checked").attr("data-title") // will return the string "123"
                    $('#multi').attr("placeholder", placehoder);

                    $('#multi').val('');
                    var kb = $('#multi'),
                            $this = $(this),
                            $opt = $this.find("input[type=radio]:checked"),
                            layout = $opt.val();
                            console.log(kb)
                            
                    showKb(radioValue);

                }).trigger('change');

                $("#multi_keyboard").draggable();
            });

        </script>