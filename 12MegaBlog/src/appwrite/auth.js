import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.endpoint)
      .setProject(conf.projectId)
      .setDevKey(conf.apikey);
  }
}

const authService = new AuthService();

export default authService;
