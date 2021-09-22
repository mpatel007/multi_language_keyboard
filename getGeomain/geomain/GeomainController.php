<?php
add_action('admin_menu', 'custom_Geomain_menu');
include_once(dirname(__FILE__)."/getgeomainsApi.php");

function custom_Geomain_menu()
{
    add_menu_page(
        'Search Geomain',// page title
        'Search Geomain',// menu title
        'manage_options',// capability
        'Search Geomain',// menu slug
        'display_geomain_page' // callback function
    );
}

function display_geomain_page()
{
    ob_start();
    // wp_enqueue_script('jquery.min', plugins_url('../assets/js/jquery.min.js', __FILE__));
    //wp_enqueue_script('jquery.popper', plugins_url('../assets/js/popper.min.js', __FILE__));
    
    wp_enqueue_style('clone_style', plugins_url('../assets/css/style.css', __FILE__), false, '1.0.0', 'all');
    wp_enqueue_style('multiselect', plugins_url('../assets/css/multiselect.css', __FILE__), false, '1.0.0', 'all');
    wp_enqueue_style('keyboard', plugins_url('../assets/css/keyboard.css', __FILE__), false, '1.0.0', 'all');
    wp_enqueue_style('keyboard-previewkeyset', plugins_url('../assets/css/keyboard-previewkeyset.css', __FILE__), false, '1.0.0', 'all');
    wp_enqueue_script('jquery.ui', plugins_url('../assets/js/jquery-ui.min.js', __FILE__));
    wp_enqueue_script('jquery.keyboard', plugins_url('../assets/js/jquery.keyboard.js', __FILE__));
    wp_enqueue_script('jquery.mousewheel', plugins_url('../assets/js/jquery.mousewheel.js', __FILE__));
    wp_enqueue_script('jquery.keyboard.extension-typing', plugins_url('../assets/js/jquery.keyboard.extension-typing.js', __FILE__));
    wp_enqueue_script('jquery.keyboard.extension-previewkeyset', plugins_url('../assets/js/jquery.keyboard.extension-previewkeyset.js', __FILE__));
    wp_enqueue_script('jquery.keyboard-layouts-greywyvern', plugins_url('../assets/layouts/keyboard-layouts-greywyvern.js', __FILE__));
    // wp_enqueue_script('jquery.keyboard.extension-caret', plugins_url('../assets/js/jquery.keyboard.extension-caret.js', __FILE__));
    
    wp_enqueue_script('croppie', plugins_url('../assets/js/croppie.js', __FILE__));
    wp_enqueue_script('script', plugins_url('../assets/js/script.js', __FILE__));

    include(dirname(__FILE__) . "/constant.php");
    include(dirname(__FILE__) . "/html/productlist_keybord.php");
    $s = ob_get_contents();
    ob_end_clean();
    print $s;
}

add_shortcode('display_geomain_page', 'display_geomain_page');


class GeomainController
{
    public function check_geomain_available(){
       
        // global $wpdb;
        $geomain_name = $_POST['check_geomain_available'];
        $geomain_lang = $_POST['language'];
                
        $check = GetgeomainsApi::curl_check_geomain_name_available($geomain_name);
        if ($check) { 
            $result['geomain_name'] = $geomain_name;
            $result['status']  = 1;
        } else {
            $result['status']  = 0;
            if ($geomain_lang == "en-us") {
                $result['msg'] = "The Geomain you have entered is not available. Please choose another Geomain.";
            } else if ($geomain_lang == "ar") {
                $result['msg'] = "جيومين الذي أدخلته غير متاح. الرجاء اختيار جيومين آخر";    
            } else if($geomain_lang == "hi"){
                $result['msg'] = "आपके द्वारा दर्ज किया गया जियोमेन उपलब्ध नहीं है। कृपया कोई दूसरा जियोमेन चुनें";    
            } else if($geomain_lang == "ja"){
                $result['msg'] = "入力したジオメインは利用できません。別のジオメインを選択してください。";    
            } else if($geomain_lang == "ko"){
                $result['msg'] = "입력한 기하학 사용할 수 없습니다. 다른 것을 선택하십시오 기하학.";    
            } else if($geomain_lang == "zh"){
                $result['msg'] = "您输入的 地主 不可用。请选择另一个 地主.";    
            } else if($geomain_lang == "ru"){
                $result['msg'] = "Введенный вами геомен недоступен. Пожалуйста, выберите другой геомен";
            }
        }
        echo json_encode($result);
        exit;
    }
}
$GeomainController = new GeomainController();
add_action('wp_ajax_GeomainController::check_geomain_available', array($GeomainController, 'check_geomain_available'));
add_action('wp_ajax_nopriv_GeomainController::check_geomain_available', array($GeomainController, 'check_geomain_available'));
