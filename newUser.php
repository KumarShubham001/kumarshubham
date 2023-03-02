<?php

function getUserIP()
{
    if (array_key_exists('HTTP_X_FORWARDED_FOR', $_SERVER) && !empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        if (strpos($_SERVER['HTTP_X_FORWARDED_FOR'], ',') > 0) {
            $addr = explode(",", $_SERVER['HTTP_X_FORWARDED_FOR']);
            return trim($addr[0]);
        } else {
            return $_SERVER['HTTP_X_FORWARDED_FOR'];
        }
    } else {
        return $_SERVER['REMOTE_ADDR'];
    }
}


function ip_info($ip = NULL, $purpose = "location", $deep_detect = TRUE)
{
    $output = NULL;
    if (filter_var($ip, FILTER_VALIDATE_IP) === FALSE) {
        $ip = $_SERVER["REMOTE_ADDR"];
        if ($deep_detect) {
            if (filter_var(@$_SERVER['HTTP_X_FORWARDED_FOR'], FILTER_VALIDATE_IP))
                $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
            if (filter_var(@$_SERVER['HTTP_CLIENT_IP'], FILTER_VALIDATE_IP))
                $ip = $_SERVER['HTTP_CLIENT_IP'];
        }
    }
    $purpose    = str_replace(array("name", "\n", "\t", " ", "-", "_"), NULL, strtolower(trim($purpose)));
    $support    = array("country", "countrycode", "state", "region", "city", "location", "address");
    $continents = array(
        "AF" => "Africa",
        "AN" => "Antarctica",
        "AS" => "Asia",
        "EU" => "Europe",
        "OC" => "Australia (Oceania)",
        "NA" => "North America",
        "SA" => "South America"
    );
    if (filter_var($ip, FILTER_VALIDATE_IP) && in_array($purpose, $support)) {
        $ipdat = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=" . $ip));
        if (@strlen(trim($ipdat->geoplugin_countryCode)) == 2) {
            switch ($purpose) {
                case "location":
                    $output = array(
                        "city"           => @$ipdat->geoplugin_city,
                        "state"          => @$ipdat->geoplugin_regionName,
                        "country"        => @$ipdat->geoplugin_countryName,
                        "country_code"   => @$ipdat->geoplugin_countryCode,
                        "continent"      => @$continents[strtoupper($ipdat->geoplugin_continentCode)],
                        "continent_code" => @$ipdat->geoplugin_continentCode
                    );
                    break;
                case "address":
                    $address = array($ipdat->geoplugin_countryName);
                    if (@strlen($ipdat->geoplugin_regionName) >= 1)
                        $address[] = $ipdat->geoplugin_regionName;
                    if (@strlen($ipdat->geoplugin_city) >= 1)
                        $address[] = $ipdat->geoplugin_city;
                    $output = implode(", ", array_reverse($address));
                    break;
                case "city":
                    $output = @$ipdat->geoplugin_city;
                    break;
                case "state":
                    $output = @$ipdat->geoplugin_regionName;
                    break;
                case "region":
                    $output = @$ipdat->geoplugin_regionName;
                    break;
                case "country":
                    $output = @$ipdat->geoplugin_countryName;
                    break;
                case "countrycode":
                    $output = @$ipdat->geoplugin_countryCode;
                    break;
            }
        }
    }
    return $output;
}

/* Send a mail that someone opened the website */
$to = "kr.shubham997@gmail.com";
$subject = strval(getUserIP()) . " has opened kumarshubham.in";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <hello@kumarshubham.in>' . "\r\n";

$message = `
    <div style="border: 1px solid #C6CBEF; border-radius: 5px; height: auto; min-width: 300px; overflow: auto; display: flex; align-items: center; justify-content: center; background: #E3E7F1; padding: 30px 0">
        <div>
            <h1 style="font-size: 4em; padding: 0; margin: 0; color: #494CA2">` . strval(getUserIP()) . `</h1>
            <hr style="border: none; background: #C6CBEF; height: 1px; width: 50%; margin-top: 30px; margin-bottom: 30px" >
        <table style="width: 100%; font-size: 1.2em">
            <tr>
                <td style="text-align: center">Origin city</td>
                <td style="color: #494CA2; font-weight: bold">` . ip_info("Visitor", "City") . `</td>
            </tr>
            <tr>
                <td style="text-align: center">State</td>
                <td style="color: #494CA2; font-weight: bold">` . ip_info("Visitor", "State") . `</td>
            </tr>
            <tr>
                <td style="text-align: center">Country</td>
                <td style="color: #494CA2; font-weight: bold">` . ip_info("Visitor", "Country") . ` ( ` . ip_info("Visitor", "Country Code") . `)</td>
            </tr>
        </table>
        </div>
    </div>
    `;

mail($to, $subject, $message, $headers);