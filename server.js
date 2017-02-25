var express = require('express');
var app = express();
var port = process.env.port || 8080;

var devices = {
    "device-001": {
        "deviceId": "device-001",
        "manufacturer": "Samsung",
        "model": "Omni",
        "isEnabled": "true",
        "firmwareVersion" : "3.1.314"
    },
    "device-013": {
        "deviceId": "device-013",
        "manufacturer": "TI",
        "model": "SOC007",
        "isEnabled": "true",
        "firmwareVersion" : "2.7.76"
    }
}

app.get('/getDevices', function (req, res) {
    console.log(devices);
    res.end(JSON.stringify(devices));
});

app.get('/getDevice/:id', function (req, res) {
    console.log("ID : %s", req.params.id);
    res.end("Get device id " + req.params.id + " from store.");
});
var server = app.listen(port, function (req, res) {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Device services listening at http://%s:%s", host, port);
});
