import styled from 'styled-components'
export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 20px;
  }
`
export const Button = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`
export const Input = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
  min-height: 40px;
  min-width: 0;
`
