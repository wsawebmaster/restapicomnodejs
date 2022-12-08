const express = require("express");
const router = express.Router();

// Return all products
router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Usando o GET dentro da rota de produtos",
  });
});

// Insert product
router.post("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "Usando o POST dentro da rota de produtos",
  });
});

// Return one product
router.post("/:id_produto", (req, res, next) => {
  const id = req.params.id_produto;

  if (id === "especial") {
    res.status(200).send({
      mensagem: "Você descobriu o ID especial",
      id: id,
    });
  } else {
    res.status(200).send({
      mensagem: "Você passou um ID",
    });
  }
});

  router.patch("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "Usando o PATCH dentro da rota de produtos",
  });
});

  router.delete("/", (req, res, next) => {
    res.status(201).send({
      mensagem: "Usando o DELETE dentro da rota de produtos",
    });
  });

module.exports = router;
