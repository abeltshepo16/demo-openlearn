<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Sejamo Course</title>
<link rel="stylesheet" href="styles.css" type="text/css" />
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
</head>

<body>

		<section id="body" class="width">
        <aside id="sidebar" class="column-left">

			<header>
				<h1><a href="#">Sejamo Course </a></h1>

			</header>

			
<?php
require __DIR__ . '/vendor/autoload.php';
/*if (php_sapi_name() != 'cli') {
    throw new Exception('This application must be run on the command line.');
}*/

//4/WgAj4YE98axvtHjo7xBOJ1qgKXsponyWkzWpPp_Ju-Ov-uGbIP1iZ6Y
/**
 * Returns an authorized API client.
 * @return Google_Client the authorized client object
 */
function getClient()
{
    $client = new Google_Client();
    $client->setApplicationName('Google Drive API PHP Quickstart');
    $client->setScopes(Google_Service_Drive::DRIVE_METADATA_READONLY);
    $client->setAuthConfig('credentials.json');
    $client->setAccessType('offline');
    $client->setPrompt('select_account consent');

    // Load previously authorized token from a file, if it exists.
    $tokenPath = 'token.json';
    if (file_exists($tokenPath)) {
        $accessToken = json_decode(file_get_contents($tokenPath), true);
        $client->setAccessToken($accessToken);
    }

    // If there is no previous token or it's expired.
    if ($client->isAccessTokenExpired()) {
        // Refresh the token if possible, else fetch a new one.
        if ($client->getRefreshToken()) {
            $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
        } else {
            // Request authorization from the user.
            $authUrl = $client->createAuthUrl();
            printf("Open the following link in your browser:\n%s\n", $authUrl);
            print 'Enter verification code: ';
            $authCode = trim(fgets(STDIN));

            // Exchange authorization code for an access token.
            $accessToken = $client->fetchAccessTokenWithAuthCode($authCode);
            $client->setAccessToken($accessToken);

            // Check to see if there was an error.
            if (array_key_exists('error', $accessToken)) {
                throw new Exception(join(', ', $accessToken));
            }
        }
        // Save the token to a file.
        if (!file_exists(dirname($tokenPath))) {
            mkdir(dirname($tokenPath), 0700, true);
        }
        file_put_contents($tokenPath, json_encode($client->getAccessToken()));
    }
    return $client;
}


// Get the API client and construct the service object.
$client = getClient();
$service = new Google_Service_Drive($client);
$folderId ="1p4Tg2UMBxMkb9nYAf2b1lfik1kS9g2AY";
// Print the names and IDs for up to 10 files.
$optParams = array(
  'pageSize' => 100,
  'fields' => 'nextPageToken, files(id, name,mimeType)',
  'q' => "'".$folderId."' in parents"
);
$results = $service->files->listFiles($optParams);

echo '<nav id="mainnav">';
  				
if (count($results->getFiles()) == 0) {
    print "No files found.\n";
} else {
	
    foreach ($results->getFiles() as $file) {
		if($file->getMimeType()=='application/vnd.google-apps.folder'){
        echo "<h2>".$file->getName()."</h2>";
		$optParams = array(
		  'pageSize' => 100,
		  'orderBy' => 'folder',
		  'fields' => 'nextPageToken, files(id, name,mimeType,webViewLink)',
		  'q' => "'".$file->getId()."' in parents"
		);
		$results = $service->files->listFiles($optParams);
		
		echo "<ul>";
		foreach ($results->getFiles() as $file) {
         if (count($results->getFiles()) > 0) {
			echo "<li><a href='".$file->getId()."'>".$file->getName()."</a></li>";
		}
		echo "</ul>";
		}
		
		}else{
			echo "<ul><li><a href='".$file->getId()."'>". $file->getName()."</a.</li></ul>";
			}
		
		
    }
	
}


echo '</nav></aside>';

echo '<section id="content" class="column-right"><article><h2>Google Drive content goes here</h2>';
$fileId = '1qXY07TZs2rvCCabLaOzDOJRvJGe_iBPBldPszF6rC3g';
//$response = $service->files->export($fileId, 'application/vnd.oasis.opendocument.text');
//$content = $response->getBody()->getContents();

// [END drive_quickstart]
?>
</article>
<div class="article-info" style="height:2000px;">Posted on <time datetime="2013-05-14">17 September</time> by <a href="#" rel="author">Sanjeev</a></div>

            <p>Content goes here.</p>

<p>Should you wish to use this template unbranded you can buy a template license from our website for 8.00 GBP, this will allow you remove all branding related to our site, for more information about this see below.</p>	
            
            <p>This template has been tested in:</p>
			
			<footer class="clear">
				<p>&copy; 2018 sitename. <a href="http://brainzteck.com/">Brainzteck.com</a> by Sanjeev</p>
			</footer>

		</section>

		<div class="clear"></div>
</section>
	

</body>
</html>
