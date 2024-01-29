const footer = ` </table>`;
const URL = `http://kicdt19.kcdc.att.com:2021/`;
var startDate = globalDateTransform(new Date(), 'DD/MM/YYYY');
var endDate = globalDateTransform(new Date(), 'DD/MM/YYYY');
var serviceLine = '';
var orderStatus = '';
var globalResponse = {};
var donutChart = '';
var stackedBarChart = '';
var analysisChart = '';
var statusTotalcount = ''

initConfig();
initResponseObj();

function initResponseObj() {
    globalResponse = {
        'serviceLine': {},
        'orderStatus': {},
        'distinctActivity': {},
        'orderAction': {},
        'customerList': {}
    }
}

function initConfig() {
    $('#salesReportRange').daterangepicker({
        "minDate": "01/01/2020",
        "maxDate": new Date()
    }, function (start, end, label) {
        console.log('New date range selected: ' + start.format('MM/DD/YYYY') + ' to ' + end.format('MM/DD/YYYY') + ' (predefined range: ' + label + ')');
        startDate = start.format('MM/DD/YYYY');
        endDate = end.format('MM/DD/YYYY');
        getCustomerList();
    });

    $('.select2').select2();
    $("nav.masterHeader").css('height', '130px');
    $(".masterHeader .navbar-nav").css('margin-bottom', '0%');
    $("nav.masterHeader .masterHeaderLogo").css('position', 'initial');
    $(".container-fluid, footer").removeClass('displayNone').addClass('displayBlock')
    $("nav.masterHeader").removeClass('masterHeaderLanding');
    $("nav.masterHeader .masterHeaderLogo h5").text('Acharya');
    $(".distinctActivitySection").hide();
    $(".tableSpinner").hide();
    $(".noRecords").hide();
    $(".analysisSection").hide();
    $("#detail-sales-report-tab").show();
    $(".IndivSummaryLayout").hide();
    getServiceLineDetails();
    getOrderStatus();
    getAttributeList();
}

function salesReportResultTab(json) {
    document.getElementById('sales-report-tab').innerHTML = "";
    let includeAnalysis = $('#includeAnalysisId').is(':checked') ? '1' : '0';

    let theader = `
          <table class="table table-sm table-hover table-striped table-bordered" id="sales-report-dt" width="100%" cellspacing="0">
          <thead>
          <tr>
            <th>SERVICE</th>
            <th>ID</th>
            <th>NAME</th>
            <th>VERSION</th>
            <th>ACTION</th>
            <th>STATUS</th>
            <th>START DATE</th>
            <th>CURRENT ESTIMATED DATE</th>
            <th>PLANNED START DATE</th>
            <th>PLANNED COMPLETE DATE</th>
            <th>STATUS CHANGED DATE</th>
            <th>COMPLETION DATE</th>`;

    if (includeAnalysis == 1) {
        theader = theader + `
        <th style="color:green !important">DELAY IN DAYS</th>
        <th style="color:green !important">CATEGORY/th>`;
    }


    theader = theader + `<th>PLAN ID</th></tr>
        </thead>
        <tfoot>
          <tr>
            <th>SERVICE</th>
            <th>ID</th>
            <th>NAME</th>
            <th>VERSION</th>
            <th>ACTION</th>
            <th>STATUS</th>
            <th>START DATE</th>
            <th>CURRENT ESTIMATED DATE</th>
            <th>PLANNED START DATE</th>
            <th>PLANNED COMPLETE DATE</th>
            <th>STATUS CHANGED DATE</th>
            <th>COMPLETION DATE</th>`;

    if (includeAnalysis == 1) {
        theader = theader + `
        <th style="color:green !important">DELAYES IN DAYS</th>
        <th style="color:green !important">CATEGORY/th>`;
    }

    theader = theader + `<th>PLAN ID</th></tr>
        </tfoot>`;

    response = theader + resHtml('DETAIL-SALES-REPORT', json) + footer;
    document.getElementById('sales-report-tab').innerHTML = response;
    refreshDt('#sales-report-dt', 'detail');

    $(".tableSpinner").hide();
    $(".noRecords").hide();
    $("#sales-report-tab").show();
}

function salesSummaryDetailResultTab(json) {

    // http://kicdt19.kcdc.att.com:2021/api/halo/boa/report/getOrderDetails?fromdate=01/01/2021&todate=02/15/2021&serviceId=1000&statusId=1000&action=Create&attribute=test&activity=test

    document.getElementById('detail-sales-report-tab').innerHTML = "";
    let includeAnalysis = $('#includeAnalysisId').is(':checked') ? '1' : '0';

    let theader = `
          <table class="table table-sm table-hover table-striped table-bordered" id="detail-sales-report-dt" width="100%" cellspacing="0">
          <thead>
          <tr>
            <th>SERVICE</th>
            <th>ID</th>
            <th>NAME</th>
            <th>VERSION</th>
            <th>ACTION</th>
            <th>STATUS</th>
            <th>START DATE</th>
            <th>CURRENT ESTIMATED DATE</th>
            <th>PLANNED START DATE</th>
            <th>PLANNED COMPLETE DATE</th>
            <th>STATUS CHANGED DATE</th>
            <th>COMPLETION DATE</th>`;

    if (includeAnalysis == 1) {
        theader = theader + `
        <th style="color:green !important">DELAY IN DAYS</th>
        <th style="color:green !important">CATEGORY</th>`;
    }


    theader = theader + `<th>PLAN ID</th></tr>
        </thead>
        <tfoot>
          <tr>
            <th>SERVICE</th>
            <th>ID</th>
            <th>NAME</th>
            <th>VERSION</th>
            <th>ACTION</th>
            <th>STATUS</th>
            <th>START DATE</th>
            <th>CURRENT ESTIMATED DATE</th>
            <th>PLANNED START DATE</th>
            <th>PLANNED COMPLETE DATE</th>
            <th>STATUS CHANGED DATE</th>
            <th>COMPLETION DATE</th>`;

    if (includeAnalysis == 1) {
        theader = theader + `
        <th style="color:green !important">DELAY IN DAYS</th>
        <th style="color:green !important">CATEGORY</th>`;
    }

    theader = theader + `<th>PLAN ID</th></tr>
        </tfoot>`;

    response = theader + resHtml('DETAIL-SALES-REPORT', json) + footer;
    document.getElementById('detail-sales-report-tab').innerHTML = response;
    refreshDt('#detail-sales-report-dt', 'detail');

    $(".tableSpinner").hide();
    $(".noRecords").hide();
    $("#detail-sales-report-tab").show();
}

function salesSummaryResultTab(json, totalCount) {
    document.getElementById('summary-sales-report-tab').innerHTML = "";

    let theader = `
    <table class="table table-sm table-hover table-striped table-bordered" id="summary-sales-report-dt" width="100%" cellspacing="0">
    <thead>
      <tr>	            
        <th>Order Status</th>
        <th>Count</th>
        <th>%</th>
      </tr>
    </thead>`;

    statusTotalcount = totalCount;
    let obj = {
        "id": totalCount,
        "name": "Total",
        "status": ""
    }

    json.push(obj);

    response = theader + resHtml('SUMMARY-SALES-REPORT', json) + footer;
    document.getElementById('summary-sales-report-tab').innerHTML = response;
    refreshDt('#summary-sales-report-dt', 'summary');
}

function salesAnalysisSummaryResultTab(json) {
    document.getElementById('summary-analysis-sales-report-tab').innerHTML = "";

    let theader = `
    <table class="table table-sm table-hover table-striped table-bordered" id="order-summary-analysis-sales-report-dt" width="100%" cellspacing="0">
    <thead>
      <tr>	            
        <th>Analysis</th>
        <th>Count</th>
        <th>%</th>
      </tr>
    </thead>`;

    json['Total'] = parseInt(json['On Track']) + parseInt(json['Attention Require']);

    response = theader + resHtml('SUMMARY-ORDER-ANALYSIS-SALES-REPORT', json) + footer;
    document.getElementById('summary-analysis-sales-report-tab').innerHTML = response;
    refreshDt('#order-summary-analysis-sales-report-dt', 'summary');
}


// Mismatch Function starts here
function mismatchReportResultTab(json) {

    // http://kicdt19.kcdc.att.com:2021/api/halo/boa/report/getOrderDetails?fromdate=01/01/2021&todate=02/15/2021&serviceId=1000&statusId=1000&action=Create&attribute=test&activity=test

    document.getElementById('sales-report-tab').innerHTML = "";
    let includeAnalysis = $('#includeAnalysisId').is(':checked') ? '1' : '0';

    let theader = `
          <table class="table table-sm table-hover table-striped table-bordered" id="mismatch-detail-sales-report-dt" width="100%" cellspacing="0">
          <thead>
          <tr>
            <th>SERVICE</th>
            <th>ORDER NUMBER</th>
            <th>ACTIVITY</th>
            <th>PREV STATE</th>
            <th>STATE</th>
            <th>STATUS</th>
            <th>ACTUAL START DATE</th>`;

    if (includeAnalysis == 1) {
        theader = theader + `
        <th style="color:green !important">#ANALYSIS</th>`;
    }


    theader = theader + `</tr>
        </thead>
        <tfoot>
          <tr>
          <th>SERVICE</th>
          <th>ORDER NUMBER</th>
          <th>ACTIVITY</th>
          <th>PREV STATE</th>
          <th>STATE</th>
          <th>STATUS</th>
          <th>ACTUAL START DATE</th>`;

    if (includeAnalysis == 1) {
        theader = theader + `
        <th style="color:green !important">#ANALYSIS</th>`;
    }

    theader = theader + `</tr>
        </tfoot>`;

    response = theader + resHtml('MISMATCH-DETAIL-SALES-REPORT', json) + footer;
    document.getElementById('sales-report-tab').innerHTML = response;
    refreshDt('#mismatch-detail-sales-report-dt', 'detail');

    $(".tableSpinner").hide();
    $(".noRecords").hide();
    $("#sales-report-tab").show();
}

function mismatchSummaryDetailResultTab(json) {

    document.getElementById('detail-sales-report-tab').innerHTML = "";
    let includeAnalysis = $('#includeAnalysisId').is(':checked') ? '1' : '0';

    let theader = `
          <table class="table table-sm table-hover table-striped table-bordered" id="mismatch-detail-sales-report-dt" width="100%" cellspacing="0">
          <thead>
          <tr>
            <th>SERVICE</th>
            <th>ORDER NUMBER</th>
            <th>ACTIVITY</th>
            <th>PREV STATE</th>
            <th>STATE</th>
            <th>STATUS</th>
            <th>ACTUAL START DATE</th>`;

    if (includeAnalysis == 1) {
        theader = theader + `
        <th style="color:green !important">#ANALYSIS</th>`;
    }


    theader = theader + `</tr>
        </thead>
        <tfoot>
          <tr>
          <th>SERVICE</th>
          <th>ORDER NUMBER</th>
          <th>ACTIVITY</th>
          <th>PREV STATE</th>
          <th>STATE</th>
          <th>STATUS</th>
          <th>ACTUAL START DATE</th>`;

    if (includeAnalysis == 1) {
        theader = theader + `
        <th style="color:green !important">#ANALYSIS</th>`;
    }

    theader = theader + `</tr>
        </tfoot>`;

    response = theader + resHtml('MISMATCH-DETAIL-SALES-REPORT', json) + footer;
    document.getElementById('detail-sales-report-tab').innerHTML = response;
    refreshDt('#mismatch-detail-sales-report-dt', 'detail');

    $(".tableSpinner").hide();
    $(".noRecords").hide();
    $("#detail-sales-report-tab").show();
}

function mismatchSummaryResultTab(json) {
    document.getElementById('summary-sales-report-tab').innerHTML = "";

    let theader = `
    <table class="table table-sm table-hover table-striped table-bordered compact nowrap" id="mismatch-summary-sales-report-dt" width="100%" cellspacing="0">
    <thead>
      <tr>	            
        <th>Activity</th>
        <th># Incorrect mapping</th>
        <th># Valid</th>
      </tr>
    </thead>`;

    response = theader + resHtml('MISMATCH-SUMMARY-SALES-REPORT', json) + footer;
    document.getElementById('summary-sales-report-tab').innerHTML = response;
    refreshDt('#mismatch-summary-sales-report-dt', 'summary');
}

function resHtml(resultType, res) {
    let includeAnalysis = $('#includeAnalysisId').is(':checked') ? '1' : '0';
    let htmlbody = "<tbody>";
    if (resultType == 'DETAIL-SALES-REPORT') {
        res.forEach(e => {
            htmlbody = htmlbody + `<tr>
             <td>${e['service']}</td>
             <td>${e['id']}</td>
             <td>${e['name']}</td>
             <td>${e['version']}</td>
             <td>${e['action']}</td>
             <td>${e['status']}</td>
             <td>${globalDateTransform(e['startDate'], 'DD-MMM-YYYY')}</td>
             <td>${globalDateTransform(e['currentEstDate'], 'DD-MMM-YYYY')}</td>
             <td>${globalDateTransform(e['plannedStartDate'], 'DD-MMM-YYYY')}</td>
             <td>${globalDateTransform(e['plannedCompleteDate'], 'DD-MMM-YYYY')}</td>
             <td>${globalDateTransform(e['statusChangeDate'], 'DD-MMM-YYYY')}</td>
             <td>${globalDateTransform(e['completionDate'], 'DD-MMM-YYYY')}</td>`;

            if (includeAnalysis == 1) {
                htmlbody = htmlbody + `
                <td>${e['delayindays']}</td>
                <td>${e['category']}</td>`
            }
            htmlbody = htmlbody + `<td>${e['planId']}</td></tr>
          `;
        });
    } else if (resultType == 'SUMMARY-SALES-REPORT') {
        res.forEach(e => {

            let matchPercentage = parseInt(e['id']) * 100 / parseInt(statusTotalcount);

            htmlbody = htmlbody + `<tr>`

            if (e['name'] == 'Total') {
                htmlbody = htmlbody + `<td><b>${e['name']}</b></td>
                <td><b>${e['id']}</b></td>
                <td></td>`;
            } else {
                htmlbody = htmlbody + `<td>${e['name']}</td>
                <td>${e['id']}</td>
                <td>${matchPercentage.toFixed(2)} %</td>`;
            }

            htmlbody = htmlbody + `</tr>`;
        });
    } else if (resultType == 'MISMATCH-DETAIL-SALES-REPORT') {
        res.forEach(e => {
            htmlbody = htmlbody + `<tr>
             <td>${e['service']}</td>
             <td>${e['orderId']}</td>
             <td>${e['entityName']}</td>
             <td>${e['prevState']}</td>
             <td>${e['state']}</td>
             <td>${e['status']}</td>
             <td>${globalDateTransform(e['actualStartDate'], 'DD-MMM-YYYY')}</td>`;

            if (includeAnalysis == 1) {
                htmlbody = htmlbody + `
                <td>${e['analysis']}</td>`
            }
            htmlbody = htmlbody + `</tr>
          `;
        });
    } else if (resultType == 'MISMATCH-SUMMARY-SALES-REPORT') {
        res.forEach(e => {
            htmlbody = htmlbody + `<tr>`

            if (e['name'] == 'Total') {
                htmlbody = htmlbody + `<td><b>${e['name']}</b></td>
                <td><b>${e['incorrectmapping']}</b></td>
                <td><b>${e['valid']}</b></td>`;
            } else {
                htmlbody = htmlbody + `<td>${e['name']}</td>
                <td>${e['incorrectmapping']}</td>
                <td>${e['valid']}</td>`;
            }

            htmlbody = htmlbody + `</tr>`;

        });
    } else if (resultType == 'SUMMARY-ORDER-ANALYSIS-SALES-REPORT') {
        let AttentionRequiresperc = parseInt(res['Attention Require']) * 100 / parseInt(res['Total']);
        let onTrackPerc = parseInt(res['On Track']) * 100 / parseInt(res['Total']);
        htmlbody = htmlbody + `<tr>
         <td>Attention Require</td>
         <td>${res['Attention Require']}</td>
         <td>${AttentionRequiresperc.toFixed(2)} %</td>
      </tr>
      <tr>
      <td>On Track</td>
         <td>${res['On Track']}</td>
         <td>${onTrackPerc.toFixed(2)} %</td>
      </tr>
      <tr>
        <td><b>Grand Total</b></td>
        <td><b>${res['Total']}</b></td>
        <td></td>
      </tr>
      `;
    }

    htmlbody = htmlbody + '</tbody>';
    return htmlbody;

}

function generateReport() {

    $(".tableSpinner").show();
    $(".noRecords").hide();
    $("#detail-sales-report-tab").hide();
    $("#sales-report-tab").hide();
    $(".IndivSummaryLayout").hide();

    let url = decideUrl();

    fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    }).then(res => {
        if (res.ok) {
            res.json().then(json => {
                if (json['Status'] == "Data Available") {
                    decideReportsGeneration(json);
                } else {
                    $(".tableSpinner").hide();
                    $("#detail-sales-report-tab").hide();
                    $(".IndivSummaryLayout").hide();
                    $(".noRecords").show();
                }
            });
        }
    }).catch(err => {
        console.log('[ERROR]->', err, '--URL-->', url);
    });
}

function decideUrl() {
    let url = "";
    let body = {
        serviceLine: $("#serviceLineId").val(),
        orderStatus: $("#orderStatusId").val(),
        fromDate: startDate,
        toDate: endDate,
        customerName: getDomainValue($("#customerListId").val()),
        orderAction: getDomainValue($("#orderActionId").val()),
        attribute: getDomainValue($("#attributeId").val()),
        reportType: $("#reportTypeId").val(),
        distinctActivity: getDomainValue($("#distinctActivityId").val()),
        includeAnalysis: $('#includeAnalysisId').is(':checked') ? '1' : '0'
    }

    switch ($("#reportTypeId").val()) {

        case '1':
            url = URL + 'api/halo/boa/report/getOrderDetails?fromdate=' + body['fromDate'] + '&todate=' + body['toDate'] + '&serviceId=' + body['serviceLine'] + '&statusId=' + body['orderStatus'] + '&action=' + body['orderAction'] + '&attribute=' + body['attribute'] + '&activity=' + body['distinctActivity'];
            break;
        case '4':
            url = URL + 'api/halo/boa/report/getActivityLevelAnalysisReport?fromdate=' + body['fromDate'] + '&todate=' + body['toDate'] + '&serviceId=' + body['serviceLine'] + '&statusId=' + body['orderStatus'] + '&action=' + body['orderAction'] + '&attribute=' + body['attribute'] + '&activity=' + body['distinctActivity'];
            break;
        default:
    }

    return url;
}

function decideReportsGeneration(json) {
    let selectedServiceLine = $("#serviceLineId  option:selected").text();

    switch ($("#reportTypeId").val()) {

        case '1':
            // Only Order Details
            if (json.hasOwnProperty("statussummary")) {
                $(".boaDetailCard").removeClass('displayBlock').addClass('displayNone');
                $(".boaSummaryDetailCard").removeClass('displayNone').addClass('displayBlock');
                $(".IndivSummaryLayout").show();
                $(".analysisSection").show();
                $(".timePeriod").html(startDate + "-" + endDate);
                $(".serviceLineType").html(selectedServiceLine);
                $(".pivotStatus").html("(Stats by Order Status)");
                generateDonutChart(json['statussummary']);
                salesSummaryResultTab(json['statussummary'], json['count']);
                generatePieChart(json['analysisSummary'])
                salesAnalysisSummaryResultTab(json['analysisSummary']);
                salesSummaryDetailResultTab(json['orderdetails']);

            } else {
                $(".boaSummaryDetailCard").removeClass('displayBlock').addClass('displayNone');
                $(".boaDetailCard").removeClass('displayNone').addClass('displayBlock');
                salesReportResultTab(json['orderdetails']);
            }
            break;
        case '4':
            // Activity with mismatch state/status
            if (json.hasOwnProperty("Summary")) {
                $(".boaDetailCard").removeClass('displayBlock').addClass('displayNone');
                $(".boaSummaryDetailCard").removeClass('displayNone').addClass('displayBlock');
                $(".IndivSummaryLayout").show();
                $(".analysisSection").hide();
                $(".timePeriod").html(startDate + "-" + endDate);
                $(".serviceLineType").html(selectedServiceLine);
                $(".pivotStatus").html("(Stats by Order Activity State/Status match analysis)");
                mismatchSummaryResultTab(json['Summary']);
                generateStackedChart(json['Summary']);
                mismatchSummaryDetailResultTab(json['activityLevelAnalysisReport']);
            } else {
                $(".boaSummaryDetailCard").removeClass('displayBlock').addClass('displayNone');
                $(".boaDetailCard").removeClass('displayNone').addClass('displayBlock');
                mismatchReportResultTab(json['activityLevelAnalysisReport']);
            }
            break;
        default:
    }
}

function generateDonutChart(json) {
    let labelList = [];
    let dataList = [];
    let colorList = [];

    if (!!donutChart) {
        donutChart.destroy();
    }

    for (let i = 0; i < json.length; i++) {
        labelList.push(json[i]['name']);
        dataList.push(json[i]['id']);
        colorList.push(randomColorGenerator());
    }

    var donutChartCanvas = $('#commonChartId').get(0).getContext('2d');
    var donutData = {
        labels: labelList,
        datasets: [
            {
                data: dataList,
                backgroundColor: colorList
            }
        ]
    }
    var donutOptions = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            labels: {
                render: 'value',
                fontColor: '#000',
                position: 'outside'
            }
        }
    }
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    donutChart = new Chart(donutChartCanvas, {
        type: 'doughnut',
        data: donutData,
        options: donutOptions
    })
}

function generateStackedChart(json) {
    if (!!donutChart) {
        donutChart.destroy();
    }

    var labelList = [];
    var IncorrectMapdataList = [];
    var validDataList = [];

    for (let i = 0; i < json.length - 1; i++) {
        labelList.push(json[i]['name']);
        IncorrectMapdataList.push(json[i]['incorrectmapping']);
        validDataList.push(json[i]['valid']);
    }

    var stackedChartData = {
        labels: labelList,
        datasets: [
            {
                label: '#Incorrect mapping',
                backgroundColor: '#fd7e14',
                borderColor: '#fd7e14',
                pointRadius: false,
                pointColor: '#3b8bba',
                pointStrokeColor: '#fd7e14',
                pointHighlightFill: '#fff',
                pointHighlightStroke: '#fd7e14',
                data: IncorrectMapdataList
            },
            {
                label: '#Valid',
                backgroundColor: '#28a745',
                borderColor: '#28a745',
                pointRadius: false,
                pointColor: '#28a745',
                pointStrokeColor: '#c1c7d1',
                pointHighlightFill: '#fff',
                pointHighlightStroke: '#28a745',
                data: validDataList
            },
        ]
    }

    var stackedBarChartCanvas = $('#commonChartId').get(0).getContext('2d')
    var stackedBarChartData = $.extend(true, {}, stackedChartData)

    var stackedBarChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }]
        },
        plugins: {
            labels: {
                render: 'value',
                fontColor: '#000',
            }
        }
    }

    donutChart = new Chart(stackedBarChartCanvas, {
        type: 'bar',
        data: stackedBarChartData,
        options: stackedBarChartOptions
    })
}

function generatePieChart(json) {
    if (!!analysisChart) {
        analysisChart.destroy();
    }

    var pieChartCanvas = $('#analysisCommonChartId').get(0).getContext('2d')
    var pieData = {
        labels: ['Attention Require', 'On Track'],
        datasets: [
            {
                data: [json['Attention Require'], json['On Track']],
                backgroundColor: ['#ffc107', '#28a745']
            }
        ]
    };
    var pieOptions = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            labels: {
                render: 'value',
                fontColor: '#000',
                position: 'outside'
            }
        }
    }
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    analysisChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: pieData,
        options: pieOptions
    })
}

// Get data
function getServiceLineDetails() {
    const url = URL + 'api/halo/boa/report/getServiceLineDetails';
    globalResponse['serviceLine'] = {};
    fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    }).then(res => {
        if (res.ok) {
            res.json().then(json => {
                let htmlSelect = '<option value="" selected disabled>Please Select the ServiceLine</option>';
                if (json['Status'] == "Data Available") {
                    globalResponse['serviceLine'] = json;
                    for (let i = 0; i < json['serviceLineDetails'].length; i++) {
                        htmlSelect = htmlSelect + '<option value="' + json['serviceLineDetails'][i]["id"] + '" name="' + json['serviceLineDetails'][i]["name"] + '">' + json['serviceLineDetails'][i]["name"] + '</option>';
                    }
                }

                $('#serviceLineId').html(htmlSelect);
            });
        }
    }).catch(err => {
        console.log('[ERROR]->', err, '--URL-->', url);
    });
}

function getOrderStatus() {
    const url = URL + 'api/halo/boa/report/getOrderStatus';
    globalResponse['orderStatus'] = {};

    fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    }).then(res => {
        if (res.ok) {
            res.json().then(json => {
                let htmlSelect = '<option value="0" selected>ALL</option>';
                if (json['Status'] == "Data Available") {
                    globalResponse['orderStatus'] = json;
                    for (let i = 0; i < json['OrderStatus'].length; i++) {
                        htmlSelect = htmlSelect + '<option value="' + json['OrderStatus'][i]["id"] + '">' + json['OrderStatus'][i]["name"] + '</option>';
                    }
                }
                $('#orderStatusId').html(htmlSelect);
                orderStatus = $("#orderStatusId").val();

            });
        }
    }).catch(err => {
        console.log('[ERROR]->', err, '--URL-->', url);
    });
}

function getDistinctActivityList() {
    const url = URL + 'api/halo/boa/report/getOrderActivityList?serviceId=' + serviceLine;
    globalResponse['distinctActivity'] = {};
    fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    }).then(res => {
        if (res.ok) {
            res.json().then(json => {
                let htmlSelect = '<option value="ALL" selected>ALL</option>';
                if (json['Status'] == "Data Available") {
                    globalResponse['distinctActivity'] = json;
                    for (let i = 0; i < json['orderActivityList'].length; i++) {
                        htmlSelect = htmlSelect + '<option value="' + json['orderActivityList'][i]["id"] + '">' + json['orderActivityList'][i]["name"] + '</option>';
                    }
                }
                $('#distinctActivityId').html(htmlSelect);

            });
        }
    }).catch(err => {
        console.log('[ERROR]->', err, '--URL-->', url);
    });
}

function getOrderActionList() {
    const url = URL + 'api/halo/boa/report/getActionList?serviceId=' + serviceLine;

    globalResponse['orderAction'] = {};
    fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    }).then(res => {
        if (res.ok) {
            res.json().then(json => {
                let htmlSelect = '<option value="ALL" selected>ALL</option>';
                if (json['Status'] == "Data Available") {
                    globalResponse['orderAction'] = json;
                    for (let i = 0; i < json['ActionList'].length; i++) {
                        htmlSelect = htmlSelect + '<option value="' + json['ActionList'][i] + '">' + json['ActionList'][i] + '</option>';
                    }
                }

                $('#orderActionId').html(htmlSelect);
            });
        }
    }).catch(err => {
        console.log('[ERROR]->', err, '--URL-->', url);
    });
}

function getCustomerList() {

    if (serviceLine != '') {
        const url = URL + 'api/halo/boa/report/getCustomerList?fromdate=' + startDate + '&todate=' + endDate + '&serviceId=' + serviceLine + '&statusId=' + orderStatus;
        globalResponse['customerList'] = {}
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }).then(res => {
            if (res.ok) {
                res.json().then(json => {
                    let htmlSelect = '<option value="ALL" selected>ALL</option>';
                    if (json['Status'] == "Data Available") {
                        globalResponse['customerList'] = json;
                        for (let i = 0; i < json['CustomerList'].length; i++) {
                            htmlSelect = htmlSelect + '<option value="' + json['CustomerList'][i] + '">' + json['CustomerList'][i] + '</option>';
                        }
                    }
                    $('#customerListId').html(htmlSelect);
                });
            }
        }).catch(err => {
            console.log('[ERROR]->', err, '--URL-->', url);
        });

    }
}

function getAttributeList() {
    const url = URL + '/api/halo/boa/report/getAttributeMasterList';

    globalResponse['attributeList'] = {};
    fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    }).then(res => {
        if (res.ok) {
            res.json().then(json => {
                let htmlSelect = '<option value="ALL" selected>ALL</option>';
                if (json['Status'] == "Data Available") {
                    globalResponse['attributeList'] = json;
                    for (let i = 0; i < json['getAttributeMasterList'].length; i++) {
                        htmlSelect = htmlSelect + '<option value="' + json['getAttributeMasterList'][i]['id'] + '">' + json['getAttributeMasterList'][i]['name'] + '</option>';
                    }
                }
                $('#attributeId').html(htmlSelect);
            });
        }
    }).catch(err => {
        console.log('[ERROR]->', err, '--URL-->', url);
    });
}

// On change functions
function onServiceLineChange() {
    serviceLine = $("#serviceLineId").val();
    getDistinctActivityList();
    getOrderActionList();
    getCustomerList();
}

function onOrderStatusChange() {
    orderStatus = $("#orderStatusId").val();
    getCustomerList();
}

function onReportTypeChange() {
    reportType = $("#reportTypeId").val();

    if (reportType == '1') {
        $(".distinctActivitySection").hide();
    } else {
        $(".distinctActivitySection").show();
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

$("a[data-toggle=\"tab\"]").on("shown.bs.tab", function (e) {
    console.log('show tab');
    $($.fn.dataTable.tables(true)).DataTable()
        .columns.adjust()
        .responsive.recalc();
});

var randomColorGenerator = function () {
    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
};

function refreshDt(dt, view) {

    let config = {
        lengthMenu: [
            [10, 25, 50],
            [10, 25, 50]
        ],
        pageLength: 10,
        // order: [[0, "desc"]],
        fixedHeader: true,
        dom: 'lBfrtip',
        scrollX: true,
        // "fnDrawCallback": function( oSettings ) {
        //     alert( 'DataTables has redrawn the table' );
        //   }
        // "columnDefs": [
        //     {
        //         "targets": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 31],
        //         "visible": false,
        //     }
        // ]
    }

    if (view == 'summary') {
        config['paging'] = false;
        config['ordering'] = false;
        config['info'] = false;
        config['buttons'] = [
            {
                extend: 'excel',
                text: '<img src="./../static/img/excel_export.svg">',
                // className: 'btn-success',
                filename: dt,
                titleAttr: 'Export as Excel'
            }
        ]
        config['order'] = [[1, "desc"]]
    } else {
        config['paging'] = true;
        config['ordering'] = true;
        config['info'] = true;
        config['buttons'] = [
            {
                extend: 'excel',
                text: '<img src="./../static/img/excel_export.svg">',
                // className: 'btn-success',
                filename: dt,
                titleAttr: 'Export as Excel'
            }, {
                extend: 'colvis',
                text: '<img src="./../static/img/col_visibility.png" height="30px" width="30px">',
                postfixButtons: ['colvisRestore']
            },
        ]
    }

    $(document).ready(function () {
        $(dt).DataTable(config);
    });
}

// $('#customerListId').on('select2:selecting', function (e) {
//     console.log('Selecting: ', e.params.args.data);
// });

// $('#customerListId').on('select2:unselecting', function (e) {
//     console.log('removing: ', e.params.args.data);
// });

// $('#orderActionId').on('select2:selecting', function (e) {
//     console.log('Selecting: ', e.params.args.data);
// });

// $('#orderActionId').on('select2:unselecting', function (e) {
//     console.log('removing: ', e.params.args.data);
// });

// $('#attributeId').on('select2:selecting', function (e) {
//     console.log('Selecting: ', e.params.args.data);
// });

// $('#attributeId').on('select2:unselecting', function (e) {
//     console.log('removing: ', e.params.args.data);
// });

// $('#distinctActivityId').on('select2:selecting', function (e) {
//     console.log('Selecting: ', e.params.args.data);
// });

// $('#distinctActivityId').on('select2:unselecting', function (e) {
//     console.log('removing: ', e.params.args.data);
// });



