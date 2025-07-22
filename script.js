var sid=parseInt(prompt("enter the id"));
 var sname=prompt("enter the name");
 var m1=parseInt(prompt("enter the m1"));
 var m2=parseInt(prompt("enter the m2"));
 var m3=parseInt(prompt("enter the m3"));
 var m4=parseInt(prompt("enter the m4"));
 var m5=parseInt(prompt("enter the m5"));
 var total=m1+m2+m3+m4+m5;
 var average=(total*100)/500.0;
 var grade="";
        
 if(average>=90)
       {
      grade = "A+";
       }
 else if((average>=80) &&(average<89))
       {
    grade = "A";
       }
 else if((average>=70) &&(average<79))
       {
     grade = "B";
      }
 else if((average>=60) &&(average<69))
       {
     grade = "C";
      }
else if((average>=50) &&(average<59))
      {
    grade = "D";

      }
else
     {
    grade = "F";
     }

alert("SID=:"+sid+"\nSName=:"+sname+"\nTotal=:"+total+"\nAverage=:"+average+"\nGrade=:"+grade);
       
       
        