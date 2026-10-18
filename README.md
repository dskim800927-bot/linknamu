# 링크나무

내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하는 서비스입니다.

## 시작하기

```bash
npm install
cp .env.local.example .env.local   # MONGODB_URI 입력
npm run dev
```

http://localhost:3000 에서 확인하세요.

## 내 정보 바꾸기

- 프로필/링크: `src/data/profile.ts`
- 프로필 사진: `public/`에 이미지를 넣고 `profile.image` 경로 수정

## 클릭 수 집계

- `POST /api/clicks` `{ "id": "instagram" }` → 해당 링크 클릭 수 +1
- `GET /api/clicks` → `{ "counts": { "instagram": 3 } }`
- MongoDB `linknamu.clicks` 컬렉션에 저장됩니다. `MONGODB_URI`가 없으면 집계 없이 페이지만 동작합니다.

## 배포 (Vercel)

Vercel 프로젝트 환경 변수에 `MONGODB_URI`(필요 시 `MONGODB_DB`)를 등록한 뒤 배포하세요.
