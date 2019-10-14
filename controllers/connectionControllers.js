const { sqlDB } = require('../database')

module.exports = {
    connectMovie: (req, res) => {
        var sql = `SELECT ml.Nama as 'Nama Movie', cl.Nama as 'Nama Category'
                    FROM category_list cl
                    JOIN movie_list ml
                    JOIN connection_table ct
                    on ct.movieId = ml.id && ct.kategoriId = cl.id
                    ORDER BY ml.id`
        sqlDB.query(sql, (err, result) => {
            if (err) return res.status(500).send(err)
                res.status(200).send(result)
            })
    },
    addConnection: (req, res) => {
        var connectionTambahan = req.body.insertConnection
        if (connectionTambahan) {
            var sql = `INSERT INTO connection_table (movieId, kategoriId) VALUES ?`
            sqlDB.query(sql, [connectionTambahan], (err, results) => {
                if(err) {
                    return res.status(500).send(err)
                }

                sql = `SELECT * from connection_table;`
                sqlDB.query(sql, (err, results) => {
                    if(err) return res.status(500).send(err)
                    res.status(200).send(results)
                })
            })

        } else {
            res.status(500).send('Tolong isi query menu tambahan!')
        }
    },
    editConnection: (req, res) => {
        var sql = `UPDATE connection_table SET ? WHERE id = ${req.params.id};`;
        sqlDB.query(sql, req.body, (err, results) => {
            if(err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },
    deleteConnection: (req, res) => {
        var sql = `DELETE FROM connection_table WHERE id=${sqlDB.escape(req.params.id)}`
        sqlDB.query(sql, (err, result) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.status(200).send(result)
        })
    },
}