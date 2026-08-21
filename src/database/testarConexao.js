import { pool } from "./pool.js";

try {
    const resultado = await pool.query("SELECT NOW() AS agora");
    console.log("Conexão com PostgreSQL realizada com sucesso.");
    console.log(resultado.rows);

} catch(erro){
    console.error("Erro ao conectar ao PostgreSQL:");
    console.error(erro);
} finally {
    await pool.end();
}