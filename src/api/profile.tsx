"use client"

import axios from "axios";
import getSession from '../utils/getSession'
import { FormFieldsEdit } from "@/components/EditModal.tsx/EditModal";

const createAxios = async () => {
    const session = await getSession();
    return axios.create({
        baseURL : "http://localhost:5000",
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : session   
        }
    })
}

export const getConnections = async () => {
    const fetcher = await createAxios()
    const response = await fetcher.get('/getConnections')
    return response.data
}

export const updateProfile = async (data : FormFieldsEdit) => {
    const fetcher = await createAxios()
    const response = await fetcher.patch('/updateProfile',data)
    return response.data
}

export const getRequests = async () => {
    const fetcher = await createAxios()
    const response = await fetcher.get('/getRequests')
    return response.data
}

export const manageRequest = async (id:string, success : string) => {
    const fetcher = await createAxios()
    const response = await fetcher.patch(`/manageRequest?success=${success}`,{id})
    return response.data
}

export const addRequest = async (data : {email : string}) => {
    const fetcher = await createAxios()
    const response = await fetcher.patch(`/addRequest`,data)
    return response.data
}