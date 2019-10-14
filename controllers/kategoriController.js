const { sqlDB } = require('../database')

module.exports = {
    getKategori: (req, res) => {
        var sql = `SELECT *
                    FROM category_list;`
        sqlDB.query(sql, (err, result) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.status(200).send(result)
        })
    }, 
    getKategoriById:(req, res) => {
        var sql = `SELECT * FROM category_list WHERE id = ${sqlDB.escape(req.params.id)};`
        sqlDB.query(sql, (err, result) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.status(200).send(result)
        })
    },
    addKategori: (req, res) => {
        var kategoriTambahan = req.body.insertKategori

        if (kategoriTambahan) {
            var sql = `INSERT INTO category_list (Nama) VALUES ?`
            sqlDB.query(sql, [kategoriTambahan], (err, results) => {
                if(err) {
                    return res.status(500).send(err)
                }

                sql = `SELECT * from category_list;`
                sqlDB.query(sql, (err, results) => {
                    if(err) return res.status(500).send(err)
                    res.status(200).send(results)
                })
            })

        } else {
            res.status(500).send('Tolong isi query kategori tambahan!')
        }
    },
    deleteKategori: (req, res) => {
        var sql = `DELETE FROM category_list WHERE id=${sqlDB.escape(req.params.id)}`
        sqlDB.query(sql, (err, result) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.status(200).send(result)
        })
    },
    editKategori: (req, res) => {
        var sql = `UPDATE category_list SET ? WHERE id = ${req.params.id};`;
        sqlDB.query(sql, req.body, (err, results) => {
            if(err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    }
}