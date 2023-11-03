"use server"

import { cookies } from "next/headers"
import { initializeApp } from "firebase-admin/app"
import { firebaseConfig } from "../config"
import { getAuth } from "firebase/auth"
import { getApp } from "firebase/app"
import { getApps } from "firebase/app"
// import { redirect } from "next/navigation"

export const firebaseDeleteUser = async () => {

    const token = cookies().get("token")
    console.log(token)

    // let app

    // if (!getApp("admin")) {
    //     initializeApp({
    //         "type": "service_account",
    //         "project_id": "solbox-app",
    //         "private_key_id": "c171f55c708911f018585b9587dd42c7a5d843a9",
    //         "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDPqUDoEsQvziB2\nzaxPb+Nr+tYt+8/HlOZdvaV/KXAl0vdEAvnosZsViuG4Avh8/0Q8dJg2S336yr50\naT2a7aooiI9VmqHk/LptbFu1gvLtWGEbJVDSlL5qhuhztXz7I53CQm/0rNSPGYxu\nU/e18ebgnEpz85TlXC+73WKGoTqfa6PXsBql2OUx9HIjakx5w+tNb2hhi3UAx8pP\nFiVrm0GWGQAKlUYkaSI40r0LcJZLuLN1KeB1sB3K12/R9GKX/j9Kwpb7m+pnX/ng\nCgSqsbm6QJ5rUiS3WFe3qhO0wv96XM6NcOEMpk4/pUwPOoHdeCil8nQo5RM363Ut\nQYuF5XJ1AgMBAAECgf9YNs4bx90PccDYtwY7uIwjkqrpXc8mOVqi960WF8RMTRI9\nEgaXktsOi7DXOmvUrZuPEviWF/usTfQZ/5rr9YoTLe+1rbqYS8PmN+G9eaM4sBKQ\nNYnf6s/48NZOUQqGpNqfaxmkFsc1AuVk+MaBxAEP6VS3bQITbNXaOHFiP5tnnM2a\nW7kPI2jURWVuRTdNvJcua8vVROooEfMw+8Fchn4wWdPJ1ITNq4u0jUqgBUQT6YM8\naCue4pFg5NYAo6eZC3kjohjswoaBpGEkrh4490oloweVhr5g70fdNID8UMBY7GL7\nAz05Tkb8OOnmFO7RMWhZ5FFcG3KZP8gAFltQr6ECgYEA+4zHAIgWnfhIb99V5EIo\n74rPBFijRbXQ5ZwWsTgkbGACI/bZKHOd6JA+X0LXkPxeh+uJO2k15xwa2OBd5ZWM\nZZPMm0/nx3S3I3IlcJOe1ixOdezVOLHQu/9RPS2m8i15RpHowRtxma39Qvppy9K0\n/txxb4B7kOyncDI7XOkwlGECgYEA01W2T91ZmRqlATPMQ446IQd0TkASj/uNTNZ3\nC8/vOxtivSWbnRT71n6Q18avo/mZhA2kZWzco4Y4QnFaFzp4vsx8Ma03fYoZgsc0\nlqxbPxhq+Xtp6CAuXmaT/9zeSh8pmd0qn64Crf+1OHcbQlgmF3CF6sJ7ng7GXKtL\n9lhW1pUCgYEA1aCrzGbGlmep1OBdiFkrfKtsvissleIfwy+5Ec41GJi8mKBlsfXm\nUABYB/yzJ508BsBgLkVekqQKpM5+z6AeuJE5fVjx5TDY61BgPWgQx6CfDYURW3Gf\nbFkbPBKOKjO2P9lgSscsxa++Wuhhesi6D4tVBrWduulQFXeDdJdRO2ECgYEAv+WD\nfy+aLRjxnY7gOrOJ+vXe2TL65/zeCFhxjqtIKp6qYOAmVlN4fgM9GIGUeUuq5yrQ\nDTz1eBLnQQXWbWMtwurBFwaXbYoZshOan/pvfHJ6qIE04I9gK13vo5R10E5NoyYd\njxMd4ctgTZ5xhSOvqvcE0u+3+gSmf/0XI+CBMaUCgYBIlFaKWPRn+2s7dSq8Ywts\nrPBWgnIrcrTVpm8G+UvrHsEa444Uoiz/W0gce+IMffgClFq0F5Kq/RFspmiE62w6\ns4uGECnc8C7a88f96v4JFJ0vpZQ5bV3um2eHnUtfUdluniCzUXVz7YC0VWHFh6Vk\nug90GR9DLLWMOsAA/F8aNg==\n-----END PRIVATE KEY-----\n",
    //         "client_email": "firebase-adminsdk-8sug0@solbox-app.iam.gserviceaccount.com",
    //         "client_id": "101070704480232826219",
    //         "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    //         "token_uri": "https://oauth2.googleapis.com/token",
    //         "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    //         "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-8sug0%40solbox-app.iam.gserviceaccount.com",
    //         "universe_domain": "googleapis.com"
    //     }, "admin")

    // } else {
    //     app = getApp(!admin)
    // }

    // console.log(app)

    // const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

    const appName = crypto.randomUUID()

    console.log(appName)

    const app = initializeApp({
        "type": "service_account",
        "project_id": "solbox-app",
        "private_key_id": "c171f55c708911f018585b9587dd42c7a5d843a9",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDPqUDoEsQvziB2\nzaxPb+Nr+tYt+8/HlOZdvaV/KXAl0vdEAvnosZsViuG4Avh8/0Q8dJg2S336yr50\naT2a7aooiI9VmqHk/LptbFu1gvLtWGEbJVDSlL5qhuhztXz7I53CQm/0rNSPGYxu\nU/e18ebgnEpz85TlXC+73WKGoTqfa6PXsBql2OUx9HIjakx5w+tNb2hhi3UAx8pP\nFiVrm0GWGQAKlUYkaSI40r0LcJZLuLN1KeB1sB3K12/R9GKX/j9Kwpb7m+pnX/ng\nCgSqsbm6QJ5rUiS3WFe3qhO0wv96XM6NcOEMpk4/pUwPOoHdeCil8nQo5RM363Ut\nQYuF5XJ1AgMBAAECgf9YNs4bx90PccDYtwY7uIwjkqrpXc8mOVqi960WF8RMTRI9\nEgaXktsOi7DXOmvUrZuPEviWF/usTfQZ/5rr9YoTLe+1rbqYS8PmN+G9eaM4sBKQ\nNYnf6s/48NZOUQqGpNqfaxmkFsc1AuVk+MaBxAEP6VS3bQITbNXaOHFiP5tnnM2a\nW7kPI2jURWVuRTdNvJcua8vVROooEfMw+8Fchn4wWdPJ1ITNq4u0jUqgBUQT6YM8\naCue4pFg5NYAo6eZC3kjohjswoaBpGEkrh4490oloweVhr5g70fdNID8UMBY7GL7\nAz05Tkb8OOnmFO7RMWhZ5FFcG3KZP8gAFltQr6ECgYEA+4zHAIgWnfhIb99V5EIo\n74rPBFijRbXQ5ZwWsTgkbGACI/bZKHOd6JA+X0LXkPxeh+uJO2k15xwa2OBd5ZWM\nZZPMm0/nx3S3I3IlcJOe1ixOdezVOLHQu/9RPS2m8i15RpHowRtxma39Qvppy9K0\n/txxb4B7kOyncDI7XOkwlGECgYEA01W2T91ZmRqlATPMQ446IQd0TkASj/uNTNZ3\nC8/vOxtivSWbnRT71n6Q18avo/mZhA2kZWzco4Y4QnFaFzp4vsx8Ma03fYoZgsc0\nlqxbPxhq+Xtp6CAuXmaT/9zeSh8pmd0qn64Crf+1OHcbQlgmF3CF6sJ7ng7GXKtL\n9lhW1pUCgYEA1aCrzGbGlmep1OBdiFkrfKtsvissleIfwy+5Ec41GJi8mKBlsfXm\nUABYB/yzJ508BsBgLkVekqQKpM5+z6AeuJE5fVjx5TDY61BgPWgQx6CfDYURW3Gf\nbFkbPBKOKjO2P9lgSscsxa++Wuhhesi6D4tVBrWduulQFXeDdJdRO2ECgYEAv+WD\nfy+aLRjxnY7gOrOJ+vXe2TL65/zeCFhxjqtIKp6qYOAmVlN4fgM9GIGUeUuq5yrQ\nDTz1eBLnQQXWbWMtwurBFwaXbYoZshOan/pvfHJ6qIE04I9gK13vo5R10E5NoyYd\njxMd4ctgTZ5xhSOvqvcE0u+3+gSmf/0XI+CBMaUCgYBIlFaKWPRn+2s7dSq8Ywts\nrPBWgnIrcrTVpm8G+UvrHsEa444Uoiz/W0gce+IMffgClFq0F5Kq/RFspmiE62w6\ns4uGECnc8C7a88f96v4JFJ0vpZQ5bV3um2eHnUtfUdluniCzUXVz7YC0VWHFh6Vk\nug90GR9DLLWMOsAA/F8aNg==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-8sug0@solbox-app.iam.gserviceaccount.com",
        "client_id": "101070704480232826219",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-8sug0%40solbox-app.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
      }
      , appName)

    console.log("APP......", app)

    const auth = getAuth()

    console.log("Auth....", auth)

    // const user = auth.getUser(token.value)

    // console.log("User.....", user)

    // cookies().delete("token")
    // redirect("/", "push")
}