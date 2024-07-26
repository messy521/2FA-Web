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
    fmt.Printf("Server is running on port %d\n", port)
    fmt.Printf("Please visit http://localhost:%d\n", port)

    err := http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
    if err != nil {
        log.Fatal(err)
    }
}
