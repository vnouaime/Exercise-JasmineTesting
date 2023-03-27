describe("Testing payments.js", function() {
    beforeEach(function () {
      billAmtInput.value = 50;
      tipAmtInput.value = 10;
    });
  
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('50');
      expect(allPayments['payment1'].tipAmt).toEqual('10');
      expect(allPayments['payment1'].tipPercent).toEqual(20);
    });
  
    it('should update payment table on appendPaymentTable()', function () {
      let payment = createCurPayment();
      allPayments['payment1'] = payment;
  
      appendPaymentTable(payment);
  
      let tableEntries = document.querySelectorAll('#paymentTable tbody tr td');
  
      expect(tableEntries.length).toEqual(3);
      expect(tableEntries[0].innerText).toEqual('$50');
      expect(tableEntries[1].innerText).toEqual('$10');
      expect(tableEntries[2].innerText).toEqual('20%');
    });
  
    it('should create a new payment on createCurPayment()', function () {
      let expectedPayment = {
        billAmt: '50',
        tipAmt: '10',
        tipPercent: 20,
      }
  
      expect(createCurPayment()).toEqual(expectedPayment);
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      paymentId = 0;
      allPayments = {};
    });
});