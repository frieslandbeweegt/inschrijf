<?php
//connect database

$dbhost = 'db.frieslandbeweegt.frl';
$dbuser = 'frieslandbeweegt';
$dbpass = 'YCbUb0mj6F5AtRYD';

$conn = mysql_connect($dbhost, $dbuser, $dbpass) or die ('Wegens uitgelopen onderhoudswerkzaamheden is de database tijdelijk onbereikbaar. Hierdoor werken de Uit-Agenda, de wandel- en fietsroutes en de inschrijfadministratie op dit moment niet. Onze excuses voor dit ongemak, wij doen ons best om je zo snel mogelijk weer van dienst te kunnen zijn');

$dbname = 'frieslandbeweegt';
mysql_select_db($dbname);
mysql_query("SET NAMES UTF8");