/**
 * File move script
 */
import os
import re
import shutil


flag = 0;
css_folder = "D:/xampp/htdocs/onedashboard/trunk/css/angular/";
js_folder = "D:/xampp/htdocs/onedashboard/trunk/js/angularjs/";
if(os.path.isdir(css_folder)==False):
 raise Exception('"'+css_folder+'" does not exits')
if(os.path.isdir(js_folder)==False):
 raise Exception('"'+js_folder+'" does not exits')

for filename in os.listdir("."):
 if(filename=="dist"):
  flag = 1;
  
if(flag==0):
 raise Exception('"dist" folder does not exists.')
 
 
for filename in os.listdir("./dist"):
 searchObj = re.search( r'(\.[a-zA-Z0-9]+)\.(js|css)', filename, re.M|re.I)
 if(searchObj):
   obj = re.sub(r'(\.[a-zA-Z0-9]+\.)(bundle)','.bundle',filename)
   print(obj);
   os.rename("./dist/"+filename, "./dist/"+obj);

for filename in os.listdir("./dist"):
 searchObj = re.search( r'(\.[a-zA-Z0-9]+)\.(js)', filename, re.M|re.I)
 if(searchObj):
   shutil.move("./dist/"+filename,js_folder+filename)
   print("Moved from ./dist/"+filename+" to "+js_folder+filename)
   #print(obj.group());
 searchObj = re.search( r'(\.[a-zA-Z0-9]+)\.(css)', filename, re.M|re.I)
 if(searchObj):
   shutil.move("./dist/"+filename,css_folder+filename)
   print("Moved from ./dist/"+filename+" to "+css_folder+filename)