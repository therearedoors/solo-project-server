# solo-project-server

### Planning:
## ERD
[DraughtsERD_1.pdf](https://github.com/therearedoors/solo-project-server/files/8780274/DraughtsERD_1.pdf)

## REST API spec
[Draughts REST API.docx](https://github.com/therearedoors/solo-project-server/files/8780284/Draughts.REST.API.docx)

### Reality:
# 5 route REST API:

GET all game routes

GET game by game route

POST new game by (novel) game route

PATCH game by game route + JSON request body with 'pieceData' and 'square' keys (a number and a two char string)

DELETE game by game route

# The "database":

A Javascript object, interface consists of five functions corresponding to the API routes.
