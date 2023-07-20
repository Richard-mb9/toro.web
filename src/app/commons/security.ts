class Auth{
    accessToken: string | null = localStorage.getItem("accessToken") || '';

    isAuthenticated = !!localStorage.getItem("accessToken");

    constructor(){}

    getToken(){
        return this.accessToken;
    }

    setToken(accessToken: string){
        localStorage.setItem("accessToken", accessToken)
        this.accessToken = accessToken;
        this.isAuthenticated = true;
    }

    clear(){
        localStorage.clear()
        this.accessToken = null;
        this.isAuthenticated = false;
    }
}

export const auth = new Auth();