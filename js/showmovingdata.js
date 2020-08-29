
var vue=new Vue({
      el:"#app",
      data:{
          mes:"hello",
          circle:new Array(3),
          selectedIndex:0,
          everydays:[],   //原数据
          alldata:[],     //整理后的抽取6-12月数据
          dataindex:0,    //轮播索引指针
          //arrlen: ($.cookie("showmovingdataslen")-1),  //显示数据总长度，用cookie存储
          arrlen:0,  //显示数据总长度，用sessionStorage存储
          total: 20000,   //任务目标
          currentTotal:0, //当前完成，初始化为零 
          percentage:"",  //完成百分比，初始化为空
          refreshTime:2000,    //多长时间轮播
          customStyle:"walden", //使用一个主题色系
          seriesType:'line', //类型
          axisColor:"black", //x、y轴颜色
          axisFontsize:16, //xy轴字体大小
          axisWidthSize:2,   //xy轴大小
          bigTit:"读特区域频道2020年(5.14-12.31)发稿动态曲线图",  //主标题
          xAxisShowNumber:7, //x轴显示7个时间点
          subTit:"(以周为单位)",  //副标题
          titColor:"rgba(75,193,252,1)", //标题颜色 
          titSize:22, //主标字体大小
          alldownyeartime:['5.14(四)','5.15(五)','5.16(六)','5.17(日)','5.18(一)','5.19(二)','5.20(三)','5.21(四)','5.22(五)','5.23(六)','5.24(日)','5.25(一)','5.26(二)','5.27(三)','5.28(四)','5.29(五)','5.30(六)','5.31(日)','6.1(一)','6.2(二)','6.3(三)','6.4(四)','6.5(五)','6.6(六)','6.7(日)','6.8(一)','6.9(二)','6.10(三)','6.11(四)','6.12(五)','6.13(六)','6.14(日)','6.15(一)','6.16(二)','6.17(三)','6.18(四)','6.19(五)','6.20(六)','6.21(日)','6.22(一)','6.23(二)','6.24(三)','6.25(四)','6.26(五)','6.27(六)','6.28(日)','6.29(一)','6.30(二)','7.1(三)','7.2(四)','7.3(五)','7.4(六)','7.5(日)','7.6(一)','7.7(二)','7.8(三)','7.9(四)','7.10(五)','7.11(六)','7.12(日)','7.13(一)','7.14(二)','7.15(三)','7.16(四)','7.17(五)','7.18(六)','7.19(日)','7.20(一)','7.21(二)','7.22(三)','7.23(四)','7.24(五)','7.25(六)','7.26(日)','7.27(一)','7.28(二)','7.29(三)','7.30(四)','7.31(五)','8.1(六)','8.2(日)','8.3(一)','8.4(二)','8.5(三)','8.6(四)','8.7(五)','8.8(六)','8.9(日)','8.10(一)','8.11(二)','8.12(三)','8.13(四)','8.14(五)','8.15(六)','8.16(日)','8.17(一)','8.18(二)','8.19(三)','8.20(四)','8.21(五)','8.22(六)','8.23(日)','8.24(一)','8.25(二)','8.26(三)','8.27(四)','8.28(五)','8.29(六)','8.30(日)','8.31(一)','9.1(二)','9.2(三)','9.3(四)','9.4(五)','9.5(六)','9.6(日)','9.7(一)','9.8(二)','9.9(三)','9.10(四)','9.11(五)','9.12(六)','9.13(日)','9.14(一)','9.15(二)','9.16(三)','9.17(四)','9.18(五)','9.19(六)','9.20(日)','9.21(一)','9.22(二)','9.23(三)','9.24(四)','9.25(五)','9.26(六)','9.27(日)','9.28(一)','9.29(二)','9.30(三)','10.1(四)','10.2(五)','10.3(六)','10.4(日)','10.5(一)','10.6(二)','10.7(三)','10.8(四)','10.9(五)','10.10(六)','10.11(日)','10.12(一)','10.13(二)','10.14(三)','10.15(四)','10.16(五)','10.17(六)','10.18(日)','10.19(一)','10.20(二)','10.21(三)','10.22(四)','10.23(五)','10.24(六)','10.25(日)','10.26(一)','10.27(二)','10.28(三)','10.29(四)','10.30(五)','10.31(六)','11.1(日)','11.2(一)','11.3(二)','11.4(三)','11.5(四)','11.6(五)','11.7(六)','11.8(日)','11.9(一)','11.10(二)','11.11(三)','11.12(四)','11.13(五)','11.14(六)','11.15(日)','11.16(一)','11.17(二)','11.18(三)','11.19(四)','11.20(五)','11.21(六)','11.22(日)','11.23(一)','11.24(二)','11.25(三)','11.26(四)','11.27(五)','11.28(六)','11.29(日)','11.30(一)','12.1(二)','12.2(三)','12.3(四)','12.4(五)','12.5(六)','12.6(日)','12.7(一)','12.8(二)','12.9(三)','12.10(四)','12.11(五)','12.12(六)','12.13(日)','12.14(一)','12.15(二)','12.16(三)','12.17(四)','12.18(五)','12.19(六)','12.20(日)','12.21(一)','12.22(二)','12.23(三)','12.24(四)','12.25(五)','12.26(六)','12.27(日)','12.28(一)','12.29(二)','12.30(三)','12.31(四)'],
          //xAxisData:["周一","周二","周三","周四","周五","周六","周日"], //x轴类目
          //xAxisData:alldownyeartime[],
          yAxisMax:200, //y轴最大值
          subtitColor:"rgba(20,20,20,.7)", //副标题颜色
          series_area_color:'rgba(75,193,252,.5)', // 中间区域颜色
          series_line_color:'rgba(75,193,252,1)',  // 中间线条颜色
          series_area_line_size:4, //中间线条大小
          series_item_color:'#e6b600',  // 中间标点颜色
          series_area_item_size:10, //中间标点大小
          tooltipbackground:'#6a7985',  //中间提示工具背景颜色
          Grid:{
             left:60,
             right:70,
             top:100,
             bottom:25
          },


    
      },
      methods:{
          clearRefresh:function(){
              sessionStorage.clear();
              // $.removeCookie('showmovingdataslen',{ path: '/'});
              window.location.reload();
          },
          getdata:function(){
                //发送get请求
                // this.$http.get('/apply/readData').then(function(res){
                //    var everydays=(JSON.parse(res.body)).everydaynumbers;
                   
                //     console.log(everydays);    
                // },function(){
                //     console.log('请求失败处理');
                // });
                
          },
          change:function(index){
               this.selectedIndex=index;
               this.genChart();
          },
          genChart:function(){
             var j = this.dataindex;
             var shownumber=this.xAxisShowNumber;

             //用本地存储存放数据 
             if (typeof(Storage) !=="undefined") {

                 //如果本地有数据则用本地存储的数据
                 if(sessionStorage.getItem("sessionstorageshowdata")!=null){
                         //加载本地数据，并初始化数据                        
                         const storageDatas=JSON.parse(sessionStorage.getItem('sessionstorageshowdata'));
                         this.alldata=storageDatas.showData;
                         this.arrlen = storageDatas.arrLen;
                         //console.log(this.alldata);

                         //const obj = stringToArray(this.alldata);
                         const objarr = storageDatas.showData;
                         // 数据求和写入data中
                         this.currentTotal = sumArr(objarr);
                         this.percentage = GetPercent(this.currentTotal, this.total);
    
                         //创建新数组用于装显示的数据段
                         const mockData=new Array();                   
                         for(let i = 0,len = objarr.length;i<len;i += this.xAxisShowNumber){
                             //mockData.push(Math.floor(Math.random()*100)+200);
                              mockData.push(objarr.slice(i,i+this.xAxisShowNumber));
                         }
                         
                         // 获得显示数据段的对应时间轴
                         let XaxisData=new Array();
                         const alldownyeardata=this.alldownyeartime;
                         let num=objarr.length;
                         XaxisData=alldownyeardata.slice(0,num); 

                         let everyweekdata=new Array();  
                         for(let i = 0,len = XaxisData.length;i<len;i += this.xAxisShowNumber){
                              everyweekdata.push(XaxisData.slice(i,i+this.xAxisShowNumber));
                         }                         

                         //console.log("本地存储数据："+mockData[j]);
                         const box=document.getElementById("box");
                         const myChart=echarts.init(box,this.customStyle);
                         const options={
                                title:{
                                      text:this.bigTit,
                                      left:'center',
                                      top:12,
                                      textStyle:{
                                        color:this.titColor,
                                        fontSize:this.titSize
                                      },
                                      subtext:this.subTit,
                                      subtextStyle:{
                                        color:this.subtitColor,
                                        fontSize:14
                                      }
                                },
                                tooltip:{
                                   trigger:"axis",
                                   axisPointer:{
                                      type:"cross",
                                      label:{
                                          backgroundColor:this.tooltipbackground
                                      }
                                   }
                                },
                                xAxis:{
                                   show:true,
                                   type:'category',
                                   name:"日期",
                                   nameLocation:'end',
                                   nameTextStyle:{
                                        color:this.axisColor,
                                        fontSize:this.axisFontsize
                                    },
                                    axisLabel: {                    
                                       show: true,                    
                                       textStyle: {                        
                                         color: this.axisColor,                                       
                                         fontSize: this.axisFontsize
                                       }                             
                                    },
                                    axisLine:{
                                       lineStyle:{
                                            color:this.axisColor,
                                            width:this.axisWidthSize
                                       }
                                    },
                                    //data:this.xAxisData
                                    data:everyweekdata[j]  //对应数据显示相应日期

                                },
                                yAxis:{
                                    show:true,
                                    min:0,
                                    max:this.yAxisMax,
                                    name:"单位：篇",
                                    nameTextStyle:{
                                      color:this.axisColor,
                                      fontSize:this.axisFontsize
                                    },
                                    axisLine:{
                                      lineStyle:{
                                         color:this.axisColor,
                                         width:this.axisWidthSize
                                      }

                                   },
                                   axisLabel: {                    
                                       show: true,                    
                                       textStyle: {                        
                                         color: this.axisColor,                                       
                                         fontSize: this.axisFontsize
                                       }                             
                                    }
                                },    
                                grid:this.Grid,                
                                series:[{
                                    data:mockData[j],
                                    type:this.seriesType,
                                    smooth:true,
                                    areaStyle:{
                                       color:this.series_area_color
                                    },
                                    lineStyle:{
                                       width:this.series_area_line_size,
                                       color:this.series_line_color
                                    },
                                    itemStyle:{
                                        borderWidth:this.series_area_item_size,
                                        color:this.series_item_color
                                    }
                                  
                                }],
                          }
                          myChart.setOption(options);                       
                       
                 }else{
                      var self = this;
                      // axios 用jquery的$.parseJSON()方法转化成json对象 JSON.parse()方法不能用
                      // axios.post('/apply/readData',{},{emulateJSON:true}).then(function(result){
                      //      self.everydays=$.parseJSON(result.data).everydaynumbers;
                      //                let m5=self.everydays[4].five.d3.slice(13);
                      //                let m6=self.everydays[5].six.d3;
                      //                let m7=self.everydays[6].seven.d3;
                      //                let m8=self.everydays[7].eight.d3;
                      //                let m9=self.everydays[8].nine.d3;
                      //                let m10=self.everydays[9].ten.d3;
                      //                let m11=self.everydays[10].eleven.d3;
                      //                let m12=self.everydays[11].twelve.d3;
                      //                self.alldata = m5.concat(m6,m7,m8,m9,m10,m11,m12);  
                      //                // 用对象类型将请求到的数据写入本地存储中                           
                      //                let storageData={
                      //                     arrLen:Math.floor(self.alldata.length / shownumber),
                      //                     showData:self.alldata
                      //                }
                      //                sessionStorage.setItem("sessionstorageshowdata",JSON.stringify(storageData));
                      //                //const storageDatas=JSON.parse(sessionStorage.getItem('sessionstorageshowdata'));
                 
                      //                //计算当前完成任务数以及百分比
                      //                self.currentTotal = sumArr(self.alldata);
                      //                self.percentage = GetPercent(self.currentTotal, self.total);
                                     
                      //                //创建新数组用于装显示的数据段
                      //                const mockData=new Array();                   
                      //                for(let i = 0,len = self.alldata.length;i<len;i += self.xAxisShowNumber){
                      //                    //mockData.push(Math.floor(Math.random()*100)+200);
                      //                     mockData.push(self.alldata.slice(i,i+self.xAxisShowNumber));
                      //                }  

                      //                // 获得数据段对应的时间轴
                      //                let XaxisData=new Array();
                      //                const alldownyeardata=self.alldownyeartime;
                      //                let num=self.alldata.length;
                      //                //console.log("来自数据库条数："+num);
                      //                XaxisData=alldownyeardata.slice(0,num); 
                      //                let everyweekdata=new Array();  
                      //                for(let i = 0,len = XaxisData.length;i<len;i += self.xAxisShowNumber){
                      //                     everyweekdata.push(XaxisData.slice(i,i+self.xAxisShowNumber));
                      //                }     

                                    
                      //                // 首次请求成功后，将显示数据组的长度写入cookie中
                      //                // nowDate = new Date();
                      //                // nowDate.setTime(nowDate.getTime() + (24 * 60 * 60 * 1000));     //1天过期
                      //                // $.cookie("showmovingdataslen", mockData.length, {
                      //                //      path: '/',                //cookie的作用域
                      //                //      expires: nowDate
                      //                // });

                      //                const box=document.getElementById("box");
                      //                const myChart=echarts.init(box,self.customStyle);
                      //                const options={
                      //                       title:{
                      //                             text:self.bigTit,
                      //                             left:'center',
                      //                             top:12,
                      //                             textStyle:{
                      //                               color:self.titColor,
                      //                               fontSize:self.titSize
                      //                             },
                      //                             subtext:self.subTit,
                      //                             subtextStyle:{
                      //                               color:self.subtitColor,
                      //                               fontSize:14
                      //                             }
                      //                       },
                      //                       tooltip:{
                      //                          trigger:"axis",
                      //                          axisPointer:{
                      //                             type:"cross",
                      //                             label:{
                      //                                 backgroundColor:self.tooltipbackground
                      //                             }
                      //                          }
                      //                       },
                      //                       xAxis:{
                      //                          show:true,
                      //                          type:'category',
                      //                          name:"日期",
                      //                          nameLocation:'end',
                      //                          nameTextStyle:{
                      //                               color:self.axisColor,
                      //                               fontSize:self.axisFontsize
                      //                           },
                      //                           axisLabel: {                    
                      //                              show: true,                    
                      //                              textStyle: {                        
                      //                                color: self.axisColor,                                       
                      //                                fontSize: self.axisFontsize
                      //                              }                             
                      //                           },
                      //                           axisLine:{
                      //                              lineStyle:{
                      //                                   color:self.this.axisColor,
                      //                                   width:self.axisWidthSize
                      //                              }
                      //                           },
                      //                           //data:this.xAxisData
                      //                           data:everyweekdata[j]

                      //                       },
                      //                       yAxis:{
                      //                           show:true,
                      //                           min:0,
                      //                           max:self.yAxisMax,
                      //                           name:"单位：篇",
                      //                           nameTextStyle:{
                      //                             color:self.axisColor,
                      //                             fontSize:self.axisFontsize
                      //                           },
                      //                           axisLine:{
                      //                             lineStyle:{
                      //                                color:self.axisColor,
                      //                                width:self.axisWidthSize
                      //                             }

                      //                          },
                      //                          axisLabel: {                    
                      //                              show: true,                    
                      //                              textStyle: {                        
                      //                                color: self.axisColor,                                       
                      //                                fontSize: self.axisFontsize
                      //                              }                             
                      //                           }
                      //                       },    
                      //                       grid:self.Grid,                 
                      //                       series:[{
                      //                           data:mockData[j],
                      //                           type:self.seriesType,
                      //                           smooth:true,
                      //                           areaStyle:{
                      //                              color:self.series_area_color
                      //                           },
                      //                           lineStyle:{
                      //                              width:self.series_area_line_size,
                      //                              color:self.series_line_color
                      //                           },
                      //                           itemStyle:{
                      //                               borderWidth:self.series_area_item_size,
                      //                               color:self.series_item_color
                      //                           }                                              
                      //                       }],
                      //                 }
                      //                 myChart.setOption(options);   

                      // },function(res){
                      //      console.log(res.status);
                      // });

                      
                      this.$http.get('/apply/readData').then(function(result){
                           self.everydays=$.parseJSON(JSON.parse(res.body)).everydaynumbers;
                                     let m5=self.everydays[4].five.d3.slice(13);
                                     let m6=self.everydays[5].six.d3;
                                     let m7=self.everydays[6].seven.d3;
                                     let m8=self.everydays[7].eight.d3;
                                     let m9=self.everydays[8].nine.d3;
                                     let m10=self.everydays[9].ten.d3;
                                     let m11=self.everydays[10].eleven.d3;
                                     let m12=self.everydays[11].twelve.d3;
                                     self.alldata = m5.concat(m6,m7,m8,m9,m10,m11,m12);  
                                     // 用对象类型将请求到的数据写入本地存储中                           
                                     let storageData={
                                          arrLen:Math.floor(self.alldata.length / shownumber),
                                          showData:self.alldata
                                     }
                                     sessionStorage.setItem("sessionstorageshowdata",JSON.stringify(storageData));
                                     //const storageDatas=JSON.parse(sessionStorage.getItem('sessionstorageshowdata'));
                 
                                     //计算当前完成任务数以及百分比
                                     self.currentTotal = sumArr(self.alldata);
                                     self.percentage = GetPercent(self.currentTotal, self.total);
                                     
                                     //创建新数组用于装显示的数据段
                                     const mockData=new Array();                   
                                     for(let i = 0,len = self.alldata.length;i<len;i += self.xAxisShowNumber){
                                         //mockData.push(Math.floor(Math.random()*100)+200);
                                          mockData.push(self.alldata.slice(i,i+self.xAxisShowNumber));
                                     }  

                                     // 获得数据段对应的时间轴
                                     let XaxisData=new Array();
                                     const alldownyeardata=self.alldownyeartime;
                                     let num=self.alldata.length;
                                     //console.log("来自数据库条数："+num);
                                     XaxisData=alldownyeardata.slice(0,num); 
                                     let everyweekdata=new Array();  
                                     for(let i = 0,len = XaxisData.length;i<len;i += self.xAxisShowNumber){
                                          everyweekdata.push(XaxisData.slice(i,i+self.xAxisShowNumber));
                                     }     

                                    
                                     // 首次请求成功后，将显示数据组的长度写入cookie中
                                     // nowDate = new Date();
                                     // nowDate.setTime(nowDate.getTime() + (24 * 60 * 60 * 1000));     //1天过期
                                     // $.cookie("showmovingdataslen", mockData.length, {
                                     //      path: '/',                //cookie的作用域
                                     //      expires: nowDate
                                     // });

                                     const box=document.getElementById("box");
                                     const myChart=echarts.init(box,self.customStyle);
                                     const options={
                                            title:{
                                                  text:self.bigTit,
                                                  left:'center',
                                                  top:12,
                                                  textStyle:{
                                                    color:self.titColor,
                                                    fontSize:self.titSize
                                                  },
                                                  subtext:self.subTit,
                                                  subtextStyle:{
                                                    color:self.subtitColor,
                                                    fontSize:14
                                                  }
                                            },
                                            tooltip:{
                                               trigger:"axis",
                                               axisPointer:{
                                                  type:"cross",
                                                  label:{
                                                      backgroundColor:self.tooltipbackground
                                                  }
                                               }
                                            },
                                            xAxis:{
                                               show:true,
                                               type:'category',
                                               name:"日期",
                                               nameLocation:'end',
                                               nameTextStyle:{
                                                    color:self.axisColor,
                                                    fontSize:self.axisFontsize
                                                },
                                                axisLabel: {                    
                                                   show: true,                    
                                                   textStyle: {                        
                                                     color: self.axisColor,                                       
                                                     fontSize: self.axisFontsize
                                                   }                             
                                                },
                                                axisLine:{
                                                   lineStyle:{
                                                        color:self.this.axisColor,
                                                        width:self.axisWidthSize
                                                   }
                                                },
                                                //data:this.xAxisData
                                                data:everyweekdata[j]

                                            },
                                            yAxis:{
                                                show:true,
                                                min:0,
                                                max:self.yAxisMax,
                                                name:"单位：篇",
                                                nameTextStyle:{
                                                  color:self.axisColor,
                                                  fontSize:self.axisFontsize
                                                },
                                                axisLine:{
                                                  lineStyle:{
                                                     color:self.axisColor,
                                                     width:self.axisWidthSize
                                                  }

                                               },
                                               axisLabel: {                    
                                                   show: true,                    
                                                   textStyle: {                        
                                                     color: self.axisColor,                                       
                                                     fontSize: self.axisFontsize
                                                   }                             
                                                }
                                            },    
                                            grid:self.Grid,                 
                                            series:[{
                                                data:mockData[j],
                                                type:self.seriesType,
                                                smooth:true,
                                                areaStyle:{
                                                   color:self.series_area_color
                                                },
                                                lineStyle:{
                                                   width:self.series_area_line_size,
                                                   color:self.series_line_color
                                                },
                                                itemStyle:{
                                                    borderWidth:self.series_area_item_size,
                                                    color:self.series_item_color
                                                }                                              
                                            }],
                                      }
                                      myChart.setOption(options);   

                      },function(res){
                           console.log(res.status);
                      });


                       //用ajax请求数据
                       // $.ajax({
                       //          url:"/apply/readData",
                       //          dataType:'JSON',
                       //          type:'post',
                       //          async:true,
                       //          success:function(result){
                       //               this.everydays=(JSON.parse(result)).everydaynumbers;
                       //               let m5=this.everydays[4].five.d3.slice(13);
                       //               let m6=this.everydays[5].six.d3;
                       //               let m7=this.everydays[6].seven.d3;
                       //               let m8=this.everydays[7].eight.d3;
                       //               let m9=this.everydays[8].nine.d3;
                       //               let m10=this.everydays[9].ten.d3;
                       //               let m11=this.everydays[10].eleven.d3;
                       //               let m12=this.everydays[11].twelve.d3;
                       //               this.alldata = m5.concat(m6,m7,m8,m9,m10,m11,m12);  
                       //               // 用对象类型将请求到的数据写入本地存储中                           
                       //               let storageData={
                       //                    arrLen:Math.floor(this.alldata.length / shownumber),
                       //                    showData:this.alldata
                       //               }
                       //               sessionStorage.setItem("sessionstorageshowdata",JSON.stringify(storageData));
                       //               //const storageDatas=JSON.parse(sessionStorage.getItem('sessionstorageshowdata'));
                 
                       //               //计算当前完成任务数以及百分比
                       //               this.currentTotal = sumArr(this.alldata);
                       //               this.percentage = GetPercent(this.currentTotal, this.total);
                                     
                       //               //创建新数组用于装显示的数据段
                       //               const mockData=new Array();                   
                       //               for(let i = 0,len = this.alldata.length;i<len;i += this.xAxisShowNumber){
                       //                   //mockData.push(Math.floor(Math.random()*100)+200);
                       //                    mockData.push(this.alldata.slice(i,i+this.xAxisShowNumber));
                       //               }  

                       //               // 获得数据段对应的时间轴
                       //               let XaxisData=new Array();
                       //               const alldownyeardata=this.alldownyeartime;
                       //               let num=this.alldata.length;
                       //               //console.log("来自数据库条数："+num);
                       //               XaxisData=alldownyeardata.slice(0,num); 
                       //               let everyweekdata=new Array();  
                       //               for(let i = 0,len = XaxisData.length;i<len;i += this.xAxisShowNumber){
                       //                    everyweekdata.push(XaxisData.slice(i,i+this.xAxisShowNumber));
                       //               }     

                                    
                       //               // 首次请求成功后，将显示数据组的长度写入cookie中
                       //               // nowDate = new Date();
                       //               // nowDate.setTime(nowDate.getTime() + (24 * 60 * 60 * 1000));     //1天过期
                       //               // $.cookie("showmovingdataslen", mockData.length, {
                       //               //      path: '/',                //cookie的作用域
                       //               //      expires: nowDate
                       //               // });

                       //               const box=document.getElementById("box");
                       //               const myChart=echarts.init(box,this.customStyle);
                       //               const options={
                       //                      title:{
                       //                            text:this.bigTit,
                       //                            left:'center',
                       //                            top:12,
                       //                            textStyle:{
                       //                              color:this.titColor,
                       //                              fontSize:this.titSize
                       //                            },
                       //                            subtext:this.subTit,
                       //                            subtextStyle:{
                       //                              color:this.subtitColor,
                       //                              fontSize:14
                       //                            }
                       //                      },
                       //                      tooltip:{
                       //                         trigger:"axis",
                       //                         axisPointer:{
                       //                            type:"cross",
                       //                            label:{
                       //                                backgroundColor:this.tooltipbackground
                       //                            }
                       //                         }
                       //                      },
                       //                      xAxis:{
                       //                         show:true,
                       //                         type:'category',
                       //                         name:"日期",
                       //                         nameLocation:'end',
                       //                         nameTextStyle:{
                       //                              color:this.axisColor,
                       //                              fontSize:this.axisFontsize
                       //                          },
                       //                          axisLabel: {                    
                       //                             show: true,                    
                       //                             textStyle: {                        
                       //                               color: this.axisColor,                                       
                       //                               fontSize: this.axisFontsize
                       //                             }                             
                       //                          },
                       //                          axisLine:{
                       //                             lineStyle:{
                       //                                  color:this.this.axisColor,
                       //                                  width:this.axisWidthSize
                       //                             }
                       //                          },
                       //                          //data:this.xAxisData
                       //                          data:everyweekdata[j]

                       //                      },
                       //                      yAxis:{
                       //                          show:true,
                       //                          min:0,
                       //                          max:this.yAxisMax,
                       //                          name:"单位：篇",
                       //                          nameTextStyle:{
                       //                            color:this.axisColor,
                       //                            fontSize:this.axisFontsize
                       //                          },
                       //                          axisLine:{
                       //                            lineStyle:{
                       //                               color:this.axisColor,
                       //                               width:this.axisWidthSize
                       //                            }

                       //                         },
                       //                         axisLabel: {                    
                       //                             show: true,                    
                       //                             textStyle: {                        
                       //                               color: this.axisColor,                                       
                       //                               fontSize: this.axisFontsize
                       //                             }                             
                       //                          }
                       //                      },    
                       //                      grid:this.Grid,                 
                       //                      series:[{
                       //                          data:mockData[j],
                       //                          type:this.seriesType,
                       //                          smooth:true,
                       //                          areaStyle:{
                       //                             color:this.series_area_color
                       //                          },
                       //                          lineStyle:{
                       //                             width:this.series_area_line_size,
                       //                             color:this.series_line_color
                       //                          },
                       //                          itemStyle:{
                       //                              borderWidth:this.series_area_item_size,
                       //                              color:this.series_item_color
                       //                          }                                              
                       //                      }],
                       //                }
                       //                myChart.setOption(options);                       
                                   
                       //          }
                       // }); 
                  } 


             }else{
                 console.log("you brower not supper storage!");             
             } 

          }         
             
      },
      mounted(){      
           this.genChart();
           var task = setInterval(() => {
               let index=this.selectedIndex;
               index++;
               if(index>=this.circle.length){
                   index=0;
               }

               this.dataindex++;
               if(this.dataindex>this.arrlen){
                  this.dataindex=0;
               }

               this.change(index);

           },this.refreshTime);

      },
      created(){
          
          
      },
      destroyed(){
          if(this.task){
              clearInterval(this.task);
          }
      }
  });

  // 字符转化成数组
  // function stringToArray(arr){
  //       var tempArr=arr.split(',');
  //       var returnArr=new Array();
  //       var i,len=tempArr.length;
  //       for(i=0;i<len;i++){
  //           if(typeof (tempArr[0]*1)==='number'){
  //               returnArr.push(tempArr[i]*1);
  //           }else{
  //               returnArr.push(tempArr[i]);
  //           }
  //       }
  //       return returnArr;
  // }

  // 计算数组之和
  function sumArr(data){
        var sum=0;
        for(var i=0;i<data.length;i++){
                  sum+=data[i];
        }
        return sum;
  } 

  // 计算百分比
  function GetPercent(num, total) {
    // <param name="num">当前数</param>
    //<param name="total">总数</param>
    num = parseFloat(num);
    total = parseFloat(total);
    if (isNaN(num) || isNaN(total)) {
        return "-";
    }
    return total <= 0 ? "0%" : (Math.round(num / total * 10000) / 100.00)+"%";
}
