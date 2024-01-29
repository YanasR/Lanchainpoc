const footer = ` </table>`;
const URL = `http://localhost:6006/`;


var isLengthError = false;
var isInvalidForm = false;
var feedbackVoteObj = {};
var attUID = '';
var selectedDownVoteIndex = '';



function ticketPredictionResultTab() {
	
  var dropdown = document.getElementById("dropdown");
  var selectedOption = dropdown.value;

  const url = URL + 'selection?input=' + selectedOption;

  document.getElementById('ticket-prediction-tab').innerHTML = "";

  let theader = `
        <table class="table table-sm table-hover table-striped table-bordered" id="ticket-prediction-dt" width="100%" cellspacing="0">
        <thead>
        <tr>
          <th>Customer ID</th>
          <th>Cust name</th>
          <th>Address</th>
          <th>Phone number</th>
          <th>Product</th>
          <th>Site address</th>
          <th>Agent Assigned</th>
          <th>Priority</th>
          <th>Issue</th>
          <th>Escalation</th>
        </tr>
      </thead>
    `;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtml('SELECTION', json) + footer;
        document.getElementById('ticket-prediction-tab').innerHTML = response;
 //       refreshDt('#ticket-prediction-dt');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}

function resHtml(resultType, res) {
  let htmlbody = "<tbody>";
  if (resultType == 'SELECTION') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
           <td>${e['Customer ID']}</td>
           <td>${e['Cust name']}</td>
           <td>${e['Address']}</td>
           <td>${e['Phone number']}</td>
           <td>${e['Product']}</td>
           <td>${e['Site address']}</td>
           <td>${e['Agent Assigned']}</td>
           <td>${e['Priority']}</td>
           <td>${e['Issue']}</td>
            <td>${e['Escalation']}</td>
        </tr>
        `;
    });
  }
 htmlbody = htmlbody + '</tbody>';
  //  console.log(htmlbody);
  return htmlbody;
}

function refreshDt(dt) {
  console.log(dt);

  $(document).ready(function () {
    $(dt).DataTable({
      // "paging": true,
      // "lengthChange": true,
      // "searching": true,
      // "ordering": true,
      // "info": true,
      // "autoWidth": false,
      responsive: true,
      // "scrollY": '60vh',
      // "scrollCollapse": true,
      lengthMenu: [
        [10, 25, 50],
        [10, 25, 50]
      ],
      pageLength: 50,
      order: [[0, "desc"]],
      fixedHeader: true,
      dom: 'lBfrtip',
      buttons: [
        {
          extend: 'excel',
          text: '<img src="./../static/img/excel_export.svg">',
          // className: 'btn-success',
          filename: dt,
          titleAttr: 'Export as Excel'
        },
      ]
    });
  });
}

function getDomainValue(domainList) {
  let result = '';
  for (let i = 0; i < domainList.length; i++) {
    if (result !== '')
      result = result + ',' + domainList[i];
    else
      result = domainList[i];
  }
  return result;
}

function resetForm() {
  $(".multiSelectFeedback01").val([]).change();
  $(".multiSelectFeedback02").val([]).change();
  $(".multiSelectFeedback03").val([]).change();
  $('#feedbackForm')[0].reset()
}


function IsNumeric(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

function validateMatching() {
  let matching1 = document.getElementById("matching1").value;
  let matching2 = document.getElementById("matching2").value;
  let matching3 = document.getElementById("matching3").value;
  let matching1Error = false;
  let matching2Error = false;
  let matching3Error = false;


  if (matching1 > 100) {
    isLengthError = true;
    matching1Error = true;
    $("#matching1lengthError").removeClass('displayNone').addClass('displayBlock');
  } else {
    isLengthError = false;
    matching1Error = false;
    $("#matching1lengthError").removeClass('displayBlock').addClass('displayNone');
  }

  if (matching2 > 100) {
    isLengthError = true;
    matching2Error = true;
    $("#matching2lengthError").removeClass('displayNone').addClass('displayBlock');
  } else {
    isLengthError = false;
    matching2Error = false;
    $("#matching2lengthError").removeClass('displayBlock').addClass('displayNone');
  }

  if (matching3 > 100) {
    isLengthError = true;
    matching3Error = true;
    $("#matching3lengthError").removeClass('displayNone').addClass('displayBlock');
  } else {
    isLengthError = false;
    matching3Error = false;
    $("#matching3lengthError").removeClass('displayBlock').addClass('displayNone');
  }


  if (matching1Error || matching2Error || matching3Error) {
    isInvalidForm = true;
  } else {
    isInvalidForm = false;
  }

}

function openBoaHaloBillingInfoPopUp() {
  $('#BoaHaloBillingBotModal').modal('show');
}

function openBoaHaloInternalInfoPopUp() {
  $('#BoaHaloInternalBotModal').modal('show');
}

function openBoaOrderingInfoPopUp() {
  $('#BoaHaloOrderingBotModal').modal('show');
}

function openBoaClassicInfoPopUp() {
  $('#BoaClassicBotModal').modal('show');
}

// Util Functions
function isEmpty(obj) {
  if (typeof obj === 'string') {
    obj = obj.trim();
  }
  if (obj === null || obj === undefined || obj === '') {
    return true;
  }
  if (obj instanceof Array) {
    return (obj.length > 0) ? false : true;
  }
  if (typeof obj === 'object') {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }
  return false;
}