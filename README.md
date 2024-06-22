## 練習使用 useSWR 的範例

### 預計項目

- [x] 測試呼叫 API
- [ ] 使用 Axios 作為攔截器，並加入 Authenticate Header 與攔截錯誤
- [ ] 練習 useSWR 的 Cache 功能
- [ ] 依照環境變數切換 baseURL
- [ ] 了解 SWR Config


ref : https://chatgpt.com/share/cc0ca1b2-2c3d-4778-8c3d-902f17173f4a

## Learning Note

1. 使用 useSWR 會回傳 `data`、`isLoading`、`isValidating`、`error`、`mutate`。
   
   特別介紹 `isLoading`、`isValidating` 這兩個很像，但有些微的不同，`isLoading` 只會在 初次 載入畫面時出發，一旦載入資料完成後，後續不論如何觸發變更資料(ex: `mutate`)，`isLoading` 都不會再次觸發

2. 在瀏覽器在不同的 tab 開啟同樣的網頁時，**每次點擊不同畫面**都會出發資料重新驗證，所以 `isValidating` 會隨著使用著與網頁的互動不斷的更新資料，但也可以透過 `config` 做調整不驗證資料