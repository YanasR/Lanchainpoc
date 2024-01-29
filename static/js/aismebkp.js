const footer = ` </table>`;
const URL = `http://localhost:6006/`;

var isLengthError = false;
var isInvalidForm = false;

function searchwithaisme() {
  handleUI();
  let input = document.getElementById("search-input").value;
  courpusTab = document.getElementById("courpusPatternid").checked;
  // serviceTab = document.getElementById("servicePatternid").checked;
  orderTaskTab = document.getElementById("ordertaskfeaturesid").checked;
  const searchinput = input.replace(/\s/g, '_');
  if (courpusTab) {
    classicAvpnResultTab(searchinput);
    classicBvoipResultTab(searchinput);
    classicAdiResultTab(searchinput);
    classicAvpnDetailTab(searchinput);
    classicBvoipDetailTab(searchinput);
    classicAdIDetailTab(searchinput);
    haloAvpnResultTab(searchinput);
    haloAvpnDetailTab(searchinput);
    haloBvoipResultTab(searchinput);
    haloBvoipDetailTab(searchinput);
    haloAdiResultTab(searchinput);
    haloAdiDetailTab(searchinput);
    CollabResultTab(searchinput);
    CollabDetailTab(searchinput);
    nodADIODResultTab(searchinput);
    nodASEODResultTab(searchinput);
    nodNFODResultTab(searchinput);
    nodSDWANResultTab(searchinput);
    nodADIODDetailTab(searchinput);
    nodASEODDetailTab(searchinput);
    nodNFODDetailTab(searchinput);
    nodSDWANDetailTab(searchinput);
  } else if (orderTaskTab) {
    orderTaskResultTab(searchinput);
  } else {
    solutionPredictionResultTab2(searchinput);
    solutionPredictionResultTab(searchinput);
    solutionPredictionResultTab1(searchinput);

    //   boaResultTab(searchinput);
    deliverablesPredictionResultTab(searchinput);
    ticketPredictionResultTab(searchinput);
    MNPPredictionResultTab(searchinput);
  }

  // else if (serviceTab) {
  //   servicePatternResultTab(searchinput)
  // } 

  //  boaResultTab1(searchinput);

  $('#searchQry').val(input);

}
function boaResultTab(searchinput) {
  var url = URL + "BOA?input=" + searchinput;
  document.getElementById('bao-resutl-tab').innerHTML = "";
  let theader = `
        <div class="table-responsive">
        <table class="table table-sm table-hover table-striped table-bordered" id="boadatatable" width="100%" cellspacing="0">
        <thead>
        <tr>
          <th>Prediction %</th>
          <th>High Level RC</th>
          <th>Resolution set name</th>
          <th>%</th>
          <th>Sub RC</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
        <th>Prediction %</th>
          <th>High Level RC</th>
          <th>Resolution set name</th>
          <th>%</th>
          <th>Sub RC</th>
        </tr>
      </tfoot>`;
  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtml('BOA', json) + footer;
        document.getElementById('bao-resutl-tab').innerHTML = response;
        refreshDt('#boadatatable');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}
function deliverablesPredictionResultTab(searchinput) {

  //    	 console.log('deliverablesPredictionResultTab');

  var url = URL + "Documentsearch?input=" + searchinput;

  document.getElementById('deliverable-prediction-tab').innerHTML = "";

  let theader = ` 
        <div class="table-responsive">
        <table class="table table-sm table-hover table-striped table-bordered" id="deliverable-prediction-dt" width="100%" cellspacing="0">
        <thead>
        <tr>
          <th>Match %</th>
          <th>Filename</th>
          <th>Application</th>
          <th>Link</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
        <th>Match %</th>
          <th>Filename</th>
          <th>Application</th>
          <th>Link</th>
        </tr>
      </tfoot>`;

  //let response = theader+footer ;

  //document.getElementById('deliverable-prediction-tab').innerHTML=response;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtml('DOC', json) + footer;
        console.log('DOC-->', response);
        document.getElementById('deliverable-prediction-tab').innerHTML = response;
        refreshDt('#deliverable-prediction-dt');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });

}

function MNPPredictionResultTab(searchinput) {

  //    	 console.log('deliverablesPredictionResultTab');

  var url = URL + "MNPsearch?input=" + searchinput;

  document.getElementById('mnp-prediction-tab').innerHTML = "";

  let theader = ` 
	        <div class="table-responsive">
	        <table class="table table-sm table-hover table-striped table-bordered" id="MNP-prediction-dt" width="100%" cellspacing="0">
	        <thead>
	        <tr>
	          <th>Match %</th>
	          <th>Filename</th>
	          <th>Application</th>
	          <th>Link</th>
	        </tr>
	      </thead>
	      <tfoot>
	        <tr>
	        <th>Match %</th>
	          <th>Filename</th>
	          <th>Application</th>
	          <th>Link</th>
	        </tr>
	      </tfoot>`;

  //let response = theader+footer ;

  //document.getElementById('deliverable-prediction-tab').innerHTML=response;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtml('MNP', json) + footer;
        console.log('DOC-->', response);
        document.getElementById('mnp-prediction-tab').innerHTML = response;
        refreshDt('#MNP-prediction-dt');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });

}

function ticketPredictionResultTab(searchinput) {

  const url = URL + 'corpus?input=' + searchinput;

  document.getElementById('ticket-prediction-tab').innerHTML = "";

  let theader = `
        <table class="table table-sm table-hover table-striped table-bordered" id="ticket-prediction-dt" width="100%" cellspacing="0">
        <thead>
        <tr>
          <th>Match %</th>
          <th>Ticket</th>
          <th>Description</th>
          <th>Resolution</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
        <th>Match %</th>
        <th>Ticket</th>
        <th>Description</th>
        <th>Resolution</th>
        </tr>
      </tfoot>`;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtml('TICKET', json) + footer;
        document.getElementById('ticket-prediction-tab').innerHTML = response;
        refreshDt('#ticket-prediction-dt');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}

function solutionPredictionResultTab(searchinput) {
  var boa_cbs_ctgry = $("input[name='boa_cbs_categryOption']:checked").val();
  const url = URL + 'solution?input=' + searchinput + '&service=' + boa_cbs_ctgry;

  document.getElementById('solution-prediction-tab').innerHTML = "";

  let theader = `
        <table class="table table-sm table-hover table-striped table-bordered" id="solution-prediction-dt" width="100%" cellspacing="0">
        <thead>
        <tr>
          <th>Match%</th>
          <th>Description</th>
          <th>Solution : CBS/RCA Team</th>
          <th>Solution Count</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Match%</th>
          <th>Description</th>
          <th>Solution : CBS/RCA Team</th>
          <th>Solution Count</th>
        </tr>
      </tfoot>`;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtml('solution', json) + footer;
        console.log(response, '---', json);
        document.getElementById('solution-prediction-tab').innerHTML = response;
        refreshDt('#solution-prediction-dt');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}
function solutionPredictionResultTab1(searchinput) {

  let checkBoxId = 'notes';
  let serviceLine = getServiceLineOption(checkBoxId);

  const url = URL + 'solution1?input=' + searchinput + '&service=' + serviceLine;

  document.getElementById('solution-prediction-tab1').innerHTML = "";

  let theader = `
        <table class="table table-sm table-hover table-striped table-bordered" id="solution-prediction-dt1" width="100%" cellspacing="0">
        <thead>
        <tr>
          <th>Match%</th>
          <th>Description</th>
          <th>Solution : Notes</th>
          <th>Solution Count</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Match%</th>
          <th>Description</th>
          <th>Solution : Notes</th>
          <th>Solution Count</th>
        </tr>
      </tfoot>`;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtml('solution1', json) + footer;
        console.log(response, '---', json);
        document.getElementById('solution-prediction-tab1').innerHTML = response;
        refreshDt('#solution-prediction-dt1');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}
function solutionPredictionResultTab2(searchinput) {

  let checkBoxId = 'deeplearning';
  let serviceLine = getServiceLineOption(checkBoxId);

  const url = URL + 'solution2?input=' + searchinput + '&service=' + serviceLine;

  document.getElementById('solution-prediction-tab2').innerHTML = "";

  let theader = `
        <table class="table table-sm table-hover table-striped table-bordered" id="solution-prediction-dt2" width="100%" cellspacing="0">
        <thead>
        <tr>
           <th>Model</th>
          <th>Description</th>
          <th>Solution</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
           <th>Model</th>
          <th>Description</th>
          <th>Solution</th>
        </tr>
      </tfoot>`;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtml('solution2', json) + footer;
        console.log(response, '---', json);
        document.getElementById('solution-prediction-tab2').innerHTML = response;
        refreshDt('#solution-prediction-dt2');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}


function resHtml(resultType, res) {
  let htmlbody = "<tbody>";
  if (resultType == 'BOA') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
          <td>${e['Prediction %']}</td>
           <td>${e['High Level RC']}</td>
           <td>${e['Resolution set name']}</td>
           <td>${e['%']}</td>
           <td>${e['Sub RC']}</td>

        </tr>
        `;
    });
  }
  if (resultType == 'TICKET') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
           <td>${e['Prediction%']}</td>
           <td>${e['Ticket']}</td>
           <td>${e['Description']}</td>
           <td>${e['Resolution']}</td>
           </tr>
         `;
    });
  }
  if (resultType == 'DOC') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
             <td>${e['Prediction%']}</td>
             <td>${e['Filename']}</td>
             <td>${e['Application']}</td>
             <td>${e['Link']}</td>
             </tr>
           `;
    });
  }
  if (resultType == 'MNP') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
	             <td>${e['Prediction%']}</td>
	             <td>${e['Filename']}</td>
	             <td>${e['Application']}</td>
	             <td>${e['Link']}</td>
	             </tr>
	           `;
    });
  }
  if (resultType == 'solution') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
             <td>${e['Prediction%']}</td>
             <td>${e['PROB_DETAILS']}</td>        
             <td>${e['Solution']}</td>
             <td>${e['Solution Count']}</td>
             </tr>
           `;
    });
  }
  if (resultType == 'solution1') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
             <td>${e['Prediction%']}</td>
             <td>${e['PROB_DETAILS']}</td>        
             <td>${e['Solution']}</td>
             <td>${e['Solution Count']}</td>
             </tr>
           `;
    });
  }
  if (resultType == 'solution2') {
    res.forEach(e => {

      htmlbody = htmlbody + `<tr>
             <td>${e['Model']}</td>   
             <td>${e['Query']}</td>        
             <td>${e['predicted_solution']}</td>
             </tr>
           `;
    });
  }
  htmlbody = htmlbody + '</tbody>';
  //  console.log(htmlbody);
  return htmlbody;
}


function enableSearch(type) {
  // document.getElementById("alert-msq").style.display="none";
  // document.getElementById("search-btn").disabled=false;
  document.getElementById("defaultnav").style.display = "block";
  document.getElementById("default-nav-tabContent").style.display = "block";
  document.getElementById("courpusPatternnavid").style.display = "none";
  document.getElementById("servicePatternnavid").style.display = "none";
  document.getElementById("service-pattern-nav-tabContent").style.display = "none";
  document.getElementById("courpus-pattern-nav-tabContent").style.display = "none";
  $("#orderTaskFeatureTab").removeClass('displayBlock').addClass('displayNone');

  switch (type) {
    case 'courpusPattern':
      document.getElementById("defaultnav").style.display = "none";
      document.getElementById("courpusPatternnavid").style.display = "block";
      document.getElementById("courpus-pattern-nav-tabContent").style.display = "block";
      document.getElementById("servicePatternnavid").style.display = "none";
      document.getElementById("service-pattern-nav-tabContent").style.display = "none";
      document.getElementById("default-nav-tabContent").style.display = "none";
      $("#orderTaskFeatureTab").removeClass('displayBlock').addClass('displayNone');
      break;
    case 'servicePattern':
      document.getElementById("defaultnav").style.display = "none";
      document.getElementById("courpusPatternnavid").style.display = "none";
      document.getElementById("servicePatternnavid").style.display = "block";
      document.getElementById("service-pattern-nav-tabContent").style.display = "block";
      document.getElementById("courpus-pattern-nav-tabContent").style.display = "none";
      document.getElementById("default-nav-tabContent").style.display = "none";
      $("#orderTaskFeatureTab").removeClass('displayBlock').addClass('displayNone');
      break;
    case 'orderTaskFeatures':
      document.getElementById("defaultnav").style.display = "none";
      document.getElementById("courpusPatternnavid").style.display = "none";
      document.getElementById("courpus-pattern-nav-tabContent").style.display = "none";
      document.getElementById("servicePatternnavid").style.display = "none";
      document.getElementById("service-pattern-nav-tabContent").style.display = "none";
      document.getElementById("default-nav-tabContent").style.display = "none";
      $("#orderTaskFeatureTab").removeClass('displayNone').addClass('displayBlock');
      break;
  }

}


function refreshDt1(dt) {
  console.log(dt);

  $(document).ready(function () {
    $(dt).DataTable({
      // "paging": true,
      // "lengthChange": true,
      // "searching": true,
      // "ordering": true,
      // "info": true,
      // "autoWidth": false,
      // "responsive": true,
      // "scrollY": '60vh',
      // "scrollCollapse": true,
      order: [[1, "desc"]],
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
      // "responsive": true,
      // "scrollY": '60vh',
      // "scrollCollapse": true,
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



function resHtmlCourpusServicePattern(resultType, res) {
  let htmlbody = "<tbody>";
  if (resultType == 'AVPN') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
          <td>${e['SubBucket']}</td>
           <td>${e['Count']}</td>
           
        </tr>
        `;
    });
  }

  if (resultType == 'AVPNSUM') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
	          <td>${e['Ticket Number']}</td>
	           <td>${e['Work Queue']}</td>
	           <td>${e['Asset Id']}</td>
	           <td>${e['Resolution Set Name']}</td>
	           <td>${e['Bucket']}</td>
	           <td>${e['Defect']}</td>	
	           	                  
	        </tr>
	        `;
    });
  }



  if (resultType == 'BVOIP') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
           <td>${e['SubBucket']}</td>
           <td>${e['Count']}</td>
        </tr>
        `;
    });
  }

  if (resultType == 'BVOIPSUM') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
	          <td>${e['Ticket Number']}</td>
	           <td>${e['Work Queue']}</td>
	           <td>${e['Asset Id']}</td>
	           <td>${e['Resolution Set Name']}</td>
	           <td>${e['PARETO_BUCKET']}</td>
	           <td>${e['Sub-Sub Bucket']}</td>	
	           	                  
	        </tr>
	        `;
    });
  }

  if (resultType == 'ADI') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
          <td>${e['SubBucket']}</td>
           <td>${e['Count']}</td>
        </tr>
        `;
    });
  }

  if (resultType == 'ADISUM') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
	          <td>${e['Ticket Number']}</td>
	           <td>${e['Work Queue']}</td>
	           <td>${e['Asset Id']}</td>
	           <td>${e['Resolution Set Name']}</td>
	           <td>${e['Bucket']}</td>
	           <td>${e['Defect']}</td>	
	           	                  
	        </tr>
	        `;
    });
  }

  if (resultType == 'HALOAVPN') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
          <td>${e['SubBucket']}</td>
           <td>${e['Count']}</td>

        </tr>
        `;
    });
  }
  if (resultType == 'HALOAVPNSUM') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
	          <td>${e['Ticket Number']}</td>
	           <td>${e['Problem Details']}</td>
	           <td>${e['Work Queue']}</td>
	           <td>${e['Asset Id']}</td>
	           <td>${e['Bucket']}</td>
	           <td>${e['Sub Bucket']}</td>

	        </tr>
	        `;
    });
  }
  if (resultType == 'HALOBVOIP') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
            <td>${e['SubBucket']}</td>
             <td>${e['Count']}</td>

          </tr>
          `;
    });
  }

  if (resultType == 'HALOBVOIPSUM') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
	          <td>${e['Ticket Number']}</td>
	           <td>${e['Problem Details']}</td>
	           <td>${e['Work Queue']}</td>
	           <td>${e['Asset Id']}</td>
	           <td>${e['Bucket']}</td>
	           <td>${e['Sub Bucket']}</td>

	        </tr>
	        `;
    });
  }
  if (resultType == 'HALOADI') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
            <td>${e['SubBucket']}</td>
             <td>${e['Count']}</td>

          </tr>
          `;
    });
  }
  if (resultType == 'HALOADISUM') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
	          <td>${e['Ticket Number']}</td>
	           <td>${e['Problem Details']}</td>
	           <td>${e['Work Queue']}</td>
	           <td>${e['Asset Id']}</td>
	           <td>${e['Bucket']}</td>
	           <td>${e['Sub Bucket']}</td>

	        </tr>
	        `;
    });
  }
  if (resultType == 'Collab') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
            <td>${e['SubBucket']}</td>
             <td>${e['Count']}</td>
          </tr>
          `;
    });
  }
  if (resultType == 'COLLABSUM') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
	          <td>${e['Ticket Number']}</td>
	           <td>${e['Problem Details']}</td>
	           <td>${e['Work Queue']}</td>
	           <td>${e['Asset Id']}</td>
	           <td>${e['Bucket']}</td>
	           <td>${e['Sub-bucket']}</td>

	        </tr>
	        `;
    });
  }

  if (resultType == 'NODADIOD') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
	            <td>${e['SubBucket']}</td>
	             <td>${e['Count']}</td>
	          </tr>
	          `;
    });
  }
  if (resultType == 'NODASEOD') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
	            <td>${e['SubBucket']}</td>
	             <td>${e['Count']}</td>
	          </tr>
	          `;
    });
  }
  if (resultType == 'NODNFOD') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
	            <td>${e['SubBucket']}</td>
	             <td>${e['Count']}</td>
	          </tr>
	          `;
    });
  }
  if (resultType == 'NODSDWAN') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
	            <td>${e['SubBucket']}</td>
	             <td>${e['Count']}</td>
	          </tr>
	          `;
    });
  }

  if (resultType == 'NODADIODSUM') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
	            <td>${e['Ticket Number']}</td>
	            <td>${e['Problem Abstract']}</td>
	            <td>${e['Bucket']}</td>
	             <td>${e['SubBucket']}</td>
	          </tr>
	          `;
    });
  }
  if (resultType == 'NODASEODSUM') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
	            <td>${e['Ticket Number']}</td>
	            <td>${e['Problem Abstract']}</td>
	            <td>${e['Bucket']}</td>
	             <td>${e['SubBucket']}</td>
	          </tr>
	          `;
    });
  }
  if (resultType == 'NODNFODSUM') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
	            <td>${e['Ticket Number']}</td>
	            <td>${e['Problem Abstract']}</td>
	            <td>${e['Bucket']}</td>
	             <td>${e['SubBucket']}</td>
	          </tr>
	          `;
    });
  }
  if (resultType == 'NODSDWANSUM') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
	            <td>${e['Ticket Number']}</td>
	            <td>${e['Problem Abstract']}</td>
	            <td>${e['Bucket']}</td>
	             <td>${e['SubBucket']}</td>
	          </tr>
	          `;
    });
  }
  htmlbody = htmlbody + '</tbody>';
  console.log(htmlbody);
  return htmlbody;

}


function classicAvpnResultTab(searchinput) {

  // TODO - ID
  // Summary
  // innerHtml - avpn-resutl-tab-summary
  // table - classic-avpn-sumry-dt

  // Details
  // innerHtml - avpn-resutl-tab-detail
  // table - classic-avpn-detail-dt

  var url = URL + "ClassicAVPN?input=" + searchinput;
  document.getElementById('avpn-resutl-tab-summary').innerHTML = "";
  let theader = `
        <table class="table table-sm table-hover table-striped table-bordered" id="classic-avpn-sumry-dt" width="100%" cellspacing="0">
        <thead>
        <tr>
          <th>Defect Pattern</th>
          <th>No of Occurance</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
       <th>Defect Pattern</th>
       <th>No of Occurance</th>
        </tr>
      </tfoot>`;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('AVPN', json) + footer;
        document.getElementById('avpn-resutl-tab-summary').innerHTML = response;
        refreshDt1('#classic-avpn-sumry-dt');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });


}

function classicAvpnDetailTab(searchinput) {
  var url = URL + "ClassicAVPNSummary?input=" + searchinput;
  document.getElementById('avpn-resutl-tab-detail').innerHTML = "";
  let theader = `
	        <table class="table table-sm table-hover table-striped table-bordered" id="classic-avpn-detail-dt" width="100%" cellspacing="0">
	        <thead>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Work Queue</th>
	          <th>Asset Id</th>
	          <th>Resolution Set Name</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </thead>
	      <tfoot>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Work Queue</th>
	          <th>Asset Id</th>
	          <th>Resolution Set Name</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </tfoot>`;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('AVPNSUM', json) + footer;
        document.getElementById('avpn-resutl-tab-detail').innerHTML = response;
        refreshDt1('#classic-avpn-detail-dt');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}

function classicBvoipResultTab(searchinput) {

  // TODO - ID
  // Summary
  // innerHtml - bvoip-resutl-tab-summary
  // table - classic-bvoip-sumry-dt

  // Details
  // innerHtml - bvoip-resutl-tab-detail
  // table - classic-bvoip-detail-dt

  var url = URL + "ClassicBvoip?input=" + searchinput;
  document.getElementById('bvoip-resutl-tab-summary').innerHTML = "";
  let theader = `
          <table class="table table-sm table-hover table-striped table-bordered" id="bvoipdatatable" width="100%" cellspacing="0">
        <thead>
        <tr>
          <th>Defect Pattern</th>
          <th>No of Occurance</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Defect Pattern</th>
          <th>No of Occurance</th>
        </tr>
      </tfoot>`;
  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('BVOIP', json) + footer;
        document.getElementById('bvoip-resutl-tab-summary').innerHTML = response;
        refreshDt1('#bvoipdatatable');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}

function classicBvoipDetailTab(searchinput) {
  var url = URL + "ClassicBvoipsummary?input=" + searchinput;
  document.getElementById('bvoip-resutl-tab-detail').innerHTML = "";
  let theader = `
	        <table class="table table-sm table-hover table-striped table-bordered" id="classic-bvoip-detail-dt" width="100%" cellspacing="0">
	        <thead>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Work Queue</th>
	          <th>Asset Id</th>
	          <th>Resolution Set Name</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </thead>
	      <tfoot>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Work Queue</th>
	          <th>Asset Id</th>
	          <th>Resolution Set Name</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </tfoot>`;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('BVOIPSUM', json) + footer;
        document.getElementById('bvoip-resutl-tab-detail').innerHTML = response;
        refreshDt1('#classic-bvoip-detail-dt');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}



function classicAdiResultTab(searchinput) {

  // TODO - ID
  // Summary
  // innerHtml - adi-resutl-tab-summary
  // table - classic-adi-sumry-dt

  // Details
  // innerHtml - adi-resutl-tab-detail
  // table - classic-adi-detail-dt

  var url = URL + "Classicadi?input=" + searchinput;
  document.getElementById('adi-resutl-tab-summary').innerHTML = "";
  let theader = `
        <table class="table table-sm table-hover table-striped table-bordered" id="adidatatable" width="100%" cellspacing="0">
        <thead>
        <tr>
          <th>Defect Pattern</th>
          <th>No of Occurance</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
        <th>Defect Pattern</th>
          <th>No of Occurance</th>
        </tr>
      </tfoot>`;
  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('ADI', json) + footer;
        document.getElementById('adi-resutl-tab-summary').innerHTML = response;
        refreshDt1('#adidatatable');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}

function classicAdIDetailTab(searchinput) {
  var url = URL + "Classicadisummary?input=" + searchinput;
  document.getElementById('adi-resutl-tab-detail').innerHTML = "";
  let theader = `
	        <table class="table table-sm table-hover table-striped table-bordered" id="classic-adi-detail-dt" width="100%" cellspacing="0">
	        <thead>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Work Queue</th>
	          <th>Asset Id</th>
	          <th>Resolution Set Name</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </thead>
	      <tfoot>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Work Queue</th>
	          <th>Asset Id</th>
	          <th>Resolution Set Name</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </tfoot>`;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('ADISUM', json) + footer;
        document.getElementById('adi-resutl-tab-detail').innerHTML = response;
        refreshDt1('#classic-adi-detail-dt');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}


function haloAvpnResultTab(searchinput) {

  // TODO - ID
  // Summary
  // innerHtml - halo-avpn-tab-summary
  // table - halo-avpn-sumry-dt

  // Details
  // innerHtml - halo-avpn-tab-detail
  // table - halo-avpn-detail-dt

  var url = URL + "Haloavpn?input=" + searchinput;
  document.getElementById('halo-avpn-tab-summary').innerHTML = "";
  let theader = `
        <table class="table table-sm table-hover table-striped table-bordered" id="halodatatable" width="100%" cellspacing="0">
        <thead>
        <tr>
          <th>Defect Pattern</th>
          <th>No of Occurance</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
        <th>Defect Pattern</th>
          <th>No of Occurance</th>
        </tr>
      </tfoot>`;
  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('HALOAVPN', json) + footer;
        document.getElementById('halo-avpn-tab-summary').innerHTML = response;
        refreshDt1('#halodatatable');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}

function haloAvpnDetailTab(searchinput) {
  var url = URL + "Haloavpnsummary?input=" + searchinput;
  document.getElementById('halo-avpn-tab-detail').innerHTML = "";
  let theader = `
	        <table class="table table-sm table-hover table-striped table-bordered" id="halo-avpn-detail-dt" width="100%" cellspacing="0">
	        <thead>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Problem Details</th>
	          <th>Work Queue</th>
	          <th>Asset Id</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </thead>
	      <tfoot>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Problem Details</th>
	          <th>Work Queue</th>
	          <th>Asset Id</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </tfoot>`;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('HALOAVPNSUM', json) + footer;
        document.getElementById('halo-avpn-tab-detail').innerHTML = response;
        refreshDt1('#halo-avpn-detail-dt');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}



function haloBvoipResultTab(searchinput) {

  // TODO - ID
  // Summary
  // innerHtml - halo-bvoip-tab-summary
  // table - halo-bvoip-sumry-dt

  // Details
  // innerHtml - halo-bvoip-tab-detail
  // table - halo-bvoip-detail-dt

  var url = URL + "Halobvoip?input=" + searchinput;
  document.getElementById('halo-bvoip-tab-summary').innerHTML = "";
  let theader = `
	        <table class="table table-sm table-hover table-striped table-bordered" id="halodatatable1" width="100%" cellspacing="0">
	        <thead>
	        <tr>
	          <th>Defect Pattern</th>
	          <th>No of Occurance</th>
	        </tr>
	      </thead>
	      <tfoot>
	        <tr>
	        <th>Defect Pattern</th>
	          <th>No of Occurance</th>
	        </tr>
	      </tfoot>`;
  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('HALOBVOIP', json) + footer;
        document.getElementById('halo-bvoip-tab-summary').innerHTML = response;
        refreshDt1('#halodatatable1');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}

function haloBvoipDetailTab(searchinput) {
  var url = URL + "Halobvoipsummary?input=" + searchinput;
  document.getElementById('halo-bvoip-tab-detail').innerHTML = "";
  let theader = `
	        <table class="table table-sm table-hover table-striped table-bordered" id="halo-bvoip-detail-dt" width="100%" cellspacing="0">
	        <thead>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Problem Details</th>
	          <th>Work Queue</th>
	          <th>Asset Id</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </thead>
	      <tfoot>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Problem Details</th>
	          <th>Work Queue</th>
	          <th>Asset Id</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </tfoot>`;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('HALOBVOIPSUM', json) + footer;
        document.getElementById('halo-bvoip-tab-detail').innerHTML = response;
        refreshDt1('#halo-bvoip-detail-dt');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}


function haloAdiResultTab(searchinput) {

  // TODO - ID
  // Summary
  // innerHtml - halo-adi-tab-summary
  // table -  halo-adi-sumry-dt

  // Details
  // innerHtml - halo-adi-tab-detail
  // table - halo-adi-detail-dt

  var url = URL + "Haloadi?input=" + searchinput;
  document.getElementById('halo-adi-tab-summary').innerHTML = "";
  let theader = `
	        <table class="table table-sm table-hover table-striped table-bordered" id="halodatatable2" width="100%" cellspacing="0">
	        <thead>
	        <tr>
	          <th>Defect Pattern</th>
	          <th>No of Occurance</th>
	        </tr>
	      </thead>
	      <tfoot>
	        <tr>
	        <th>Defect Pattern</th>
	          <th>No of Occurance</th>
	        </tr>
	      </tfoot>`;
  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('HALOADI', json) + footer;
        document.getElementById('halo-adi-tab-summary').innerHTML = response;
        refreshDt1('#halodatatable2');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}

function haloAdiDetailTab(searchinput) {
  var url = URL + "Haloadisummary?input=" + searchinput;
  document.getElementById('halo-adi-tab-detail').innerHTML = "";
  let theader = `
	        <table class="table table-sm table-hover table-striped table-bordered" id="halo-adi-detail-dt" width="100%" cellspacing="0">
	        <thead>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Problem Details</th>
	          <th>Work Queue</th>
	          <th>Asset Id</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </thead>
	      <tfoot>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Problem Details</th>
	          <th>Work Queue</th>
	          <th>Asset Id</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </tfoot>`;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('HALOADISUM', json) + footer;
        document.getElementById('halo-adi-tab-detail').innerHTML = response;
        refreshDt1('#halo-adi-detail-dt');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}
function CollabResultTab(searchinput) {

  // TODO - ID
  // Summary
  // innerHtml - collab-tab-summary
  // table -  collab-sumry-dt

  // Details
  // innerHtml - collab-tab-detail
  // table - collab-detail-dt

  var url = URL + "collab?input=" + searchinput;
  document.getElementById('collab-tab-summary').innerHTML = "";
  let theader = `
	        <table class="table table-sm table-hover table-striped table-bordered" id="collabdatatable" width="100%" cellspacing="0">
	        <thead>
	        <tr>
	          <th>Defect Pattern</th>
	          <th>No of Occurance</th>
	        </tr>
	      </thead>
	      <tfoot>
	        <tr>
	        <th>Defect Pattern</th>
	          <th>No of Occurance</th>
	        </tr>
	      </tfoot>`;
  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('Collab', json) + footer;
        document.getElementById('collab-tab-summary').innerHTML = response;
        refreshDt1('#collabdatatable');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}

function CollabDetailTab(searchinput) {
  var url = URL + "collabsummary?input=" + searchinput;
  document.getElementById('collab-tab-detail').innerHTML = "";
  let theader = `
	        <table class="table table-sm table-hover table-striped table-bordered" id="collab-detail-dt" width="100%" cellspacing="0">
	        <thead>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Problem Details</th>
	          <th>Work Queue</th>
	          <th>Asset Id</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </thead>
	      <tfoot>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Problem Details</th>
	          <th>Work Queue</th>
	          <th>Asset Id</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </tfoot>`;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('COLLABSUM', json) + footer;
        document.getElementById('collab-tab-detail').innerHTML = response;
        refreshDt1('#collab-detail-dt');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}
function nodADIODResultTab(searchinput) {
  var url = URL + "NODADIOD?input=" + searchinput;
  document.getElementById('nod-resutl-tab-summary').innerHTML = "";
  let theader = `
		        <table class="table table-sm table-hover table-striped table-bordered" id="nodadioddatatable" width="100%" cellspacing="0">
		        <thead>
		        <tr>
		          <th>Defect Pattern</th>
		          <th>No of Occurance</th>
		        </tr>
		      </thead>
		      <tfoot>
		        <tr>
		        <th>Defect Pattern</th>
		          <th>No of Occurance</th>
		        </tr>
		      </tfoot>`;
  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('NODADIOD', json) + footer;
        document.getElementById('nod-resutl-tab-summary').innerHTML = response;
        refreshDt1('#nodadioddatatable');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}

function nodASEODResultTab(searchinput) {
  var url = URL + "NODASEOD?input=" + searchinput;
  document.getElementById('nod-bvoip-summary').innerHTML = "";
  let theader = `
		        <table class="table table-sm table-hover table-striped table-bordered" id="nodaseoddatatable" width="100%" cellspacing="0">
		        <thead>
		        <tr>
		          <th>Defect Pattern</th>
		          <th>No of Occurance</th>
		        </tr>
		      </thead>
		      <tfoot>
		        <tr>
		        <th>Defect Pattern</th>
		          <th>No of Occurance</th>
		        </tr>
		      </tfoot>`;
  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('NODASEOD', json) + footer;
        document.getElementById('nod-bvoip-summary').innerHTML = response;
        refreshDt1('#nodaseoddatatable');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}
function nodNFODResultTab(searchinput) {
  var url = URL + "NODNFOD?input=" + searchinput;
  document.getElementById('nod-adi-tab-summary').innerHTML = "";
  let theader = `
		        <table class="table table-sm table-hover table-striped table-bordered" id="nodnfoddatatable" width="100%" cellspacing="0">
		        <thead>
		        <tr>
		          <th>Defect Pattern</th>
		          <th>No of Occurance</th>
		        </tr>
		      </thead>
		      <tfoot>
		        <tr>
		        <th>Defect Pattern</th>
		          <th>No of Occurance</th>
		        </tr>
		      </tfoot>`;
  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('NODNFOD', json) + footer;
        document.getElementById('nod-adi-tab-summary').innerHTML = response;
        refreshDt1('#nodnfoddatatable');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}

function nodSDWANResultTab(searchinput) {
  var url = URL + "NODSDWAN?input=" + searchinput;
  document.getElementById('nod-sdwan-tab-summary').innerHTML = "";
  let theader = `
		        <table class="table table-sm table-hover table-striped table-bordered" id="nodsdwandatatable" width="100%" cellspacing="0">
		        <thead>
		        <tr>
		          <th>Defect Pattern</th>
		          <th>No of Occurance</th>
		        </tr>
		      </thead>
		      <tfoot>
		        <tr>
		        <th>Defect Pattern</th>
		          <th>No of Occurance</th>
		        </tr>
		      </tfoot>`;
  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('NODSDWAN', json) + footer;
        document.getElementById('nod-sdwan-tab-summary').innerHTML = response;
        refreshDt1('#nodsdwandatatable');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}

function nodADIODDetailTab(searchinput) {
  var url = URL + "Nodadiodsummary?input=" + searchinput;
  document.getElementById('nod-resutl-tab-detail').innerHTML = "";
  let theader = `
	        <table class="table table-sm table-hover table-striped table-bordered" id="nod-adiod-detail-dt" width="100%" cellspacing="0">
	        <thead>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Problem Abstract</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </thead>
	      <tfoot>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Problem Abstract</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </tfoot>`;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('NODADIODSUM', json) + footer;
        document.getElementById('nod-resutl-tab-detail').innerHTML = response;
        refreshDt1('#nod-adiod-detail-dt');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}
function nodASEODDetailTab(searchinput) {
  var url = URL + "Nodaseodsummary?input=" + searchinput;
  document.getElementById('nod-bvoip-tab-detail').innerHTML = "";
  let theader = `
	        <table class="table table-sm table-hover table-striped table-bordered" id="nod-ASEOD-detail-dt" width="100%" cellspacing="0">
	        <thead>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Problem Abstract</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </thead>
	      <tfoot>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Problem Abstract</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </tfoot>`;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('NODASEODSUM', json) + footer;
        document.getElementById('nod-bvoip-tab-detail').innerHTML = response;
        refreshDt1('#nod-ASEOD-detail-dt');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}
function nodNFODDetailTab(searchinput) {
  var url = URL + "Nodnfod_summary?input=" + searchinput;
  document.getElementById('nod-adi-tab-detail').innerHTML = "";
  let theader = `
	        <table class="table table-sm table-hover table-striped table-bordered" id="nod-NFOD-detail-dt" width="100%" cellspacing="0">
	        <thead>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Problem Abstract</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </thead>
	      <tfoot>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Problem Abstract</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </tfoot>`;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('NODNFODSUM', json) + footer;
        document.getElementById('nod-adi-tab-detail').innerHTML = response;
        refreshDt1('#nod-NFOD-detail-dt');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}
function nodSDWANDetailTab(searchinput) {
  var url = URL + "Nodsdwan_summary?input=" + searchinput;
  document.getElementById('nod-sdwan-tab-detail').innerHTML = "";
  let theader = `
	        <table class="table table-sm table-hover table-striped table-bordered" id="nod-SDWAN-detail-dt" width="100%" cellspacing="0">
	        <thead>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Problem Abstract</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </thead>
	      <tfoot>
	        <tr>
	          <th>Ticket Number</th>
	          <th>Problem Abstract</th>
	          <th>Bucket</th>
	          <th>Defect Pattern</th>
	        </tr>
	      </tfoot>`;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('NODSDWANSUM', json) + footer;
        document.getElementById('nod-sdwan-tab-detail').innerHTML = response;
        refreshDt1('#nod-SDWAN-detail-dt');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}




function servicePatternResultTab(searchinput) {
  var url = URL + "BOA?input=" + searchinput;
  document.getElementById('service-pattern-resutl-tab').innerHTML = "";
  let theader = `
        <table class="table table-sm table-hover table-striped table-bordered" id="servicepattern" width="100%" cellspacing="0">
        <thead>
        <tr>
          <th>Prediction %</th>
          <th>High Level RC</th>
          <th>Resolution set name</th>
          <th>%</th>
          <th>Sub RC</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
        <th>Prediction %</th>
          <th>High Level RC</th>
          <th>Resolution set name</th>
          <th>%</th>
          <th>Sub RC</th>
        </tr>
      </tfoot>`;
  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlCourpusServicePattern('SERVICE-PATTERN-SEARCH', json) + footer;
        document.getElementById('service-pattern-resutl-tab').innerHTML = response;
        refreshDt('#servicepattern');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}

function orderTaskResultTab(searchinput) {
  // TODO OrderTask
  var url = URL + "ordertask?input=" + searchinput;
  document.getElementById('order-task-feature-result-tab').innerHTML = "";
  let theader = `
        <table class="table table-sm table-hover table-striped table-bordered" id="order-task-dt" width="100%" cellspacing="0">
        <thead>
        <tr>
          <th>Ticket Number</th>
          <th>Problem Abstract</th>
          <th>Order Number</th>
          <th>Ticket Opened date</th>
          <th>Service Line</th>
          <th>Bucket</th>
          <th>Sub Bucket</th>
          <th>Work Queue</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Ticket Number</th>
          <th>Problem Abstract</th>
          <th>Order Number</th>
          <th>Ticket Opened date</th>
          <th>Service Line</th>
          <th>Bucket</th>
          <th>Sub Bucket</th>
          <th>Work Queue</th>    
         </tr>
      </tfoot>`;

  fetch(url, {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).then(res => {
    if (res.ok) {
      res.json().then(json => {
        let response = theader + resHtmlOrderServicePattern('OrderTask', json) + footer;
        document.getElementById('order-task-feature-result-tab').innerHTML = response;
        refreshDt1('#order-task-dt');
      });
    }
  }).catch(err => {
    console.log('[ERROR]->', err, '--URL-->', url);
  });
}
function resHtmlOrderServicePattern(resultType, res) {
  let htmlbody = "<tbody>";
  if (resultType == 'OrderTask') {
    res.forEach(e => {
      htmlbody = htmlbody + `<tr>
	           <td>${e['tktNo']}</td>
	           <td>${e['problemAbs']}</td>
	           <td>${e['orderNo']}</td>
	           <td>${e['tkt_opened_date_est']}</td>
	           <td>${e['serviceLine']}</td>
	           <td>${e['bucketName']}</td>
	           <td>${e['subBucketName']}</td>
	           <td>${e['workQueue']}</td>
	           
	        </tr>
	        `;
    });
  }

  htmlbody = htmlbody + '</tbody>';
  console.log(htmlbody);
  return htmlbody;
}
function handleUI() {
  $("nav.masterHeader").css('height', '130px');
  $(".masterHeader .navbar-nav").css('margin-bottom', '0%');
  $("nav.masterHeader .masterHeaderLogo").css('position', 'initial');
  $(".container-fluid, footer").removeClass('displayNone').addClass('displayBlock')
  $("nav.masterHeader").removeClass('masterHeaderLanding');
  $("nav.masterHeader .masterHeaderLogo h5").text('AI SME');
}

function getServiceLineOption(id) {
  let classic = $('#' + id + 'ClassicCheckbox').is(':checked') ? 'Y' : 'N';
  let collab = $('#' + id + 'CollabCheckbox').is(':checked') ? 'Y' : 'N';
  let halo = $('#' + id + 'HaloCheckbox').is(':checked') ? 'Y' : 'N';
  let nod = $('#' + id + 'NodCheckbox').is(':checked') ? 'Y' : 'N';

  return (classic + collab + halo + nod);
}


function saveFeedBack() {

  let url = URL + 'userFeedback';
  let query = document.getElementById("searchQry").value;

  let slolutionDet1 = document.getElementById("slolutionDet1").value;
  let matching1 = document.getElementById("matching1").value;
  let domain1 = getDomainValue($(".multiSelectFeedback01").val())

  let slolutionDet2 = document.getElementById("slolutionDet2").value;
  let matching2 = document.getElementById("matching2").value;
  let domain2 = getDomainValue($(".multiSelectFeedback02").val());

  let slolutionDet3 = document.getElementById("slolutionDet3").value;
  let matching3 = document.getElementById("matching3").value;
  let domain3 = getDomainValue($(".multiSelectFeedback03").val());

  if (slolutionDet1 === '') {
    $("#slolutionDet1error").removeClass('displayNone').addClass('displayBlock');
  } else {
    $("#slolutionDet1error").removeClass('displayBlock').addClass('displayNone');
  }

  if (matching1 === '') {
    $("#matching1error").removeClass('displayNone').addClass('displayBlock');
  } else {
    $("#matching1error").removeClass('displayBlock').addClass('displayNone');
  }

  if (domain1 === '') {
    $("#domain1error").removeClass('displayNone').addClass('displayBlock');
  } else {
    $("#domain1error").removeClass('displayBlock').addClass('displayNone');
  }

  validateMatching();

  if (slolutionDet1 !== '' && domain1 !== '' && matching1 !== '' && isInvalidForm === false) {
    let body =
    {
      "query": query,
      "details": [
        {
          "solution": slolutionDet1,
          "matching": matching1,
          "domains": domain1
        },
        {
          "solution": slolutionDet2,
          "matching": matching2,
          "domains": domain2
        },
        {
          "solution": slolutionDet3,
          "matching": matching3,
          "domains": domain3
        }]
    }


      // POST request using fetch() 
      fetch(url, {

        // Adding method type 
        method: "POST",

        // Adding body or contents to send 
        body: JSON.stringify(body),

        // Adding headers to the request 
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      // Converting to JSON 
      .then(response => {
        resetForm()
        response.json()
      })
      // Displaying results to console 
      .then(json => console.log(json));


    console.log(JSON.stringify(domain1));
    console.log(JSON.stringify(body));
  }

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

function validateMatching(){
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


  if(matching1Error || matching2Error || matching3Error) {
    isInvalidForm =  true;
  } else {
    isInvalidForm =  false;
  }

}