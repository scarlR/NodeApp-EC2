import http from 'http'

http.createServer(function (req, res) {
    res.write('You are  in AWS  Cloud. This is Nodejs Application, Made with love by Raunak Scarlet \n');
    res.write('\n\n\nApp Version 1.0.1');
  res.end();
}).listen(3000);
