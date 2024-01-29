getData();

function getData() {
    // $(".chartSection").removeClass('displayNone').addClass('displayBlock');
    $(".loaderSection").show();
    let url = 'http://kicdt19.kcdc.att.com:9004/nod_mttr';
    fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    }).then(res => {
        if (res.ok) {
            res.json().then(json => {
                $(".loaderSection").hide();
                // $(".chartSection").removeClass('displayBlock').addClass('displayNone');
                let response = _extractNodData(json)
                prepareMttrChart(response);
                prepareAvgDaysChart(response);
                prepareTicketStatusChart(response);
            });
        }
    }).catch(err => {
        console.log('[ERROR]->', err, '--URL-->', url);
    });
}

function _extractNodData(res) {
    let responseData = [];
    responseData.push(res['adiod']);
    responseData.push(res['aseod']);
    responseData.push(res['flexware']);
    responseData.push(res['sdwan']);
    return responseData;
}

function prepareMttrChart(res) {
    for (let i = 0; i < res.length; i++) {
        let monthLabels = [];
        let mttrDataSet = [];
        let mttrTarget = [];

        monthLabels = res[i]['month'];
        mttrDataSet = res[i]['mttr'];
        let chartId = getMttrChartId(res[i]);

        for (let j = 0; j < mttrDataSet.length; j++) {
            mttrTarget.push(res[i]['target_mttr']);
        }

        var mttrChartConfig = {
            labels: monthLabels,
            datasets: [
                {
                    label: 'Target',
                    data: mttrTarget,
                    fill: false,
                    backgroundColor: 'rgb(255, 0, 0)',
                    borderColor: 'rgb(255, 0, 0)',

                    // Changes this dataset to become a line
                    type: 'line'
                },
                {
                    label: 'Mttr',
                    backgroundColor: '#6BCFFA',
                    borderColor: '#6BCFFA',
                    pointRadius: false,
                    pointColor: '#3b8bba',
                    pointStrokeColor: '#6BCFFA',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: '#6BCFFA',
                    data: mttrDataSet
                }
            ]
        }

        var mttrChartCanvas = $('#' + chartId).get(0).getContext('2d')
        var mttrChartDataset = jQuery.extend(true, {}, mttrChartConfig)
        mttrChartDataset.datasets[0] = mttrChartConfig.datasets[0]

        var mttrChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            datasetFill: false,
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true,
                        steps: 5,
                        max: 100
                    }
                }]
            }
        }

        var mttrChart = new Chart(mttrChartCanvas, {
            type: 'bar',
            data: mttrChartDataset,
            options: mttrChartOptions
        })
    }
}

function getMttrChartId(res) {
    let chartId;
    if (res['serviceLine'] === 'adiod') {
        chartId = 'adiodNodMttrBarChartId';
    } else if (res['serviceLine'] === 'aseod') {
        chartId = 'aseodNodMttrBarChartId';
    } else if (res['serviceLine'] === 'flexware') {
        chartId = 'flexwareNodMttrBarChartId';
    } else if (res['serviceLine'] === 'sdwan') {
        chartId = 'sdwanNodMttrBarChartId';
    }

    return chartId;
}


function prepareAvgDaysChart(res) {
    for (let i = 0; i < res.length; i++) {
        let monthLabels = [];
        let avgDaysDataSet = [];
        let avgDaysTarget = [];

        monthLabels = res[i]['month'];
        avgDaysDataSet = res[i]['avg_days'];
        let chartId = getAvgDaysChartId(res[i]);

        for (let j = 0; j < avgDaysDataSet.length; j++) {
            avgDaysTarget.push(2);
        }

        var avgDaysChartConfig = {
            labels: monthLabels,
            datasets: [
                {
                    label: 'Target',
                    data: avgDaysTarget,
                    fill: false,
                    backgroundColor: 'rgb(255, 0, 0)',
                    borderColor: 'rgb(255, 0, 0)',

                    // Changes this dataset to become a line
                    type: 'line'
                },
                {
                    label: 'Avg Days',
                    backgroundColor: '#F7D47D',
                    borderColor: '#F7D47D',
                    pointRadius: false,
                    pointColor: '#3b8bba',
                    pointStrokeColor: '#F7D47D',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: '#F7D47D',
                    data: avgDaysDataSet
                }
            ]
        }

        var avgDaysChartCanvas = $('#' + chartId).get(0).getContext('2d');
        var avgDaysChartDataset = jQuery.extend(true, {}, avgDaysChartConfig);
        avgDaysChartDataset.datasets[0] = avgDaysChartConfig.datasets[0];

        var avgDaysChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            datasetFill: false,
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true,
                        steps: 0.5,
                        max: 5
                    }
                }]
            }
        }

        var avgDaysChart = new Chart(avgDaysChartCanvas, {
            type: 'bar',
            data: avgDaysChartDataset,
            options: avgDaysChartOptions
        })
    }
}

function getAvgDaysChartId(res) {
    let chartId;
    if (res['serviceLine'] === 'adiod') {
        chartId = 'adiodNodAvgDaysBarChartId';
    } else if (res['serviceLine'] === 'aseod') {
        chartId = 'aseodNodAvgDaysBarChartId';
    } else if (res['serviceLine'] === 'flexware') {
        chartId = 'flexwareNodAvgDaysBarChartId';
    } else if (res['serviceLine'] === 'sdwan') {
        chartId = 'sdwanNodAvgDaysBarChartId';
    }

    return chartId;
}

function prepareTicketStatusChart(res) {
    var ticketChart = [];
    for (let i = 0; i < res.length; i++) {
        let monthLabels = [];
        let ticketMetDataSet = [];
        let ticketTotalDataSet = [];
        monthLabels = res[i]['month'];
        ticketMetDataSet = res[i]['met_ticket'];
        ticketTotalDataSet = res[i]['total_ticket'];
        let chartId = getTicketChartId(res[i]);


        var ticketChartConfig = {
            labels: monthLabels,
            datasets: [
                {
                    label: 'Ticket Closed < 2 days',
                    data: ticketMetDataSet,
                    fill: false,
                    backgroundColor: '#9F5F9F',
                    borderColor: '#9F5F9F',

                    // Changes this dataset to become a line
                    type: 'line'
                },
                {
                    label: 'Total Ticket',
                    backgroundColor: '#99B2FF',
                    borderColor: '#99B2FF',
                    pointRadius: false,
                    pointColor: '#3b8bba',
                    pointStrokeColor: '#99B2FF',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: '#99B2FF',
                    data: ticketTotalDataSet,
                    type: "bar",
                }
            ]
        }

        var ticketChartCanvas = $('#' + chartId).get(0).getContext('2d');
        var ticketChartDataset = jQuery.extend(true, {}, ticketChartConfig);
        ticketChartDataset.datasets[0] = ticketChartConfig.datasets[0];
        let that = this
        var ticketChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            datasetFill: false,
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true,
                        steps: 5
                    }
                }]
            },
            legend: {
                onHover: function (e) {
                    e.target.style.cursor = 'pointer';
                }
            },
            hover: {
                onHover: function (e) {
                    var point = this.getElementAtEvent(e);
                    if (point.length) e.target.style.cursor = 'pointer';
                    else e.target.style.cursor = 'default';
                }
            },
            onClick: function (event, array) {
                if (ticketChart[i] === undefined || ticketChart[i] == null) {
                    return;
                }
                if (event === undefined || event == null) {
                    return;
                }
                if (array === undefined || array == null) {
                    return;
                }
                if (array.length <= 0) {
                    return;
                }
                var active = ticketChart[i].getElementAtEvent(event);
                if (active === undefined || active == null) {
                    return;
                }
                var elementIndex = active[0]._datasetIndex;
                console.log("elementIndex: " + elementIndex + "; array length: " + array.length);
                if (array[elementIndex] === undefined || array[elementIndex] == null) {
                    return;
                }

                var chartData = array[elementIndex]['_chart'].config.data;
                var idx = array[elementIndex]['_index'];

                var label = chartData.labels[idx];
                var value = chartData.datasets[elementIndex].data[idx];
                var series = chartData.datasets[elementIndex].label;

                // alert(series + ':' + label + ':' + value);

                that.getExcelData(label, res[i]);
            }
        }

        ticketChart[i] = new Chart(ticketChartCanvas, {
            type: 'bar',
            data: ticketChartDataset,
            options: ticketChartOptions
        })
    }
}

function getTicketChartId(res) {
    let chartId;
    if (res['serviceLine'] === 'adiod') {
        chartId = 'adiodNodTicketStatsBarChartId';
    } else if (res['serviceLine'] === 'aseod') {
        chartId = 'aseodNodTicketStatsBarChartId';
    } else if (res['serviceLine'] === 'flexware') {
        chartId = 'flexwareNodTicketStatsBarChartId';
    } else if (res['serviceLine'] === 'sdwan') {
        chartId = 'sdwanNodTicketStatsBarChartId';
    }

    return chartId;
}