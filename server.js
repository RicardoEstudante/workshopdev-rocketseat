const express = require("express");

const server = express();

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

server.use(express.static("public"));

const nunjucks = require("nunjucks");
nunjucks.configure("views", {
    express: server,
    noCache: true,
})



server.get("/", function(req, res){

    const reversedIdea = [...ideas].reverse();

    let lastIdeas = [];
    for (let idea of reversedIdea) {
        if(lastIdeas.length < 2){
            lastIdeas.push(idea)
        }
    }
 
    return res.render("index.html", { ideas: lastIdeas});
})

server.get("/ideias", function(req, res){ 

    const reversedIdea = [...ideas].reverse();

    return res.render("ideias.html", { ideas: reversedIdea});
})

server.listen(4000);