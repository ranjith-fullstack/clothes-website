const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const moment = require('moment'); // Import moment library

const app = express();
const port = 3005;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createPool({
  host: '103.92.235.85',
  user: 'yatayati_vrk',
  password: 'vamsee@ranjith',
  database: 'yatayati_My store database',
  connectionLimit: 100,
  connectTimeout: 10000, 
});

const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    let destFolder;
    if (req.body.category === 'men') {
      destFolder = 'uploads/men';
    } else if (req.body.category === 'women') {
      destFolder = 'uploads/women';
    } else if (req.body.category === 'hoodies') {
      destFolder = 'uploads/hoodies';
    } else {
      destFolder = 'uploads';
    }
    callback(null, destFolder);
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}.${file.originalname}`);
  },
});
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith('image')) {
    callback(null, true);
  } else {
    callback(null, Error('only image is allowed'));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

app.post('/insertProduct', upload.single('menimage'), (req, res) => {
  const { gender, caption, category, price, saleprice, color, brand } = req.body;
  const { filename } = req.file;

  if (!gender || !caption || !category || !price || !saleprice || !filename) {
    res.status(422).json({ status: 422, message: 'Fill all the details' });
    return;
  }

  try {
    const date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');

    db.query(
      'INSERT INTO men_tshirts SET ?',
      {
        gender,
        caption,
        category,
        price,
        saleprice,
        color, // Add color field
        brand, // Add brand field
        menimage: filename,
        date,
      },
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({ status: 500, error: 'Internal Server Error' });
        } else {
          console.log('Product added');
          res.status(201).json({ status: 201, data: req.body });
        }
      }
    );
  } catch (error) {
    res.status(422).json({ status: 422, error });
  }
});


app.get('/getProducts', (req, res) => {
    console.log('GET /getProducts');
    try {
      db.query('SELECT * FROM men_tshirts', (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({ status: 500, error: 'Internal Server Error' });
        } else {
          console.log('Products fetched:', result);
          res.status(200).json({ status: 200, data: result });
        }
      });
    } catch (error) {
      console.error('Error in /getProducts:', error);
      res.status(422).json({ status: 422, error });
    }
  });
  
  


// delete product
app.delete('/deleteProduct/:id', (req, res) => {
  const { id } = req.params;
  try {
    db.query(`DELETE FROM men_tshirts WHERE id ='${id}'`, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ status: 500, error: 'Internal Server Error' });
      } else {
        console.log('Product deleted');
        res.status(200).json({ status: 200, data: result });
      }
    });
  } catch (error) {
    res.status(422).json({ status: 422, error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
