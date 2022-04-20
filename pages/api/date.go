package handler

import (
	"fmt"
	"net/http"
	"time"
)

func DateHandler(w http.ResponseWriter, r *http.Request) {
	currentTime := time.Now().Format(time.RFC850)
	fmt.Fprintf(w, currentTime)
}
