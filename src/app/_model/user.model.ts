import { Post } from './post.model';
import { Profile } from './profile.model'
export class User {
  id?: number;
  name?: {
    firstName?: string;
    lastName?: string;
  };
  email?: string;
  posts?: Post[];
  profile?: Profile;
  address?: string;
  connetionIds?: number[];


}
