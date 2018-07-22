const travel = require('./salesmansTravels');

const ad = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,"
  + "54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,"
  + "10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,"
  + "22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,"
  + "45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,"
  + "100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,"
  + "2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,"
  + "45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,"
  + "100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,"
  + "2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,"
  + "2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,"
  + "2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000"


test('return the only correct address from the list', () => {
  expect(travel(ad, "AE 56215")).toBe("AE 56215:Main Al. Bern/320");
});

test('return multiple correct address from the list', () => {
  expect(travel(ad, "AA 45521")).toBe("AA 45521:Paris bd. Abbeville,Paris St. Abbeville/674,67");
});

test('return multiple correct address from the list', () => {
  expect(travel(ad, "AA 45522")).toBe("AA 45522:Paris St. Abbeville,Paris St. Abbeville/67,670");
}); 

test('return multiple correct address from the list', () => {
  expect(travel(ad, "EX 34342")).toBe("EX 34342:Pussy Cat Rd. Chicago,Pussy Cat Rd. Chicago/10,100");
}); 

test('return multiple correct address from the list', () => {
  expect(travel(ad, "OH 430")).toBe('OH 430:/');
}); 


