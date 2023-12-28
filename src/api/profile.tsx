"use client"

import axios from "axios";
import { FormFieldsEdit } from "@/components/EditModal/EditModal";

const createAxios = async (token : string | null) => {
    return axios.create({
        baseURL : "http://localhost:5000",
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`   
        }
    })
}

export const getConnections = async (token : string | null) => {
    const fetcher = await createAxios(token)
    if(!token){
        return {
            user : []
        }
    }
    const response = await fetcher.get('/getConnections')
    return response.data
}

export const updateProfile = async (data : FormFieldsEdit,token : string | null) => {
    console.log('update : ', token);
    const fetcher = await createAxios(token)
    const response = await fetcher.patch('/updateProfile',data)
    return response.data
}

export const getRequests = async (token : string | null) => {
    const fetcher = await createAxios(token)
    if(!token){
        return {
            user : []
        }
    }
    const response = await fetcher.get('/getRequests')
    return response.data
}

export const manageRequest = async (id:string, success : string, token : string | null) => {
    const fetcher = await createAxios(token)
    const response = await fetcher.patch(`/manageRequest?success=${success}`,{id})
    return response.data
}

export const addRequest = async (data : {email : string}, token : string | null) => {
    const fetcher = await createAxios(token)
    const response = await fetcher.patch(`/addRequest`,data)
    return response.data
}