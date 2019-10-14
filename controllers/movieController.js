const { sqlDB } = require('../database')

module.exports = {
    getMovie: (req, res) => {
        var sql = `SELECT *
                    FROM movie_list;`
        sqlDB.query(sql, (err, result) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.status(200).send(result)
        })
    },
    addMovie: (req, res) => {
        var movieTambahan = req.body.insertMovie

        if (movieTambahan) {
            var sql = `INSERT INTO movie_list (Nama, Tahun, Description) VALUES ?`
            sqlDB.query(sql, [movieTambahan], (err, results) => {
                if(err) {
                    return res.status(500).send(err)
                }

                sql = `SELECT * from movie_list;`
                sqlDB.query(sql, (err, results) => {
                    if(err) return res.status(500).send(err)
                    res.status(200).send(results)
                })
            })

        } else {
            res.status(500).send('Tolong isi query kategori tambahan!')
        }
    },
    deleteMovie: (req, res) => {
        var sql = `DELETE FROM movie_list WHERE id=${sqlDB.escape(req.params.id)}`
        sqlDB.query(sql, (err, result) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.status(200).send(result)
        })
    },
    editMovie: (req, res) => {
        var sql = `UPDATE movie_list SET ? WHERE id = ${req.params.id};`;
        sqlDB.query(sql, req.body, (err, results) => {
            if(err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },
    getMovieByKategori: (req, res) => {
        var kategori = req.query.kategori ? req.query.kategori : ''
        var sql = `SELECT cl.Nama as 'Nama Kategori', ml.Nama as 'Nama Movie'
                    FROM category_list cl
                    JOIN movie_list ml
                    JOIN connection_table ct
                    on ct.movieId = ml.id && ct.kategoriId = cl.id
                    WHERE cl.Nama = '${kategori}';`
        sqlDB.query(sql, (err, result) => {
            if (err) return res.status(500).send(err)
            res.status(200).send(result)
        })
    },
}


  