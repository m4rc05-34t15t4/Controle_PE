@echo off
set FileList=C:\Marcos_Batista\PostGis\BACKUP_servidor\nomes.txt
cls
echo off
cls
cd C:\Marcos_Batista\PostGis\BACKUP_servidor
for /F "delims=" %%a in ('type "%FileList%"') do fart.exe C:\Marcos_Batista\PostGis\BACKUP_servidor\%%a.sql "pt_BR.UTF-8" "Portuguese_Brazil.1252"




echo %%a
:Exit

echo press the Space Bar to close this window.
pause > nul
