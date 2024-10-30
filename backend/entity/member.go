package entity

import "gorm.io/gorm"

type Member struct {
	gorm.Model
	FirstName string
	LastName  string
	Email     string
	Password  string
}
