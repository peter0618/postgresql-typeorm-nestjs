# Description
로컬 개발환경 구축을 위한 데이터베이스 docker container 를 생성합니다.

## 1. docker 네트워크 생성
pgadmin 과 postgresql 를 한 네트워크에서 서로 통신하게 하기 위하여 network 를 생성합니다.<br>
(pgadmin 말고 다른 tool 을 사용한다면 이 부분을 skip 해도 됩니다.)
```bash
> docker network create databases
```

## 2. 컨테이너 생성

### 1) .env.postgres
docker 폴더 안에 위 파일을 생성하고 아래 변수들을 설정합니다.

| Name                          | Description                                                        | Required |
| ----------------------------- | ------------------------------------------------------------------ | :------: |
| DB_USER_ID                    | 데이터 베이스 접속 아이디                                                 |   true   |
| DB_USER_PASSWORD              | 데이터 베이스 접속 비밀번호                                                |   true   |
| POSTGRES_HOME_DIR             | 데이터 베이스 볼륨 마운트할 home 디렉터리                                     |   true   |

### 2) docker-compose 명령어로 컨테이너 생성
```bash
# docker-compose 를 통해 컨테이너를 생성하기 전에 docker-compose 에 환경변수 값이 잘 셋팅되는 지 확인합니다.
> docker-compose -f docker-compose-postgres-with-pgadmin.yml --env-file ./.env.postgres config

# 위 명령어 실행 결과 아무런 warning 이 없다면 아래 명령어를 실행하여 컨테이너를 생성합니다.
> docker-compose -f docker-compose-postgres-with-pgadmin.yml --env-file ./.env.postgres up -d 
```

## 3. 기타
pgadmin 을 설치하지 않고 datagrip 등의 다른 tool 을 이용한다면 docker-compose 파일에서 pgadmin 부분 및 network 설정 부분만 제거해서 사용해도 됩니다.