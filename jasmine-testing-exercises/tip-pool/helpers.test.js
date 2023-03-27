describe("Testing helpers.js for calculateTipPercent() and appendTd()", function() {
    beforeEach(function () {
      billAmtInput.value = 50;
      tipAmtInput.value = 10;
      submitPaymentInfo();
    });
});

it('calculates tip percent on calculateTipPercent()', function () {
    expect(calculateTipPercent(50, 10)).toEqual(20);
    expect(calculateTipPercent(70, 14)).toEqual(20);
});

it('creates new data entry on appendTd()', function () {
    let dataEntry = document.createElement('tr');

    appendTd(dataEntry, '50');

    expect(dataEntry.children.length).toEqual(1);
    expect(dataEntry.firstChild.innerHTML).toEqual('50');
});

describe("Testing helpers.js for sumPaymentTotal()", function () {

    beforeEach(function () {
      allPayments.payment1 = {
        billAmt: 50,
        tipAmt: 10,
        tipPercent: 20
      }
      allPayments.payment2 = {
        billAmt: 20,
        tipAmt: 3,
        tipPercent: 15
      }
      allPayments.payment3 = {
        billAmt: 100,
        tipAmt: 30,
        tipPercent: 30
      }
    });

    it('Adds total billAmt for all three payments in allPayments', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(170);
    });

    it('Adds total tipAmt for all three payments in allPayments', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(43);
    });

    it('Adds total tipPercentage for all three payments in allPayments', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(65);
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
      });
});    