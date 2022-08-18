import { ListaDobleLigada } from "./lista.js";
import { ListaDobleLigadaCanvas } from "./listaCanvas.js";
import {bootbox_prompt, bootbox_alert} from '../utils/dialog.js';

var lista = null;
let listaCanvas=null;

export async function insertar_al_inicio() {
    let canvas = window.CANVAS3;
    if (lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        let DATO = await bootbox_prompt("INGRESE EL NUEVO NODO:");
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
    let canvas = window.CANVAS3;
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true){//lista vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        let DATO = await bootbox_prompt("INGRESE EL NUEVO NODO:");
        if(DATO==null || DATO.trim()=="")
            return;

        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE ENCUENTRA EN LA LISTA");

        lista.inserta_final(DATO);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function insertar_antes_X() {
    let canvas = window.CANVAS3;
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//lista vacia
            throw new Error("LA LISTA ESTA VACIA");

        let DATO1 = await bootbox_prompt("INGRESE EL NUEVO NODO:");
        if(DATO1==null || DATO1.trim()=="")
            return;

        let DATO2 = await bootbox_prompt("INGRESE X:");
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
    let canvas = window.CANVAS3;
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//Elista vacia
            throw new Error("LA LISTA ESTA VACIA");

        let DATO1 = await bootbox_prompt("INGRESE EL NUEVO NODO:");
        if(DATO1==null || DATO1.trim()=="")
            return;

        let DATO2 = await bootbox_prompt("INGRESE X:");
        if(DATO2==null || DATO2.trim()=="")
            return;

        if(lista.buscar(DATO1)==true)
                throw new Error("EL NODO YA SE ENCUENTRA EN LA LISTA");

        lista.inserta_despues_X(DATO1, DATO2);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_inicio() {
    let canvas = window.CANVAS3;
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
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
    let canvas = window.CANVAS3;
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
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
    let canvas = window.CANVAS3;
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//ista vacia
            throw new Error("LA LISTA ESTA VACIA");

        let DATO = await bootbox_prompt("INGRESE EL VALOR DE X:");
        if(DATO==null || DATO.trim()=="")
            return;

        lista.elimina_X(DATO);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_antes_X() {
    let canvas = window.CANVAS3;
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//listas vacias
            throw new Error("LA LISTA ESTA VACIA");

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
    let canvas = window.CANVAS3;
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//listas vacias
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

export async function borrar_LstDobleLig() {
    lista = null;
    listaCanvas = null;
    let canvas = window.CANVAS3;
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}
