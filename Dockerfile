FROM nginx:latest

#設定済みのdefault.confを上書きコピー
COPY ./conf/default.conf /etc/nginx/conf.d/default.conf

#homepage関連ファイルをNginx上へコピー（個別のファイルアップロードは不要）
COPY ./src/ /usr/share/nginx/html/


CMD ["nginx", "-g", "daemon off;"]
