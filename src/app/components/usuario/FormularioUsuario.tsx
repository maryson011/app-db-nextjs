import { Usuario } from "@/core/model/Usuario";
import InputTexto from "../shared/InputTexto";

export interface FormuaraioUsuarioProps{
    usuario: Usuario
}

export default function FormularioUsuario(props: FormuaraioUsuarioProps) {
    return (
        <div className='flex flex-col gap-5'>
            <InputTexto 
            label="Nome" 
            type="text" 
            value={props.usuario.nome} 
            onChange={() => {}} 
            />
            <InputTexto 
            label="Email" 
            type="email" 
            value={props.usuario.email} 
            onChange={() => {}} 
            />
            <InputTexto 
            label="Senha" 
            type="password" 
            value={props.usuario.senha} 
            onChange={() => {}} 
            />
            <div className="flex gap-5">
                <button className="bg-blue-500 px-4 py-2 rounded-md">Salvar</button>
                <button className="bg-zinc-500 px-4 py-2 rounded-md">Cancelar</button>
            </div>
        </div>
    )
}