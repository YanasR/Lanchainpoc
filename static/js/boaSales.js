const footer = ` </table>`;
const URL = `http://kicdt19.kcdc.att.com:9014/`;
var startDate = globalDateTransform(new Date(), 'DD/MM/YYYY');
var endDate = globalDateTransform(new Date(), 'DD/MM/YYYY');
var globalResponse = {};
var barChart;

initConfig();
initResponseObj();

function initResponseObj() {
    globalResponse = {
        'metricName': [],
        'dealCountDataSet': [],
        'ticketCountDataSet': [],
        'ttdrDataSet': [],
        'BoaSalesTableData': []
    }
}

function initConfig() {
    //Date range picker
    $('#salesReportRange').daterangepicker();
    $("nav.masterHeader").css('height', '130px');
    $(".masterHeader .navbar-nav").css('margin-bottom', '0%');
    $("nav.masterHeader .masterHeaderLogo").css('position', 'initial');
    $(".container-fluid, footer").removeClass('displayNone').addClass('displayBlock')
    $("nav.masterHeader").removeClass('masterHeaderLanding');
    $("nav.masterHeader .masterHeaderLogo h5").text('Acharya');
}

$('#salesReportRange').daterangepicker().on('apply.daterangepicker', function (e, picker) {
    startDate = picker.startDate.format('MM/DD/YYYY');
    endDate = picker.endDate.format('MM/DD/YYYY');
});

function generateReport() {
    const adiUrl = URL + 'asap/adi?fromdate=' + startDate + '&todate=' + endDate;
    const bvoipadiUrl = URL + 'asap/bvoip/adi?fromdate=' + startDate + '&todate=' + endDate;
    const abnUrl = URL + 'asap/abn?fromdate=' + startDate + '&todate=' + endDate;
    const bvoipmowUrl = URL + 'asap/bvoip/overmow?fromdate=' + startDate + '&todate=' + endDate;
    const bvoipustUrl = URL + 'asap/bvoip/us/tranpt?fromdate=' + startDate + '&todate=' + endDate;
    const bvoipusmUrl = URL + 'asap/bvoip/us/managed?fromdate=' + startDate + '&todate=' + endDate;
    const bvoiptotal = URL +  'asap/bvoip/total?fromdate=' + startDate + '&todate=' + endDate;
    const avpnmowUrl = URL +  'asap/avpn/mow?fromdate=' + startDate + '&todate=' + endDate;
    const avpnustrnspt = URL + 'asap/avpn/us/tranpt?fromdate=' + startDate + '&todate=' + endDate;
    const avpnusmanaged = URL + '/asap/avpn/us/managed?fromdate=' + startDate + '&todate=' + endDate;
    const avpnbulk = URL + 'asap/avpn/us/transport/bulk?fromdate=' + startDate + '&todate=' + endDate;
    const avpntotal = URL + 'asap/avpn/all?fromdate=' + startDate + '&todate=' + endDate;
    const avpnbvoiptotal = URL + 'asap/avpn/all_bvoip?fromdate=' + startDate + '&todate=' + endDate;
    
    initResponseObj();

    Promise.all([
        fetch(adiUrl),
        fetch(bvoipadiUrl),
 //       fetch(bvoipavpnUrl),
        fetch(abnUrl),
        fetch(bvoipmowUrl),
        fetch(bvoipustUrl),
        fetch(bvoipusmUrl),
        fetch(bvoiptotal),
        fetch(avpnmowUrl),
        fetch(avpnustrnspt),
        fetch(avpnusmanaged),
        fetch(avpnbulk),
        fetch(avpntotal),
        fetch(avpnbvoiptotal)
        
    ]).then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        // Log the data to the console
        // You would do something with both sets of data here
        $(".reportSection").removeClass('displayNone').addClass('displayBlock')
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            Object.entries(data[i]).forEach(
                ([appKey, appValue]) => {
                    globalResponse['metricName'].push(appKey);
                    globalResponse['dealCountDataSet'].push(appValue['Deal_count']);
                    globalResponse['ttdrDataSet'].push(appValue['TTDR']);
                    globalResponse['ticketCountDataSet'].push(appValue['Ticket_count']);
                    appValue['metrics_name'] = appKey;
                    globalResponse['BoaSalesTableData'].push(appValue);
                });
        }

        generateChart();
        generateTable();
    }).catch(function (error) {
        // if there's an error, log it
        console.log(error);
    });

}

function generateChart() {
    if (!!barChart) {
        barChart.destroy();
      }

    var salesCanvas = $('#barChart').get(0).getContext('2d');

    var salesChartData = {
        labels: globalResponse['metricName'],
        datasets: [
            {
                label: 'Deal Count',
                backgroundColor: 'rgba(60,141,188,0.9)',
                borderColor: 'rgba(60,141,188,0.8)',
                pointRadius: false,
                pointColor: '#3b8bba',
                pointStrokeColor: 'rgba(60,141,188,1)',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(60,141,188,1)',
                data: globalResponse['dealCountDataSet']
            },
            {
                label: 'Ticket Count',
                backgroundColor: 'rgb(219,112,147)',
                borderColor: 'rgb(219,112,147)',
                pointRadius: false,
                pointColor: 'rgb(219,112,147)',
                pointStrokeColor: '#c1c7d1',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgb(219,112,147)',
                data: globalResponse['ticketCountDataSet']
            },
            {
                label: 'TTDR',
                backgroundColor: 'rgba(210, 214, 222, 1)',
                borderColor: 'rgba(210, 214, 222, 1)',
                pointRadius: false,
                pointColor: 'rgba(210, 214, 222, 1)',
                pointStrokeColor: '#c1c7d1',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data: globalResponse['ttdrDataSet']
            }
        ]
    }

    var barChartData = $.extend(true, {}, salesChartData)
    barChartData.datasets[0] = salesChartData.datasets[0];
    barChartData.datasets[1] = salesChartData.datasets[1];
    barChartData.datasets[2] = salesChartData.datasets[2];

    var barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        datasetFill: false,
        animation: {
            duration: 1,
            onComplete: function () {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;

                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';

                this.data.datasets.forEach(function (dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    meta.data.forEach(function (bar, index) {
                        if (dataset.data[index] > 0) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x, bar._model.y);
                        }
                    });
                });
            }
        }
    }

    barChart = new Chart(salesCanvas, {
        type: 'bar',
        data: barChartData,
        options: barChartOptions
    })
}

function generateTable() {
    document.getElementById('boa-sales-asap-tab').innerHTML = "";

    let theader = `
	        <table class="table table-sm table-hover table-striped table-bordered" id="boa-sales-asap-dt" width="100%" cellspacing="0">
	        <thead>
	          <tr>
                <th>Product Name</th>
                <th>Ticket Count</th>	            
	            <th>Deal Count</th>
	            <th>TTDR</th>
	          </tr>
	      </thead>
	      <tfoot>
	        <tr>
                <th>Product Name</th>
                <th>Ticket Count</th>	            
                <th>Deal Count</th>
                <th>TTDR</th>
	        </tr>
        </tfoot>`;

    let response = theader + resHtml('BOA-SALES-ASAP', globalResponse['BoaSalesTableData']) + footer;
    document.getElementById('boa-sales-asap-tab').innerHTML = response;
    refreshDt('#boa-sales-asap-dt');
}

function resHtml(resultType, res) {
    let htmlbody = "<tbody>";
    if (resultType == 'BOA-SALES-ASAP') {
        res.forEach(e => {
            htmlbody = htmlbody + `<tr>
             <td>${e['metrics_name']}</td>
             <td>${e['Ticket_count']}</td>
             <td>${e['Deal_count']}</td>
             <td>${e['TTDR']}</td>
          </tr>
          `;
        });
    }

    htmlbody = htmlbody + '</tbody>';
    return htmlbody;

}

function refreshDt(dt) {
    console.log(dt);

    $(document).ready(function () {
        $(dt).DataTable({
            lengthMenu: [
                [10, 25, 50],
                [10, 25, 50]
            ],
            pageLength: 50,
            order: [[0, "desc"]],
            fixedHeader: true,
            // dom: 'lBfrtip',
            scrollX: true,
        });
    });
}


