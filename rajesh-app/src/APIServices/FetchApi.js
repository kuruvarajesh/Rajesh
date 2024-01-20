import Cookies from 'js-cookie'

// const MONEY_MATTERS_APP = process.env.REACT_APP_MONEY_MATTERS_APP
const MONEY_MATTERS_APP = "https://bursting-gelding-24.hasura.app"
const accessToken = parseInt(Cookies.get("access_token"))

export const FetchAPiCalls =  {

    fetchUserData: async(path,method) => {
        let url = `${MONEY_MATTERS_APP}${path}`
        const options = {
            method:method,
            headers :{
                "content-type":"application/json",
                "x-hasura-admin-secret":"g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
                "x-hasura-role":"user",
                "x-hasura-user-id":accessToken.toString()
            }
        }
        let res = await fetch(url,options)
        return res
    },

    fetchAdminData: async(path) => {
        let url = `${MONEY_MATTERS_APP}${path}`
        const options = {
            method:"GET",
            headers :{
                "content-type":"application/json",
                "x-hasura-admin-secret":"g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
                "x-hasura-role":"admin",
            }
        }
        let res = await fetch(url,options)
        return res
    }

}