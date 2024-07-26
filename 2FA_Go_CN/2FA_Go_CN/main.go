package main

import (
    "fmt"
    "log"
    "net/http"
)

func main() {
    fs := http.FileServer(http.Dir("./public"))
    http.Handle("/", fs)

    port := 8080
    fmt.Printf("服务器正在端口 %d 上运行\n", port)
    fmt.Printf("请访问 http://localhost:%d\n", port)

    err := http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
    if err != nil {
        log.Fatal(err)
    }
}
