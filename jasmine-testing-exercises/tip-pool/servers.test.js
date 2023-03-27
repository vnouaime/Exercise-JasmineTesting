describe("Testing servers.js", function() {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("should input new data entries on serverTable with updateServerTable()", function () {
    submitServerInfo();
    updateServerTable();

    let entry = document.querySelectorAll("#serverTable tbody tr td");

    expect(entry[0].innerText).toEqual('Alice');
    expect(entry[1].innerText).toEqual('$0.00');
  });

  afterEach(function() {
    serverTbody.innerHTML = '';
    allServers = {};
    serverId = 0;
  });
});
