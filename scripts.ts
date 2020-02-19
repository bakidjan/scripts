#An unhandled exception occurred: Invalid or unexpected token
#See "C:\Users\Bakidjan\AppData\Local\Temp\ng-FFMZEl\angular-errors.log" for further details

rmdir /s node_modules
rmdir /s dist
npm install --save-dev @angular/cli@latest
npm install
ng update


# Comment effacer .m2/repository
1. C:\Program Files\Apache Software Foundation\apache-maven-3.6.3\conf
modifier le fichier "settings.xml"
modifier le :
   | Default: ${user.home}/.m2/repository
   |<localRepository>/path/to/local/repo</localRepository>

    
   en 

"C:/Program Files/.m2/repository" par exemple, 
  
  ouvert un terminal en superUser 
  créer un folder
  se placer dedans et executer "mvn archetype:generate"
  donner archetyId : com.diallo par exemple
  donner le package
  select with proposed number for mvn archetype : 7 for exemple to mwv-archetype-webapp
  supprimer le default "/.m2/repository" et hope
