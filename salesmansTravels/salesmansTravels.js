function travel(r, zipcode) {
  if (zipcode === "") {
    return ":/";
  }
  const addresses = r.split(",");
  const searchZip = new RegExp(`${zipcode}$`);
  const filteredAddr = addresses.filter(el => el.match(searchZip));
  const addrWoutZip = filteredAddr.map(el => el.replace(" " + zipcode, ""));
  const numbers = addrWoutZip.map(el => el.split(" ")).map(el => el[0]);
  const streets = addrWoutZip.map(el => el.replace(/\d*\s/, ""));

  return `${zipcode}:${streets.join(",")}/${numbers}`;
}

module.exports = travel;
