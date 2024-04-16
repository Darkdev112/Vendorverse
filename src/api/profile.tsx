"use client"

import axios from "axios";
import { FormFieldsEdit } from "@/components/EditModal/EditModal";
import { PlaceRetailerOrderProps } from "@/components/PlaceRetailerOrder/PlaceRetailerOrder";

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

export const addVendorpoints = async(data : {points : number}, token : string | null) => {
    if(!token){
        return {}
    }
    const fetcher = await createAxios(token);
    const response = await fetcher.patch('/addVendorPoints',data)
    return response.data
}

export const getVendorpoints = async(token : string | null) => {
    if(!token){
        return {
            points : 0
        }
    }
    const fetcher = await createAxios(token);
    const response = await fetcher.get('/getVendorPoints')
    return response.data
}

export const placeRetailerOrder = async(data : PlaceRetailerOrderProps, token : string | null) => {
    if(!token){
        return {}
    }
    const fetcher = await createAxios(token);
    const response = await fetcher.post('/placeOrderR',data)
    return response.data
}