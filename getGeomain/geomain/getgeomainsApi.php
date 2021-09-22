<?php
include(dirname(__FILE__) . "/constant.php");    
class GetgeomainsApi
{
    public static function curl_outh_api_geomain(){
        $url = GEOMAIN_NEW_API_URL.'/oauth/token?grant_type=password&username='.GEOMAIN_USERNAME.'&password='.GEOMAIN_PASSWORD;

	    $ch=curl_init($url);
	    curl_setopt($ch, CURLOPT_POST, true);
	    curl_setopt($ch, CURLOPT_HEADER, true);
	    curl_setopt($ch, CURLOPT_USERPWD, "test:test");
	    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
	    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	    curl_setopt($ch, CURLOPT_HEADER, false);
	    $response = json_decode(curl_exec($ch),true);
            curl_close($ch);

            return $response['access_token'];
    }
    
    public static function curl_check_geomain_name_available($geomain_name){
        
        // $access_token = self::curl_outh_api_geomain();
            
        $arr = array($geomain_name);
        
        
        $geomainVal = (json_encode(array_values($arr)));

        $url = GEOMAIN_NEW_API_URL."/api/geoname/claim";

            $ch=curl_init($url);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_HEADER, true);
                curl_setopt($ch, CURLOPT_POSTFIELDS, $geomainVal);
            // curl_setopt($ch, CURLOPT_USERPWD, "test:test");
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HEADER, false);
            $response = json_decode(curl_exec($ch),true);
            $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
          
             curl_close($ch);
            if(!empty($response) && isset($response[0]['status']) && ($response[0]['status'] == 'AVAILABLE'))
            {
                return true;
            }else
            {
                return false;
            }
    }  

}

?>