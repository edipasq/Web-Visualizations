console.log('hi');
const url = "https://edipasq.github.io/test/samp.json";
//url = "http://localhost:8000/samp.json";

var jsondata = {};

d3.json(url).then(function(data) {
  
  jsondata=data;
  doSomethingWithData()
 });

 function doSomethingWithData() {
  var menu = d3.select("#selDataset");
  var jsonname = jsondata.names;
  var jdata = jsondata;
  let bb = jsonname.map(function(item) {menu.append("option").text(item);
  });
  var panel = d3.select(".panel-body");
    
  console.log('hi2');
  console.log(jdata);  
  metadata = jsondata.metadata[0];
  samples = jsondata.samples[0];
  console.log(jsondata);
  console.log('hey');
  let metadataid = metadata;
  console.log(metadataid);
  let samplesid = samples;
  panel.append("p").text("id:" + metadataid.id);
  panel.append("p").text("ethnicity:" + metadataid.ethnicity);
  panel.append("p").text("gender:" + metadataid.gender);
  panel.append("p").text("age:" + metadataid.age);
  panel.append("p").text('location:' + metadataid.location);
  panel.append("p").text("bbtype:" + metadataid.bbtype);
  panel.append("p").text('wfreq:' + metadataid.wfreq);
  initDatay = samplesid.otu_ids.slice(0, 10);
  initDatax = samplesid.sample_values.slice(0,10);
  initDatat = samplesid.otu_labels.slice(0,10);
  initstringarray = initDatay.map(String)
  let initbb2 = initstringarray.map(function(item3) {
      return "OTU" + item3;
    });
  console.log(initbb2)
    
    let trace1 = {
      x: initDatax,
      y: initbb2,
      text: initDatat,
      name: "Biodiversity",
      type: "bar",
      orientation: "h"
    };

    let traceData = [trace1];
    console.log(traceData);
    let layout = {
      title: "Biodiversity samples per Otu Id- Bar Chart",
      
    };
 // var menubar = d3.select("#bar"); 
  //menubar.append('div').attr("id","plot"); 
  Plotly.newPlot("bar", traceData, layout);
  
  var gdata = [
    {
      type: "indicator",
      mode: "gauge+number",
      value: metadataid.wfreq,
      title: { text: "Belly Button Washing Frequency Scrubs per Week", font: { size: 20 } },
     // delta: { reference: 400, increasing: { color: "RebeccaPurple" } },
      gauge: {
        axis: { range: [null, 9], tickwidth: .2, tickcolor: "Black" },
        bar: { color: "Black" },
        bgcolor: "white",
        borderwidth: 2,
        bordercolor: "gray",
        steps: [
          { range: [0, 1], color: "AntiqueWhite" },
          { range: [1, 2], color: "Bisque" },
          { range: [2, 3], color: "AntiqueWhite" },
          { range: [3, 4], color: "Bisque" },
          { range: [4, 5], color: "AntiqueWhite" },
          { range: [5, 6], color: "Bisque" },
          { range: [6, 7], color: "AntiqueWhite" },
          { range: [7, 8], color: "Bisque" },
          { range: [8, 9], color: "AntiqueWhite" }
         
        ],
        
      }
    }
  ];
  
  var glayout = {
    type:'line',
    width: 500,
    height: 400,
    margin: { t: 25, r: 25, l: 25, b: 25 },
    paper_bgcolor: "lavender",
    line: {
      color: 'black',
      width: 3
    },
    font: { color: "Black", family: "Arial" }
  };
  
  Plotly.newPlot('gauge', gdata, glayout);
  
  Alloutids = samplesid.otu_ids;
  initstringarray2 = Alloutids.map(String);
  let initbboubble = initstringarray2.map(function(item4) {
    return "OTU" + item4;
  });
  var trace2 = {
    x: samplesid.otu_ids,
    y: samplesid.sample_values,
    text: initbboubble,
    mode: 'markers',
    marker: {
      color: samplesid.otu_ids,
     // color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
    size: samplesid.sample_values
    
    }
  };
  
  var bubbledata = [trace2];
  
  var blayout = {
    title: 'Biodiversity samples per Otu Id- Bubble Chart',
    showlegend: false,
    height: 600,
    width: 1200
  };
  
  Plotly.newPlot('bubble', bubbledata, blayout);
  
 }

 


   function optionChanged(valor) {

    d3.select(".panel-body").selectAll("p").remove();
    var panel = d3.select(".panel-body");
    
    function selectdata(meta) {
      return meta.id == valor;
    }

    metadata = jsondata.metadata;
    samples = jsondata.samples;
    let metadataid = metadata.filter(selectdata);
    let samplesid = samples.filter(selectdata);
    panel.append("p").text("id:" + metadataid[0].id);
    panel.append("p").text("ethnicity:" + metadataid[0].ethnicity);
    panel.append("p").text("gender:" + metadataid[0].gender);
    panel.append("p").text("age:" + metadataid[0].age);
    panel.append("p").text('location:' + metadataid[0].location);
    panel.append("p").text("bbtype:" + metadataid[0].bbtype);
    panel.append("p").text('wfreq:' + metadataid[0].wfreq);

    slicedDatay = samplesid[0].otu_ids.slice(0, 10);
    slicedDatax = samplesid[0].sample_values.slice(0,10);
    slicedDatat = samplesid[0].otu_labels.slice(0,10);
    console.log(slicedDatay);

    stringarray = slicedDatay.map(String)
    let bb2 = stringarray.map(function(item2) {
      return "OTU" + item2;
    });
    console.log(bb2)
    //console.log(stringarray);
    
    let trace1 = {
      x: slicedDatax,
      y: bb2,
      text: slicedDatat,
      name: "Biodiversity",
      type: "bar",
      orientation: "h"
    };

    let traceData = [trace1];
    console.log(traceData);
    let layout = {
      title: "Biodiversity samples per Otu Id- Bar Chart",
      
    };
 // var menubar = d3.select("#bar"); 
  //menubar.append('div').attr("id","plot"); 
  Plotly.newPlot("bar", traceData, layout);

  var gdata = [
    {
      type: "indicator",
      mode: "gauge+number",
      value: metadataid[0].wfreq,
      title: { text: "Belly Button Washing Frequency Scrubs per Week", font: { size: 20 } },
     // delta: { reference: 400, increasing: { color: "RebeccaPurple" } },
      gauge: {
        axis: { range: [null, 9], tickwidth: .2, tickcolor: "Black" },
        bar: { color: "Black" },
        bgcolor: "white",
        borderwidth: 2,
        bordercolor: "gray",
        steps: [
          { range: [0, 1], color: "AntiqueWhite" },
          { range: [1, 2], color: "Bisque" },
          { range: [2, 3], color: "AntiqueWhite" },
          { range: [3, 4], color: "Bisque" },
          { range: [4, 5], color: "AntiqueWhite" },
          { range: [5, 6], color: "Bisque" },
          { range: [6, 7], color: "AntiqueWhite" },
          { range: [7, 8], color: "Bisque" },
          { range: [8, 9], color: "AntiqueWhite" }
        ],
        
      }
    }
  ];
  
  var glayout = {
    type:'line',
    width: 500,
    height: 400,
    margin: { t: 25, r: 25, l: 25, b: 25 },
    paper_bgcolor: "lavender",
    line: {
      color: 'black',
      width: 3
    },
    font: { color: "Black", family: "Arial" }
  };
  
  Plotly.newPlot('gauge', gdata, glayout);
  
  Alloutids = samplesid[0].otu_ids;
  stringarray2 = Alloutids.map(String);
  let bboubble = stringarray2.map(function(item3) {
    return "OTU" + item3;
  });
  var trace2 = {
    x: samplesid[0].otu_ids,
    y: samplesid[0].sample_values,
    text: bboubble,
    mode: 'markers',
    marker: {
      color: samplesid[0].otu_ids,
     // color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
    size: samplesid[0].sample_values
    
    }
  };
  
  var bubbledata = [trace2];
  
  var blayout = {
    title: 'Biodiversity samples per Otu Id- Bubble Chart',
    showlegend: false,
    height: 600,
    width: 1200
  };
  
  Plotly.newPlot('bubble', bubbledata, blayout);
  
  };

