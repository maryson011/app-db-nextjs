'use client'
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import FormularioUsuario from "@/app/components/usuario/FormularioUsuario";
import ListaUsuario from "@/app/components/usuario/ListaDeUsuario";
import usuarios from "@/app/data/constants/usuarios";
import { IconUser } from "@tabler/icons-react"

export default function Page() {
    return (
        <Pagina className='flex flex-col gap-10'>
            <Titulo icone={IconUser} principal="Usuarios" secundario="Cadastro de usuarios"/>
            {/* <ListaUsuario /> */}
            <FormularioUsuario usuario={usuarios[0]} />
        </Pagina>
    )
}