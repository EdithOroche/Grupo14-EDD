import { ListaCircularSimpleLigada } from "./lista.js";
import { ListaCircularSimpleLigadaCanvas } from "./listaCanvas.js";
import {bootbox_prompt, bootbox_alert} from '../utils/dialog.js';

var lista = null;
let listaCanvas=null;

export async function insertar_al_inicio() {
    let canvas = window.CANVAS2;
    if (lista == null){
        listaCanvas = new ListaCircularSimpleLigadaCanvas(canvas);
        lista = new ListaCircularSimpleLigada(listaCanvas);
    }

    try{
        let DATO = await bootbox_prompt("INGRESE EL NUEVO NODO: ");
        if(DATO==null || DATO.trim()=="")
            return;

        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE ENCUENTRA EN LA LISTA");

        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function insertar_al_final() {
    let canvas = window.CANVAS2;
    if(lista == null){
        listaCanvas = new ListaCircularSimpleLigadaCanvas(canvas);
        lista = new ListaCircularSimpleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true){//Error, la lista se encuentra vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        let DATO = await bootbox_prompt("INGRESE EL NUEVO NODO: ");
        if(DATO==null || DATO.trim()=="")
            return;

        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE ENCUENTRA EN LA LISTA ");

        lista.inserta_final(DATO);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function insertar_antes_X() {
    let canvas = window.CANVAS2;
    if(lista == null){
        listaCanvas = new ListaCircularSimpleLigadaCanvas(canvas);
        lista = new ListaCircularSimpleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//lista vacia
            throw new Error("LA LISTA ESTA VACIA");

        let DATO1 = await bootbox_prompt("INGRESE EL NUEVO NODO");
        if(DATO1==null || DATO1.trim()=="")
            return;

        let DATO2 = await bootbox_prompt("INGRESE X. ");
        if(DATO2==null || DATO2.trim()=="")
            return;

        if(lista.buscar(DATO1)==true)
                throw new Error("EL NODO YA SE ENCUENTRA EN LA LISTA");

        lista.inserta_antes_X(DATO1, DATO2);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function inserta_despues_X() {
    let canvas = window.CANVAS2;
    if(lista == null){
        listaCanvas = new ListaCircularSimpleLigadaCanvas(canvas);
        lista = new ListaCircularSimpleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//lista vacia
            throw new Error("LA LISTA ESTA VACIA");

        let DATO1 = await bootbox_prompt("INGRESE EL NUEVO NODO: ");
        if(DATO1==null || DATO1.trim()=="")
            return;

        let DATO2 = await bootbox_prompt("INGRESE X: ");
        if(DATO2==null || DATO2.trim()=="")
            return;

        if(lista.buscar(DATO1)==true)
                throw new Error("EL NODO YA SE ENCUEBTRA EN LA LISTA");

        lista.inserta_despues_X(DATO1, DATO2);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_inicio() {
    let canvas = window.CANVAS2;
    if(lista == null){
        listaCanvas = new ListaCircularSimpleLigadaCanvas(canvas);
        lista = new ListaCircularSimpleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//lista vacia
            throw new Error("LA LISTA ESTA VACIA");

        lista.elimina_inicio();
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_ultimo() {
    let canvas = window.CANVAS2;
    if(lista == null){
        listaCanvas = new ListaCircularSimpleLigadaCanvas(canvas);
        lista = new ListaCircularSimpleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//lista vacia
            throw new Error("LA LISTA ESTA VACIA");

        lista.elimina_ultimo();
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_X() {
    let canvas = window.CANVAS2;
    if(lista == null){
        listaCanvas = new ListaCircularSimpleLigadaCanvas(canvas);
        lista = new ListaCircularSimpleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//lista vacia
            throw new Error("LA LISTA ESTA VACIA");

        let DATO = await bootbox_prompt("INGRESE EL VALOR DE X: ");
        if(DATO==null || DATO.trim()=="")
            return;

        lista.elimina_X(DATO);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_antes_X() {
    let canvas = window.CANVAS2;
    if(lista == null){
        listaCanvas = new ListaCircularSimpleLigadaCanvas(canvas);
        lista = new ListaCircularSimpleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//lista vacia
            throw new Error("LA LISTA ESTA VACIAS");

        let DATO = await bootbox_prompt("INGRESE EL VALOR DE X: ");
        if(DATO==null || DATO.trim()=="")
            return;

        lista.elimina_antes_X(DATO);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_despues_X() {
    let canvas = window.CANVAS2;
    if(lista == null){
        listaCanvas = new ListaCircularSimpleLigadaCanvas(canvas);
        lista = new ListaCircularSimpleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//lista vacia
            throw new Error("LA LISTA ESTA VACIA");

        let DATO = await bootbox_prompt("INGRESE EL VALOR DE X: ");
        if(DATO==null || DATO.trim()=="")
            return;

        lista.elimina_despues_X(DATO);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function borrar_LstCirSimpLig() {
    lista = null;
    listaCanvas = null;
    let canvas = window.CANVAS2;
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}
