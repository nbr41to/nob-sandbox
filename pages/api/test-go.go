package handler

import (
	"fmt"
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>Hello from Go!</h1>")
	// switch r.Method {
	// case "GET":
	// case "POST":
	// case "PUT":
	// case "DELETE":
	// default:
	// 	w.WriteHeader(405)
	// }
	// currentTime := time.Now().Format(time.RFC850)
	// fmt.Fprintf(w, currentTime)
	// fmt.Println("test")
}
