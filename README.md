## 練習使用 useSWR 的範例

### 預計項目

- [x] 測試呼叫 API
- [ ] 使用 Axios 作為攔截器，並加入 Authenticate Header 與攔截錯誤
- [ ] 練習 useSWR 的 Cache 功能
- [ ] 依照環境變數切換 baseURL
- [ ] 了解 SWR Config

ref : https://chatgpt.com/share/cc0ca1b2-2c3d-4778-8c3d-902f17173f4a

## useSWR Learning Note

1. useSWR 可以傳入三個參數(`key`，`fetcher`，`options`)，其中只有 `key` 是必填，也是辨別是否需要重新呼叫 API 取得資料的的參數

   `key` 可以是 `string`，`array`，`function`，`object`，要用什麼型態傳值取決 `fetcher`

   ``` ts
   useSWR('/api/user', fetcher)

   useSWR(['/api/user', token], ([url, token]) => fetchWithToken(url, token))

   useSWR('/api/user', url => fetcher(url))   
   ```


2. 使用 useSWR 會回傳 `data`、`isLoading`、`isValidating`、`error`、`mutate`。

   特別介紹 `isLoading`、`isValidating` 這兩個很像，但有些微的不同，`isLoading` 只會在 初次 載入畫面時出發，一旦載入資料完成後，後續不論如何觸發變更資料(ex: `mutate`)，`isLoading` 都不會再次觸發

3. 在瀏覽器在不同的 tab 開啟同樣的網頁時，**每次點擊不同畫面**都會出發資料重新驗證，所以 `isValidating` 會隨著使用著與網頁的互動不斷的更新資料，但也可以透過 `config` 做調整不驗證資料


## Other Learning Note

### 舊的做法
在實作本機錯誤偵測的時候，順便練習了 React 中的 ErrorBoundary 機制

因為 React 預設在遇到錯誤的時候會移除所有畫面上的 UI，因此這個機制可以幫開發人員顯示錯誤資訊，提高偵錯效率

目前官網上只有提供 Class Component 的方式，可以參考[這邊](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)

文中提到在元件發生錯誤的時候會呼叫兩個函式，getDerivedStateFromError、componentDidCatch

* getDerivedStateFromError：在子元件渲染的時候如果發生錯誤，就會呼叫這個函式，讓開發人員可以自定義錯誤訊息格式


* componentDidCatch：在子元件渲染的時候如果發生錯誤，就會呼叫這個函式，但此函式適用於如果發生錯誤的時候有沒有要做甚麼額外的處理，譬如紀錄 log

接下來就可以在 render() 處理錯誤發生時要如何渲染畫面，如下圖

![errorBoundaryByCustom](/doc-imgs/errorBoundaryByCustom.png)


### 新作法

官網有提到可以使用 [react-error-boundary 套件](https://github.com/bvaughn/react-error-boundary)，應該可以解決大部分的問題

[文章](https://github.com/bvaughn/react-error-boundary)也提供的各式各樣處理錯誤的方法，真的非常方便

光式顯示錯誤訊息在畫面上就有三種

1. `fallback`：最簡單的方式，僅用於單純顯示錯誤訊息，無法取得 props 做動態的顯示

2. `fallbackRender` 和 `FallbackComponent` 可以比較彈性的動態操作錯誤訊息
   
   兩者的使用方式一模一樣，差異可以看 [source code](https://github.com/bvaughn/react-error-boundary/blob/master/src/ErrorBoundary.ts#L80)

   `fallbackRender` 式直接呼叫傳入的 function，`FallbackComponent` 則是重新建立一個新的 element，不確定哪一種會比較合適，但結果是一樣的

   ![errorBoundaryByPackage](/doc-imgs/errorBoundaryByPackage.png)

套件還提供了一個 Hook，`useErrorBoundary`，簡單展示使用方法

![alt text](/doc-imgs/useErrorBoundary.png)