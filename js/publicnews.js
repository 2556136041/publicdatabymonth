
function dateArr(month){
	  var datesArr=new Array();
	  let oneWeek=["(一)","(二)","(三)","(四)","(五)","(六)","(日)"];
	  let weekArr=["(一)","(二)","(三)","(四)","(五)","(六)","(日)","(一)","(二)","(三)","(四)","(五)","(六)","(日)","(一)","(二)","(三)","(四)","(五)","(六)","(日)","(一)","(二)","(三)","(四)","(五)","(六)","(日)","(一)","(二)","(三)","(四)","(五)","(六)","(日)","(一)","(二)","(三)","(四)","(五)","(六)","(日)"];
	  var index=0;
	  var MonthFirstdayToWeekdayArr=["(三)","(六)","(日)","(三)","(五)","(一)","(三)","(六)","(二)","(四)","(日)","(二)"];

	  if(month==1){
           index=oneWeek.indexOf(MonthFirstdayToWeekdayArr[0]);
	  	   datesArr=weekArr.slice(index,31+index);           
	  }
	  if(month==2){
	  	  index=oneWeek.indexOf(MonthFirstdayToWeekdayArr[1]);
          datesArr=weekArr.slice(index,29+index);

	  }
	  if(month==3){
	  	 index=oneWeek.indexOf(MonthFirstdayToWeekdayArr[2]);
         datesArr=weekArr.slice(index,31+index);
	  }
	  if(month==4){
	  	 index=oneWeek.indexOf(MonthFirstdayToWeekdayArr[3]);
         datesArr=weekArr.slice(index,30+index);
	  }
	  if(month==5){
	  	 index=oneWeek.indexOf(MonthFirstdayToWeekdayArr[4]);
         datesArr=weekArr.slice(index,31+index);
	  }
	  if(month==6){
	  	 index=oneWeek.indexOf(MonthFirstdayToWeekdayArr[5]);
         datesArr=weekArr.slice(index,30+index);
	  }
	  if(month==7){
	  	 index=oneWeek.indexOf(MonthFirstdayToWeekdayArr[6]);
         datesArr=weekArr.slice(index,31+index);
	  }
	  if(month==8){
	  	 index=oneWeek.indexOf(MonthFirstdayToWeekdayArr[7]);
         datesArr=weekArr.slice(index,31+index);
	  }
	  if(month==9){
	  	 index=oneWeek.indexOf(MonthFirstdayToWeekdayArr[8]);
         datesArr=weekArr.slice(index,30+index);
	  }
	  if(month==10){
	  	 index=oneWeek.indexOf(MonthFirstdayToWeekdayArr[9]);
         datesArr=weekArr.slice(index,31+index);
	  }
	  if(month==11){
	  	index=oneWeek.indexOf(MonthFirstdayToWeekdayArr[10]);
         datesArr=weekArr.slice(index,30+index);
	  }
	  if(month==12){
	  	 index=oneWeek.indexOf(MonthFirstdayToWeekdayArr[11]);
         datesArr=weekArr.slice(index,31+index);
	  }

	  return datesArr;
}


//根据具体年月日获得月日+周几组合
function gettimeAccordingByDay(year,monthday){
	  let result;
	  var weekDay = ["日", "一", "二", "三", "四", "五", "六"]; 
	  var monthArr=monthday.split(".");
	  var myDate = new Date(Date.parse(year+"/"+monthArr[0]+"/"+monthArr[1]));  
	  result=monthday+"("+weekDay[myDate.getDay()]+")";   //根据日期判断是周几并加上月日
      return result;
}


//不同月份的横轴坐标,显示月日+周几 ,从dateArr(month)取值
// function monthArr(len,Month,XdataColor,XdataFontsize){ 
// 	 var DateArr=dateArr(Month);
// 	 var monthsArr=new Array(); 
// 	 for(let i=1,j=0;i<=len,j<len;i++,j++){  
// 	 	  let obj={
// 	 	  	 value:Month+"."+i+DateArr[j],
// 	 	  	 textStyle:{color:XdataColor,fontSize:XdataFontsize}
// 	      };
       
// 	 	  monthsArr.push(obj);
// 	 }
// 	 console.log(monthsArr.length);
// 	 for(let n=0;n<monthsArr.length;n++){
// 	 	   console.log(monthsArr[n].value);

// 	 }
// 	 return monthsArr;			 	
// }


//不同月份的横轴坐标,显示月日+周几 , 从gettimeAccordingByDay(year,monthday)取值
function monthArr(len,Month,XdataColor,XdataFontsize){ 
	 var monthsArr=new Array();
	 for(let i=1;i<=len;i++){  
	 	  let obj={
	 	  	 value:gettimeAccordingByDay(2020,Month+"."+i),
	 	  	 textStyle:{color:XdataColor,fontSize:XdataFontsize,fontWeight:'bold'}
	      };
       
	 	  monthsArr.push(obj);
	 }

	 return monthsArr;			 	
}


function getTodaytime(){
    var date = new Date();
	date.getYear(); //获取当前年份(2位)
	var year=date.getFullYear(); //获取完整的年份(4位)
	var month=date.getMonth()+1; //获取当前月份(0-11,0代表1月)
	var day=date.getDate(); //获取当前日(1-31)
	date.getDay(); //获取当前星期X(0-6,0代表星期天)
	date.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
	date.getHours(); //获取当前小时数(0-23)
	date.getMinutes(); //获取当前分钟数(0-59)
	date.getSeconds(); //获取当前秒数(0-59)
	date.getMilliseconds(); //获取当前毫秒数(0-999)
	date.toLocaleDateString(); //获取当前日期
	var mytime=date .toLocaleTimeString(); //获取当前时间
	date.toLocaleString( ); //获取日期与时间
	return year+"."+month+"."+day;
}

//不同月份的横轴坐标,只显示日期
// function monthArr(len,Month,XdataColor,XdataFontsize){
// 	 var monthsArr=new Array(); 
// 	 for(var i=0;i<len;i++){
// 	 	  var obj={
// 	 	  	value:Month+"."+(i+1),
// 	 	  	textStyle:{color:XdataColor,fontSize:XdataFontsize}
// 	 	  };
// 	 	  monthsArr.push(obj);
// 	 }
// 	 return monthsArr;			 	
// }


//不同月份的长度
function diffMonth(style,len,month,d1,d2,d3){		    
    //全部数据
    var data1=d1;
    var data2=d2;
    var data3=d3;
    //全部数据之和
    var sum1=sumArr(data1);
    var sum2=sumArr(data2);
    var sum=sum1+sum2;
    var sum3=sumArr(data3);
    var warn="";
    if(sum!==sum3){
        warn="*数据有误！";
    }
    //最高最低取值
    var dataanalyse="日抓取：▲"+Math.max(...data2)+"篇, ▼"+Math.min(...data2)+"篇;日供稿：▲"+Math.max(...data1)+"篇, ▼"+Math.min(...data1)+"篇。";

    var Month=month; //月份
    //var titName=style.titname; //标题名称
    var date=new Date;
    var y = date.getFullYear();
    if(y!=2020){
        y=2020;
    }

    var titName=y+"年读特·区域频道月度("+Month+"月)发稿明细图";
    var titColor=style.titcolor; //标题颜色
    var titFontsize=style.titfontsize; //标题字体大小
    var XdataColor=style.xdatacolor; //横坐标字体颜色
    var XdataFontsize=style.xdatafontsize; //横坐标字体大小
    var YdataColor=style.ydatacolor; //纵坐标字体颜色
    var YdataFontsize=style.ydatafontsize; //纵坐标字体大小
    var titpos={  //标题位置
    	left:style.titposleft,
    	top:style.titpostop
    }   

    //副标题设置
    var subtitle;
    if(data2.length>0 || data1.length>0){
       subtitle="截至目前本月共发稿"+sum+"篇, 其中记者"+sum1+"篇,抓取稿件"+sum2+"篇。"+dataanalyse+"  "+warn;
    }else{
       subtitle="截至目前本月共发稿"+sum+"篇, 其中记者"+sum1+"篇,抓取稿件"+sum2+"篇。  "+warn;
    }
    
    var subtitcolor=style.subtitcolor;
    var subtitfontsize=style.subtitfontsize;

    //顶部是否显示数据
    var isTopShow=true;

    //顶部字体样式
    var topColor=style.topcolor;
    var topFontsize=style.topfontsize;

    // 圆柱折线颜色 "rgba(209,48,43,1)"
	var baseColor=style.basecolor;

    //平均值样式
    var averageColor1=style.averagecolor1;
    var averageColor2=style.averagecolor2;
    var averageColor3=style.averagecolor3;
	var averageWidth=style.averagewidth;
	var averageFontsize=style.averagefontsize;			

	//x y轴颜色大小
	var lineColor=style.linecolor;
	var lineWidth=style.linewidth;

	//x y轴文字颜色大小 
	var lineTextColor=style.linetextcolor;
	var lineTextFontsize=style.linetextfontsize;

    
	//给容器初始化图表实例
	var myChart=echarts.init(document.getElementById("box"),'wonderland');
	
	
	//指定图表配置项和数据
	var option={
		title:{
            text:titName,
            left:titpos.left,
            top:titpos.top,
            textStyle:{
            	color:titColor,
            	fontSize:titFontsize
            },
            subtext:subtitle,
            // sublink:"http://www.szfyxhm.com/",
            subtextStyle:{
            	color:subtitcolor,
            	fontSize:subtitfontsize
            }
		},
		legend:{
			//显示图例说明,把数据对应的name值显示出来
		    //color:['#ff0000','#00ff00','#0000ff'],//调色盘颜色列表
            itemWidth: 30,             // 图例图形宽度
	        itemHeight: 14,            // 图例图形高度
	        textStyle: {
	            color: 'gray'              // 图例文字颜色
	        }           

		},		
		tooltip:{
			trigger: 'item'

		},
		toolbox:{
			show:true,
			left:1750,
			top:8,
			orient:'horizontal',
			itemSize: 15,
			itemGap: 10,
			feature:{
				dataView:{
					show:false
				},
				restore:{
					show:false
				},
				magicType:{
					 show:true,
					 type:['stack']
                     //type:['line', 'bar', 'stack', 'tiled']
				},
				dataZoom:{
					show:false
				},				
				saveAsImage:{
					show:true
				}				

			}

		},
		grid: {
			left: "200px",
			//right: "200px",
			top: "90px",
	        bottom: "30px"
	    },
	    dataZoom: [
            {   // 这个dataZoom组件，默认控制x轴。
                type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件   
                show:false,    //不显示伸缩控件             
                start: 0,      // 左边在 10% 的位置。
                end:100,        // 右边在 60% 的位置。
                height: 26,
				bottom: 10,
				borderColor: 'transparent',
                backgroundColor: 'rgba(47,69,84,0)',
                fillerColor: 'rgba(47,69,84,0)',
                handleIcon: 'M512 512m-208 0a6.5 6.5 0 1 0 416 0 6.5 6.5 0 1 0-416 0Z M512 192C335.264 192 192 335.264 192 512c0 176.736 143.264 320 320 320s320-143.264 320-320C832 335.264 688.736 192 512 192zM512 800c-159.072 0-288-128.928-288-288 0-159.072 128.928-288 288-288s288 128.928 288 288C800 671.072 671.072 800 512 800z',
				handleColor: '#aab6c6',
				handleSize: 20,
				handleStyle: {
					borderColor: '#aab6c6',
					shadowBlur: 4,
					shadowOffsetX: 1,
					shadowOffsetY: 1,
					shadowColor: '#e5e5e5'
				}

            },
	        {   // 这个dataZoom组件，也控制x轴。
	            type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
	            start: 0,      // 左边在 10% 的位置。
	            end: 100         // 右边在 60% 的位置。
	        }
	        //backgroundColor: '#73b9bc',       // 背景颜色
	        //dataBackgroundColor: '#eee',            // 数据背景颜色
	        //fillerColor: 'rgba(144,197,237,0.2)',   // 填充颜色
	        //handleColor: 'rgba(70,130,180,0.8)'     // 手柄颜色
        ],
		xAxis:{
			type:"category",
			show:true,
			name:"日期",
			nameTextStyle:{
                color:lineTextColor,
                fontSize:lineTextFontsize
			},  
			axisLabel:{
				color:"black",
				interval:0

			},
			axisLine:{
                lineStyle:{
                	color:lineColor,
                	width:lineWidth
                }
			},
			// data:["6月8日(周一)","6月9日(周二)","6月10日(周三)","6月11日(周四)","6月12日(周五)","6月13日(周六)","6月14日(周日)"]
			data:monthArr(len,month,XdataColor,XdataFontsize)		
	
			
		},
		yAxis:{  //Y轴   
			show:true,
			min:0,
			max:180,
		    name:"单位：篇",
			nameTextStyle:{
				color:lineTextColor,
				fontSize:lineTextFontsize
			},
			axisLine:{
				lineStyle:{
                	color:lineColor,
                	width:lineWidth
                }

			},
			axisLabel: {                    
			   show: true,                    
			   textStyle: {                        
				   color: YdataColor,                                       
				   fontSize: YdataFontsize,
			   }                             
			}

		},		
		series:[
		{
			name:style.tipname1,
			//type:'line',//折线图
			type:'bar', // 柱状图
			//barWidth:40,
			smooth:true,
			data:data1,   //数据
			itemStyle: {   //顶部是否显示数据
               normal: {
                   label: {
                       show: isTopShow,		//开启显示
                       //position: 'top',	//在上方显示
                       position: [0, -25],
                       textStyle: {	    //数值样式
                           color: topColor,
                           fontSize: topFontsize
                       }
                   }
               }
           },
           markPoint:{
           	   symbol:'pin',  //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
               symbolSize:50,
               symbolKeepAspect: true,
               data:[
                   {type:"max",name:"最大值"},
                   {type:"min",name:"最小值"}
               ]
           },
		   markLine:{ //平均值
				data:[{type:"average",name:'平均数'}],

				// lineStyle:{
				// 	color: averageColor,
				// 	width: averageWidth
				// },
				itemStyle: {
					normal: {
					    // color: 各异,           // 标线主色，线色，symbol主色
					    // borderColor: 随color,     // 标线symbol边框颜色，优先于color 
					    borderWidth: averageWidth,          // 标线symbol边框线宽，单位px，默认为2
					    color:averageColor1,
					    label: {
					        show: 'end',
					        // 可选为 'start'|'end'|'left'|'right'|'top'|'bottom'
					        position: 'inside',  
					        textStyle: {         // 默认使用全局文本样式，详见TEXTSTYLE
					            color: 'black',
					            fontSize: averageFontsize
					        },
					        formatter: '{c} 篇'
					    },
					    lineStyle: {
					        // color: 随borderColor, // 主色，线色，优先级高于borderColor和color
					        // width: 随borderWidth, // 优先于borderWidth
					        width:averageWidth,
					        type: '',
					        shadowColor : averageColor1, //默认透明
					        shadowBlur: 0,
					        shadowOffsetX: 0,
					        shadowOffsetY: 0,
					        opacity:1
					    }
					},
					emphasis: {
					    // color: 各异
					    label: {
					        show: false
					        // position: 'inside' // 'left'|'right'|'top'|'bottom'
					        // textStyle: null    // 默认使用全局文本样式，详见TEXTSTYLE
					    },
					    lineStyle : {}
					}
				}
				
			}
		},
		{
			name:style.tipname2,
			//type:'line',//折线图
			type:'bar', // 柱状图
			smooth:true,
			data:data2,   //数据
			itemStyle: {   //顶部是否显示数据
               normal: {
                   label: {
                       show: isTopShow,		//开启显示
                       //position: 'top',	//在上方显示
                       position: [-3, -27],
                       textStyle: {	    //数值样式
                           color: topColor,
                           fontSize: topFontsize
                       }
                   }
               }
           },
           markPoint:{
           	   symbol:'pin',  //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
               symbolSize:50,              
               symbolKeepAspect: true,
               data:[
                   {type:"max",name:"最大值"},
                   {type:"min",name:"最小值"}
               ]
           },
		   markLine:{ //平均值
				data:[{type:"average",name:'平均数'}],
				// lineStyle:{
				// 	color: averageColor1,
				// 	width: averageWidth
				// }
				
				itemStyle: {
					normal: {
					    // color: 各异,           // 标线主色，线色，symbol主色
					    // borderColor: 随color,     // 标线symbol边框颜色，优先于color 
					    borderWidth: averageWidth,          // 标线symbol边框线宽，单位px，默认为2
					    color:averageColor2,
					    label: {
					        show: 'end',
					        // 可选为 'start'|'end'|'left'|'right'|'top'|'bottom'
					        position: 'inside',  
					        textStyle: {         // 默认使用全局文本样式，详见TEXTSTYLE
					            color: 'black',
					            fontSize: averageFontsize
					        },
					        formatter: '{c} 篇'
					    },
					    lineStyle: {
					        // color: 随borderColor, // 主色，线色，优先级高于borderColor和color
					        // width: 随borderWidth, // 优先于borderWidth
					        width:averageWidth,
					        type: '',
					        shadowColor : averageColor2, //默认透明
					        shadowBlur: 0,
					        shadowOffsetX: 0,
					        shadowOffsetY: 0
					    }
					},
					emphasis: {
					    // color: 各异
					    label: {
					        show: false
					        // position: 'inside' // 'left'|'right'|'top'|'bottom'
					        // textStyle: null    // 默认使用全局文本样式，详见TEXTSTYLE
					    },
					    lineStyle : {}
					}
				}
			}
		},
		{
			name:style.tipname3,
			//type:'line',//折线图
			type:'bar', // 柱状图
			smooth:true,
			//barWidth:12,
  	        barGap:'28%',/*多个并排柱子设置柱子之间的间距*/
  	        barCategoryGap:'16%',
			data:data3,   //数据
			itemStyle: {   //顶部是否显示数据
               normal: {
                   label: {
                       show: isTopShow,		//开启显示
                       //position: 'top',	//在上方显示
                       position: [-3, -27],
                       textStyle: {	    //数值样式
                           color: topColor,
                           fontSize: topFontsize
                       }
                   }
               }
           },
           markPoint:{
           	   symbol:'pin',  //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
               symbolSize:50,
               symbolKeepAspect: true,
               data:[
                   {type:"max",name:"最大值"},
                   {type:"min",name:"最小值"}
               ]

           },
		   markLine:{ //平均值
				data:[{type:"average",name:'平均数'}],
				// lineStyle:{
				// 	color: averageColor1,
				// 	width: averageWidth
				// }
				itemStyle: {
					normal: {
					    // color: 各异,           // 标线主色，线色，symbol主色
					    // borderColor: 随color,     // 标线symbol边框颜色，优先于color 
					    borderWidth: averageWidth,          // 标线symbol边框线宽，单位px，默认为2
					    color:averageColor3,
					    label: {
					        show: 'end',
					        // 可选为 'start'|'end'|'left'|'right'|'top'|'bottom'
					        position: 'inside',  
					        textStyle: {         // 默认使用全局文本样式，详见TEXTSTYLE
					            color: 'black',
					            fontSize: averageFontsize
					        },
					        formatter: '{c} 篇'
					    },
					    lineStyle: {
					        // color: 随borderColor, // 主色，线色，优先级高于borderColor和color
					        // width: 随borderWidth, // 优先于borderWidth
					        width:averageWidth,
					        type: '',
					        shadowColor : averageColor3, //默认透明
					        shadowBlur: 0,
					        shadowOffsetX: 0,
					        shadowOffsetY: 0
					    }
					},
					emphasis: {
					    // color: 各异
					    label: {
					        show: false
					        // position: 'inside' // 'left'|'right'|'top'|'bottom'
					        // textStyle: null    // 默认使用全局文本样式，详见TEXTSTYLE
					    },
					    lineStyle : {}
					}
				}
			}
		}],

		color:baseColor
	};
	
	//把配置项和数据显示出来
	myChart.setOption(option);	

	
	//切换到柱状图
	document.getElementById("bar").onclick=function(){
		for(var i=0;i<option.series.length;i++){
			option.series[i].type='bar';
			myChart.setOption(option);

		}
	}
	
	//切换到折线图
	document.getElementById("line").onclick=function(){
		for(var i=0;i<option.series.length;i++){
			option.series[i].type='line';
			myChart.setOption(option);
		}
	}


	
}   