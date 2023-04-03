const http = require('http');
const { convert } = require('rupiah-format');
const host = 'localhost'
const port = 3002
const rupiah = require('rupiah-format');


// req = data masuk dari luar 
// res = data keluar dari sistem
const server = http.createServer(function(request, response) {
    const nama = 'Fahmi Maulana';
    let uang = 25000;
    let jajan = 1000;
    let sisa = uang - jajan;
    
    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)

    const hasil = `hallo nama gw ${nama}, tadi gua punya uang ${uang}, beli cilok ${jajan}. sisa duit guah jadi ${sisa}`


    response.statusCode = 200;
    response.end(hasil);
})

server.listen(port, host, '', function () {
    console.log(`server nyala di ${host}:${port}`);
});

