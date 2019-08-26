function defangingIpAdress(x) {
  x = x.split('.').join('[.]'))
  x = x.replace(/\./g,'[.]')
// let re = new RegExp("\\.","g")
// x = x.replace(re,"[.]")
  console.log(x)
}

let ip1 = '1.1.1.1.1';

defangingIpAdress(ip1)
