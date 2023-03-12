function home(){
    window.location="index.html";
}
function length(){
     window.location="length.html"; 
}
function mass()
{
    window.location="mass.html";
}
function temp(){
    window.location="temp.html";
}
function time(){
    window.location="time.html";
}
function l(){
let linput= document.getElementById('linput');
var lresult= document.getElementById('lresult');
var linputType = document.getElementById('linput-type');
var lresultType = document.getElementById('lresult-type');
var linputTypeValue,lresultTypeValue;
linput.addEventListener('keyup',myResult);
linputType.addEventListener("change",myResult);
lresultType.addEventListener("change",myResult);
linputTypeValue =  linputType.value;
lresultTypeValue = lresultType.value;
function myResult(){
    linputTypeValue =  linputType.value;
    lresultTypeValue = lresultType.value;

     if(linputTypeValue==='meter'&& lresultTypeValue==='millimeter'){
        lresult.value= Number(linput.value)*1000;
     }
      else if(linputTypeValue==='meter'&& lresultTypeValue==='centimeter'){
        lresult.value= Number(linput.value)*100;
     }
     else if(linputTypeValue==='meter'&& lresultTypeValue==='kilometer'){
       lresult.value= Number(linput.value)*0.001;
     }
     else if(linputTypeValue==='meter'&& lresultTypeValue==='meter'){
        lresult.value= Number(linput.value);
     }
     else if(linputTypeValue==='meter'&& lresultTypeValue==='yard'){
        lresult.value= Number(linput.value)*1.093;
     }
     else if(linputTypeValue==='meter'&& lresultTypeValue==='mile'){
        lresult.value= Number(linput.value)*0.000621;
     }



     if(linputTypeValue==='kilometer'&& lresultTypeValue==='millimeter'){
        lresult.value= Number(linput.value)*1000*1000;
     }
      else if(linputTypeValue==='kilometer'&& lresultTypeValue==='centimeter'){
        lresult.value= Number(linput.value)*1000*100;
     }
     else if(linputTypeValue==='kilometer'&& lresultTypeValue==='kilometer'){
        lresult.value= Number(linput.value);
     }
     else if(linputTypeValue==='kilometer'&& lresultTypeValue==='meter'){
        lresult.value= Number(linput.value)*1000;
     }
     else if(linputTypeValue==='kilometer'&& lresultTypeValue==='yard'){
        lresult.value= Number(linput.value)*1093.61;
     }
     else if(linputTypeValue==='kilometer'&& lresultTypeValue==='mile'){
        lresult.value= Number(linput.value)/1.6093;
     }
    

     if(linputTypeValue==='centimeter'&& lresultTypeValue==='millimeter'){
        lresult.value= Number(linput.value)*10;
     }
      else if(linputTypeValue==='centimeter'&& lresultTypeValue==='centimeter'){
        lresult.value= Number(linput.value);
     }
     else if(linputTypeValue==='centimeter'&& lresultTypeValue==='kilometer'){
        lresult.value= Number(linput.value)*0.001*0.01;
     }
     else if(linputTypeValue==='centimeter'&& lresultTypeValue==='meter'){
        lresult.value= Number(linput.value)*0.01;
     }
     else if(linputTypeValue==='centimeter'&& lresultTypeValue==='yard'){
        lresult.value= Number(linput.value)*0.010936133;
     }
     else if(linputTypeValue==='centimeter'&& lresultTypeValue==='mile'){
        lresult.value= (Number(linput.value)*0.0000062137);
     }

     if(linputTypeValue==='millimeter'&& lresultTypeValue==='millimeter'){
        lresult.value= Number(linput.value);
     }
      else if(linputTypeValue==='millimeter'&& lresultTypeValue==='centimeter'){
        lresult.value= Number(linput.value)*0.1;
     }
     else if(linputTypeValue==='millimeter'&& lresultTypeValue==='kilometer'){
        lresult.value= Number(linput.value)*0.1*0.01*0.001;
     }
     else if(linputTypeValue==='millimeter'&& lresultTypeValue==='meter'){
        lresult.value= Number(linput.value)*0.1*0.01;
     }
     else if(linputTypeValue==='millimeter'&& lresultTypeValue==='yard'){
        lresult.value= Number(linput.value)*0.0010936133;
     }
     else if(linputTypeValue==='millimeter'&& lresultTypeValue==='mile'){
        lresult.value= (Number(linput.value)*6.213711922E-7);
     }


     if(linputTypeValue==='yard'&& lresultTypeValue==='millimeter'){
        lresult.value=( Number(linput.value)*914.4);
     }
     else if(linputTypeValue==='yard'&& lresultTypeValue==='mile'){
        lresult.value= Number(linput.value)*0.00056;
     }
     else if(linputTypeValue==='yard'&& lresultTypeValue==='centimeter'){
        lresult.value= ( Number(linput.value)*191.44);
     }
     else if(linputTypeValue==='yard'&& lresultTypeValue==='kilometer'){
        lresult.value=( Number(linput.value))*0.0009144;
     }
     else if(linputTypeValue==='yard'&& lresultTypeValue==='meter'){
        lresult.value= ( Number(linput.value)*0.9144);
     }
     else if(linputTypeValue==='yard'&& lresultTypeValue==='yard'){
        lresult.value= Number(linput.value);
     }


     if(linputTypeValue==='mile'&& lresultTypeValue==='millimeter'){
        lresult.value= Number(linput.value)*1609344;
     }
     else if(linputTypeValue==='mile'&& lresultTypeValue==='yard'){
        lresult.value= Number(linput.value)*1760;
     }
     else if(linputTypeValue==='mile'&& lresultTypeValue==='meter'){
        lresult.value= Number(linput.value)*1609.344;
     }
     else if(linputTypeValue==='mile'&& lresultTypeValue==='kilometer'){
        lresult.value= Number(linput.value)*1.609344;
     }
     else if(linputTypeValue==='mile'&& lresultTypeValue==='millimeter'){
        lresult.value= Number(linput.value)*1609344;
     }
     else if(linputTypeValue==='mile'&& lresultTypeValue==='centimeter'){
        lresult.value= Number(linput.value)*160934.4;
     }



}}
function m(){
let minput= document.getElementById('minput');
var mresult= document.getElementById('mresult');
var minputType = document.getElementById('minput-type');
var mresultType = document.getElementById('mresult-type');
var minputTypeValue,mresultTypeValue;

minput.addEventListener('keyup',myResult);
minputType.addEventListener("change",myResult);
mresultType.addEventListener("change",myResult);

minputTypeValue =  minputType.value;
mresultTypeValue = mresultType.value;


function myResult(){
    
    minputTypeValue =  minputType.value;
    mresultTypeValue = mresultType.value;

     if(minputTypeValue==='gram'&& mresultTypeValue==='milligram'){
        mresult.value= Number(minput.value)*1000;
     }
      else if(minputTypeValue==='gram'&& mresultTypeValue==='centigram'){
        mresult.value= Number(minput.value)*100;
     }
     else if(minputTypeValue==='gram'&& mresultTypeValue==='kilogram'){
        mresult.value= Number(minput.value)*0.001;
     }
     else if(minputTypeValue==='gram'&& mresultTypeValue==='gram'){
        mresult.value= Number(minput.value);
     }



     if(minputTypeValue==='kilometer'&& mresultTypeValue==='milligram'){
        mresult.value= Number(minput.value)*1000*1000;
     }
      else if(minputTypeValue==='kilogram'&& mresultTypeValue==='centigram'){
        mresult.value= Number(minput.value)*1000*100;
     }
     else if(minputTypeValue==='kilogram'&& mresultTypeValue==='kilogram'){
        mresult.value= Number(minput.value);
     }
     else if(minputTypeValue==='kilogram'&& mresultTypeValue==='gram'){
        mresult.value= Number(minput.value)*1000;
     }
    

     if(minputTypeValue==='centigram'&& mresultTypeValue==='milligram'){
        mresult.value= Number(minput.value)*10;
     }
      else if(minputTypeValue==='centigram'&& mresultTypeValue==='centigram'){
        mresult.value= Number(minput.value);
     }
     else if(minputTypeValue==='centigram'&& mresultTypeValue==='kilogram'){
        mresult.value= Number(minput.value)*0.001*0.01;
     }
     else if(minputTypeValue==='centigram'&& mresultTypeValue==='gram'){
        mresult.value= Number(minput.value)*0.01;
     }

     if(minputTypeValue==='milligram'&& mresultTypeValue==='milligram'){
        mresult.value= Number(minput.value);
     }
      else if(minputTypeValue==='milligram'&& mresultTypeValue==='centigram'){
        mresult.value= Number(minput.value)*0.1;
     }
     else if(minputTypeValue==='milligram'&& mresultTypeValue==='kilogram'){
        mresult.value= Number(minput.value)*0.1*0.01*0.001;
     }
     else if(minputTypeValue==='milligram'&& mresultTypeValue==='gram'){
        mresult.value= Number(minput.value)*0.1*0.01;
     }
}}
function t(){
let tinput= document.getElementById('tinput');
var tresult= document.getElementById('tresult');
var tinputType = document.getElementById('tinput-type');
var tresultType = document.getElementById('tresult-type');
var tinputTypeValue,tresultTypeValue;

tinput.addEventListener('keyup',myResult);
tinputType.addEventListener("change",myResult);
tresultType.addEventListener("change",myResult);

tinputTypeValue =  tinputType.value;
tresultTypeValue = tresultType.value;


function myResult(){
    
    tinputTypeValue =  tinputType.value;
    tresultTypeValue = tresultType.value;

     if(tinputTypeValue==='far'&& tresultTypeValue==='kel'){
        tresult.value= ((Number(tinput.value)-32)/1.8) +273.15;
     }
      else if(tinputTypeValue==='far'&& tresultTypeValue==='far'){
        tresult.value= Number(tinput.value);
     }
     else if(tinputTypeValue==='far'&& tresultTypeValue==='cel'){
        tresult.value= (Number(tinput.value)-32)*(5/9);
     }



     if(tinputTypeValue==='cel'&& tresultTypeValue==='far'){
        tresult.value=(Number(tinput.value)*1.8 )+ 32;
     }
      else if(tinputTypeValue==='cel'&& tresultTypeValue==='cel'){
        tresult.value= Number(tinput.value);
     }
     else if(tinputTypeValue==='cel'&& tresultTypeValue==='kel'){
        tresult.value= Number(tinput.value)+273.15;
     }
    

     if(tinputTypeValue==='kel'&& tresultTypeValue==='cel'){
        tresult.value= Number(tinput.value)-273.15;
     }
      else if(tinputTypeValue==='kel'&& tresultTypeValue==='far'){
        tresult.value=(( Number(tinput.value)-273.15)*1.8)+32;
     }
     else if(tinputTypeValue==='kel'&& tresultTypeValue==='kel'){
        tresult.value= Number(tinput.value);
     }
     
}}
function ti(){
let tiinput= document.getElementById('tiinput');
var tiresult= document.getElementById('tiresult');
var tiinputType = document.getElementById('tiinput-type');
var tiresultType = document.getElementById('tiresult-type');
var tiinputTypeValue,tiresultTypeValue;

tiinput.addEventListener('keyup',myResult);
tiinputType.addEventListener("change",myResult);
tiresultType.addEventListener("change",myResult);

tiinputTypeValue =  tiinputType.value;
tiresultTypeValue = tiresultType.value;


function myResult(){
    
    tiinputTypeValue =  tiinputType.value;
    tiresultTypeValue = tiresultType.value;


     if(tiinputTypeValue==='second'&& tiresultTypeValue==='second'){
        tiresult.value= Number(tiinput.value);
     }
     else if(tiinputTypeValue==='second'&& tiresultTypeValue==='hour'){
        tiresult.value= Number(tiinput.value)*0.0002777778;
     }else if(tiinputTypeValue==='second'&& tiresultTypeValue==='minute'){
        tiresult.value= Number(tiinput.value)/60;
     }else if(tiinputTypeValue==='second'&& tiresultTypeValue==='week'){
        tiresult.value= Number(tiinput.value)*0.0000016534;
     }else if(tiinputTypeValue==='second'&& tiresultTypeValue==='day'){
        tiresult.value= Number(tiinput.value)*0.0000115741;
     }
     else if(tiinputTypeValue==='second'&& tiresultTypeValue==='year'){
        tiresult.value= Number(tiinput.value)*3.168808781E-8;
     }
     else if(tiinputTypeValue==='second'&& tiresultTypeValue==='month'){
        tiresult.value= Number(tiinput.value)*3.805175038E-7;
     }




      if(tiinputTypeValue==='day'&& tiresultTypeValue==='day'){
        tiresult.value= Number(tiinput.value);
     }
     else if(tiinputTypeValue==='day'&& tiresultTypeValue==='second'){
        tiresult.value= Number(tiinput.value)*86400;
     }
     else if(tiinputTypeValue==='day'&& tiresultTypeValue==='hour'){
        tiresult.value= Number(tiinput.value)*24;
     }
     else if(tiinputTypeValue==='day'&& tiresultTypeValue==='month'){
        tiresult.value= Number(tiinput.value)*0.0328767123;
     }
     else if(tiinputTypeValue==='day'&& tiresultTypeValue==='year'){
        tiresult.value= Number(tiinput.value)*0.0027378508;
     }
     else if(tiinputTypeValue==='day'&& tiresultTypeValue==='minute'){
        tiresult.value= Number(tiinput.value)*1440;
     }
     else if(tiinputTypeValue==='day'&& tiresultTypeValue==='week'){
        tiresult.value= Number(tiinput.value)/7;
     }



     if(tiinputTypeValue==='day'&& tiresultTypeValue==='day'){
        tiresult.value= Number(tiinput.value);
     }
     else if(tiinputTypeValue==='day'&& tiresultTypeValue==='second'){
        tiresult.value= Number(tiinput.value)*86400;
     }
     else if(tiinputTypeValue==='day'&& tiresultTypeValue==='hour'){
        tiresult.value= Number(tiinput.value)*24;
     }
     else if(tiinputTypeValue==='day'&& tiresultTypeValue==='month'){
        tiresult.value= Number(tiinput.value)*0.0328767123;
     }
     else if(tiinputTypeValue==='day'&& tiresultTypeValue==='year'){
        tiresult.value= Number(tiinput.value)*0.0027378508;
     }
     else if(tiinputTypeValue==='day'&& tiresultTypeValue==='minute'){
        tiresult.value= Number(tiinput.value)*1440;
     }
     else if(tiinputTypeValue==='day'&& tiresultTypeValue==='week'){
        tiresult.value= Number(tiinput.value)/7;
     }



     if(tiinputTypeValue==='minute'&& tiresultTypeValue==='day'){
        tiresult.value= Number(tiinput.value);
     }
     else if(tiinputTypeValue==='minute'&& tiresultTypeValue==='second'){
        tiresult.value= Number(tiinput.value)*60;
     }
     else if(tiinputTypeValue==='minute'&& tiresultTypeValue==='hour'){
        tiresult.value= Number(tiinput.value)/60;
     }
     else if(tiinputTypeValue==='minute'&& tiresultTypeValue==='month'){
        tiresult.value= Number(tiinput.value)*0.0000228311;
     }
     else if(tiinputTypeValue==='minute'&& tiresultTypeValue==='year'){
        tiresult.value= Number(tiinput.value)*0.0000019013;
     }
     else if(tiinputTypeValue==='minute'&& tiresultTypeValue==='minute'){
        tiresult.value= Number(tiinput.value);
     }
     else if(tiinputTypeValue==='minute'&& tiresultTypeValue==='week'){
        tiresult.value= Number(tiinput.value)*0.0000992063;
     }
    

     if(tiinputTypeValue==='hour'&& tiresultTypeValue==='day'){
        tiresult.value= Number(tiinput.value)*24;
     }
     else if(tiinputTypeValue==='hour'&& tiresultTypeValue==='second'){
        tiresult.value= Number(tiinput.value)*60*60;
     }
     else if(tiinputTypeValue==='hour'&& tiresultTypeValue==='hour'){
        tiresult.value= Number(tiinput.value);
     }
     else if(tiinputTypeValue==='hour'&& tiresultTypeValue==='month'){
        tiresult.value= Number(tiinput.value)*0.001369863;
     }
     else if(tiinputTypeValue==='hour'&& tiresultTypeValue==='year'){
        tiresult.value= Number(tiinput.value)*0.0001140771;
     }
     else if(tiinputTypeValue==='hour'&& tiresultTypeValue==='minute'){
        tiresult.value= Number(tiinput.value)*60;
     }
     else if(tiinputTypeValue==='hour'&& tiresultTypeValue==='week'){
        tiresult.value= Number(tiinput.value)*0.005952381;
     }


     if(tiinputTypeValue==='week'&& tiresultTypeValue==='day'){
        tiresult.value= Number(tiinput.value)*7;
     }
     else if(tiinputTypeValue==='week'&& tiresultTypeValue==='second'){
        tiresult.value= Number(tiinput.value)*604800;
     }
     else if(tiinputTypeValue==='week'&& tiresultTypeValue==='hour'){
        tiresult.value= Number(tiinput.value)*168;
     }
     else if(tiinputTypeValue==='week'&& tiresultTypeValue==='month'){
        tiresult.value= Number(tiinput.value)*0.2301369863;
     }
     else if(tiinputTypeValue==='week'&& tiresultTypeValue==='year'){
        tiresult.value= Number(tiinput.value)*0.01916;
     }
     else if(tiinputTypeValue==='week'&& tiresultTypeValue==='minute'){
        tiresult.value= Number(tiinput.value)*10080;
     }
     else if(tiinputTypeValue==='week'&& tiresultTypeValue==='week'){
        tiresult.value= Number(tiinput.value);
     }


     if(tiinputTypeValue==='month'&& tiresultTypeValue==='day'){
        tiresult.value= Number(tiinput.value)*30.41;
     }
     else if(tiinputTypeValue==='month'&& tiresultTypeValue==='second'){
        tiresult.value= Number(tiinput.value)*2628000;
     }
     else if(tiinputTypeValue==='month'&& tiresultTypeValue==='hour'){
        tiresult.value= Number(tiinput.value)*730;
     }
     else if(tiinputTypeValue==='month'&& tiresultTypeValue==='month'){
        tiresult.value= Number(tiinput.value);
     }
     else if(tiinputTypeValue==='month'&& tiresultTypeValue==='year'){
        tiresult.value= Number(tiinput.value)*0.08327;
     }
     else if(tiinputTypeValue==='month'&& tiresultTypeValue==='minute'){
        tiresult.value= Number(tiinput.value)*43800;
     }
     else if(tiinputTypeValue==='month'&& tiresultTypeValue==='week'){
        tiresult.value= Number(tiinput.value)*4.345;
     }


     if(tiinputTypeValue==='year'&& tiresultTypeValue==='day'){
        tiresult.value= Number(tiinput.value)*365.25;
     }
     else if(tiinputTypeValue==='year'&& tiresultTypeValue==='second'){
        tiresult.value= Number(tiinput.value)*31557600;
     }
     else if(tiinputTypeValue==='year'&& tiresultTypeValue==='hour'){
        tiresult.value= Number(tiinput.value)*8766;
     }
     else if(tiinputTypeValue==='year'&& tiresultTypeValue==='month'){
        tiresult.value= Number(tiinput.value)*12;
     }
     else if(tiinputTypeValue==='year'&& tiresultTypeValue==='year'){
        tiresult.value= Number(tiinput.value);
     }
     else if(tiinputTypeValue==='year'&& tiresultTypeValue==='minute'){
        tiresult.value= Number(tiinput.value)*525960;
     }
     else if(tiinputTypeValue==='year'&& tiresultTypeValue==='week'){
        tiresult.value= Number(tiinput.value)*52.17;
     }

    
}}
