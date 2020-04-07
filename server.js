const express = require("express");
const server = express();

const db = require("./db")

/**
const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Curso de Programação",
        category: "Estudos",
        descripton: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti cum quo natus provident itaque quibusdam",
        url: "#"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        descripton: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti cum quo natus provident itaque quibusdam",
        url: "#"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        descripton: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti cum quo natus provident itaque quibusdam",
        url: "#"
    }, 
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em família",
        descripton: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti cum quo natus provident itaque quibusdam",
        url: "#"
    }, 
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title: "Pintura",
        category: "Criatividade",
        descripton: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti cum quo natus provident itaque quibusdam",
        url: "#"
    }, 
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729048.svg",
        title: "Recortes",
        category: "Criatividade",
        descripton: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti cum quo natus provident itaque quibusdam",
        url: "#"
    }, 
]
 */

server.use(express.static("public"));

server.use(express.urlencoded({ extended: true }))

const nunjucks = require("nunjucks");
nunjucks.configure("views", {
    express: server,
    noCache: true,
})



server.get("/", function(req, res){

    db.all(`SELECT * FROM ideas`, function(err, rows) {
        if (err) {
            console.log(err)
            return res.send("Erro no banco de dados!")
        }
        
        const reversedIdea = [...rows].reverse();

        let lastIdeas = [];
        for (let idea of reversedIdea) {
            if(lastIdeas.length < 2){
                lastIdeas.push(idea)
            }
        }
    
        return res.render("index.html", { ideas: lastIdeas});
    })

})

server.get("/ideias", function(req, res){ 
    db.all(`SELECT * FROM ideas`, function(err, rows) {
        if (err) {
            console.log(err)
            return res.send("Erro no banco de dados!")
        }
        
        const reversedIdea = [...rows].reverse();
        
        return res.render("ideias.html", { ideas: reversedIdea});
    })
})

server.post("/", function(req, res){
    req.body
})
server.listen(4000);