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