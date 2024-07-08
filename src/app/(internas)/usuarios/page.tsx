'use client'
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import FormularioUsuario from "@/app/components/usuario/FormularioUsuario";
import ListaUsuario from "@/app/components/usuario/ListaDeUsuario";
import usuarios from "@/app/data/constants/usuarios";
import Backend from "@/backend";
import { Usuario } from "@/core/model/Usuario";
import { IconUser, IconPlus } from "@tabler/icons-react"
import { useEffect, useState } from "react";

export default function Page() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const [usuario, setUsuario] = useState<Partial<Usuario> | null>(usuarios[0])

    useEffect(() => {
        Backend.usuarios.obter().then(setUsuarios)
    }, [])

    async function salvar() {
        // Salvar no banco de Dados
        if (!usuario) return
        await Backend.usuarios.salvar(usuario)
        const usuarios = await Backend.usuarios.obter()
        setUsuarios(usuarios)
        setUsuario(null)

    }

    return (
        <Pagina className='flex flex-col gap-10'>
            <Titulo icone={IconUser} principal="Usuarios" secundario="Cadastro de usuarios"/>
            
            {usuario? (
                <FormularioUsuario 
                usuario={usuario} 
                onChange={setUsuario} 
                salvar={salvar}
                cancelar={() => setUsuario(null)}
                />
            ) : (
                <>
                    <div className="flex justify-end">
                        <button
                            className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md"
                            onClick={() => setUsuario({})}
                        >
                            <IconPlus />
                            <span>Novo Usuário</span>
                        </button>
                    </div>
                    <ListaUsuario usuarios={usuarios} onClick={setUsuario}/>
                </>
            )}
        </Pagina>
    )
}