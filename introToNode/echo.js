function echo(str, n) {
    // loop 'n' times and print str
    for (var i = 1; i <= n; i++){
        console.log(str, i);
    }
}

echo("Echo!!!", 10);
echo('Tater Tots', 3);

echo('tater', 0);
echo('tater', -5);
echo('tater', undefined);
echo('tater', 3.4);