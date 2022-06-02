const getConnection = require("./../database/database");

const getLenguages = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id, name, programmers FROM language"
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getLenguage = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id, name, programmers FROM language WHERE id = ? ",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createLenguage = async (req, res) => {
  try {
    const { name, programmers } = req.body;
    const language = { name, programmers };
    if (name === undefined || programmers === undefined) {
      res.status(400).json({ message: "Bad Request. Please fill all field." });
    }

    const connection = await getConnection();
    await connection.query("INSERT INTO language SET ?", language);
    res.json({ message: "Lenguage added" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateLenguage = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, programmers } = req.body;
    if (id === undefined || name === undefined || programmers === undefined) {
      res.status(400).json({ message: "Bad Request. Please fill all field." });
    }

    language = { name, programmers };
    const connection = await getConnection();
    const result = await connection.query("UPDATE language SET ? WHERE id = ? ", [language,id]);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteLenguage = async (req, res) => {
  try {
    // console.log(req.params)
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM language WHERE id = ? ",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getLenguages,
  createLenguage,
  getLenguage,
  updateLenguage,
  deleteLenguage,
};
