const multer = require('multer')

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		console.log(file);
		cb(null, 'uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, `${file.fieldname}-${Date.now()}`);
	}
})

module.exports = multer({storage})