<?php
	$dir = new DirectoryIterator('src');
	foreach($dir as $item){
		echo ($item->isDot())?'yes':'no';
		echo $item->getPathName()."<br>";
		if($item->isDir() && !$item->isDot()){
			echo $item->getPathName()."<br>";
		}
	}
?>
