import {Post} from './post.model';
import {Profile} from './profile.model'
export class User {
  name: {
    firstName?: string;
    lastName?: string;
  };
  posts?:Post[];
  profile?: Profile;
 
}
