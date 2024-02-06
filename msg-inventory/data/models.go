package data

import (
	"database/sql"
	"time"
)

func New(dbPool *sql.DB) Models {
	return Models{
		Inventory: Inventory{},
	}
}

type Models struct {
	Inventory Inventory
}

type Inventory struct {
	Name      string    `json:"name"`
	Quantity  int       `json:"quantity"`
	Price     float64   `json:"price"`
	UpdatedAt time.Time `json:"updated_at"`
}

func (i *Inventory) GetAll() ([]*Inventory, error) {
	return nil, nil
}

func (i *Inventory) GetByName(name string) (*Inventory, error) {
	return nil, nil
}

func (i *Inventory) Create() error {
	return nil
}

func (i *Inventory) Update() error {
	return nil
}
