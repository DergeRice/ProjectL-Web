# ProjectL-Web

원룸스튜디오 / 프로젝트 마키나 공식 홈페이지 (`www.orstudios.net`).
기존 Google Sites를 GitHub Pages 정적 사이트로 옮긴 것입니다. 빌드 도구 없이 HTML/CSS만 사용합니다.

## 구조

| 경로 | 내용 |
| --- | --- |
| `index.html` | HOME |
| `home/` | 옛 주소 `/home` → `/` 리다이렉트 |
| `game/`, `introduce/`, `about/`, `journey/` | 각 메뉴 페이지 |
| `download/` | 스토어 다운로드 페이지 (외부 링크로 들어온 Android는 Google Play로 자동 이동. iOS 출시 시 App Store 버튼 활성화 필요) |
| `more/` | 계정 삭제 안내 + 약관 목록 |
| `more/<한글-슬러그>/` | 약관·개인정보 문서 (Google Sites 시절 URL 그대로 유지 — 스토어/앱에 등록된 링크가 깨지지 않도록 **경로 변경 금지**) |
| `assets/style.css` | 공통 스타일 |
| `assets/img/` | 이미지 (WebP, 최대 너비 1920px) |
| `CNAME` | 커스텀 도메인 |

헤더/푸터는 각 HTML에 복사되어 있습니다. 메뉴를 바꿀 때는 모든 `index.html`을 함께 수정하세요.

## 수정 방법

- 약관 문구 수정: `more/<문서>/index.html`의 `<article class="doc">` 안을 수정
- 이미지 교체: 같은 파일명으로 `assets/img/`에 덮어쓰기 (WebP 권장, 크기가 바뀌면 `<img>`의 `width`/`height`도 수정)
- 캐릭터 추가: `introduce/index.html`의 `.track` 안에 `<img>` 한 줄 추가 (점 내비게이션은 자동 생성)

## 로컬 미리보기

```sh
npx serve .
```

## 배포

`main` 브랜치에 push하면 GitHub Pages가 자동 반영합니다 (Settings → Pages → Branch: `main` / `(root)`).
