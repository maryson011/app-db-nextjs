'use client'
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import FormularioUsuario from "@/app/components/usuario/FormularioUsuario";
import ListaUsuario from "@/app/components/usuario/ListaDeUsuario";
import usuarios from "@/app/data/constants/usuarios";
import { Usuario } from "@/core/model/Usuario";
import { IconUser } from "@tabler/icons-react"
import { useState } from "react";

export default function Page() {
    const [usuario, setUsuario] = useState<Usuario>(usuarios[0])

    function salvar() {
        // Salvar no banco de Dados
    }

    return (
        <Pagina className='flex flex-col gap-10'>
            <Titulo icone={IconUser} principal="Usuarios" secundario="Cadastro de usuarios"/>
            {/* <ListaUsuario /> */}
            <FormularioUsuario 
            usuario={usuario} 
            onChange={setUsuario} 
            salvar={salvar}
            cancelar={() => {}}
            />
        </Pagina>
    )
}