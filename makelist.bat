@echo off > nul
::del old file
IF EXIST .curselist.txt (
del .curselist.txt
echo #Removed old file list 
echo ^> .curselist.txt
TIMEOUT /NOBREAK /T 0 > nul
)
::

:::  
:::   __  __           _                       _    ____                                    ____            _        
:::  |  \/  | ___   __| |___    __ _ _ __   __| |  |  _ \ ___  ___  ___  _   _ _ __ ___ ___|  _ \ __ _  ___| | _____ 
:::  | |\/| |/ _ \ / _` / __|  / _` | '_ \ / _` |  | |_) / _ \/ __|/ _ \| | | | '__/ __/ _ \ |_) / _` |/ __| |/ / __|
:::  | |  | | (_) | (_| \__ \ | (_| | | | | (_| |  |  _ <  __/\__ \ (_) | |_| | | | (_|  __/  __/ (_| | (__|   <\__ \
:::  |_|  |_|\___/ \__,_|___/  \__,_|_| |_|\__,_|  |_| \_\___||___/\___/ \__,_|_|  \___\___|_|   \__,_|\___|_|\_\___/
:::  

for /f "delims=: tokens=*" %%A in ('findstr /b ::: "%~f0"') do @echo(%%A >> .curselist.txt

echo File that contain all curseforge files >> .curselist.txt


::mod folder
echo #Starting on writing mods
echo Mod used: >> .curselist.txt
set cnt=0
FOR /f %%f IN ('dir /b mods\') DO (

echo -%%f >> .curselist.txt

echo ^> %%f
TIMEOUT /NOBREAK /T 0 > nul
set /a cnt+=1
)
echo #
echo # %cnt% files
echo #
echo # >> .curselist.txt
echo # %cnt% files >> .curselist.txt
echo # >> .curselist.txt
::

::resourcepack folder
cd resourcepacks
IF EXIST "Quark Programmer Art.zip" (
del "Quark Programmer Art.zip" > nul
echo #Removed quark resourcepack
echo ^> "Quark Programmer Art.zip"
TIMEOUT /NOBREAK /T 0 > nul
)
cd ..

TIMEOUT /NOBREAK /T 1 > nul
echo #Starting on writing resourcepacks
echo ResourcePack used: >> .curselist.txt
set cnt=0
FOR /f %%f IN ('dir /b resourcepacks') DO (

echo %%f >> .curselist.txt

echo ^> %%f
TIMEOUT /NOBREAK /T 0 > nul
set /a cnt+=1
)
echo #
echo # %cnt% files
echo #
echo # >> .curselist.txt
echo # %cnt% files >> .curselist.txt
echo # >> .curselist.txt
::


echo #File Completed with Success!
TIMEOUT /NOBREAK /T 5 > nul

