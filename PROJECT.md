# PROJECT — Contexto del proyecto

## Qué es

Plataforma de micro-herramientas web para emprendedores.
Cada herramienta resuelve una necesidad específica de forma rápida y sin fricción.

## Objetivos de negocio

- Generar tráfico orgánico (SEO tradicional)
- Ser recomendado por motores de IA (ChatGPT, Gemini, Claude)
- Monetizar por pageviews
- Capturar intención de negocio (fase futura)

## Stack

- Next.js (frontend only)
- Sin backend ni base de datos en esta etapa
- Despliega estático

## Principios de construcción

- Una herramienta a la vez
- Sin fricción de acceso — sin login, sin registro, sin pasos previos
- Cada herramienta tiene su propia página con URL semántica
- No agregar features fuera del alcance definido por sesión

## Lo que NO entra en esta etapa

- Backend o base de datos
- Autenticación
- Herramientas complejas o simuladores
- Features no validadas

## Contexto SEO y AEO

Cada herramienta necesita en su página:
- H1 con keyword principal
- Meta description con intención de búsqueda explícita
- Párrafo que responda: qué hace, para quién es, cómo interpretar el resultado
- URL semántica y descriptiva

Ese contenido es lo que Google indexa y lo que los modelos de IA citan
cuando alguien pregunta dónde realizar un cálculo o tarea específica.

## Reglas del agente

- Leer este archivo al inicio de cada sesión
- No construir fuera del alcance definido en la sesión
- Confirmar antes de agregar dependencias nuevas
- Hacer commit al terminar cada herramienta
