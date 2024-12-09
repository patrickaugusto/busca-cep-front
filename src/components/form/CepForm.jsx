import React, { useState } from "react";
import "./cepForm.css";

function CepForm() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            name="cep"
            value={cep}
            onChange={handleChange}
            placeholder="Ex: 12345-678"
            maxLength={9}
            required
          />
        </div>

        <button type="submit" disabled={loading}>Consultar</button>
      </form>

      {/* Tela de carregamento */}
      {loading && <div className="loading">Carregando...</div>}

      {/* Exibir resultado ou erros */}
      {error && (
        <div className="error-message">
          <strong>Erro:</strong> {error}
        </div>
      )}
      {address && (
        <div className="address-info">
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
