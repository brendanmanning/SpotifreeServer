osascript -e 'tell application "Terminal" to do script "node src/index.js"'
osascript -e 'tell application "Terminal" to do script "cd ' $0 '/web; python -m SimpleHTTPServer 7000"'
osascript -e 'tell application "Terminal" to do script "cd ' $0 '/data/music; python -m SimpleHTTPServer 8000"'