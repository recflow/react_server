## 이 프로젝트를 사용하기 위해서는 

+ /server/config 폴더에 아래와 같은 config.json을 추가해야합니다.   
```json
{
  "db_info": {
    "LOCALHOST": "AWS_RDS_엔드포인트",
    "PORT": "AWS_RDS_포트",
    "USER": "AWS_RDS_마스터_사용자_이름",
    "PASSWORD": "AWS_RDS_마스터_사용자_비밀번호",
    "DATABASE": "AWS_RDS_DB_식별자"
  }
}
```
+ 이 방법을 사용한 이유   
: .env 파일을 인식하지 못함.. 이유가 뭘까?

+ 추가 해야할 것   
[X] node server.js 명령 없이 서버도 바로 실행되도록 할 것.

* 추가한 모듈   
  - express: 서버 모듈 / http 모듈보다 더 많은 기능이 있다. 
  - mysql: 데이터베이스 모듈
  - axios: HTTP request 모듈
  - npm-run-all: 서버와 화면 소스를 동시에 실행시키는 모듈
  - nodemon: server가 변경되면 바로바로 적용되도록 하는 모듈