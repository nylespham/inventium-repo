package main

import "github.com/gorilla/mux"

func routes() {
	r := mux.NewRouter()
	r.HandleFunc("/api/inventory", InventoryHandler).Methods("GET")
}
