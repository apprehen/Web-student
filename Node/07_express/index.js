// 1. 使用Express开发一个HTTP服务器，实现5个API：获取todo列表、获取单个todo详情、新增单个todo、删除单个todo、更新单个todo
// 2. 所有接口使用MySQL或者MongoDB实现数据持久化（使用node-mysql或node-mongo连接数据库）
// 3. Postman中添加上述5个API的测试，并添加到一个Collection中

const express = require('express')
const fs = require('fs')
const mysql = require('mysql')

// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     port: 3306,
//     user:'root',
//     password:'root',
//     database:'cxsj'
// })

// connection.connect(err => {
//     if (err) {
//         console.error('failed to connect to database, error: ', err)
//         process.exit(1)
//     }
// })

const app = express()
app.use(express.json())

// 获取todo列表
app.get('/api1/item', function (req, res) {

    const { currentPage, pageSize } = req.query;

    if(page==undefined||size==undefined){
        const sql='select * from item';
        connection.query(sql, (err, result) => {
            if (err) {
                return res.status(500).json({ msg: err })
            }
            res.json(result);
        })
    }else{
        const sql = 'select * from item LIMIT '+(currentPage-1)*pageSize+","+pageSize;
        connection.query(sql, (err, result) => {
            if (err) {
                return res.status(500).json({ msg: err })
            }
            res.json(result);
        })
    }
})

// 获取单个todo详情
app.get('/item/:id', function (req, res) {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({msg: "invalid parameters"})
    }
    const sql = 'select * from item where id=?';
    connection.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({msg: err})
        }
        if (result.length <= 0) {
            return res.status(404).end()
        } else {
            res.json(result)
        }
    })
})

// 新增单个todo
app.post('/api1/item', function (req, res) {
    const { item_name,item_done,item_ddl } = req.body;
    if (!item_name) {
        return res.status(400).json({ msg: "invalid parameters" })
    }
    const sql = 'INSERT INTO item(id,item_name,item_done,item_ddl) VALUES (0,?,?,?)';
    connection.query(sql, [item_name,item_done,item_ddl], (err, result) => {
        if (err) {
            return res.status(500).json({ msg: err })
        }
        res.status(200).json({ id: result.insertId })
    })
})

// 更新单个todo
app.put('/item:id', function (req, res) {
    const {item_id, item_ddl, item_name, item_done} = req.body;
    if (!id) {
        return res.status(400).json({msg: "invalid parameters"})
    }
    if (!item_ddl && !item_name && !item_done) {
        return res.status(400).json({msg: "invalid parameters"})
    }

    let sql = 'UPDATE item SET item_name=?,item_done=?,deadLine=? where id=?';
    let args = [item_name, item_done, item_ddl, item_id];

    connection.query(sql, args, (err, result) => {
        if (err) {
            return res.status(500).json({msg: err})
        }

        if (result.affectedRows === 0) {
            return res.status(404).end()
        }
        res.status(200).end()
    })
})

// 删除单个todo
app.delete("/api/v1/item/:id", function (req, res) {
    const { id } = req.params;
    console.log(id)
    res.send('hahaha')
    // if (!id) {
    //     return res.status(404).json({msg: "invalid parameters"})
    // }
    // const sql = "DELETE FROM item where id=?";
    // connection.query(sql, [id], err => {
    //     if (err) {
    //         res.status(500).send({msg: err})
    //     } else {
    //         res.status(200).end()
    //     }
    // })
})

// const server = app.listen(3000, 'localhost', function () {
//     const host = server.address().address
//     const port = server.address().port
//     console.log("Running server at http://%s:%s", host, port)
// })
app.listen(3000,()=>{
    console.log("服务器已经启动了捏")
})