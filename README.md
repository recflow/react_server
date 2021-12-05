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
node server.js 명령 없이 서버도 바로 실행되도록 할 것.
