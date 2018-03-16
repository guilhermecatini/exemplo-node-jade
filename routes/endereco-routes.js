var express = require('express');
var router = express.Router();


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
	cep: String,
	logradouro: String,
	numero: String,
	bairro: String,
	localidade: String,
	uf: String
}

const EnderecoSchema = new Schema(_schema, { versionKey:false })
const EnderecoModel  = mongoose.model('endereco', EnderecoSchema)

router.get('/update/:_id', (req, res) => {
	EnderecoModel.findOne({_id: req.params._id}, (err, data) => {
		res.render('update-endereco', {data: data});
	})
})

router.get('/new', (req, res) => {
	res.render('new-endereco', {data: {}});
})

router.get('/', (req, res) => {
	EnderecoModel.find({}, (err, data) => {
		res.render('rel-enderecos', { enderecos: data } );
	});
});


router.post('/update/:_id', (req, res) => {
	delete req.body._id;
	EnderecoModel.update({ _id: req.params._id }, req.body, (err, data) => {
		res.redirect('/')
	})
})

router.post('/create', (req, res) => {
	EnderecoModel.create(req.body, (err, data) => {
		res.redirect('/')
	})
})

router.post('/delete/:_id', (req, res) => {
	EnderecoModel.remove({_id: req.params._id}, (err, data) => {
		res.redirect('/')
	})
});

module.exports = router;
