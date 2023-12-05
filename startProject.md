<h1> Criação do projeto  - Styled Components </h1>

Criar o projeto: <br>
<code> npm create vite@latest </code>

-  Instalar as dependências: <br>
   <code> npm i </code>

Rodar o projeto em execução:<br>
<code> npm run dev </code>

## INFORMAÇÕES ÚTEIS

Instalar o JSON-SERVER:
<br> Abre: <code> packge.json </code>
<br> Adiciona uma nova script: <br>
<code>"server":"json-server --watch data/db.json" </code>
<br>Sendo a parte após o "watch", o caminho até o arquivo que vai ser monitorado.

Instalar dependências do json-server: <br>
<code> npm i json-server </code>

REACT-ROUTER-DOM <br>
<code> npm i react-router-dom </code>

TypeScript <br>
<code> npm i typescript </code>

Pacote de tipagens do TypeScript <br>
<code> npm i -D @types/react-router-dom</code>

## Instalando o Styles Components <br>

<code> npm i styled-components</code>

O styles componentes nao trás consigo as tipagens, se estiver usando o Type Script é necessário instalar as tipagens para o pacote.
<code>npm i @types/styled-components -D </code>

Importes
<code>

<li> import styled from 'styled-components'; </li>
</code>
<br>
Usamos o styled components com "template-literals":  
<code>
<li> export const ButtonContainer = styled.button `<br>
width: 100px; <br>
height: 100px;<br>
` </code>
<br>
Instale a extensão do Stylesd Components no VS Code para aparecer a definição de cores no código.

No arquivo principal, para criarmos um `<button></button`
<br> usamos a tag estilizada `</ButtonContainer> <ButtonContainer>`

No styled Component (ButtonContainer)<br>
Criamos as variantes através de um type e uma interface <br>
<code> export type ButtonVariant = <br>
'primary | 'secundary' | 'danger'| 'success';

interface ButtonContainerProps {<br>
variant: ButtonVariant;
<br>
}
</code>

<code> </code>

## Cadastrar cores

## Tipas os temas em um "component" de tipos

<code>
import 'styled-components' <br>
import { defaultTheme } from '../styles/themes/default' 
<br><br>

type ThemeType = typeof defaultTheme;
<br><br>

declare module 'styled-components' {<br>
export interface DefaultTheme extends ThemeType{}

}</code>

## Criar um estilo global

Definir fonts, background e etc de forma global.
