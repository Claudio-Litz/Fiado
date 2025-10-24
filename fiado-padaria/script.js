import { db } from "./firebase-config.js";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Referência da coleção
const clientesRef = collection(db, "clientes");

// Cadastrar novo cliente
document.getElementById("btnCadastrar").addEventListener("click", async () => {
  const nome = document.getElementById("nome").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const valor = parseFloat(document.getElementById("valor").value);
  const dataCompra = document.getElementById("dataCompra").value;

  if (!nome || !cpf || !valor || !dataCompra) {
    alert("Preencha todos os campos.");
    return;
  }

  try {
    await addDoc(clientesRef, {
      nome,
      cpf,
      valor,
      dataCompra,
      pago: false
    });
    alert("Cliente cadastrado com sucesso!");
  } catch (e) {
    console.error("Erro ao salvar:", e);
  }
});

// Buscar cliente por nome
document.getElementById("btnBuscar").addEventListener("click", async () => {
  const buscaNome = document.getElementById("buscaNome").value.trim().toLowerCase();
  const lista = document.getElementById("listaClientes");
  lista.innerHTML = "";

  const q = query(clientesRef, where("nome", ">=", buscaNome), where("nome", "<=", buscaNome + "\uf8ff"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const c = doc.data();
    const li = document.createElement("li");
    li.textContent = `${c.nome} | CPF: ${c.cpf} | Valor: R$${c.valor.toFixed(2)} | Data: ${c.dataCompra}`;
    lista.appendChild(li);
  });
});
