'use server'

import { Usuario } from '@/core/model/Usuario'
import Id from '@/core/utils/Id'
import RepositorioUsuario from './RepositorioUsuario'

export default async function obterTodos() {
    return RepositorioUsuario.obterTodos()
}