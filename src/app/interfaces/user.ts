export interface User {
    accessToken: string
     id?: number
        email: string
        password: string
        confirmPassword: string
        lastname?: string
        firstname?: string
        userRole?: string
        age?: number
}
export type userRes = {
     accessToken: string
    user:{
        id?: number
        email: string
        password: string
        lastname: string
        firstname: string
        userRole: string
        age?: number
    }
}

export type ErrorServer={
    HttpErrorResponse: {
        error: string
    }
}

//   "email": "quoclcph18659@gmail.com",
//       "password": "$2a$10$r1wp8/sHscRujRRFdt6op.RqeXfYQFjMVs.kWlaiqlqxsj/hK/JE6",
//       "firstname": "Yong",
//       "lastname": "Jin",
//       "userRole": "Admin",
//       "age": 21,
//       "id": 1