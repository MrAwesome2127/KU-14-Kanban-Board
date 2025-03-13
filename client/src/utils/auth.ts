import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // COMPLETE: return the decoded token
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  loggedIn() {
    // COMPLETE: return a value that indicates if the user is logged in
    const token = this.getToken();
      return token;
    
  }
  
  isTokenExpired(token: string) {
    // COMPLETE: return a value that indicates if the token is expired
    const decoded: JwtPayload = jwtDecode(token);
    return decoded.exp ? decoded.exp * 1000 < Date.now() : true;
  }

  getToken(): string {
    // COMPLETE: return the token
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;
  }

  login(idToken: string) {
    // COMPLETE: set the token to localStorage
    // COMPLETE: redirect to the home page
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // COMPLETE: remove the token from localStorage
    // COMPLETE: redirect to the login page
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}
export default new AuthService();
