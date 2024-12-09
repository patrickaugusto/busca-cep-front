import React, { useState } from "react";

function CepForm() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { value } = e.target;

    const numericValue = value.replace(/\D/g, "");
    const formattedValue = numericValue.replace(/(\d{5})(\d{1,3})?/, (_, p1, p2) =>
      p2 ? `${p1}-${p2}` : p1
    );

    setCep(formattedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rawCep = cep.replace(/\D/g, ""); 

    try {
      setError(null);
      setAddress(null);

      const response = await fetch(
        `https://busca-cep-production-8cfa.up.railway.app/consultar-cep/${rawCep}`
      );

      if (!response.ok) {
        throw new Error("Erro ao consultar o CEP. Verifique se está correto.");
      }

      const data = await response.json();
      setAddress(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto", padding: "20px" }}>
      <h2>Consultar CEP</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="cep" style={{ display: "block", marginBottom: "5px" }}>
            CEP:
          </label>
          <input
            type="text"
            id="cep"
            name="cep"
            value={cep}
            onChange={handleChange}
            placeholder="Ex: 12345-678"
            maxLength={9}
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
            }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Consultar
        </button>
      </form>

      {/* Exibir resultado ou erros */}
      {error && (
        <div style={{ marginTop: "15px", color: "red" }}>
          <strong>Erro:</strong> {error}
        </div>
      )}
      {address && (
        <div style={{ marginTop: "15px", textAlign: "start" }}>
          <h3>Endereço Encontrado:</h3>
          <p><strong>Logradouro:</strong> {address.logradouro}</p>
          <p><strong>Bairro:</strong> {address.bairro}</p>
          <p><strong>Cidade:</strong> {address.localidade}</p>
          <p><strong>Estado:</strong> {address.uf}</p>
        </div>
      )}
    </div>
  );
}

export default CepForm;
