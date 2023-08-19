#!/usr/bin/node

const mongoose = require('mongoose');
const Base = require('./Base')


class User extends Base {
	firstName = '';
	lastName = '';
	username='';
	email = '';
	password = '';

	constructor() {

	}
}