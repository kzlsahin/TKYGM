echo "running compile_jsx_files.bat"
set projDir=%1%node_modules\.bin\babel
set out=%1%ITDK_app\js
set src=%1%ITDK_app\JSX
echo "to"
echo %out%
echo "from"
echo %src%

echo %projDir%
%projDir% %src% --out-dir %out%