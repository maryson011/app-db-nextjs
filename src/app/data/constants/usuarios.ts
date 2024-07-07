import { Usuario } from "@prisma/client";

const usuarios: Usuario[] = [
    {
        id: "1",
        email: "ana@empresa.com.br",
        nome: "Ana",
        senha: "12345"
    },
    {
        id: "2",
        email: "joao@empresa.com.br",
        nome: "João",
        senha: "12344"
    },
    {
        id: "3",
        email: "cris@empresa.com.br",
        nome: "Cris",
        senha: "12343"
    },
    {
        id: "4",
        email: "tai@empresa.com.br",
        nome: "Tai",
        senha: "12342"
    },
]

export default usuarios