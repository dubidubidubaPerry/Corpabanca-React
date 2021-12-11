import React from 'react'

const CrearCuenta = () => {
    return (
        <div>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Tipo de Documento</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text"> </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Número de Documento</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text"> </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Fecha de Nacimiento</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text"> </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Fecha de expedición de Documento</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text"> </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Ingresos</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text"> </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Egresos</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text"> </div>
            </div>
            <div class="row g-3 align-items-center">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="row g-3 align-items-center">
                <label for="exampleInputPassword1" class="form-label">Repetir Contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1"> </label>
            </div>
            <button type="submit" class="btn btn-primary">Crear Cuenta</button>
        </form>
    </div>
    )
}

export default CrearCuenta
